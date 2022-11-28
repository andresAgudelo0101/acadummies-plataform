import { Link } from "react-router-dom";

function Menu(props) {
  return (
    <nav className=" flex flex-col w-52 bg-zinc-800 text-slate-50 h-screen overflow-auto p-4">
      {/*props.contenido.videos.map((val, key) => (
        <ul key={key}>
          <Link key={key} to={val.ruta} replace="true" className="text-slate-300 hover:text-white">{val.titulo}</Link>
        </ul>
      ))*/}

      <Link  to="/semana/1/instalacion"  className="text-slate-300 hover:text-white">instalacion</Link>
      <Link  to="/semana/1/estructura" className="text-slate-300 hover:text-white">estructura</Link>
      <Link  to="/semana/1/"  className="text-slate-300 hover:text-white">home</Link>
    </nav>
  );
}

export default Menu;
