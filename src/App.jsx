import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/auth/Signup";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import UserNavbar from "./components/UserNavbar";
import GuestNavbar from "./components/GuestNavbar";
import Dashboard from "./components/Dashboard";
import { useEffect } from "react";
import  Logout  from "./components/auth/Logout";
function App() {
  const a = JSON.parse(localStorage.getItem("UserData"));
console.log(a);
return (
    <>
      <Container>
        {a? <UserNavbar/> : <GuestNavbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
