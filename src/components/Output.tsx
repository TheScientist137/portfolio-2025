import { command } from "../utils/commands"

type props = {
 outputLine: string | command
}

export default function Output({ outputLine }: props) {
 // Show input command outpout
 if (typeof outputLine === 'string') return <p className="text-green-300">{outputLine}</p>

 // Change colors on outputlines links and contact!!!!!!!!!!!!!

 // Show result output
 return (
  <div>
   <p>{outputLine.description}</p>

   {outputLine.links && outputLine.links.map((link, index) => (
    <div key={index} className="pl-2">
     <a href={link.url} target="_blank" rel="noreferrer" className="text-blue-800 hover:underline">
      {link.name}:
     </a>
     <span className="ml-2">{link.description}</span>
    </div>
   ))}

   {outputLine.contact && outputLine.contact.map((contact, index) => (
    <p key={index} className="block">
     {contact.way} {contact.data}
    </p>
   ))}
  </div>
 )
}