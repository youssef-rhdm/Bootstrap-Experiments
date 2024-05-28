import SignUp from "./components/auth/Signup";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import Dashboard from "./components/Dashboard";
import Logout from "./components/auth/Logout";
import Profile from "./components/client/Profile";
import Navbar from "./components/Navbar";
import Edit from "./components/client/Edit";
function App() {
  return (
    <>
      <Container>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<Edit />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
