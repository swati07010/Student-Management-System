import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Singup from "./components/Singup";
//import Usign from "./components/Usign";
import Home from "./components/Home";
import Login from "./components/Login";
import Add from "./components/Add";
import Update from "./components/Update";
import Profile from "./components/Profile";
import Privatecomponet from "./components/Privatecomponet";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route elemenet={<Privatecomponet />}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/add" element={<Add />}></Route>
            <Route path="/update/:id" element={<Update />}></Route>

            <Route path="/profile" element={<Profile />}></Route>
          </Route>

          <Route path="/login" element={<Login />}></Route>
          {/* <Route path="/singup" element={<Singup />}></Route> */}
          <Route path="/singup" element={<Singup />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
