"use client";

import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import NavBar from "../components/NavBar";
import { listAll } from "../services/user";

export default function ListarUsuarios(prop) {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await listAll();
      if (response.status === 200) {
        setData(response.data);
      }
    })();
  }, [setData]);

  return (
    <>
      <NavBar />
      <main className="flex align-middle justify-center min-h-screen md:w-full">
        <DataTable data={data} />
      </main>
    </>
  );
}
