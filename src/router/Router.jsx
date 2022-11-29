import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import { contenido_semana1 } from "../components/week1/dataWeek";
import RouterAuth from "./RouterAuth";
import LoginAuth from "./LoginAuth";
import Layout from "../components/Layout";
import Video from "../components/Video";
import Home from "../components/Home";

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
        <Route path="*" element={<h1>not found</h1>}/>
        <Route path="/semana/1/">
          <Route
            path=""
            element={
              <Layout data={contenido_semana1}>
                <Home info={contenido_semana1} />
              </Layout>
            }/>
          {contenido_semana1.videos.map((val) => (
            <Route
              path={val.ruta}
              element={
                <RouterAuth>
                  <Layout data={contenido_semana1}>
                    <Video
                      titulo={val.titulo}
                      contenido={val.contenido}
                      url={val.url_video}
                    />
                  </Layout>
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
