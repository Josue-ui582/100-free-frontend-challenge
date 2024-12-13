import {React, useState} from 'react'
import GeneratedPassword from '../Components/GeneratedPassword'
import CharacterLength  from '../Components/CharacterLenght'
import Setting from '../Components/Setting'
import GeneratePasswordButton from '../Components/GeneratePasswordButton'

const Challenge2 = () => {

    const [password, setPassword] = useState("");
    const [length, setLength] = useState(12);
    const [includeUppercase, setIncludeUppercase] = useState(false);
    const [includeLowercase, setIncludeLowercase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);

    const generatePassword = () => {
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?/";

        let characters = "";
        if (includeUppercase) characters += upper;
        if (includeLowercase) characters += lower;
        if (includeNumbers) characters += numbers;
        if (includeSymbols) characters += symbols;

        if (characters.length === 0) {
            setPassword("Please select options");
            return;
        }

        let newPassword = "";
        for (let i = 0; i < length; i++) {
            newPassword += characters.charAt(
              Math.floor(Math.random() * characters.length)
            );
          }

        setPassword(newPassword);
    };

    return(
        <main className='flex justify-center items-center w-full min-h-screen'>
            <div className='sm:w-2/5 md:w-2/5  auto bg-gray-900 rounded-lg p-5 flex flex-col gap-[30px] justify-start'>
                <h2 className='text-white font-bold text-2xl'>Generate password</h2>
                <GeneratedPassword password={password} setPassword={setPassword} />
                <CharacterLength  length={length} setLength={setLength} />
                <Setting
                includeUppercase={includeUppercase}
                setIncludeUppercase={setIncludeUppercase}
                includeLowercase={includeLowercase}
                setIncludeLowercase={setIncludeLowercase}
                includeNumbers={includeNumbers}
                setIncludeNumbers={setIncludeNumbers}
                includeSymbols={includeSymbols}
                setIncludeSymbols={setIncludeSymbols}
                />
                <GeneratePasswordButton generatePassword={generatePassword} />
            </div>
        </main>
    )
}

export default Challenge2