import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Cursor icon"å />
            <div className={styles.aboutItemText}>
              <h3>Data Science</h3>
              <p>
                I'm primarily interested in data science and have a number of data science/ML projects under my belt.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>NLP Engineer</h3>
              <p>
                I've worked on multiple NLP projects and am currently working on a Health Information Chatbot under Professor Anirban Sen.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-stack Developer</h3>
              <p>
                I'm a budding full-stack developer and have done a few projects in the MERN stack.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};