import React, { useState } from 'react';

function RecipeCreate({ addRecipe }) {
  const [recipe, setRecipe] = useState({
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe(recipe);

    setRecipe({
      name: '',
      cuisine: '',
      photo: '',
      ingredients: '',
      preparation: '',
    });
  };

  return (
    <div >
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit} name="create">
        <input
          type="text"
          name="name"
          placeholder="name"
          value={recipe.name}
          onChange={handleChange}
        />
        
        <input
          type="text"
          name="cuisine"
          placeholder="cuisine"
          value={recipe.cuisine}
          onChange={handleChange}
        />
        
        <input
          type="text"
          name="photo"
          placeholder="photo URL"
          value={recipe.photo}
          onChange={handleChange}
        />
        
        <textarea
          name="ingredients"
          placeholder="ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
        />
        
        <textarea
          name="preparation"
          placeholder="preparation"
          value={recipe.preparation}
          onChange={handleChange}
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default RecipeCreate;
