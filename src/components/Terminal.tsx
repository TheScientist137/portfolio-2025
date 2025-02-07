import { useState } from "react";
import { useNavigate } from "react-router";

export default function Terminal() {
 const [input, setInput] = useState('');
 const [output, setOutput] = useState<string[]>([]);
 const navigate = useNavigate();

 const handleInputCommand = (inputCommand: string) => {
  if (!inputCommand) return; // Does not proccess empty commands

  setOutput(prev => [...prev, `> ${inputCommand}`])

  switch (inputCommand) {
   case 'about':
    setOutput(prev => [...prev, 'Guillermo Casado - Fullstack Developer']);
    break;
   case 'home':
    navigate('/');
    break;
   case 'projects':
    navigate('/projects');
    break;
   case 'contact':
    navigate('/contact');
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
  <div className="border-2">
   <div> {/* Output Line Container */}
    {output.map((line, index) => (
     <p key={index}>{line}</p>
    ))}
   </div>

   <div> {/* Input Container */}
    <span>[TheScientist-137] $ </span>
    <input
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