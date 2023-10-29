const APP_ID = '066c47d0';
const APP_KEY = '89bdd89884875ea468302c80fec813f7';

export const fetchRecipes = async (searchTerm) => {
  try {
    const response = await fetch(
      `https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();

    const recipes = data.hits.map((hit) => ({
      id: hit.recipe.uri,
      title: hit.recipe.label,
      ingredients: hit.recipe.ingredients.map((ingredient) => ingredient.text),
      instructions: hit.recipe.url,
      image: hit.recipe.image,
      isFavorite: false,
    }));

    return recipes;
  } catch (error) {
    throw new Error('Failed to fetch recipes');
  }
};
