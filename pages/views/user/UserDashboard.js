import Head from "next/head";
import React from "react";
import LayoutUser from "../../components/LayoutUser";

export default function UserDashboard(props) {
  return (
    <LayoutUser>
      <div className="container">
        <Head>
          <title>Dashboard | Klikdokter</title>
        </Head>
        <h1>Halo User</h1>
      </div>
    </LayoutUser>
  );
}
