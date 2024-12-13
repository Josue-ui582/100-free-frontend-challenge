import React from "react";

const GeneratePasswordButton = ({ generatePassword }) => {
    return (
        <button
            onClick={generatePassword}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full"
        >
            Generate Password
        </button>
    );
};

export default GeneratePasswordButton;