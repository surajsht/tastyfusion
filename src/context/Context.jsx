import { useState } from "react";
import { createContext } from "react";

let GlobalContext = createContext(null);

let URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const Context = (props) => {
  let [userValue, setUserValue] = useState("");
  let [apiData, setApiData] = useState([]);

  let handleChange = (value) => {
    setUserValue(value);
  };

  let fetchData = async () => {
    try {
      if (userValue) {
        let response = await fetch(`${URL}${userValue}`);
        let data = await response.json();
        setApiData(data.meals);
      } else {
        setApiData([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  let contextValue = { userValue, handleChange, fetchData, apiData };

  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default Context;
export { GlobalContext };
