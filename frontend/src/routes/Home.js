import spotify_logo from "../assets/images/logo.svg";
import IconText from "../components/shared/IconText";
import { Icon } from "@iconify/react";
import TextWithHover from "../components/shared/TextWithHover";

const focusCardsData = [
    {
        title: "Peaceful Piano",
        description: "Relax and indulge with beautiful piano pieces",
        imgUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80",
    },
    {
        title: "Deep Focus",
        description: "Keep calm and focus with this music",
        imgUrl: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80",
    },
    {
        title: "Instrumental Study",
        description: "Focus with soft study music in the background.",
        imgUrl: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
        title: "Focus Flow",
        description: "Up tempo instrumental hip hop beats",
        imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        title: "Beats to think to",
        description: "Focus with deep techno and tech house",
        imgUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
];

const spotifyPlaylistsCardData = [
    {
        title: "This is one",
        description: "Relax and indulge with beautiful piano pieces",
        imgUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80",
    },
    {
        title: "Deep Focus",
        description: "Keep calm and focus with this music",
        imgUrl: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80",
    },
    {
        title: "Instrumental Study",
        description: "Focus with soft study music in the background.",
        imgUrl: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
        title: "Focus Flow",
        description: "Up tempo instrumental hip hop beats",
        imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        title: "Beats to think to",
        description: "Focus with deep techno and tech house",
        imgUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
];



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

            <div className="right h-full w-4/5 bg-app-black overflow-auto">
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
                <div className="content p-8 pt-0 overflow-auto">
                    <PlaylistView titleText="Focus" cardsData={focusCardsData} />
                    <PlaylistView titleText="Spotify Playlists" cardsData={spotifyPlaylistsCardData} />
                    <PlaylistView titleText="Sound of India" cardsData={focusCardsData} />
                </div>


            </div>
        </div>
        </>
    );
};

const PlaylistView=({titleText,cardsData})=>{
    return(
        <div className="text-white mt-4">
            <div className="text-2xl font-semibold mb-4">{titleText}</div>
            <div className="w-full flex justify-between space-x-4 ">

                {
                    //carddata will be an array
                    cardsData.map((item)=>{
                        return (
                        <Card 
                        title={item.title} 
                        description={item.description} 
                        imgUrl={item.imgUrl} 
                        />
                        );

                    })
                }




                {/* <Card title={"Peaceful Piano"} description={"Relax and indulge with beautiful piano pieces"} imgUrl={"https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1783&q=80"}  />
                <Card title={"Peaceful Piano"} description={"Relax and indulge with beautiful piano pieces"} imgUrl={"https://plus.unsplash.com/premium_photo-1673188701851-a574daea4921?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"}/>
                <Card title={"Peaceful Piano"} description={"Relax and indulge with beautiful piano pieces abh likho bht saara description aur dekho ki image ka size pe kuch effect aa rha hai ki nhi bhaaiiii??"} imgUrl={"https://plus.unsplash.com/premium_photo-1673188701851-a574daea4921?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"}/>
                <Card title={"Peaceful Piano"} description={"Relax and indulge with beautiful piano pieces"} imgUrl={"https://plus.unsplash.com/premium_photo-1673188701851-a574daea4921?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"}/>
                <Card title={"Peaceful Piano"} description={"Relax and indulge with beautiful piano pieces"} imgUrl={"https://plus.unsplash.com/premium_photo-1673188701851-a574daea4921?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"}/>
                 */}
            </div>
        </div>
    );
};

const Card =({title,description,imgUrl}) =>{
    return(
        <div className="bg-black bg-opacity-40 w-1/5 px-3 pt-2 pb-4 rounded-lg cursor-pointer">
            <div className="pt-2 pb-3">
                <img src={imgUrl} className="rounded-md w-full" alt="label" />
            </div>
            <div className="text-white font-semibold py-3">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
            
        </div>
    );
};

export default HomeComponent;