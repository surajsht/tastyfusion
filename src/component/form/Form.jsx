import { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import "./form.css";

const Form = () => {
  let { userValue, handleChange, fetchData } = useContext(GlobalContext);

  return (
    <div className="search-form">
      <div className="wrapper">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={userValue}
            onChange={(e) => handleChange(e.target.value)}
          />
          <button type="submit" onClick={() => fetchData()}>
            search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
