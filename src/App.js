import React from "react";
import "./styles.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

export default function App() {
  return (
    <>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </>
  );
}
