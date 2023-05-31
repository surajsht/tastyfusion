import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./blog.css";

const Blog = () => {
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
    <div className="wrapper">
      {recipeData.map((recipe) => {
        let {
          idMeal,
          strMeal,
          strCategory,
          strArea,
          strMealThumb,
          strInstructions,
          strYoutube,
        } = recipe;

        return (
          <div className="single" key={idMeal}>
            <div className="recipe-image">
              <img src={strMealThumb} alt="" />
            </div>

            <div className="recipe-content">
              <h2> {strMeal} </h2>
              <div className="recipe-area-category">
                <div className="recipe-area-item recipe-content-category">
                  <h2 className="recipe-area-title"> Category : </h2>
                  <span> {strCategory} </span>
                </div>

                <div className="recipe-area-item recipe-content-area">
                  <h2 className="recipe-area-title"> Area : </h2>
                  <span> {strArea} </span>
                </div>
              </div>

              <div className="recipe-content-ingredient">
                <h2 className="ingredient-title"> Ingredients </h2>

                <div className="ingredient-content-container">
                  {ingredientLists.map((ingredients, ingredientIdx) => {
                    return (
                      <div className="ingredient-lists" key={ingredientIdx}>
                        <span> {ingredients} </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <p> {strInstructions} </p>

              <div className="single-btn-group">
                <button className="back-to-home">
                  <Link to="/"> Back to home </Link>
                </button>
                <button>
                  <a href={strYoutube}> watch video </a>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
