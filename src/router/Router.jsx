import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import { week1 } from "../components/week1/dataWeek";
import RouterAuth from "./RouterAuth";
import LoginAuth from "./LoginAuth";
import Layout from "../components/Layout";
import Video from "../components/Video";
import Home from "../components/Home";
import { week2 } from "../components/week2/dataWeek2";

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
        <Route path="*" element={<h1>not found</h1>} />
        <Route path="/semana/1/">
          <Route
            path=""
            element={
              <Layout data={week1}>
                <Home info={week1} />
              </Layout>
            }
          />
          {week1.videos.map((val) => (
            <Route
              path={val.ruta}
              element={
                <Layout data={week1}>
                  <Video
                    titulo={val.titulo}
                    contenido={val.contenido}
                    url={val.url_video}
                  />
                </Layout>
              }
              key={val.titulo}
            />
          ))}
        </Route>

        <Route path="/semana/2/">
          <Route
            path=""
            element={
              <RouterAuth>
                <Layout data={week2}>
                  <Home info={week2} />
                </Layout>
              </RouterAuth>
            }
          />
          {week2.videos.map((val) => (
            <Route
              path={val.ruta}
              element={
                <RouterAuth>
                  <Layout data={week2}>
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
