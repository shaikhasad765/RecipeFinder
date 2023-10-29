import React from 'react';
import './Assets/CSS/RecipeDetails.css';

// RecipeDetails Component
const RecipeDetails = ({ recipe, onFavoriteToggle, isFavorite, onRemoveFavorite }) => {
  return (
    // Container for recipe details
    <div className='DetailsContainer'>

      {/* Recipe title */}
      <h2 className='Title'>{recipe.title}</h2>

      {/* Container for recipe image and details */}
      <div className='ImageContainer'>
        {/* Recipe image */}
        <img className='RecipeImage' src={recipe.image} alt={recipe.title} />

        {/* Details container */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start"
        }}>
          {/* Ingredients list */}
          <p className='details'><strong>Ingredients: </strong>{recipe.ingredients.join(', ')}</p>

          {/* Instructions with a link to open in a new tab */}
          <p className='details'>
            <strong>Instructions: </strong> For detailed Instructions Click Here &emsp;
            <a href={recipe.instructions} target="_blank" rel="noopener noreferrer">{recipe.instructions}</a>
          </p>
        </div>
      </div>

      {/* Container for action buttons */}
      <div className='ButtonContainer'>

        {/* Conditional rendering for favorite button */}
        {isFavorite ? (
          // Button to remove from favorites
          <button className='RemoveFromFavoritesButton' onClick={onRemoveFavorite}>
            Remove from Favorites
          </button>
        ) : (
          // Button to add to favorites
          <button className='AddToFavoritesButton' onClick={onFavoriteToggle}>
            Add to Favorites
          </button>
        )}

      </div>

    </div>
  );
};

export default RecipeDetails;