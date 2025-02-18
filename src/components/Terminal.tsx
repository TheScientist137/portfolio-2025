import { useState, useRef, useEffect } from "react";
import handleInputCommand from "../utils/handleCommand";
import { command } from "../utils/commands";

export default function Terminal() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<(string | command)[]>([]);
  const inputRef = useRef<HTMLInputElement>(null); // Reference input to terminal div for click focus 
  const outputRef = useRef<HTMLDivElement>(null);

  // generates scroll on the output div when output reaches the div`s height (everytime output changes)
  useEffect(() => {
    if (outputRef.current) outputRef.current.scrollTop = outputRef.current.scrollHeight;
    console.log(output);
  }, [output]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setOutput(prev => [...prev, `[TheScientist-137]$ > ${input}`]);
      handleInputCommand({ input, setInput, setOutput });
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

  return (
    <div
      className="h-full flex flex-col p-2 text-lg text-retroGreen bg-stone-900"
      onClick={() => inputRef.current?.focus()} // Focus input when click terminal div (Entender mejor) -- refactor function on top
    >
      {/* Output Container with scroll */}
      <div
        className="overflow-y-auto"
        ref={outputRef}
      >
        {output.map((line, index) => ( // mejorar 
          // Manejar casos de projects y contact => links -- mejorar vista de output (column - div?)
          <p key={index} className="">{line}</p>
        ))}
      </div>

      {/* Input Container */}
      <div className="flex bg-stone-800">
        <span className="pr-2 text-green-300">[TheScientist-137]$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="w-full outline-none"
        />
        <span className="blink" />
      </div>
    </div>
  )
}