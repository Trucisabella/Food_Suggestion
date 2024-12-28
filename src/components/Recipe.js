/**Food Suggestion Web
 * @author Truc (Ella) Tran
 * @date 2024-12-28
 * @description This component generates recipe suggestions based on the user's input ingredients.
 */

import React from "react";

//Array of recipe objects
const recipes = [
  { name: "Spaghetti", ingredients: ["tomato", "noodles", "onion"], mainIngredients: ["tomato", "noodles"] },
  { name: "Salad", ingredients: ["lettuce", "tomato", "cucumber"], mainIngredients: ["lettuce"] },
  { name: "Omelette", ingredients: ["egg", "onion", "cheese"], mainIngredients: ["egg"] },
  { name: "Pancakes", ingredients: ["flour", "egg", "milk"], mainIngredients: ["flour", "egg"] },
  { name: "Pizza", ingredients: ["dough", "tomato", "cheese"], mainIngredients: ["dough", "tomato"] },
  { name: "Sandwich", ingredients: ["bread", "lettuce", "tomato"], mainIngredients: ["bread"] },
  { name: "Stir-fry", ingredients: ["tofu", "vegetables", "soy sauce"], mainIngredients: ["tofu", "vegetables"] },
  { name: "Soup", ingredients: ["broth", "vegetables", "noodles"], mainIngredients: ["broth", "vegetables"] },
  { name: "Burger", ingredients: ["bun", "patty", "lettuce"], mainIngredients: ["bun", "patty"] },
  { name: "Garlic Bread", ingredients: ["bread", "garlic", "butter"], mainIngredients: ["bread", "garlic"] }
];

//Functional component Recipe that takes ingredients as a prop
const Recipe = ({ userIngredients }) => {
  //list of recipe suggestions
  const matches = recipes.map((recipe) => {
    //check for missing main ingredients in the recipe
    const mainMissing = recipe.mainIngredients.filter((main) => !userIngredients.includes(main));
    const hasIngredients = recipe.ingredients.some((item) => userIngredients.includes(item));

    return hasIngredients ? {
      name: recipe.name,
      missingIngredients: mainMissing,
    } : null;
  }).filter((recipe) => recipe !== null);

  return (
    <div>
      <h2>Let's do</h2>
      {matches.length > 0 ?
        /* If there are matching recipes */
        (
          <ul>
            {matches.map((recipe, index) => {
              if (recipe.missingIngredients.length === 0) {
                //user has all main ingredients
                return (
                  <li key={index}>{recipe.name}</li>
                )
              } else {
                //user is missing some main ingredients
                return (
                  <li key={index}>
                    {recipe.name} (but you need: {recipe.missingIngredients.join(", ")})</li>
                );
              }
            })}
          </ul>
        ) :
        /* If there are no matching recipes */
        (
          <p>I need more ingredients</p>
        )}
    </div>
  );
};

export default Recipe;
