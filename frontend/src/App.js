import "./output.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginComponent from "./routes/Login";
import SignupComponent from "./routes/Signup";
import HomeComponent from "./routes/Home";
import { useCookies } from "react-cookie";
import LoggedInHomeComponent from "./routes/LoggedInHome";
import UploadSong from "./routes/UploadSong";
import MyMusic from "./routes/MyMusic";
import songContext from "./context/songContext";
import { useState } from "react";

function App() {
  const[currentSong,setCurrentSong]=useState(null);
  const [cookie, setCookie] = useCookies(["token"]);

  return (
    <div className="w-screen h-screen ">
      <BrowserRouter>
        {cookie.token ? (
          //logged in routes
         
            <songContext.Provider value={{currentSong,setCurrentSong}}>
               <Routes>
              <Route path="/" element={<HelloComponent />} />

              <Route path="/home" element={<LoggedInHomeComponent />} />

              <Route path="/uploadSong" element={<UploadSong />} />
              <Route path="/mymusic" element={<MyMusic />} />

              <Route path="*" element={<Navigate to="/home" />} />
              </Routes>
            </songContext.Provider>
          
        ) : (
          //logged out routes
          <Routes>
            <Route path="/home" element={<HomeComponent />} />

            <Route path="/login" element={<LoginComponent />} />

            <Route path="/signup" element={<SignupComponent />} />

            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

const HelloComponent = () => {
  return <div>Ye hai hello component</div>;
};

export default App;
