import styles from ".navbar.module.css";

function Navbar () {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div>
                    <h1 className={Navbar__brand}>Movie App</h1>
                </div>
                <div>
                    <ul className={styles.navbar__list}>
                        <li className={styles.navbar__item}>Home</li>
                        <li className={styles.navbar__item}>Popular</li>
                        <li className={styles.navbar__item}>Add Movie</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}