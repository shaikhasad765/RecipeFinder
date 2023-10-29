import React from 'react';
import "./Assets/CSS/Favorites.css"

// Favorites Component
const Favorites = ({ favorites, onRecipeClick, onRemoveFavorite }) => {
    return (
        <div className='FavoritesContainer'>
            {/* Favorites Title */}
            <h2 className='Title'>Favorites</h2>

            {/* Display message when there are no favorites */}
            {favorites.length === 0 ? (
                <p className='EmptyMessage'>No favorites yet. Add some recipes to your favorites!</p>
            ) : (
                // List of favorite recipes
                <ul className='List'>
                    {favorites.map((recipe) => (
                        <li className='ListItem' key={recipe.id}>
                            {/* Recipe Image */}
                            <img 
                                id='RecipeImage'
                                src={recipe.image} 
                                alt={recipe.title} 
                                style={{
                                    width: "150px",
                                    height: "auto",
                                    borderRadius:"15px"
                                }}
                            />
                            {/* Recipe Name with click event to view details */}
                            <p id='RecipeName' onClick={() => onRecipeClick(recipe)}>
                                <strong>Recipe Name: </strong>{recipe.title}
                            </p>
                            {/* Button to remove recipe from favorites */}
                            <button className='RemoveButton' onClick={() => onRemoveFavorite(recipe.id)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Favorites;
