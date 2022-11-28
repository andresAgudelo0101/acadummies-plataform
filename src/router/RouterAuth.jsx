import { Navigate } from "react-router-dom";
import { AppContext } from "../App";
import { useContext } from "react";
import { keys } from "./authData";
function RouterAuth({ children }) {
    const {setStatus} = useContext(AppContext);
  if (keys.filter((key)=>key === window.localStorage.getItem("key-course")).length==0) {
    return <Navigate to="/" />;
  }

  return children;
}

export default RouterAuth;
