import Head from "next/head";
import { requireAuthentication } from "../../../utils/useAuth";
import React from "react";
import Layout from "../../components/Layout";

export default function Konsultasi(props) {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Dashboard | Klikdokter</title>
        </Head>
        <h1>Konsultasi</h1>
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
