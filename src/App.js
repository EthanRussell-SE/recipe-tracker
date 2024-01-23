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
      
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />    
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;
