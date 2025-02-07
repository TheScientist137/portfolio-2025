import { Outlet } from "react-router";
import Terminal from "./Terminal";

export default function Layout() {
 return (
  // introducir retro font
  <div className="min-h-screen bg-retroBlack text-retroGreen p-8">
   {/* CRT Effect */}
   <main>
    <Outlet />
   </main>

   <Terminal />

   <footer>Footer</footer>
  </div>
 )
}