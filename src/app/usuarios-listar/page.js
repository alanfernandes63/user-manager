"use client";
import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import NavBar from "../components/NavBar";
import { listAll } from "../services/user";
import { TableContext } from "../context";

export default function ListarUsuarios(prop) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        if (!localStorage.getItem("users")) {
          setLoading(true);
          const response = await listAll();
          if (response.status === 200) {
            localStorage.setItem("users", JSON.stringify(response.data));
            setData(response.data);
            setLoading(false);
            return;
          }
        }
        setData(JSON.parse(localStorage.getItem("users")));
      } catch (err) {
        setLoading(false);
        console.error(err);
      }
    })();
  }, [setData, setLoading]);

  return (
    <>
      <NavBar />
      <TableContext.Provider value={{ data, setData }}>
        <main className="flex align-middle justify-center min-h-screen md:w-full">
          <DataTable loading={loading} data={data} />
        </main>
      </TableContext.Provider>
    </>
  );
}
