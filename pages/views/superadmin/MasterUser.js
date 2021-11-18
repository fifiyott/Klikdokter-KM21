import Head from "next/head";
import { requireAuthentication } from "../../../utils/useAuth";
import React from "react";
import Layout from "../../components/Layout";
import styles from "../../../styles/MasterUser.module.scss";
// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import {
  faPencilAlt,
  faSearch,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import AddUser from "../../components/modal/AddUser";
import EditUser from "../../components/modal/EditUser";

export default function MasterUser(props) {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Master User | Klikdokter</title>
        </Head>
        <div className="Header">
          <h1>Halo User</h1>
        </div>
        <br />
        <div className={styles.headerContainer}>
          <div className={styles.searchContainer}>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <input type="text" placeholder="Search" />
          </div>

          <div className={styles.btnAdd}>
            <AddUser />
          </div>
        </div>
        <br />
        <div className="Table">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Nama</th>
                <th scope="col">No. HP</th>
                <th scope="col">Email</th>
                <th scope="col">Username</th>
                <th scope="col">Password</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>sf@mdo.id</td>
                <td>fatihmuh</td>
                <td>123456</td>
                <td>
                  <EditUser />
                </td>
              </tr>{" "}
              <tr>
                <th scope="row">2</th>
                <td>Lutfia Zahra</td>
                <td>0811111</td>
                <td>fifi@gmail.com</td>
                <td>fifiyott</td>
                <td>sicantik123</td>
                <td>
                  {/* <EditUser /> */}
                  <FontAwesomeIcon icon={faPencilAlt} /> |{" "}
                  <FontAwesomeIcon icon={faTrashAlt} />
                </td>
              </tr>{" "}
              <tr>
                <th scope="row">3</th>
                <td>karen wqwq</td>
                <td>0812222</td>
                <td>karen@mail.com</td>
                <td>karenz</td>
                <td>k4r3n</td>
                <td>
                  <FontAwesomeIcon icon={faPencilAlt} /> |{" "}
                  <FontAwesomeIcon icon={faTrashAlt} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = requireAuthentication((context) => {
  return {
    props: {
      data: [],
    },
  };
});
