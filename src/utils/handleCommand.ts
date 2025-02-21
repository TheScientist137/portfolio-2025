import { command, commands } from "./commands";

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

  const outputCommand = commands[input] ? commands[input] : 'Command not found';
  setOutput((prev) => [...prev, outputCommand]);

  // Clear input
  setInput('');
}
