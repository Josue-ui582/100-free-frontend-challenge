import React from "react";
import MusicEventHeader from "../Components/MusicEventHeader";
import MusicList from "../Components/MusicList";

const Challenge1 = () => {
    return(
        <div className="bg-slate-200 w-full min-h-screen flex flex-col justify-center items-center">
            <div className="auto w-4/5 flex flex-col gap-[15px]">
                <MusicEventHeader />
                <MusicList 
                    day="Today"
                    hours="21:00"
                    musicTitle="Swiftogeddon - The  Taylor Swift Club Night"
                    musicDescription="Swiftogeddon is a night dedicated to worshipping at the altar of Taylor Swift: non-stop Swifty all night: deep cuts, extended mixes, fan Favorites..."
                    bgColor="red-200"
                />

                <MusicList 
                    day="17 December"
                    hours="21:00"
                    musicTitle="Lana Del Rave"
                    musicDescription="Launching the first ever 'Lana Del Rave' at Heaven Night Club. Join us for a night devoted to the Queen of Alternative as well as favoristes from..."
                    bgColor="orange-200"
                />

                <MusicList 
                    day="19 December"
                    hours="21:00"
                    musicTitle="MASSAOKE: XMAX LIVE at the Electric Ballroom"
                    musicDescription="Featuring all your favorite festive hits from WHAM, SLADE, MARIAH, WIZZARD, THE POGUES and many more  - as well as hairbrush anthms..."
                    bgColor="blue-300"
                />

                <MusicList 
                    day="22 December"
                    hours="21:00"
                    musicTitle="Eleni Tsaligopoulou full-band"
                    musicDescription="Eleni Tsaligopoulou is one of the most popular and beloved Greek singer with a wide range of repertoire and timeless hits. During her 30 year..."
                    bgColor="blue-300"
                />
            </div>
        </div>
    )
}

export default Challenge1