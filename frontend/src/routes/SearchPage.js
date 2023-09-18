import { Icon } from "@iconify/react";
import LoggedInContainer from "../containers/LoggedInContainer";
import { useState } from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import SingleSongCard from "../components/shared/SingleSongCard";

const SearchPage=()=>{

    const [isInputFocused,setIsInputFocused]= useState(false);
    const [searchText,setSearchText]=useState("");
    const[songData,setSongData]=useState([]);

    const searchSong=async()=>{
        const response=await makeAuthenticatedGETRequest("/song/get/songname/"+searchText);
        setSongData(response.data);
        
    }

    return(

        <LoggedInContainer curActiveScreen={"search"}>
             
            <div className="w-full py-5">
                <div className={`w-1/3  p-3 text-sm rounded-full bg-gray-800 px-4  text-white flex space-x-3 items-center ${isInputFocused ? "border-2 border-white ":""}`}>
                    <Icon icon="ic:outline-search" className="text-xl"/>
                <input type="text"
                 placeholder="What do you want to listen to?" 
                 className="w-full bg-transparent focus:outline-none"
                 onFocus={()=>{
                    setIsInputFocused(true);
                 }}
                 onBlur={()=>{
                    setIsInputFocused(false);
                 }}
                 
                 value={searchText}
                 onChange={(e)=>{
                    setSearchText(e.target.value)
                 }}
                 onKeyDown={(e)=>{
                    if(e.key==="Enter"){
                        searchSong();
                    }
                 }}
                 />
                 </div>
                 { 
                 (searchText.length>0)?
                 <div className="py-5 space-y-3">
                    <div className="text-white">Showing results for " <span className="font-semibold text-green-400">{searchText}</span> "</div>
                    {songData.map(item=>{
                        return <SingleSongCard info={item} key={JSON.stringify(item)} playSound={()=>{}} />
                    })}
                    
                 </div>:
                    <div className="text-gray-400 pt-5">
                        Search Something !!!
                    </div>
                 
                 }
            </div>

        </LoggedInContainer>
    );
}

export default SearchPage;