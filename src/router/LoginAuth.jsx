import { Navigate } from "react-router-dom";

export default function LoginAuth({ children }) {
  if (window.localStorage.getItem("key-course") == "free access") {
    return <Navigate to="/semana/1/" />;
  }

  return children;
}
