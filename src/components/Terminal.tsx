import { useState, useRef, useEffect } from "react";

// mostrar resultado correcto debajo de input o not found - comando dentro del output

export default function Terminal() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null); // Reference input to terminal div for click focus 
  const outputRef = useRef<HTMLDivElement>(null);

  // scroll output div
  useEffect(() => {
    if (outputRef.current) outputRef.current.scrollTop = outputRef.current.scrollHeight;

  }, [output])

  const handleInputCommand = (inputCommand: string) => {
    if (!inputCommand) return; // Does not proccess empty commands

    setOutput(prev => [...prev, `[TheScientist-137]$ > ${inputCommand}`])

    switch (inputCommand) {
      case 'norkus':
        setOutput(prev => [...prev, 'Norkus es un chico un poco gay, todavia le queda mucho que hacer... muchos anos que oler y senderos que recorrer, pero ante todo norkus es sukron al revés :)']);
        break;
      case 'projects':
        setOutput(prev => [...prev, 'Projects: ']);
        break;
      case 'contact':
        setOutput(prev => [...prev, 'You can contact me on: mi ano']);
        break;
      case 'clear':
        setOutput([]); // Clean output and finish ejecution
        setInput('');
        return;
      case 'help':
        setOutput(prev => [...prev, 'Available commands: about, home, projects, contact, clear, norkus, help']);
        break;
      default:
        setOutput(prev => [...prev, `Command not found: ${inputCommand}`])
    }
    setInput('');
  }

  return (
    <div
      className="h-full flex flex-col p-2 border-2 font-retroFont text-2xl"
      onClick={() => inputRef.current?.focus()} // Focus input when click terminal div
    >

      {/* Output Container with scroll */}
      <div
        className="overflow-y-auto"
        ref={outputRef}
      >
        {output.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

      {/* Input Container */}
      <div className="flex bg-stone-900">
        <span className="pr-2">[TheScientist-137]$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleInputCommand(input)}
          className="w-full outline-none"
        />
        <span className="blink" />
      </div>
    </div>
  )
}