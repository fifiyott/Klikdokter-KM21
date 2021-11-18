import { requireAuthentication } from "../../../utils/useAuth";
import React from "react";
import Layout from "../../components/Layout";
import TableTransaksi from "../../components/table/TableTransaksi";
import AddUser from "../../components/modal/AddUser";

export default function Transaksi() {
  return (
    <Layout>
      <div className="container">
        <div className="Header">
            <h1>Halo Transaksi</h1>
            <AddUser />
        </div>
        <div className="Table">
          <TableTransaksi />
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
