import spotify_logo from "../assets/images/logo.svg";
import IconText from "../components/shared/IconText";
import { Icon } from "@iconify/react";

const HomeComponent=()=>{
    return(
        <>
        <div className="h-full w-full flex">
            <div className="left h-full w-1/5 bg-black flex flex-col justify-between pb-10">
                <div>
                <div className="logoDiv p-6">
                    <img src={spotify_logo} alt="Spotify logo" width={125} />
                </div>

                <div className="py-4">
                <IconText iconName={"material-symbols:home"} displayText={"Home"} active />
                <IconText iconName={"material-symbols:search-rounded"} displayText={"Search"}/>
                <IconText iconName={"icomoon-free:books"} displayText={"Library"}/>
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

            <div className="right h-full w-4/5">
                <div className="navbar w-full">


                </div>
                <div className="content"></div>

            </div>
        </div>
        </>
    );
}
export default HomeComponent;