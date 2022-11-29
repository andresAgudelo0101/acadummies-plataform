import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./VercelFont.module.css";

function Menu(props) {
  const [display, setdisplay] = useState(true);
  return (
    <nav className=" flex flex-col w-auto bg-zinc-800 text-slate-50 h-auto  p-4 ">
      <div className="w-full">
        <button onClick={() => setdisplay(!display)}>
          <img src="/menu.png" className="w-8" />
        </button>
      </div>
      {display ? (
        <div className="w-52  truncate">
          <p className={styles.title}>Semana {props.contenido.semana}</p>
          {props.contenido.videos.map((val, key) => (
            <ul key={key}>
              <Link
                key={key}
                to={val.ruta}
                className="text-xl font-light leading-normal tracking-tight text-slate-400 font-sans  hover:text-white"
              >
                <p className="w-5/6 truncate">{val.titulo}</p>
              </Link>
            </ul>
          ))}
        </div>
      ) : null}
    </nav>
  );
}

export default Menu;
