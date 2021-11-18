import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/dist/client/router";
import { userLogin } from "../redux/actions/LoginActions";

import Cookie from "js-cookie";

import Link from "next/link";
import styles from "../styles/Login.module.scss";
// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import {
  faUser,
  faCode,
  faHighlighter,
  faUnlock,
  faUnlockAlt,
  faEyeSlash,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const Login = () => {
  // buat visibilty passwordnya
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const dispatch = useDispatch();
  const router = useRouter();
  const userData = useSelector((state) => state.Login);
  const { errors, loading } = userData;

  const [error, setError] = useState("");
  const [isError, setIserror] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (Cookie.get("token")) {
      userData.user && router.push("/views/superadmin/SuperAdminDashboard");
    }
    setError(errors);
    setIserror(true);
  }, [userData]);

  const userAuth = async (e) => {
    e.preventDefault();

    dispatch(
      userLogin({
        email: email,
        password: password,
      })
    );

    router.push("/views/superadmin/SuperAdminDashboard");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Login | Klikdokter</title>
      </Head>
      <div className={styles.cover}>
        <img className={styles.coverImg} src="/cov-klikdokter.png" />
      </div>

      <div className={styles.formLogin}>
        <div className={styles.header}>
          <h1>LOGIN</h1>
          <p>
            Welcome back! login with your data that you entered during
            registration
          </p>
        </div>

        <form className={styles.formContainer} onSubmit={userAuth}>
          <div className={styles.formGroup}>
            <label>Username</label>
            <br />
            <div className={styles.inputContainer}>
              <span className={styles.ikon}>
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                type="text"
                placeholder="Username"
                className={styles.input}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label>Password</label>
            <br />
            <div className={styles.inputContainer}>
              <span className={styles.ikon}>
                <FontAwesomeIcon icon={faUnlockAlt} />
              </span>
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className={styles.ikonVisibility}>
                <FontAwesomeIcon
                  icon={passwordShown ? faEye : faEyeSlash}
                  onClick={togglePassword}
                />
              </span>
            </div>
          </div>
          <br />
          <br />
          {loading ?  <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
            : isError && (
              <div>
              {error &&
                error.map((item, index) => (
                  <p key={index} style={{ color: "red", margin: "0.4rem 0" }}>
                    {item.msg}
                  </p>
                ))}
              </div>
            )
          }
          <div className={styles.btnContainer}>
            {/* <Button text="Login" className={styles.btn} /> */}
            <button className={styles.btn}>Login</button>
          </div>
        </form>
        <div className={styles.footer}>
          <p>
            {/* untuk yang button LOGIN AS A GUEST itu nanti buat di CMS USER */}
            <button
              onClick={() => router.push("/views/user/UserDashboard")}
              className={styles.btnLoginGuest}
            >
              Login as Guest
            </button>{" "}
            <button
              onClick={() => router.push("/views/admin/AdminDashboard")}
              className={styles.btnLoginGuest}
            >
              Login as Admin
            </button>{" "}
            Don’t have an account?{" "}
            <a onClick={() => router.push("/Register")}>Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
