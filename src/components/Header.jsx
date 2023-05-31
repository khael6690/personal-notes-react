import React from "react";
import SearchBar from './SearchBar'

const Header = ({ onSearch }) => {

    return (
        <div className="note-app__header">
            <h1>My Notes</h1>
            <div className="note-search">
                <SearchBar onSearch={onSearch} />
            </div>
        </div>
    );
};

export default Header;