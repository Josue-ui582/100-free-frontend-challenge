import React, { useState } from 'react'
import { locations } from '../data/localization';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");
    const [location, setLocation] = useState("");

    const handleSearch = () => {
        onSearch(query, location);
    }
    return(
        <div className="flex md:flex-row gap-4 flex-col md:gap-4 lg:gap-4 md:p-4 p-2 bg-gray-100 rounded-md shadow-md relative">
            <input
                type="text"
                placeholder="Find a job"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
                <option value="">Localization</option>
                    {locations.map((loc, index) => (
                        <option key={index} value={loc}>
                        {loc}
                    </option>
                ))}
            </select>

            <button
                    onClick={handleSearch}
                    className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                >
                    Search
            </button>
        </div>
    )
}

export default SearchBar;