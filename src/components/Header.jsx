import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [display, setdisplay] = useState(false);
  const weeks = [
    { semana: 1, ruta: "/semana/1/" },
    { semana: 2, ruta: "/semana/2/" },
    { semana: 3, ruta: "/semana/3/" },
    { semana: 4, ruta: "/semana/4/" },
    { semana: 5, ruta: "/semana/1/" },
    { semana: 6, ruta: "/semana/1/" },
    { semana: 7, ruta: "/semana/1/" },
    { semana: 8, ruta: "/semana/1/" },
    { semana: 9, ruta: "/semana/1/" },
    { semana: 10, ruta: "/semana/1/" },
    { semana: 11, ruta: "/semana/1/" },
    { semana: 12, ruta: "/semana/1/" },
  ];
  const deleteCookie = () => {
    window.localStorage.setItem("key-course", '0101');
    location.reload();
  };
  return (
    <header className=" flex flex-col">
      <div className=" flex justify-between items-center h-16 bg-black w-full text-slate-50 p-3">
        <div className="">
          <img src="/logo.png" className=" w-20" />
        </div>
        <div className="flex flex-row gap-4">
          <button onClick={() => setdisplay(!display)} className="text-sm hover:text-cyan-400">Semanas</button>
          <button
            className="bg-transparent border-2 border-pink-500 p-2 rounded-md text-sm text-pink-300 hover:text-pink-500"
            onClick={deleteCookie}
          >
            Cerrar Sesion
          </button>
        </div>
      </div>
      {display ? (
        <div className="flex flex-row gap-5 h-auto w-full md:justify-center bg-black  overflow-auto   p-4">
          {weeks.map((week, key) => (
            <Link
              key={key}
              to={week.ruta}
              className="text-base font-light leading-normal tracking-tight text-slate-400 font-sans  hover:text-white"
            >
              Semana {week.semana}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}

export default Header;
