import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './Components/SearchBar';
import RecipeList from './Components/RecipeList';
import RecipeDetails from './Components/RecipeDetails';
import Favorites from './Components/Favorites';
import NavBar from './Components/Navbar';
import { fetchRecipes } from './Services/recipeApi';
import "./App.css"

// Main App Component
const App = () => {
  // State Hooks
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [activeTab, setActiveTab] = useState('home');

  // Effect Hook to fetch recipes when the searchTerm changes
  useEffect(() => {
    if (searchTerm.trim() !== '') {
      toast.info('Fetching recipes...');
      fetchRecipes(searchTerm)
        .then((data) => {
          setRecipes(data);
          toast.success('Recipes fetched successfully!');
        })
        .catch((error) => {
          console.error('Error fetching recipes:', error);
          toast.error('Error fetching recipes. Please try again.');
        });
    }
  }, [searchTerm]);

  // Handle click on a recipe, set it as selected, and switch to details tab
  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    setActiveTab('details');
  };

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'home') {
      setSelectedRecipe(null);
    }
  };

  // Handle toggling a recipe as a favorite
  const handleFavoriteToggle = () => {
    if (selectedRecipe) {
      const isCurrentlyFavorite = favorites.some((fav) => fav.id === selectedRecipe.id);

      if (isCurrentlyFavorite) {
        setFavorites(favorites.filter((fav) => fav.id !== selectedRecipe.id));
        toast.success('Removed from Favorites');
      } else {
        setFavorites([...favorites, selectedRecipe]);
        toast.success('Added to Favorites');
      }
    }
  };

  // Handle removing a recipe from favorites
  const handleRemoveFavorite = () => {
    if (selectedRecipe) {
      setFavorites(favorites.filter((fav) => fav.id !== selectedRecipe.id));
      toast.success('Removed from Favorites');
    }
  };

  // Render the main app structure
  return (
    <div className='Container'>
      <div className='BackgroundContainer'></div>
      <div className='ContentContainer'>
        <ToastContainer />
        <NavBar onTabChange={handleTabChange} />
        {activeTab === 'home' && (
          <>
            <SearchBar searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
            <RecipeList
              recipes={recipes}
              onRecipeClick={handleRecipeClick}
            />
          </>
        )}
        {activeTab === 'details' && selectedRecipe && (
          <RecipeDetails
            recipe={selectedRecipe}
            onFavoriteToggle={handleFavoriteToggle}
            isFavorite={favorites.some((fav) => fav.id === selectedRecipe.id)}
            onRemoveFavorite={handleRemoveFavorite}
          />
        )}
        {activeTab === 'favorites' && (
          <Favorites
            favorites={favorites}
            onRecipeClick={handleRecipeClick}
            onRemoveFavorite={handleRemoveFavorite}
          />
        )}
      </div>
    </div>
  );
};

export default App;
