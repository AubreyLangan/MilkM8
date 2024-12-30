import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm, placeholder = "Search..." }) => {
    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder={placeholder}
                className="search-input"
            />
        </div>
    );
};

export default SearchBar;