import App, { AppContext } from "../App";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();
  const {status} = useContext(AppContext);
  const [inputKey, setinputKey] = useState("");
  const onHandleSubmit = () => {
    window.localStorage.setItem("key-course", inputKey);
    navigate("/semana/1/");
  };

  return (
    <div className=" bg-slate-900 h-screen w-full text-white p-5 flex justify-center items-center flex-col">
      <input
        type="text"
        className=" bg-slate-900 border-2"
        onChange={(e) => {
          setinputKey(e.target.value);
        }}
      />
      <button onClick={onHandleSubmit}>Ingresar</button>
      
    </div>
  );
}

export default Index;
