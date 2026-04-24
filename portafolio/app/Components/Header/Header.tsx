import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

let HeaderData:String = 'Armando Hernandez Gonzalez'

export default function Header(){
    return (
        <><header className={styles.header} id="header">
        <nav className={'container ${styles.nav}'}>
            <Link href="#home" className={styles.nav__logo}>
                <span className={styles.logo__bracket}>&lt;</span>{HeaderData}<span className={styles.logo__bracket}>/&gt;</span>
            </Link>
            
            <input type="checkbox" id="nav-toggle" className={styles.nav__checkbox}/>
            <label htmlFor="nav-toggle" className={styles.nav__toggle}>
                <i className="fas fa-bars"></i>
            </label>
            
            <div className={styles.nav__menu} id="nav-menu">
                <label htmlFor="nav-toggle" className={styles.nav__close}>
                    <i className="fas fa-times"></i>
                </label>
                
                <ul className={styles.nav__list}>
                    <li className={styles.nav__item}>
                        
                            <Link href="#home" className={styles.nav__link}>Inicio</Link>
                        
                    </li>
                    <li className={styles.nav__item}>
                        
                            <Link href="#interests" className={styles.nav__link}>Intereses</Link>
                        
                    </li>
                    <li className={styles.nav__item}>
                        
                            <Link href="#cv" className={styles.nav__link}>CV</Link>
                        
                    </li>
                    <li className={styles.nav__item}>
                        
                            <Link href="#projects" className={styles.nav__link}>Proyectos</Link>
                     
                    </li>
                    <li className={styles.nav__item}>
                        
                            <Link href="#contact" className={styles.nav__link}>Contacto</Link>
                       
                    </li>
                </ul>
            </div>
        </nav>
    </header></>
    )
}
