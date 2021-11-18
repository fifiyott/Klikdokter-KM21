import NavsideAdmin from "./NavsideAdmin";
import styles from "../../styles/components/Layout.module.scss"
import NavbarAdmin from "./NavbarAdmin";

const LayoutAdmin = ({ children }) => {
    return (
        <div className={styles.layout}>
            <NavsideAdmin />
            <div className={styles.container}>
                <NavbarAdmin />
                {children}
            </div>
        </div>
    );
}
 
export default LayoutAdmin;