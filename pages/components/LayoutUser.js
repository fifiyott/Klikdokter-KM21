import NavsideUser from "./NavsideUser";
import styles from "../../styles/components/Layout.module.scss"
import NavbarUser from "./NavbarUser";

const LayoutUser = ({ children }) => {
    return (
        <div className={styles.layout}>
            <NavsideUser />
            <div className={styles.container}>
                <NavbarUser />
                {children}
            </div>
        </div>
    );
}
 
export default LayoutUser;