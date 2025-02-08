import { useState, useRef } from "react";

export default function Terminal() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null); // Reference input to terminal div for click focus 

  const handleInputCommand = (inputCommand: string) => {
    if (!inputCommand) return; // Does not proccess empty commands

    setOutput(prev => [...prev, `> ${inputCommand}`])

    switch (inputCommand) {
      case 'about':
        setOutput(prev => [...prev, 'Guillermo Casado - Fullstack Developer']);
        break;
      case 'projects':
        setOutput(prev => [...prev, 'Projects: ']);
        break;
      case 'contact':
        setOutput(prev => [...prev, 'You can contact me on: ']);
        break;
      case 'clear':
        setOutput([]); // Clean output and finish ejecution
        setInput('');
        return;
      case 'help':
        setOutput(prev => [...prev, 'Available commands: about, home, projects, contact, clear, help']);
        break;
      default:
        setOutput(prev => [...prev, `Command not found: ${inputCommand}`])
    }
    setInput('');
  }

  return (
    <div
      className="flex-grow p-2 border-2 font-retroFont text-2xl"
      onClick={() => inputRef.current?.focus()} // Focus input when click terminal div
    >
      <div className=""> {/* Output Line Container */}
        {output.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

      <div> {/* Input Container */}
        <span>[TheScientist-137]$ </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleInputCommand(input)}
          className="outline-none"
        />
        <span className="w-24 blink" />
      </div>
    </div>
  )
}