import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Outlet,
    Navigate,
  } from "react-router-dom";

  import  AppLayout  from "./layouts/AppLayouts/AppLayout.jsx"; 
  import { Login, Cadastrar, Home,Editar} from "./pages/index.js";
import useAuthStore from "./stores/auth.js";

  function RotasPrivadas(){
    const token = useAuthStore(state => state.token);

    if (token) return <Outlet />;
    return <Navigate to="/login" replace/>
  }



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>   
        <Route path = "/" element={<AppLayout />}>  
          <Route element={<RotasPrivadas/>}>
              <Route path="editar" element={<Editar />} />
              <Route index element={<Home />} />
          </Route>    
          <Route path="login" element={<Login />} />
          <Route path="cadastro" element={<Cadastrar />} />
        </Route>
      </Route> 
    )
  );
  
  export default function Routes() {
    return <RouterProvider router={router} />;
  }