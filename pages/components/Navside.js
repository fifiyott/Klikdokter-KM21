import styles from "../../styles/components/Navside.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faWallet,
  faComments,
  faReceipt,
  faStethoscope,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const Navside = () => {
  return (
    <div className={styles.navside}>
      <a href="/views/superadmin/SuperAdminDashboard">
        <img src="/Logo.png" alt="" />
      </a>
      <div className={styles.link}>
        <ul>
          <li>
            <FontAwesomeIcon
              icon={faTachometerAlt}
              size="1x"
              style={{ color: "white" }} />
            <a href="/views/superadmin/SuperAdminDashboard">Dashboard</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faWallet}
              size="1x"
              style={{ color: "white" }} />
            <a href="/views/superadmin/Transaksi">Transaksi</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faComments}
              size="1x"
              style={{ color: "white" }} />
            <a href="/">Konsultasi</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faReceipt}
              size="1x"
              style={{ color: "white" }} />
            <a href="/">Resep</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faStethoscope}
              size="1x"
              style={{ color: "white" }} />
            <a href="/views/superadmin/MasterDokter">Master Dokter</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faUser}
              size="1x"
              style={{ color: "white" }} />
            <a href="/views/superadmin/MasterPasien">Master Pasien</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faUsers}
              size="1x"
              style={{ color: "white" }} />
            <a href="/views/superadmin/MasterUser">Master User</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navside;
