import { command } from "../utils/commands"

type props = {
 outputLine: string | command
}

export default function Output({ outputLine }: props) {
 // Show input command outpout
 if (typeof outputLine === 'string') return <p>{outputLine}</p>

 // Show command output
 return ( 
  <div>
   <p>{outputLine.description}</p>
   {outputLine.links && outputLine.links.map((link, index) => (
    <a key={index} target="_blank" rel="noreferrer" href={link}>{link}</a>
   ))}
  </div>
 )
}