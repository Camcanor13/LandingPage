import React from "react";
import styles from "./Technologies.module.scss";

const Technologies = () => {
  const TechnologieData = [
    {
      title: "HTML",
      text: "4 Years Experience",
    },
    {
      title: "CSS",
      text: "4 Years Experience",
    },
    {
      title: "Javascript",
      text: "4 Years Experience",
    },
    {
      title: "Accessibility",
      text: "4 Years Experience",
    },
    {
      title: "React",
      text: "4 Years Experience",
    },
    {
      title: "Sass",
      text: "4 Years Experience",
    },
  ];
  return (
    <div className={styles.techWrapper}>
      <div className={styles.line}></div>
      <div className={styles.gridContainer}>
        {TechnologieData.map((data) => (
          <div className={styles.info} key={data.title}>
            <h2 className={styles.title}>{data.title}</h2>
            <p className={styles.phrase}>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
