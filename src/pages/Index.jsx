import { AppContext } from "../App";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../components/VercelFont.module.css";
function Index() {
  const navigate = useNavigate();
  const { status } = useContext(AppContext);
  const [inputKey, setinputKey] = useState("");
  const onHandleSubmit = () => {
    window.localStorage.setItem("key-course", inputKey);
    navigate("/semana/1/");
  };

  return (
    <div className=" bg-slate-900 h-screen w-full text-white p-5 flex justify-center items-center flex-col">
      <h1 className={styles.title2}>Ingresa tu codigo de acceso</h1>
      <input
        type="text"
        className=" bg-slate-900 border-2 border-cyan-400 rounded-2xl p-2 w-96 text-cyan-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  "
        onChange={(e) => {
          setinputKey(e.target.value);
        }}
      />

      <button onClick={onHandleSubmit} className={styles.btn}>
        Ingresar
      </button>
      <h2 className=" text-2xl font-semibold text-center w-96 text-slate-400">
        Si quieres acceder gratis a la semana 1 solo da clic en ingresar.
      </h2>
    </div>
  );
}

export default Index;
