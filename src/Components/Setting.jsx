import React from "react";

const Setting = ({
    includeUppercase,
    setIncludeUppercase,
    includeLowercase,
    setIncludeLowercase,
    includeNumbers,
    setIncludeNumbers,
    includeSymbols,
    setIncludeSymbols,
}) => {
    return (
        <div>
            <h2 className="uppercase font-semibold font-medium block text-sm font-medium text-gray-400 mb-2">Setting</h2>
            <div className="flex flex-col gap-[10px]">
                <div className="flex items-center justify-between bg-blue-200 rounded-full py-[5px] px-[10px]">
                    <label htmlFor="include-uppercase">Include uppercase letters</label>
                    <input
                        type="checkbox"
                        id="include-uppercase"
                        checked={includeUppercase}
                        onChange={() => setIncludeUppercase(!includeUppercase)}
                        className="w-4 h-4 rounded-full focus:ring-purple-500"
                    />
                </div>
                <div className="flex items-center justify-between bg-blue-200 rounded-full py-[5px] px-[10px]">
                    <label htmlFor="include-lowercase">Include lowercase letters</label>
                    <input
                        type="checkbox"
                        id="include-lowercase"
                        checked={includeLowercase}
                        onChange={() => setIncludeLowercase(!includeLowercase)}
                        className="w-4 h-4 text-purple-600 bg-gray-700 rounded focus:ring-purple-500"
                    />
                </div>
                <div className="flex items-center justify-between bg-blue-200 rounded-full py-[5px] px-[10px]">
                    <label htmlFor="include-numbers">Include numbers</label>
                    <input
                        type="checkbox"
                        id="include-numbers"
                        checked={includeNumbers}
                        onChange={() => setIncludeNumbers(!includeNumbers)}
                        className="w-4 h-4 text-purple-600 bg-gray-700 rounded focus:ring-purple-500"
                    />
                </div>
                <div className="flex items-center justify-between bg-blue-200 rounded-full py-[5px] px-[10px]">
                    <label htmlFor="include-symbols">Include symbols</label>
                    <input
                        type="checkbox"
                        id="include-symbols"
                        checked={includeSymbols}
                        onChange={() => setIncludeSymbols(!includeSymbols)}
                        className="w-4 h-4 text-purple-600 bg-gray-700 rounded focus:ring-purple-500"
                    />
                </div>
            </div>
        </div>
    );
};

export default Setting;