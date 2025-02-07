import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
 {
  path: '/',
  element: <Layout />,
  children: [ 
   { index: true, element: <Home /> },
   { path: '/projects', element: <Projects /> },
   { path: '/contact', element: <Contact /> }
  ]
 }
]);

export default router;