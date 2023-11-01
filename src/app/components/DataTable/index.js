"use client";
import { useContext } from "react";
import { phoneNumberFormatter, CPFformatter } from "@/app/utils/formatter";
import Spinner from "../Spinner";
import { TableContext } from "@/app/context";
import {
  notificationError,
  notificationSuccess,
} from "@/app/utils/notification";

export default function DataTable(props) {
  const { setData } = useContext(TableContext);

  const deleteUser = (cpf) => {
    try {
      const users = JSON.parse(localStorage.getItem("users"));
      const filteredUsers = users.filter((user) => user.cpf !== cpf);
      localStorage.removeItem("users");
      localStorage.setItem("users", JSON.stringify(filteredUsers));
      setData(filteredUsers);
      notificationSuccess("Usuário excluído com sucesso!");
    } catch (err) {
      notificationError("Erro ao tentar excluir");
    }
  };

  const spinner = () => (
    <>
      <td></td>
      <td></td>
      <td>
        <Spinner width={"8"} height={"8"} />
      </td>
    </>
  );

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">Usuários</h2>
        </div>

        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Nome
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    E-mail
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    CPF
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Telefone
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody>
                {props.loading
                  ? spinner()
                  : !props.data
                  ? []
                  : props.data.map((user) => (
                      <tr className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {user.name}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {user.email}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {CPFformatter(user.cpf)}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {phoneNumberFormatter(user.phone)}
                          </p>
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              deleteUser(user.cpf);
                            }}
                            className="hover:bg-slate-200 rounded-full w-10 h-10 align-middle flex justify-center items-center"
                          >
                            <svg
                              className="h-6 w-6 text-red-500"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                              <line x1="10" y1="11" x2="10" y2="17" />
                              <line x1="14" y1="11" x2="14" y2="17" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
