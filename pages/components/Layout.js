import Navside from "./Navside/Navside";
import SubNavside from "./Navside/SubNavSide";
import styles from "../../styles/components/Layout.module.scss";
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

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navside>
        <SubNavside
          icon={faTachometerAlt}
          href={"/views/superadmin/SuperAdminDashboard"}
          text={"Dashboard"}
        />
        <SubNavside
          icon={faWallet}
          href={"/views/superadmin/Transaksi"}
          text={"Transaksi"}
        />
        <SubNavside
          icon={faComments}
          href={"/views/superadmin/Konsultasi"}
          text={"Konsultasi"}
        />
        <SubNavside
          icon={faReceipt}
          href={"/views/superadmin/Resep"}
          text={"Resep"}
        />
        <SubNavside
          icon={faStethoscope}
          href={"/views/superadmin/MasterDokter"}
          text={"Master Dokter"}
        />
        <SubNavside
          icon={faUser}
          href={"/views/superadmin/MasterPasien"}
          text={"Master Pasien"}
        />
        <SubNavside
          icon={faUsers}
          href={"/views/superadmin/MasterUser"}
          text={"Master User"}
        />
      </Navside>
      <div className={styles.container}>
        <Navbar
          webAddress={"Dashboard"}
          email={"fatihmuhamadridho@gmail.com"}
          identifier={"Super Administrator"}
        />
        {children}
      </div>
    </div>
  );
};

export default Layout;
