import { command, commands } from "./commands";

// Mejorar y entender codigo !!!!!!!!!!!!!!!!!!!! => Refactorizar

type props = {
  input: string,
  setInput: React.Dispatch<React.SetStateAction<string>>,
  setOutput: React.Dispatch<React.SetStateAction<(string | command)[]>>
}

export default function handleInputCommand({ input, setInput, setOutput }: props) {
  // Don't proccess empty commands 
  if (!input) return;

  // Handle clear command
  if (input === 'clear') {
    setOutput([]);
    setInput('');
    return;
  }

  // Refactor -- Call setOutput once
  if (commands[input]) {
    setOutput(prev => [...prev, commands[input]]);
    console.log(commands[input]);
  } else {
    setOutput(prev => [...prev, 'Command not found']);
  }

  // Clear input
  setInput('');
}
