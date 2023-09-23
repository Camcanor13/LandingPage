import React, { useState } from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  const [inputs, setInputs] = useState({});
  const handleChange = (Event) => {
    const name = Event.target.name;
    const value = Event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (Event) => {
    Event.preventDefault();
    console.log(inputs);
  };
  return (
    <div className="Footer">
      <div className={styles.info}>
        <div className={styles.contact}>
          <h1 className={styles.heading}>Contact</h1>
          <p className={styles.phrase}>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <form className={styles.formulario} onSubmit={handleSubmit}>
          <label className={styles.textInput}>
            <input
              className={styles.text}
              placeholder="NAME"
              type="text"
              name="username"
              value={inputs.username || ""}
              onChange={handleChange}
            />
          </label>
          <label className={styles.textInput}>
            <input
              className={styles.text}
              placeholder="EMAIL"
              type="text"
              name="email"
              value={inputs.email || ""}
              onChange={handleChange}
            />
          </label>
          <textarea
            className={styles.textarea}
            placeholder="MESSAGE"
            name="textarea"
            value={inputs.textarea}
            onChange={handleChange}
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button} type="submit">
            SEND MESSAGE
            <p className={styles.underline}></p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
