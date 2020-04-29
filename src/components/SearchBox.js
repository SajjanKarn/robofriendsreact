import React from "react";

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className="pa2">
      <input
        type="text"
        name="searchRobots"
        placeholder="Enter robots"
        className="pa3 ba b--green bg-lighest-blue"
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;
