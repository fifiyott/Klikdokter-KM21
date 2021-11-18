import Navside from "./Navside/Navside";
import SubNavside from "./SubNavSide";
import styles from "../../styles/components/Layout.module.scss"
import Navbar from "./Navbar/Navbar";
import {
  faTachometerAlt,
  faWallet,
  faComments,
  faReceipt,
  faStethoscope,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const Layout = ({children}) => {
    return (
        <div className={styles.layout}>
            <Navside>
                <SubNavside icon={faTachometerAlt} href={"/"} text={"Dashboard"} />
            </Navside>
            <div className={styles.container}>
                <Navbar webAddress={"Dashboard"} email={"fifi@gmail.com"} identifier={"Admin Dokter"} />
                {children}
            </div>
        </div>
    );
}
 
export default Layout;