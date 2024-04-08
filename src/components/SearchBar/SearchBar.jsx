"use client";
JavaScript;
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ inputValue, setInputValue }) => {
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const clearSearch = () => {
    setInputValue("");
  };

  return (
    <div className="container mt-1">
      <div className="row">
        <div className="col-12">
          <div className="input-group mb-3 search-bar">
            <div className="input-group-prepend">
              <span className="input-group-text bg-white border-right-0 rounded-l-md search-icon">
                <CiSearch className="text-gray-500" />
              </span>
            </div>
            <input
              type="text"
              className="form-control search-input rounded-r-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-opacity-50"
              placeholder="Search..."
              aria-label="Search"
              value={inputValue}
              onChange={handleInputChange}
            />
            {inputValue !== "" && (
              <span
                className="input-group-text bg-transparent border-left-0 rounded-r-md clear-icon"
                onClick={clearSearch}
              >
                <IoMdClose className="text-gray-500 cursor-pointer" />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
