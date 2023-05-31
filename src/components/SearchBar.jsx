import React from 'react';

function SearchBar({ onSearch }) {

    const onSearchBarChange = (event) => {
        const searchText = event.target.value;
        onSearch(searchText);
    };

    return (
        <input type="text" placeholder="Cari notes..." onChange={onSearchBarChange} />
    );
}

export default SearchBar;
