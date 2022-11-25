import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import { contenido_semana1 } from "./week1/dataWeek";
import RouterAuth from "./RouterAuth";
import LoginAuth from "./LoginAuth";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LoginAuth>
              <Index />
            </LoginAuth>
          }
        />

        <Route path="/semana/1/">
          <Route path="" element={<RouterAuth><h1>home</h1></RouterAuth>}/>
          <Route path="*" element={<h1>not found</h1>}/>
          {contenido_semana1.map((val) => (
            <Route
              path={val.ruta}
              element={
                <RouterAuth>
                  <val.componente />
                </RouterAuth>
              }
              key={val.titulo}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
