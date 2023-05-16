import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
  
  import Home from "./pages/home/home";
  import Login from "./pages/login/login";
  import Cadastro from "./pages/cadastrar/cadastrar";
  import Editar from "./pages/editar/editar";
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="editar" element={<Editar />} />
        <Route path="cadastro" element={<Cadastro />} />
      </Route>
    )
  );
  
  export default function Routes() {
    return <RouterProvider router={router} />;
  }