import React from "react";
import styles from "./Home.module.scss";
import Header from "./Header";
import Foto from "../assets/images/image-profile-desktop.webp";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className={styles.biografia}>
        <div className={styles.intro}>
          <h2 className={styles.primaryHeading}>Nice to meet you!</h2>
          <h2 className={styles.secondaryHeading}>
            I'm <p className={styles.underline}>Adam Keyes</p>
          </h2>
          <p className={styles.primaryPhrase}>
            Based in the UK, Im a front-end developer passionate about building
            accessible web apps that users love
          </p>
          <div className={styles.button}>
            <h3 className={styles.contactMe}>CONTACT ME</h3>
            <p className={styles.secondUnderline}></p>
          </div>
        </div>
        <div className={styles.bannerImagen}>
          <img src={Foto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
