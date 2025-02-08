import Terminal from "./Terminal";

// cambiar fuentes
// Refactorizar codigo
// Añadir Estilos
// CRT Screen

export default function Layout() {
 return (
  // introducir retro font -- modificar layout - colocar todo bien
  <div className="h-screen flex flex-col bg-retroBlack text-xl text-retroGreen">
   {/* CRT Effect */}

   {/* Title container -- Modificar para añadir imagen, titulo a la izquierda responsivezz */}
   <div className="p-8 font-retroTitle ">
    <h1 className="text-7xl">Guillermo Casado</h1>
    <h2 className="pl-4">Software Developer / Electronic Technician</h2>
   </div>

  {/* Terminal Container */}
   <div className="flex-grow overflow-hidden">
    <Terminal />
   </div>

   <footer className="mt-auto">Footer</footer>
  </div>
 )
}