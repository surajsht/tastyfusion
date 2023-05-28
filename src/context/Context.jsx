import { createContext } from "react";

let GlobalContext = createContext(null);

const Context = (props) => {
  return (
    <GlobalContext.Provider value={null}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default Context;
export { GlobalContext };
