"use client";

import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import NavBar from "../components/NavBar";
import { listAll } from "../services/user";

export default function ListarUsuarios(prop) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await listAll();
        if (response.status === 200) {
          setData(response.data);
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
        console.error(err);
      }
    })();
  }, [setData, setLoading]);

  return (
    <>
      <NavBar />
      <main className="flex align-middle justify-center min-h-screen md:w-full">
        <DataTable loading={loading} data={data} />
      </main>
    </>
  );
}
