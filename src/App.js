import React, { useState } from 'react';
import RecipeCreate from './RecipeCreate';
import RecipeList from './RecipeList';
import RecipeData from './RecipeData'; 

function App() {
  const [recipes, setRecipes] = useState(RecipeData); 

 
  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  
  const deleteRecipe = (indexToDelete) => {
    console.log(indexToDelete);
    const updatedRecipes =
      recipes.filter((recipe, index) => {
        return (index !== indexToDelete)
        })
    setRecipes(updatedRecipes);
  };

  return (
    <div className="App">
      <RecipeCreate addRecipe={addRecipe} />
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
    </div>
  );
}

export default App;
