import Head from "next/head";
import React from "react";
import LayoutAdmin from "../../components/LayoutAdmin";

export default function UserDashboard(props) {
  return (
    <LayoutAdmin>
      <div className="container">
        <Head>
          <title>Dashboard | Klikdokter</title>
        </Head>
        <h1>Halo Admin</h1>
      </div>
    </LayoutAdmin>
  )
}