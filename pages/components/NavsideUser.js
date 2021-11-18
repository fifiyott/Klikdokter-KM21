import styles from "../../styles/components/Navside.module.scss"

const NavsideUser = () => {
    return (
        <div className={styles.navside}>
            <a href="/views/user/UserDashboard">
                <img src="/Logo.png" alt="" />
            </a>
            <div className={styles.link}>
                <ul>
                    <li><a href="/">Dashboard</a></li>
                </ul>
            </div>
        </div>
    );
}
 
export default NavsideUser;