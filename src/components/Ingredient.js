/**Food Suggestion Web
 * @author Truc (Ella) Tran
 * @date 2024-12-28
 * @description This component receives the user input
 */
//import React library and useState hook
import React, { useState } from "react";

//Functional component Ingredient that takes onIngredientsSubmit as a prop
const Ingredient = ({ onIngredientsSubmit }) => {
    //ingredients: state variable holds input string, setIngredients: function to update the state variable
    const [ingredients, setIngredients] = useState("");

    //Function to handle form submission, takes an event object "e" as an argument
    const handleSubmit = (e) => {
        //prevents the default behavior of the form submission, which is reloading the page
        e.preventDefault();
        //split the ingredients string into an array of ingredients
        //map over the array and trim each item
        const ingredientList = ingredients.split(",").map((item) => item.trim());
        //pass the ingredientList to the parent component via the onIngredientsSubmit prop
        onIngredientsSubmit(ingredientList);
        //setIngredients(""); // Clear input after submitting
    };

    return (
        //onSubmit event handler triggers the handleSubmit function when the form is submitted
        <form onSubmit={handleSubmit}>
            <label>
                You have (comma-separated):
                <input
                    type="text"
                    value={ingredients}
                    //onChange event listener triggers a callback function whenever the value of the input field changes
                    //e.target.value retrieves the current value of the input field, then use setIngredients to update the state variable ingredients
                    onChange={(e) => setIngredients(e.target.value)}
                />
            </label>
            <button type="submit">Suggest Recipes</button>
        </form>
    );
};

export default Ingredient;
