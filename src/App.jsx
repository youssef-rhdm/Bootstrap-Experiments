import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import SignUp from "./components/auth/Signup";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/auth/Login";
function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
