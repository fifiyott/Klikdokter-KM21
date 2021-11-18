import styles from "../../../styles/components/Navside.module.scss";

const Navside = ({children}) => {
  return (
    <div className={styles.navside}>
      <a href="/views/superadmin/SuperAdminDashboard">
        <img src="/Logo.png" alt="" />
      </a>
      <div className={styles.link}>
        <ul>
          {children}
        </ul>
      </div>
    </div>
  );
};

export default Navside;
