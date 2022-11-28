import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import { contenido_semana1 } from "../components/week1/dataWeek";
import RouterAuth from "./RouterAuth";
import LoginAuth from "./LoginAuth";
import Test from "../components/week1/Test";
import Week1Home from "../pages/Week1Home";

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
          <Route path="" element={<RouterAuth><Week1Home/></RouterAuth>}/>
          <Route path="*" element={<h1>not found</h1>}/>
          {contenido_semana1.map((val) => (
            <Route
              path={val.ruta}
              element={
                <RouterAuth>
                  <Test titulo={val.titulo} contenido={val.contenido} url={val.url_video}/>
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
