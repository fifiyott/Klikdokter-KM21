import styles from "../../styles/components/Navside.module.scss"

const NavsideAdmin = () => {
    return (
        <div className={styles.navside}>
            <a href="/AdminDashboard">
                <img src="/Logo.png" alt="" />
            </a>
            <div className={styles.link}>
                <ul>
                    <li><a href="/">Dashboard</a></li>
                    <li><a href="/views/admin/MasterDokter">Master Dokter</a></li>  
                    <li><a href="/views/admin/MasterPasien">Master Pasien</a></li>
                </ul>
            </div>
        </div>
    );
}
 
export default NavsideAdmin;