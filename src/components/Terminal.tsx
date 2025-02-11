import { useState, useRef } from "react";
import handleInputCommand from "../utils/handleCommand";

export default function Terminal() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null); // Reference input to terminal div for click focus 
  const outputRef = useRef<HTMLDivElement>(null);

  // generates scroll on the output div when output reaches the div`s height
  // see if useEffect is needded here!
  if (outputRef.current) outputRef.current.scrollTop = outputRef.current.scrollHeight;

  return (
    <div
      className="h-full flex flex-col p-2 text-lg text-retroGreen bg-stone-900"
      onClick={() => inputRef.current?.focus()} // Focus input when click terminal div (Entender mejor)
    >
      {/* Output Container with scroll */}
      <div
        className="overflow-y-auto"
        ref={outputRef}
      >
        {output.map((line, index) => ( // mejorar 
          // Manejar casos de projects y contact => links
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
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleInputCommand({ input, setInput, setOutput })}
          className="w-full outline-none"
        />
        <span className="blink" />
      </div>
    </div>
  )
}