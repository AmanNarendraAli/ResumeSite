import React, { useState } from "react";
import styles from './Navbar.module.css';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        console.log('Toggling menu. Current state:', menuOpen);
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={menuOpen ? "/assets/nav/closeIcon.png" : "/assets/nav/menuIcon.png"}
                    alt="menuButton"
                    onClick={handleMenuToggle}
                />
                <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`} onClick={handleMenuToggle}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};
