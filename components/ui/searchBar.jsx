"use client";
import { useState, useEffect } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isClient, setIsClient] = useState(false);

  const data = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grapes",
    "Honeydew",
    "Kiwi",
    "Lemon",
    "Mango",
    "Orange",
    "Papaya",
    "Pineapple",
    "Quince",
    "Raspberry",
    "Strawberry",
    "Tomato",
    "Watermelon",
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      const filteredSuggestions = data.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
  };

  if (!isClient) {
    // Render nothing on the server to prevent mismatches
    return null;
  }

  return (
    <div className="relative md:w-[32vw]  w-[42vw]    border-[#6b7280]  rounded-full text-black from-neutral-950 md:text-[18px]   text-[14px] px-3 md:px-4 py-3 ">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className="md:w-[30vw]  w-[40vw] px-3 py-2 text-black  rounded-3xl border  shadow-custom focus:outline-none"
        placeholder="Search..."
      />
      {suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 mt-2 rounded-xl  bg-white border-[#e9e9e9] text-gray-900 lg:text-lg shadow-lg max-h-48 overflow-y-auto z-10">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className=" cursor-pointer px-3 py-1 hover:bg-gray-200"
              onClick={() => handleSelect(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
