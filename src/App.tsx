import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tiptap from "./Tiptap";
import { TipTapCode } from "./TiptapCode";

function App() {
  return (
    <>
      {TipTapCode()}
      {Tiptap()}
    </>
  );
}

export default App;
