import { Outlet } from "react-router";
import Terminal from "./Terminal";

// cambiar fuentes (¿ tamaño fijo de termial con scroll + content => grow)

export default function Layout() {
 return (
  // introducir retro font
  <div className="min-h-screen flex flex-col bg-retroBlack text-xl text-retroGreen">
   {/* CRT Effect */}
   <h1 className="p-8 font-retroTitle text-7xl">Guillermo Casado</h1>


   <main>
    <Outlet />
   </main>

   <Terminal />

   <footer>Footer</footer>
  </div>
 )
}