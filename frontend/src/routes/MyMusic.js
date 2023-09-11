import spotify_logo from "../assets/images/logo.svg";
import IconText from "../components/shared/IconText";
import { Icon } from "@iconify/react";
import TextWithHover from "../components/shared/TextWithHover";
import SingleSongCard from "../components/shared/SingleSongCard";



const MyMusic=()=>{

    return(
        <>
        <div className="h-full w-full flex">
            <div className="left h-full w-1/5 bg-black flex flex-col justify-between pb-10">
                <div>
                <div className="logoDiv p-6">
                    <img src={spotify_logo} alt="Spotify logo" width={125} />
                </div>

                <div className="py-4">
                <IconText iconName={"material-symbols:home"} displayText={"Home"} />
                <IconText iconName={"material-symbols:search-rounded"} displayText={"Search"}/>
                <IconText iconName={"icomoon-free:books"} displayText={"Library"}/>
                <IconText iconName={"material-symbols:library-music-sharp"} displayText={"My Music"}  active/>
                </div>

                <div className="pt-4">
                <IconText iconName={"material-symbols:add-box"} displayText={"Create Playlist"}/>
                <IconText iconName={"mdi:cards-heart"} displayText={"Liked Songs"}/>
                </div>

                </div>

                <div className="px-4">
                <div className="text-white border border-gray-100 w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer"  >
                    <Icon icon="carbon:earth-europe-africa"/>
                <div className="ml-2 text-sm font-semibold">
                English
                </div>
                </div>
                </div>
              
                

            </div>

            <div className="right h-full w-4/5 bg-app-black overflow-auto">
                <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">
                    <div className="w-1/2 flex h-full ">
                        <div className="w-2/3 flex justify-around items-center">
                        <TextWithHover displayText={"Premium"}/>
                    <TextWithHover displayText={"Support"}/>
                    <TextWithHover displayText={"Download"}/>
                    <div className="h-1/2 border border-white "></div>
                        </div>
                    
                    <div className="w-1/3 flex justify-around h-full items-center">
                    <TextWithHover displayText={"Upload Song "}/>
                    <div className=" bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                        DD
                    </div>
                    </div>
                    
                    </div>
                 
                   
                </div>

                <div className="content p-8 overflow-auto">

                    <div className="text-white text-xl font-semibold pb-4 pl-2">My Songs</div>

                    <div className="space-y-2 overflow-auto">
                    <SingleSongCard/>
                    <SingleSongCard/>
                    <SingleSongCard/>
                    <SingleSongCard/>
                    <SingleSongCard/>
                    <SingleSongCard/>
                    <SingleSongCard/>
                    </div>
                    
                </div>


            </div>
        </div>
        </>
    );
};





export default MyMusic;