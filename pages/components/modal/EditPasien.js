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
import styles from "../../../styles/components/modal/EditPasien.module.scss";

const EditPasien = () => {
  // buat visibilty passwordnya
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const [editPasienOpen, setEditPasienOpen] = useState(false);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <Modal
          isOpen={editPasienOpen}
          ariaHideApp={false}
          className={styles.content}
          style={{
            overlay: {
              background: "rgba(000, 000, 000, 0.5)",
            },
          }}
        >
          <button
            onClick={() => setEditPasienOpen(false)}
            style={{ float: "right" }}
            className="button-ud"
          >
            <FontAwesomeIcon
              icon={faWindowClose}
              size="2x"
              style={{ color: "red" }}
            />
          </button>

          <div className={styles.header}>
            <h1>Pasien Profile</h1>
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
                {/* email, no. hp */}
                <div className={styles.form_mail_pw_Group}>
                  <div className={styles.form_mail_pw_Container}>
                    <label htmlFor="">Email</label>
                    <br />
                    <div className={styles.formEmail}>
                      <input type="text" placeholder="Email" />
                    </div>
                    {/* <br /> */}
                    <label htmlFor="">No. HP</label>
                    <br />
                    <div className={styles.formPhone}>
                      <input
                        type="number"
                        className={styles.form__field}
                        placeholder="No. HP"
                        name="phone"
                      />
                    </div>
                  </div>
                </div>
                <br />
                {/* button */}
                <div className={styles.btn}>
                  <button className="btn btn-danger">Cancel</button>
                  <button className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
        <button onClick={() => setEditPasienOpen(true)}>
          <FontAwesomeIcon icon={faPencilAlt} />
        </button>{" "}
        |{" "}
        <button>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
};

export default EditPasien;
