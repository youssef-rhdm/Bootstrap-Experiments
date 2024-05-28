import React from "react";
import GuestNavbar from "./GuestNavbar";
import UserNavbar from "./UserNavbar";

export default function Navbar() {
  const Udata = JSON.parse(localStorage.getItem("UserData"));
  const [auth, setAuth] = React.useState(null);
  React.useEffect(() => {
    setAuth(localStorage.getItem("UserData"));
    
  }, [Udata]);

  console.log(auth);
  return <>{auth === null ? <GuestNavbar /> : <UserNavbar />}</>;
}
