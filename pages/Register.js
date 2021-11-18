import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/dist/client/router";
import { userLogin } from "../redux/actions/LoginActions";

import Cookie from "js-cookie";

import Link from "next/link";
import styles from "../styles/Register.module.scss";
// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import {
  faEnvelope,
  faUser,
  faCode,
  faHighlighter,
  faUnlock,
  faUnlockAlt,
  faEye,
  faEyeSlash,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const Register = () => {
  // buat visibilty passwordnya
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const dispatch = useDispatch();
  const router = useRouter();
  const userData = useSelector((state) => state.Login);
  const { errors, loading } = userData;

  const [login, setLogin] = useState(true);
  const [error, setError] = useState("");
  const [isError, setIserror] = useState(false);

  const [isLoading, setIsloading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (Cookie.get("token")) {
      userData.user && router.push("/views/AdminDashboard");
    }
  }, [userData]);

  const userAuth = (e) => {
    e.preventDefault();

    setIsloading(true);
    dispatch(
      userLogin({
        email: email,
        password: password,
      })
    );
    setIserror(true);

    router.push("/views/AdminDashboard");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Register | Klikdokter</title>
      </Head>
      <div className={styles.cover}>
        <img className={styles.coverImg} src="/cov-klikdokter.png" />
      </div>

      <div className={styles.formLogin}>
        <div className={styles.header}>
          <h1>REGISTER</h1>
          <p>Create your own account</p>
        </div>

        <form className={styles.formContainer} onSubmit={userAuth}>
          <div className={styles.formGroup}>
            <label>Email Address</label>
            <br />
            <div className={styles.inputContainer}>
              <span className={styles.ikon}>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="text"
                placeholder="Email Adress"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label>No. HP</label>
            <br />
            <div className={styles.inputContainer}>
              <span className={styles.ikon}>
                <FontAwesomeIcon icon={faMobileAlt} />
              </span>
              <input
                type="text"
                placeholder="No. HP"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.flexName}>
            <div className={styles.formFirstNameGroup}>
              <label>First Name</label>
              <br />
              <div className={styles.inputNameContainer}>
                <input
                  type="text"
                  placeholder="First Name"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.formLastNameGroup}>
              <label>Last Name</label>
              <br />
              <div className={styles.inputNameContainer}>
                <input
                  type="text"
                  placeholder="Last Name"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>

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

          <div className={styles.btnContainer}>
            {/* <Button text="Login" className={styles.btn} /> */}
            <button className={styles.btn}>Register</button>
          </div>

          <div className={styles.footer}>
            <p>
              Already have an account?{" "}
              <a onClick={() => router.push("/Login")}>Sign in</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
