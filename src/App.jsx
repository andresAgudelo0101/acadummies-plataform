import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import Router from "./router/Router";

export const AppContext = createContext();

function App() {
  const [status, setStatus] = useState(null);

  return (
    <AppContext.Provider value={{status,setStatus}}>
      <Router />
    </AppContext.Provider>
  );
}

export default App;
