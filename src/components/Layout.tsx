import { Link, Outlet } from "react-router";

export default function Layout() {
 return (
  // introducir retro font
  <div className="min-h-screen bg-retroBlack text-retroGreen">
   <nav>
    <Link to='/'>Home</Link>
    <Link to='/projects'>Projects</Link>
    <Link to='/contact'>Contact</Link>
   </nav>

   <main>
    <Outlet />
   </main>

   <footer>This is a footer</footer>
  </div>
 )
}