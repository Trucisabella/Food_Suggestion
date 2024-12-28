/**Food Suggestion Web
 * @author Truc (Ella) Tran
 * @date 2024-12-28
 * @description This program receives the user input (ingredients) and generates corresponding meals.
 */
import React, { useState } from "react";
import './App.css';
import Ingredient from './components/Ingredient';
import Recipe from './components/Recipe';

function App() {
  const [ingredients, setIngredients] = useState([]);

  return (
    <div className="App">
      <h1>What should we cook today?</h1>
      <Ingredient onIngredientsSubmit={setIngredients} />
      <Recipe userIngredients={ingredients} />
    </div>
  );
}

export default App;
