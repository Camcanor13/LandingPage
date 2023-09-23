import React from "react";
import styles from "./ProjectList.module.scss";
import Portfolio from "../assets/images/thumbnail-project-1-large.webp";
import WebApp from "../assets/images/thumbnail-project-3-large.webp";
import MemoryGame from "../assets/images/thumbnail-project-5-large.webp";
import LandingPage from "../assets/images/thumbnail-project-2-large.webp";
import Entertaiment from "../assets/images/thumbnail-project-4-large.webp";
import ArtGallery from "../assets/images/thumbnail-project-6-large.webp";

const ProjectList = () => {
  const ProjectData = [
    {
      image: Portfolio,
      title: "DESING PORTFOLIO",
      text: "HTML",
      text2: "CSS",
    },
    {
      image: LandingPage,
      title: "E-LEARNING LANDING PAGE",
      text: "HTML",
      text2: "CSS",
    },
    {
      image: WebApp,
      title: "TODO WEB APP",
      text: "HTML",
      text2: "CSS",
      text3: "JAVASCRIPT",
    },
    {
      image: Entertaiment,
      title: "ENTERTAIMENT WEB APP",
      text: "HTML",
      text2: "CSS",
      text3: "JAVASCRIPT",
    },
    {
      image: MemoryGame,
      title: "MEMORY GAME",
      text: "HTML",
      text2: "CSS",
      text3: "JAVASCRIPT",
    },
    {
      image: ArtGallery,
      title: "ART GALLERRY SHOWCASE",
      text: "HTML",
      text2: "CSS",
      text3: "JAVASCRIPT",
    },
  ];
  return (
    <div className={styles.ListWrapper}>
      <h1 className={styles.project}>PROJECTS</h1>
      <div className={styles.gridList}>
        {ProjectData.map((data) => (
          <div className={styles.info} key={data.title}>
            <div className={styles.img}>
              <img src={data.image} alt="" />
            </div>
            <h2 className={styles.title}>{data.title}</h2>
            <div className={styles.gridPhrase}>
              <p className={styles.phrase}>{data.text}</p>
              <p className={styles.phrase}>{data.text2}</p>
              <p className={styles.phrase}>{data.text3}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
