import Terminal from "./Terminal";

// cambiar fuentes (¿ tamaño fijo de termial con scroll + content => grow)

// Dejar una sola pagina?????????????????????????????????????????? mas eficiente y limpio en layout
export default function Layout() {
 return (
  // introducir retro font -- modificar layout - colocar todo bien
  <div className="min-h-screen flex flex-col justify-between bg-retroBlack text-xl text-retroGreen">
   {/* CRT Effect */}

   {/* Title container -- Modificar para añadir imagen, titulo a la izquierda responsivezz */}
   <div className="p-8 font-retroTitle ">
    <h1 className="text-7xl">Guillermo Casado</h1>
    <h2 className="pl-4">Software Developer / Electronic Technician</h2>
   </div>

    <Terminal />

   <footer>Footer</footer>
  </div>
 )
}