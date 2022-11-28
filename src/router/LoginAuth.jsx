import { Navigate } from "react-router-dom";
import { keys } from "./authData";

export default function LoginAuth({ children }) {
  if (
    keys.filter((key) => key === window.localStorage.getItem("key-course"))
      .length >= 1
  ) {
    return <Navigate to="/semana/1/" />;
  }

  return children;
}
