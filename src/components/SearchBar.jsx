import React from 'react';

function SearchBar({ onSearch }) {

    const onSearchBarChange = (event) => {
        onSearch(event.target.value)
    }

    return (
        <>
            <input type="text" placeholder="Cari notes..." onChange={onSearchBarChange} />
        </>
    );
}

export default SearchBar;