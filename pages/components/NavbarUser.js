import styles from "../../styles/components/Navbar.module.scss"
import { useDispatch } from "react-redux";
import { useRouter } from "next/dist/client/router";
import { userLogout } from "../../redux/actions/LoginActions";
import Cookies from "js-cookie";

const NavbarUser = () => {
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
            <div>
                Dashboard
            </div>
            <div className={styles.user}>
                <img src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars.png" alt="" />
                <div>
                    <p>fatihmuhamadridho@gmail.com</p>
                    <p>superadmin</p>
                </div>
                <div className={styles.dropMenu}>
                    <ul>
                        <li>V
                            <ul>
                                <li><a onClick={logout}>Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default NavbarUser;