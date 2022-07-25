import React from 'react';
import '../SearchBox/SearchBox.scss';

function SearchBox(props) {
  return (
    <input
      className="searchbox"
      type="search"
      placeholder="Search..."
      onChange={props.handleChange}
    />
  );
}

export default SearchBox;
