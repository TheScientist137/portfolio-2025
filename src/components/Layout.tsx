import Terminal from "./Terminal";
import image from '../assets/curri-image.png';

// cambiar fuentes
// Refactorizar codigo
// Añadir Estilos ¿Usar puro css??????????????
// CRT Screen ?????

// Cambiar tamaño en el ancho en pantallas grandes a tamaño fijo

export default function Layout() {
 return (
  // introducir retro font -- modificar layout - colocar todo bien
  <div className="h-screen px-16 md:px-32 lg:px-48 xl:px-64 2xl:px-80 flex flex-col bg-retroBlack text-xl text-green-500">

   {/* Title container -- Modificar para añadir imagen, titulo a la izquierda responsive + neofetch con datos mios */}
   <div className="py-6 flex justify-around">
    <div className="font-retroTitle">
     <h1 className="mb-2 text-6xl">Guillermo <br /> Casado</h1>
     <h2 className="pl-2 text-lg">Software Developer <br /> Electronic Technician</h2>
    </div>
    <div>
     <img
      src={image}
      alt="Guillermo Casado Noya"
      className="w-[100px] h[112px]"
     />
    </div>
   </div>

   {/* Terminal Container -- fox text  */}
   <div className="flex-grow overflow-hidden font-retroFont">
    <p className="text-lg">Hello and welcome :) please type help to see a list of available commands</p>
    <Terminal />
   </div>

   <footer className="my-4 text-center text-sm">2025 Guillermo Casado Noya. All Rights Reserved</footer>
  </div>
 )
}