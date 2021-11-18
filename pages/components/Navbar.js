import styles from "../../styles/components/Navbar.module.scss";
import { useDispatch } from "react-redux";
import { useRouter } from "next/dist/client/router";
import { userLogout } from "../../redux/actions/LoginActions";
import Cookies from "js-cookie";
// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const logout = () => {
    // e.preventDefault;
    dispatch(userLogout());
    router.push("/");
    Cookies.remove("token");
    window.location.reload();
  };

  return (
    <div className={styles.navbar}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__listLabel}>
          <h4>Dashboard</h4>
        </li>
        <li className={styles.nav__listitem}>
          <div className={styles.user}>
            <div className={styles.user_profile}>
              <img
                src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars.png"
                alt=""
              />
              <div className={styles.user_profileName}>
                <p style={{ color: "#2C81C2" }}>fatihmuhamadridho@gmail.com</p>
                <p style={{ fontSize: "12px" }}>Super Administrator</p>
              </div>
            </div>
            <a type="button">
              <FontAwesomeIcon icon={faChevronDown} />
            </a>
          </div>
          <ul className={styles.nav__listitemdrop}>
            <li>
              <a type="button" onClick={logout}>
                Logout
              </a>
            </li>
          </ul>
        </li>
        {/* <li className={styles.nav__listitem}>
          Work
          <ul className={styles.nav__listitemdrop}>
            <li>Portfolio</li>
            <li>Showcase</li>
          </ul>
        </li> */}
        {/* <li className={styles.nav__listitem}>Contact</li> */}
      </ul>
    </div>
  );
};

export default Navbar;

{
  /* <div className={styles.user}>
  <img
    src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars.png"
    alt=""
  />
  <div>
    <p>fatihmuhamadridho@gmail.com</p>
    <p>superadmin</p>
  </div>
  <div className={styles.dropMenu}>
    <ul>
      <li>
        <a type="button">
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
        <ul>
          <li>
            <a type="button" onClick={logout}>
              Logout
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>; */
}
