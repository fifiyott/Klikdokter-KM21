import { requireAuthentication } from "../../../utils/useAuth";
import React from "react";
import LayoutAdmin from "../../components/LayoutAdmin";
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

export default function MasterDokter(props) {
  return (
    <LayoutAdmin>
      <div className="container">
        <div className="Header">
          <h1>Halo Dokter</h1>
        </div>
        <div className="Table">
        </div>
      </div>
    </LayoutAdmin>
  );
}