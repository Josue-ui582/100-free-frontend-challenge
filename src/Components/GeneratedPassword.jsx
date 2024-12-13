import React from "react";
import { FaRegCopy } from "react-icons/fa6";
import { SlReload } from "react-icons/sl";

const GeneratedPassword = ({ password, setPassword }) => {
    return (
        <div>
            <label htmlFor="generated-password" className="uppercase font-semibold block text-sm font-medium text-gray-400 mb-2">Generated Password</label>
            <div className="relative">
                <input
                    type="text"
                    readOnly
                    className="w-full bg-blue-200 rounded-full outline-none py-[3px] px-[10px] text-black text-xl"
                    value={password}
                />
                <FaRegCopy
                    className="absolute right-8 top-1.5 cursor-pointer"
                    onClick={() => {
                        navigator.clipboard.writeText(password)
                            .then(() => alert("Password copied to clipboard!"))
                            .catch(() => alert("Failed to copy password. Please try again manually."));
                    }}
                />
                <SlReload
                    className="absolute right-2 top-1.5 cursor-pointer"
                    onClick={() => setPassword("")}
                />
            </div>
        </div>
    );
};

export default GeneratedPassword;