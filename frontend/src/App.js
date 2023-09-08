import "./output.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginComponent from "./routes/Login";
import SignupComponent from "./routes/Signup";
import HomeComponent from "./routes/Home";
import { useCookies } from "react-cookie";
import LoggedInHomeComponent from "./routes/LoggedInHome";
import UploadSong from "./routes/UploadSong";

function App() {
  const [cookie, setCookie] = useCookies(["token"]);
  console.log(cookie.token);

  return (
    <div className="w-screen h-screen ">
      <BrowserRouter>
        {cookie.token ? (
          //logged in routes
          <Routes>
            <Route path="/" element={<HelloComponent />} />

            <Route path="/home" element={<LoggedInHomeComponent/> } />

            <Route path="/uploadSong" element={ <UploadSong/> }/>

            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
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
