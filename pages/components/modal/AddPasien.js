import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPen,
  faWindowClose,
  faInfoCircle,
  faEye,
  faEyeSlash,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../../styles/components/modal/AddPasien.module.scss";
import { addUsers } from "../../../redux/actions/UsersActions";

const AddPasien = () => {
  // buat visibilty passwordnya
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const [addUserOpen, setAddUserOpen] = useState(false);
  const dispatch = useDispatch();
  const allUsersData = useSelector((state) => state.Users);

  // ADD USER
  const [userInput, setUserInput] = useState({
    email: "",
    username: "",
    password: "",
    name: { firstname: "", lastname: "" },
    address: { city: "", street: "", number: "", zipcode: "" },
    phone: "",
  });

  // HANDLE CHANGE
  const handleChange = (e) => {
    let data = { ...userInput };
    data[e.target.name] = e.target.value;
    setUserInput(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      (userInput.email === "",
      userInput.username === "",
      userInput.password === "",
      userInput.name.firstname === "",
      userInput.name.lastname === "",
      userInput.address.city === "",
      userInput.address.street === "",
      userInput.address.number === "",
      userInput.address.zipcode === "",
      userInput.phone === "")
    ) {
      return false;
    }

    dispatch(
      addUsers({
        email: userInput.email,
        username: userInput.username,
        password: userInput.password,
        firstname: userInput.name.firstname,
        lastname: userInput.name.lastname,
        city: userInput.address.city,
        street: userInput.address.street,
        number: userInput.address.number,
        zipcode: userInput.address.zipcode,
        phone: userInput.phone,
      })
    );

    setUserInput({
      email: "",
      username: "",
      password: "",
      name: { firstname: "", lastname: "" },
      address: { city: "", street: "", number: "", zipcode: "" },
      phone: "",
    });
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <Modal
          isOpen={addUserOpen}
          ariaHideApp={false}
          className={styles.content}
          style={{
            overlay: {
              background: "rgba(000, 000, 000, 0.5)",
            },
          }}
        >
          <button
            onClick={() => setAddUserOpen(false)}
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
            <h3>Add Pasien</h3>
          </div>
          <div className={styles.contentForm}>
            <div className={styles.avatar}>
              <img src="/userprofile.png" alt="" />
            </div>
            <div className={styles.input}>
              <form action="" className={styles.formInput}>
                {/* <div className={styles.btnInput}> */}
                {/* nama */}
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
                        onChange={handleChange}
                        value={userInput.firstname}
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
                        onChange={handleChange}
                        value={userInput.lastname}
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
                        onChange={handleChange}
                        value={userInput.phone}
                      />
                    </div>
                  </div>
                </div>
                <br />
                {/* button */}
                <div className={styles.btn}>
                  <button className="btn btn-danger">Cancel</button>
                  <button className="btn btn-primary" onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
        <button
          className="btn btn-primary"
          onClick={() => setAddUserOpen(true)}
        >
          <FontAwesomeIcon icon={faPlusCircle} /> Add Pasien
        </button>
      </div>
    </div>
  );
};

export default AddPasien;
