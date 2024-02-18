import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import UploadFileComp from "./components/Form";
// import Subscription from "./components/Subscription";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/subscription" element={<Subscription />}></Route> */}
        <Route path="/form" element={<UploadFileComp />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        {/* <Route path="/spreedsheet" element={<Spreedsheet />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
