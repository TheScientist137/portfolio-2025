import { TbFileCv } from 'react-icons/tb';
import { RiLinkedinBoxLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import image from '../assets/curri-image.png';


export default function Presentation() {
 return (
  <div className="mt-2 flex flex-col items-center">
   {/* Title Container */}
   <div className="flex flex-col">
    <h1 className="text-4xl sm:text-5xl text-center font-retroTitle">Guillermo Casado</h1>
    <h2 className='text-sm sm:text-lg text-center font-retroFont'>Software Developer / Electronic Technician</h2>
   </div>

   {/* Image - Resume Container (refactor */}
   <div className='my-2 flex items-center gap-4 md:gap-4'>
    <img src={image} alt="Guillermo Casado Noya" className="w-[80px] h[92px]" />

    <div className="pt-2 px-1 flex flex-col gap-1 text-sm md:text-lg font-retroFont">
     <a
      href="https://www.linkedin.com/in/guillermo-casado-noya-209b45268/"
      target="_blank" rel="noreferrer"
      className="flex justify-between items-center hover:text-blue-600 w-20 md:w-24">
      <span className='hover:underline'>Linkedin</span> <RiLinkedinBoxLine className='h-5 w-5' />
     </a>
     <a
      href="https://github.com/TheScientist137"
      target="_blank" rel="noreferrer"
      className="flex justify-between items-center hover:text-blue-600 w-20 md:w-24">
      <span className='hover:underline'>GitHub</span> <FaGithub className='h-5 w-5' />
     </a>
     <a
      href="curriculum-2025.pdf"
      target="_blank" rel="noreferrer"
      className="flex justify-between items-center hover:text-blue-600 w-20 md:w-24">
      <span className='hover:underline'>Resume</span> <TbFileCv className='h-5 w-5' />
     </a>
    </div>
   </div>
  </div>
 )
}