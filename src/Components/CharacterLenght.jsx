import React from "react";

const CharacterLength = ({ length, setLength }) => {
    return (
        <div>
            <label htmlFor="character-length" className="uppercase font-semibold block text-sm font-medium text-gray-400 mb-2">Character length</label>
            <div className="flex gap-[10px]">
                <span className="font-semibold block text-sm font-medium text-gray-400">{length}</span>
                <input
                    type="range"
                    min="12"
                    max="20"
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value))}
                    className="w-3/4 auto"
                />
                <span className="font-semibold block text-sm font-medium text-gray-400">20</span>
            </div>
        </div>
    );
};

export default CharacterLength;