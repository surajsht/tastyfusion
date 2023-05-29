import { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import RecipeItem from "./RecipeItem";
import RecipeNotFound from "./RecipeNotFound";
import "./recipe.css";

const Recipe = () => {
  let { apiData } = useContext(GlobalContext);

  let RecipeData = () => {
    return (
      <div className="wrapper">
        <div className="recipe-container">
          {apiData.map((item) => {
            return <RecipeItem item={item} key={item.idMeal} />;
          })}
        </div>
      </div>
    );
  };

  return <div>{apiData ? <RecipeData /> : <RecipeNotFound />}</div>;
};

export default Recipe;
