import { responses } from "./responses"

// Mejorar y entender codigo !!!!!!!!!!!!!!!!!!!!

type props = {
 input: string,
 setInput: React.Dispatch<React.SetStateAction<string>>,
 setOutput: React.Dispatch<React.SetStateAction<string[]>>
}

export default function handleInputCommand({ input, setInput, setOutput }: props) {
 if (!input) return; // Don't proccess empty commands 

 // poner color en nombre de usuario 
 setOutput(prev => [...prev, `[TheScientist-137]$ > ${input}`]); // Set output line

 // Leer teoria de Record! super ùtil -- Cambiar a objeto - Refactorizar
 const commands: Record<string, () => void> = {
  about: () => responses.about,
  projects: () => responses.projects,
  contact: () => responses.contact,
  help: () => responses.help,

  clear: () => setOutput([])
 }

 // Cambiar
 const command = commands[input];

 if (command) {
  const result = command();

  if (typeof result === "string") {
   setOutput((prev) => [...prev, result]);  
  }
 } else {
  setOutput((prev) => [...prev, `Command not found: ${input}`]);
 }

 setInput('');
}
