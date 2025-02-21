import { TbFileCv } from 'react-icons/tb';
import { RiLinkedinBoxLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import Terminal from "../components/Terminal";
import image from '../assets/curri-image.png';

// cambiar fuentes
// Refactorizar codigo
// Refactorizar Layout en componentes
// Añadir Estilos ¿Usar puro css?????????????? => no hace falta usar tailwind ?
// CRT Screen ?????

// Cambiar tamaño en el ancho en pantallas grandes a tamaño fijo => completar responsive

export default function Layout() { // cambiar nombre -- distribucion componentes 
 return (
  // introducir retro font -- modificar layout - colocar todo bien
  <div className="h-screen px-16 md:px-32 lg:px-48 xl:px-64 2xl:px-80 flex flex-col bg-retroBlack text-xl text-green-500">

   {/* Presentation container (component) */}
   <div className="pt-12 pb-6 flex justify-around items-center">
    {/* Title Container */}
    <div className="h-full flex flex-col justify-center">
     <h1 className="text-8xl font-retroTitle">Guillermo <br /> Casado</h1>
     <h2 className='font-retroFont'>Software Developer / Electronic Technician</h2>
    </div>

    {/* Image - resume Container (component) */}
    <div className='flex flex-col justify-between'>
     <img src={image} alt="Guillermo Casado Noya" className="w-[100px] h[112px]" />

     <div className="pt-2 px-1 flex flex-col gap-1 text-base font-retroFont">
      <a
       href="https://www.linkedin.com/in/guillermo-casado-noya-209b45268/"
       target="_blank" rel="noreferrer"
       className="flex justify-between items-center hover:text-blue-600">
       <span className='hover:underline'>Linkedin</span> <RiLinkedinBoxLine className='h-5 w-5' />
      </a>
      <a
       href="https://github.com/TheScientist137"
       target="_blank" rel="noreferrer"
       className="flex justify-between items-center hover:text-blue-600">
       <span className='hover:underline'>GitHub</span> <FaGithub className='h-5 w-5' />
      </a>
      <a
       href="curriculum-2025.pdf"
       target="_blank" rel="noreferrer"
       className="flex justify-between items-center hover:text-blue-600">
       <span className='hover:underline'>Resume</span> <TbFileCv className='h-5 w-5' />
      </a>
     </div>
    </div>
   </div>

   {/* Manejar parrafo dinamicamente -- mostrar con consola vacia */}
   <p className="py-2 text-lg text-center font-retroFont">
    Hello and welcome :) please type help to see a list of available commands
   <p>Still on version Beta</p>
   </p>

   {/* Terminal Container */}
   <div className="flex-grow overflow-hidden font-retroFont">
    <Terminal />
   </div>

   <footer className="my-4 text-center text-sm">2025 Guillermo Casado Noya. All Rights Reserved</footer>
  </div>
 )
}