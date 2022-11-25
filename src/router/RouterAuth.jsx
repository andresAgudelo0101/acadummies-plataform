import { Navigate } from "react-router-dom";
import { AppContext } from "../App";
import { useContext } from "react";
function RouterAuth({ children }) {
    const {setStatus} = useContext(AppContext);
  if (window.localStorage.getItem("key-course") !== "free access") {
    return <Navigate to="/" />;
  }

  return children;
}

export default RouterAuth;
