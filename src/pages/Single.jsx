import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Single = () => {
  let [recipeData, setRecipeData] = useState([]);
  let [ingredientLists, setIngredientLists] = useState([]);
  let { id } = useParams();

  let URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

  let fetchData = async () => {
    try {
      let response = await fetch(URL);
      let data = await response.json();
      let recipeIngredients = GetRecipeIngredients(data.meals[0]);
      setIngredientLists(recipeIngredients);
      setRecipeData(data.meals);
    } catch (e) {
      console.error(e);
    }
  };

  let GetRecipeIngredients = (recipe) => {
    let ingredientList = [];

    for (let i = 1; i < 20; i++) {
      let ingredient = recipe[`strIngredient${i}`];
      let measure = recipe[`strMeasure${i}`];

      if (ingredient && measure) {
        let ingredientMeasure = `${ingredient} - ${measure}`;
        ingredientList.push(ingredientMeasure);
      }
    }

    return ingredientList;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {recipeData.map((recipe) => {
        let {
          idMeal,
          strMeal,
          strCategory,
          strArea,
          strMealThumb,
          strInstructions,
        } = recipe;

        return (
          <div className="single" key={idMeal}>
            <div className="recipe-image">
              <img src={strMealThumb} alt="" />
            </div>

            <div className="recipe-content">
              <h2> {strMeal} </h2>
              <p> {strInstructions} </p>
              <span> {strCategory} </span>
              <span> {strArea} </span>

              <div className="recipe-content-ingredient">
                {ingredientLists.map((ingredients, ingredientIdx) => {
                  return (
                    <div className="ingredient-lists" key={ingredientIdx}>
                      <span> {ingredients} </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Single;
