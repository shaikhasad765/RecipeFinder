import React from 'react';
import './Assets/CSS/RecipeList.css';

// RecipeList Component
const RecipeList = ({ recipes, onRecipeClick }) => {
    return (
        // List container
        <ul className='List'>
            {/* Map through each recipe and create a list item */}
            {recipes.map((recipe) => (
                <li className='ListItem' key={recipe.id} onClick={() => onRecipeClick(recipe)}>
                    {/* Container for recipe image */}
                    <div className='ImageContainer'
                        style={{
                            padding: "4px",
                        }}
                    >
                        {/* Recipe image */}
                        <img src={recipe.image} alt={recipe.title}
                            id='ImgRecipe'
                            style={{
                                width: "90px",
                                height: "90px",
                                borderRadius: "10px"
                            }}
                        />
                    </div>
                    {/* Container for recipe title */}
                    <div style={{ flex: 1 }}>
                        <h3 style={{ marginLeft: "10px" }}>{recipe.title}</h3>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default RecipeList;
