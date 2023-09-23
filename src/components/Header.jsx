import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.Header}>
      <p className={styles.name}>Adam Keyes</p>
      <div className={styles.icons}>
        <BsTwitter />
        <SiLinkedin />
        <BsYoutube />
        <FaFacebookF />
      </div>
    </div>
  );
};

export default Header;
