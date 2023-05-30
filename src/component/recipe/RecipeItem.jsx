import { Link } from "react-router-dom";

const RecipeItem = ({ item }) => {
  let { idMeal, strMeal, strCategory, strMealThumb } = item;

  return (
    <div className="recipe-item">
      <img src={strMealThumb} alt="" />
      <span className="recipe-item-category"> {strCategory} </span>
      <h2 className="recipe-item-title">
        <Link to={`recipe/${idMeal}`}>{strMeal}</Link>
      </h2>
    </div>
  );
};

export default RecipeItem;
