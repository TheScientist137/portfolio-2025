import Presentation from "../components/Presentation";
import Terminal from "../components/Terminal";

// cambiar fuentes
// Refactorizar codigo
// Refactorizar Layout en componentes
// Añadir Estilos ¿Usar puro css?????????????? => no hace falta usar tailwind ?
// CRT Screen ?????

// Cambiar tamaño en el ancho en pantallas grandes a tamaño fijo => completar responsive

export default function Layout() { // cambiar nombre -- distribucion componentes 
 return (
  <div className="h-screen flex flex-col bg-retroBlack text-xl text-green-500">

   {/* Presentation Component */}
   <Presentation />

   {/* Manejar parrafo dinamicamente -- mostrar con consola vacia */}
   <p className="text-sm text-center font-retroFont">
    Welcome :) type help to see a list of available commands
   </p>

   {/* Terminal Component */}
   <Terminal />

   <footer className="mt-2 text-center text-xs">
    2025 Guillermo Casado Noya. All Rights Reserved
    <p>Still on version Beta</p>
   </footer>
  </div>
 )
}