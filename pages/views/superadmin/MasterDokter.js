import { requireAuthentication } from "../../../utils/useAuth";
import React from "react";
import Layout from "../../components/Layout";
import Table from "../../components/table/Table";
import AddUser from "../../components/modal/AddUser";
import styles from "../../../styles/MasterDokter.module.scss";
import Head from "next/head";
// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function MasterDokter() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Master Dokter | Klikdokter</title>
        </Head>
        <h1>Data Dokter / Tenaga Medis</h1>
        <div className={styles.navbarContent}>
          <div className={styles.searchContainer}>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <input type="text" placeholder="Search" />
          </div>

          <AddUser />
        </div>
        <div className="Table">
          <Table />
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
