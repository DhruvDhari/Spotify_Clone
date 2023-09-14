import spotify_logo from "../assets/images/logo.svg";
import IconText from "../components/shared/IconText";
import { Icon } from "@iconify/react";
import TextWithHover from "../components/shared/TextWithHover";
import {Howl,Howler} from "howler";
import { Children, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import songContext from "../context/songContext";
// import { useNavigate } from "react-router-dom";


const LoggedInContainer=({children,curActiveScreen})=>{
    // const navigate=useNavigate();
    const {currentSong,setCurrentSong,soundPlayed,setSoundPlayed,isPaused,setIsPaused}=useContext(songContext);

    const firstUpdate=useRef(true);

    useLayoutEffect(()=>{

        if(firstUpdate.current){
            firstUpdate.current=false;
            return;
        }
        if(!currentSong){
            return;
        }
        
        changeSong(currentSong.track);

    },[currentSong && currentSong.track]);
  
const playSound=()=>{
    if (!soundPlayed){
        return;
    }
    soundPlayed.play();
};

    const changeSong =(songSrc)=>{
        if(soundPlayed){
            soundPlayed.stop();
        }
        let sound=new Howl({
            src:[songSrc],
            html5:true
        });
        setSoundPlayed(sound)
        sound.play();
        setIsPaused(false);
       
    };

    const pauseSound=()=>{
        soundPlayed.pause();
    };

    const togglePlayPause=()=>{
        if(isPaused){
            playSound();

            setIsPaused(false);
        }else{
            pauseSound();
            setIsPaused(true);
        }
    };

    return(
        <>
        <div className="h-full w-full bg-app-black">
            <div className={`${currentSong?"h-9/10":"h-full"} w-full flex`}>

            <div className="left h-full w-1/5 bg-black flex flex-col justify-between pb-10">
                <div>
                <div className="logoDiv p-6">
                    <img src={spotify_logo} alt="Spotify logo" width={125} />
                </div>

                <div className="py-4">
                <IconText iconName={"material-symbols:home"} displayText={"Home"} active={curActiveScreen==="home"} targetLink={"/home"} />
                <IconText iconName={"material-symbols:search-rounded"} displayText={"Search"} active={curActiveScreen==="search"}/>
                <IconText iconName={"icomoon-free:books"} displayText={"Library"} active={curActiveScreen==="library"}/>
                <IconText iconName={"material-symbols:library-music-sharp"} displayText={"My Music"} targetLink={"/mymusic"} active={curActiveScreen==="mymusic"}/>
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
                    <div className="h-1/2 border-r border-white "></div>
                        </div>
                    
                    <div className="w-1/3 flex justify-around h-full items-center">
                    <TextWithHover displayText={"Upload Song "} />
                    <div className=" bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                        DD
                    </div>
                    </div>
                    
                    </div>
                 
                   
                </div>
                <div className="content p-8 pt-0 overflow-auto">
                    {children}
                </div>


            </div>
            </div>

            {
                currentSong &&(

                    <div className=" w-full  bg-black bg-opacity-30 text-white flex px-2 items-center">

                <div className="w-1/4 flex items-center ">
                <img src={currentSong.thumbnail} alt="phi" className="h-14 w-14 rounded " />
                <div className="pl-3">
                    <div className="text-sm hover:underline cursor-pointer">{currentSong.name}</div>
                    <div className="text-xs text-gray-500 hover:underline cursor-pointer">{currentSong.artist.firstName+" "+currentSong.artist.lastName}</div>
                </div>
                </div>
                <div className="w-1/2 flex h-full justify-center flex-col items-center">
                    <div className="flex w-1/3 justify-between items-center">
                        <Icon icon="ph:shuffle-fill"  fontSize={30} className="cursor-pointer text-gray-500 hover:text-white"/>
                        <Icon icon="mdi:skip-previous-outline"  fontSize={30} className="cursor-pointer text-gray-500 hover:text-white"/>
                        <Icon icon={isPaused?"ic:baseline-play-circle":"ic:baseline-pause-circle"}  fontSize={50} className="cursor-pointer text-gray-500 hover:text-white" onClick={togglePlayPause}/>
                        <Icon icon="mdi:skip-next-outline"  fontSize={30} className="cursor-pointer text-gray-500 hover:text-white"/>
                        <Icon icon="ic:twotone-repeat"  fontSize={30} className="cursor-pointer text-gray-500 hover:text-white"/>
                    </div>
                    <div className="">progress bar</div>
                </div>
                <div className="w-1/4 flex justify-end">
                </div>
                

            </div>
                )}
        </div>
        </>
    );
};

export default LoggedInContainer;