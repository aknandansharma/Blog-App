import TopBar from "./components/topbar/TopBar";
import Home from "./components/pagess/home/Home"
import Single from "./components/pagess/single/Single";
import Write from "./components/pagess/write/Write";
import Settings from "./components/pagess/settingss/Settings";
import Login from "./components/pagess/login/Login";
import Register from "./components/pagess/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  const user = false;
  return (
    <Router>
      <TopBar/>
      <Routes>

        <Route exact path="/" element = {<Home/>} />
        <Route path="/register" element = {user ? <Home/> : <Register/>} />
        <Route path="/login" element = {user ? <Home/> :  <Login/>} />
        <Route path="/write" element = {user ? <Write/> : <Register/>} />
        <Route path="/settings" element = {user ? <Settings/> : <Register/>} />
        <Route path="/post/:postId" element = {<Single/>} />

        
      </Routes>
    </Router>
  );
}

export default App;
