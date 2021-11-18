import React, { useState } from "react";
import Modal from "react-modal";
// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import {
  faEye,
  faEyeSlash,
  faWindowClose,
  faPencilAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../../styles/components/modal/EditUser.module.scss";

const EditUser = () => {
  // buat visibilty passwordnya
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const [editUserOpen, setEditUserOpen] = useState(false);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <Modal
          isOpen={editUserOpen}
          ariaHideApp={false}
          className={styles.content}
          style={{
            overlay: {
              background: "rgba(000, 000, 000, 0.5)",
            },
          }}
        >
          <button
            onClick={() => setEditUserOpen(false)}
            style={{ float: "right", margin: "10px" }}
            className="button-ud"
          >
            <FontAwesomeIcon
              icon={faWindowClose}
              size="2x"
              style={{ color: "red" }}
            />
          </button>

          <div className={styles.header}>
            <h1>User Profile</h1>
          </div>
          <div className={styles.contentForm}>
            <div className={styles.avatar}>
              <img src="/userprofile.png" alt="" />
            </div>
            <div className={styles.input}>
              <form action="" className={styles.formInput}>
                {/* <div className={styles.btnInput}> */}
                <div className={styles.formGroup}>
                  <div className={styles.formContainer}>
                    <label htmlFor="">First Name</label>
                    <br />
                    <div className={styles.formInputContainer}>
                      <input
                        type="input"
                        className={styles.form__field}
                        placeholder="First Name"
                        name="firstname"
                      />
                    </div>
                  </div>
                  <div className={styles.formContainer}>
                    <label htmlFor="">Last Name</label>
                    <br />
                    <div className={styles.formInputContainer}>
                      <input
                        type="input"
                        className={styles.form__field}
                        placeholder="Last Name"
                        name="lastname"
                      />
                    </div>
                  </div>
                </div>
                {/* uname, no hp */}
                <div className={styles.formGroup}>
                  <div className={styles.formContainer}>
                    <label htmlFor="">Username</label>
                    <br />
                    <div className={styles.formInputContainer}>
                      <input
                        type="input"
                        className={styles.form__field}
                        placeholder="Username"
                        name="username"
                      />
                    </div>
                  </div>
                  <div className={styles.formContainer}>
                    <label htmlFor="">No. HP</label>
                    <br />
                    <div className={styles.formInputContainer}>
                      <input
                        type="number"
                        className={styles.form__field}
                        placeholder="No. HP"
                        name="phone"
                      />
                    </div>
                  </div>
                </div>
                {/* email, password */}
                <div className={styles.form_mail_pw_Group}>
                  <div className={styles.form_mail_pw_Container}>
                    <label htmlFor="">Email</label>
                    <br />
                    <div className={styles.formEmail}>
                      <input type="text" placeholder="Email" />
                    </div>
                    {/* <br /> */}

                    <label htmlFor="">Password</label>
                    <br />
                    <div className={styles.formPassword}>
                      <input
                        type={passwordShown ? "text" : "password"}
                        placeholder="Password"
                        name="password"
                      />
                      <span className={styles.ikonVisibility}>
                        <FontAwesomeIcon
                          icon={passwordShown ? faEye : faEyeSlash}
                          onClick={togglePassword}
                        />
                      </span>
                    </div>
                  </div>
                </div>
                {/* button */}
                <div className={styles.btn}>
                  <button className="btn btn-danger">Cancel</button>
                  <button className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
        <button
          className={styles.btn__edit}
          onClick={() => setEditUserOpen(true)}
        >
          <FontAwesomeIcon icon={faPencilAlt} />
        </button>{" "}
        |{" "}
        <button className={styles.btn__delete}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
};

export default EditUser;
