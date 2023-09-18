import { useState } from "react";
import TextInput from "../components/shared/Textinput";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";

const CreatePlaylistModal=({closeModal})=>{

    const [playlistName,setPlaylistName]=useState("")
    const [playlistThumbnail,setPlaylistThumbnail]=useState("");

    const createPlaylist = async()=>{
        const response=await makeAuthenticatedPOSTRequest("/playlist/create",{name:playlistName,thumbnail:playlistThumbnail,songs:[]});

        if(response._id){
            closeModal();
        }
        
    }

    return(
        <div className="absolute z-2 bg-black w-screen h-screen bg-opacity-50 flex justify-center items-center " onClick={closeModal}>
            <div className="bg-green-400 w-1/3 rounded p-4" onClick={(e)=>{e.stopPropagation();
            }}>
                <div className="font-bold text-xl mb-4 ">Create PlayList</div>
                <div className="space-y-4 flex flex-col justify-center items-center">
                <TextInput label="Name" labelClassName="text-white"
                        placeholder={"PlayList Name"} 
                        value={playlistName} setValue={setPlaylistName}
                        />
                <TextInput label="Thumbnail" labelClassName="text-white"
                        placeholder={"Thumbnail"} 
                        value={playlistThumbnail} setValue={setPlaylistThumbnail}
                        />
                        <div className="bg-white w-1/3 rounded flex font-semibold justify-center items-center py-3 cursor-pointer mt-4 " onClick={createPlaylist}>Create</div>
                </div>
                </div>    
             </div>
    );
}
export default CreatePlaylistModal;