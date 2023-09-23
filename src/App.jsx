import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./styles/App.module.scss";
import Home from "./components/Home.jsx";
import Technologies from "./components/Technologies";
// import ProjectItem from "./components/ProjectItem";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";
// import Header from "./components/Header";
import { css } from "@emotion/react";
import { style } from "@mui/system";
import FooterIcons from "./components/FooterIcons";
// import "./styles/index.css";

//<ProjectItem /> <ProjectList />

function App() {
  return (
    <>
      <div className={styles.App}>
        <Home />
        <Technologies />
        <ProjectList />
      </div>
      <div className={styles.Footer}>
        <Footer />
        <FooterIcons />
      </div>
    </>
  );
}

export default App;
