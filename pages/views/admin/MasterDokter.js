import { requireAuthentication } from "../../../utils/useAuth";
import React from "react";
import Layout from "../../components/Layout";
import Link from "next/link";
import styles from "../../../styles/MasterDokter.module.scss";
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
import Table from "../../components/table/Table";

export default function MasterDokter(props) {
  return (
    <Layout>
      <div className="container">
        <div className="Header">
          <h1>Halo Dokter</h1>
        </div>
        <div className="Table">
          <Table />
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
