import spotify_logo from "../assets/images/logo.svg";
import IconText from "../components/shared/IconText";
import { Icon } from "@iconify/react";
import TextWithHover from "../components/shared/TextWithHover";


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

            <div className="right h-full w-4/5 bg-app-black">
                <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">
                    <div className="w-1/2 flex h-full ">
                        <div className="w-3/5 flex justify-around items-center">
                        <TextWithHover displayText={"Premium"}/>
                    <TextWithHover displayText={"Support"}/>
                    <TextWithHover displayText={"Download"}/>
                    <div className="h-1/2 border border-white "></div>
                        </div>
                    
                    <div className="w-2/5 flex justify-around h-full items-center">
                    <TextWithHover displayText={"Sign up"}/>
                    <div className="h-2/3 bg-white px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                        Log in
                    </div>
                    </div>
                    
                    </div>
                 
                   
                </div>
                <div className="content p-8">
                    <PlaylistView/>
                </div>


            </div>
        </div>
        </>
    );
};

const PlaylistView=()=>{
    return(
        <div className="text-white">
            <div className="text-2xl font-semibold mb-4">Focus</div>
            <div className="w-full flex justify-between ">
                <Card title={"Peaceful Piano"} description={"Relax and indulge with beautiful piano pieces"} />
                <Card title={"Peaceful Piano"} description={"Relax and indulge with beautiful piano pieces"} />
                <Card title={"Peaceful Piano"} description={"Relax and indulge with beautiful piano pieces"} />
                <Card title={"Peaceful Piano"} description={"Relax and indulge with beautiful piano pieces"} />
                <Card title={"Peaceful Piano"} description={"Relax and indulge with beautiful piano pieces"} />
                
            </div>
        </div>
    );
};

const Card =({title,description}) =>{
    return(
        <div className="bg-black bg-opacity-60 w-1/6 p-4 rounded-lg">
            <div className="pt-2 pb-4">
                <img className="rounded-md" w-full src="data:image/jpeg;base64,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" alt="" />
            </div>
            <div className="text-white text-sm font-semibold">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
            
        </div>
    );
};

export default HomeComponent;