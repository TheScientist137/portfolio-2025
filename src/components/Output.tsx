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
    <a key={index} href={link.url} target="_blank" rel="noreferrer" className="block">
     {link.name}: {link.description}
    </a>
   ))}

   {outputLine.contact && outputLine.contact.map((contact, index) => (
    <p key={index} className="block">
     {contact.way}
    </p>
   ))}
  </div>
 )
}