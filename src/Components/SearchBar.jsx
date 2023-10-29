import React from 'react';
import './Assets/CSS/SearchBar.css'; 

// SearchBar Component
const SearchBar = ({ searchTerm, onSearchTermChange }) => {
  return (
    // Container for the search bar
    <div className='searchBar'>
      {/* Input field for searching */}
      <input
        type="text"
        className='SInput'
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
        placeholder="Search for recipes..."
      />
    </div>
  );
};

export default SearchBar;
