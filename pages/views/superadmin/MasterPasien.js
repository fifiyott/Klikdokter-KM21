import Head from "next/head";
import { requireAuthentication } from "../../../utils/useAuth";
import React from "react";
import Layout from "../../components/Layout";
import styles from "../../../styles/MasterPasien.module.scss";
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
import AddPasien from "../../components/modal/AddPasien";
import EditPasien from "../../components/modal/EditPasien";

export default function MasterPasien(props) {
  return (
    <Layout active={blue}>
      <div className="container">
        <Head>
          <title>Master Pasien | Klikdokter</title>
        </Head>
        <h1>Halo Pasien</h1>
        <br />
        <div className={styles.headerContainer}>
          <div className={styles.searchContainer}>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <input type="text" placeholder="Search" />
          </div>

          <div className={styles.btnAdd}>
            <AddPasien />
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
                <th>...</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>sf@mdo.id</td>
                <td>
                  <EditPasien />
                </td>
              </tr>{" "}
              <tr>
                <th scope="row">2</th>
                <td>Lutfia Zahra</td>
                <td>0811111</td>
                <td>fifi@gmail.com</td>
                <td>
                  <FontAwesomeIcon icon={faPencilAlt} /> |{" "}
                  <FontAwesomeIcon icon={faTrashAlt} />
                </td>
              </tr>{" "}
              <tr>
                <th scope="row">3</th>
                <td>karen wqwq</td>
                <td>0812222</td>
                <td>karen@mail.com</td>
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

export const blue = {
  color: "blue",
};
