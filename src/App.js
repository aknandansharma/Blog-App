import TopBar from "./components/topbar/TopBar";
import Home from "./components/pagess/home/Home"
import Single from "./components/pagess/single/Single";
import Write from "./components/pagess/write/Write";
import Settings from "./components/pagess/settingss/Settings";
import Login from "./components/pagess/login/Login";



function App() {
  return (
    <>
      <TopBar/>
      {/* <Single/> */}
      {/* <Write/> */}
      {/* <Settings/> */}
      <Login/>
    </>
  );
}

export default App;
