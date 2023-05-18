import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";

  import  AppLayout  from "./layouts/AppLayouts/AppLayout.jsx"; 
  import { Login, Cadastrar, Home,Editar} from "./Pages/index.js";

  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>   
        <Route path = "/" element={<AppLayout />}>  
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="editar" element={<Editar />} />
          <Route path="cadastro" element={<Cadastrar />} />
        </Route>
      </Route> 
    )
  );
  
  export default function Routes() {
    return <RouterProvider router={router} />;
  }