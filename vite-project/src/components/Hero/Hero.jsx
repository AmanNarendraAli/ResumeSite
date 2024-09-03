import React from "react";
import styles from './Hero.module.css';
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Aman</h1>
                <p className={styles.description}>I'm an ML and full-stack developer. I graduated from Ashoka University in 2024 with a Magna Cum Laude in Computer Science. Reach out to learn more!</p>
                <a className={styles.contactBtn} href="mailto:myemail@email.com">Contact Me</a>
            </div>
            <img src={getImageUrl("hero/gradphoto.jpeg")} alt="me" className={styles.heroImg}/>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    )
}