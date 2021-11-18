import Navside from "./Navside";
import styles from "../../styles/components/Layout.module.scss"
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return (
        <div className={styles.layout}>
            <Navside />
            <div className={styles.container}>
                <Navbar />
                {children}
            </div>
        </div>
    );
}
 
export default Layout;