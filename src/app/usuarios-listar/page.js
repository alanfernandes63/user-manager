"use client";

import NavBar from "../components/NavBar";

export default function ListarUsuarios(prop) {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen sm:p-2 md:justify-center lg:justify-center flex-col items-center sm:justify-center justify-between p-24 sm:w-full sm:min-w-full md:w-full">
        <div>Listagem de usuarios</div>
      </main>
    </>
  );
}
