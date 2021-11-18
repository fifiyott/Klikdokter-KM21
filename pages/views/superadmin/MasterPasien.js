import { requireAuthentication } from "../../../utils/useAuth";
import React from "react";
import Layout from "../../components/Layout";
import TablePasien from "../../components/table/TablePasien";
// import AddUser from "../../components/modal/AddUser";
import AddPasien from "../../components/modal/AddPasien";
import styles from "../../../styles/MasterPasien.module.scss";
import Head from "next/head";
// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function MasterPasien() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Master Pasien | Klikdokter</title>
        </Head>
        <h1>Data Pasien</h1>
        <div className={styles.navbarContent}>
          <div className={styles.searchContainer}>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <input type="text" placeholder="Search" />
          </div>

          <AddPasien />
        </div>
        <div className="Table">
          <TablePasien />
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = requireAuthentication(() => {
  return {
    props: {
      data: [],
    },
  };
});
