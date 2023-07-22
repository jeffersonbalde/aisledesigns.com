import styles from '../mobileNav/style.module.scss';

export default function index() {
    const navItems = [
        {
          title: "Home",
          href: "/",
        },
        {
          title: "Work",
          href: "/work",
        },
        {
          title: "About",
          href: "/about",
        },
        {
          title: "Contact",
          href: "/contact",
        },
    ]

    return (
        <div className={styles.menu}>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div className={styles.header}>
                        <p>Navigation</p>
                        {navItems.map( (item, index) => {
                            return  
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}