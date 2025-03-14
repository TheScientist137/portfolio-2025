import { useState, useRef, useEffect } from "react";
import handleInputCommand from "../utils/handleCommand";
import Output from "./Output";
import { command } from "../utils/commands";

export default function Terminal() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<(string | command)[]>([]);
  const inputRef = useRef<HTMLInputElement>(null); // Reference input to terminal div for click focus 
  const outputRef = useRef<HTMLDivElement>(null); 

  // generates scroll on the output div when output reaches the div`s height (everytime output changes)
  useEffect(() => {
    if (outputRef.current) outputRef.current.scrollTop = outputRef.current.scrollHeight;
  }, [output]);

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

  return (
    <div className="mx-8 md:mx-28 lg:mx-42 xl:mx-64 2xl:mx-82 flex-grow overflow-hidden font-retroFont">
      <div
        className="h-full rounded-md flex flex-col p-2 text-sm text-retroGreen bg-stone-800"
        onClick={handleTerminalClick}
      >
        {/* Output Container with scroll */}
        <div className="overflow-y-auto" ref={outputRef}>
          {output.map((line, index) => <Output key={index} outputLine={line} />)}
        </div>

        {/* Input Container */}
        <div className="flex rounded-sm bg-stone-700">
          <span className="my-auto px-1 text-green-300 text-sm md:text-lg">[TheScientist-137]$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="ml-1 outline-none text-md md:text-lg"
          />
        </div>
      </div>
    </div>

  )
}