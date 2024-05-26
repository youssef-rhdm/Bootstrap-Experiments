import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const Udata = JSON.parse(localStorage.getItem("UserData"));
  Udata == null ? navigate("/") : null;
  const { firstName, lastName } = Udata;

  return (
    <div>
      <h2>Hi {firstName} Welcome to the Dashboard.</h2>
      your lastname : {lastName}
    </div>
  );
}
