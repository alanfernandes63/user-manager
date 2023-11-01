"use client";
import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import NavBar from "../components/NavBar";
import { listAll } from "../services/user";
import { TableContext } from "../context";
import { notificationError } from "../utils/notification";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ListarUsuarios(prop) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const naoPossuiUsuarios = (users) => !users;

  useEffect(() => {
    (async () => {
      try {
        const users = localStorage.getItem("users");

        if (naoPossuiUsuarios(users)) {
          setLoading(true);
          const response = await listAll();
          if (response.status === 200) {
            localStorage.setItem("users", JSON.stringify(response.data));
            setData(response.data);
            setLoading(false);
            return;
          }
          notificationError("Erro ao consultar usuários");
          return;
        }

        setData(JSON.parse(localStorage.getItem("users")));
      } catch (err) {
        notificationError("Erro ao consultar usuários");
        setLoading(false);
        console.error(err);
      }
    })();
  }, [setData, setLoading]);

  return (
    <>
      <ToastContainer ltr autoClose={true} />
      <NavBar />
      <TableContext.Provider value={{ data, setData }}>
        <main className="flex align-middle justify-center min-h-screen md:w-full">
          <DataTable loading={loading} data={data} />
        </main>
      </TableContext.Provider>
    </>
  );
}
