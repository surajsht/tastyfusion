const RecipeItem = ({ item }) => {
  let { strMeal, strCategory, strMealThumb } = item;

  return (
    <div className="recipe-item">
      <img src={strMealThumb} alt="" />
      <span className="recipe-item-category"> {strCategory} </span>
      <h2 className="recipe-item-title"> {strMeal} </h2>
    </div>
  );
};

export default RecipeItem;
