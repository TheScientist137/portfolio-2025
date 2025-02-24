import { useState, useRef, useEffect } from "react";
import handleInputCommand from "../utils/handleCommand";
import Output from "./Output";
import { command } from "../utils/commands";

export default function Terminal() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<(string | command)[]>([]);
  const inputRef = useRef<HTMLInputElement>(null); // Reference input to terminal div for click focus 
  const outputRef = useRef<HTMLDivElement>(null); // Entender mejor

  // generates scroll on the output div when output reaches the div`s height (everytime output changes)
  useEffect(() => {
    if (outputRef.current) outputRef.current.scrollTop = outputRef.current.scrollHeight;
    console.log(output);
  }, [output]);

  // Mover funciones a un archivo separado????

  // Handle focus input when click terminal div
  const handleTerminalClick = () => {
    if (inputRef.current) inputRef.current.focus();
  }

  // Handle input value change event
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

  // Handle enter key down event
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setOutput(prev => [...prev, input]); // Add user input to the output
      handleInputCommand({ input, setInput, setOutput });
    }
  }


  // Refactor and inprove the jsx -- padding-spaces, colors

  return (
    <div
      className="h-full flex flex-col p-2 text-lg text-retroGreen bg-stone-900"
      onClick={handleTerminalClick}
    >
      {/* Output Container with scroll */}
      <div className="overflow-y-auto" ref={outputRef}>
        {output.map((line, index) => <Output key={index} outputLine={line} />)}
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