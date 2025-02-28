import { command } from "../utils/commands"

type props = {
 outputLine: string | command
}

export default function Output({ outputLine }: props) {
 const prompt = "[TheScientist-137]$ >";
 
 // output line = string case
 if (typeof outputLine === "string") {
  // not found line
  if (outputLine.startsWith("Command not found")) {
   return <p className="pl-2 text-red-400 text-md md:text-lg">{outputLine}</p>;
  }

  // prompt line
  return (
   <p className="text-md md:text-lg">
    <span className="text-green-300">{prompt}</span>
    <span className="text-white ml-2">{outputLine}</span>
   </p>
  );
 }

 // output line = command case
 return (
  <div className="text-md md:text-lg">
   <p className="px-2">{outputLine.description}</p>

   {outputLine.links && outputLine.links.map((link, index) => (
    <div key={index} className="pl-2">
     <a href={link.url} target="_blank" rel="noreferrer" className="text-cyan-600 hover:underline">
      {link.name}:
     </a>
     <span className="ml-2">{link.description}</span>
    </div>
   ))}

   {outputLine.contact && outputLine.contact.map((contact, index) => (
    <p key={index} className="pl-2">
     <span className="text-cyan-600">{contact.way}</span>
     <span className="ml-2">{contact.data}</span>
    </p>
   ))}
  </div>
 )
}