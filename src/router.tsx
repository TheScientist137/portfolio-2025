import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";

const router = createBrowserRouter([
 {
  path: '/',
  element: <Layout />
 }
]);

export default router;