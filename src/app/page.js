"use client";
import { useState } from "react";
import {
  InputText,
  InputEmail,
  InputTelefone,
  InputCPF,
} from "./components/Input";
import { useForm, FormProvider } from "react-hook-form";
import Spinner from "./components/Spinner";
import { save } from "./services/user/index";
import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cleanCPF, cleanPhoneNumber } from "./utils/formatter";
import { notificationError, notificationSuccess } from "./utils/notification";

export default function Home() {
  const {
    reset,
    formState: { errors },
    ...methods
  } = useForm({ mode: "onTouched" });

  const [loading, setLoading] = useState(false);
  const onErrors = (err) => {
    console.log(err);
  };
  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      cpf: cleanCPF(data.cpf),
      phone: cleanPhoneNumber(data.phone),
    };

    (async () => {
      try {
        setLoading(true);
        const response = await save(formattedData);
        if (!localStorage.getItem("users")) {
          localStorage.setItem("users", JSON.stringify([]));
        }
        const usersLocalStorage = JSON.parse(localStorage.getItem("users"));
        localStorage.setItem(
          "users",
          JSON.stringify([...usersLocalStorage, response.data])
        );

        setLoading(false);
        if (response.status === 201) {
          notificationSuccess("Salvo com sucesso!");
          reset();
        }
      } catch (err) {
        setLoading(false);
        notificationError("Erro ao na requisição");
        console.error(err);
      }
    })();
  };

  return (
    <>
      <ToastContainer ltr autoClose={true} />
      <main className="min-h-screen">
        <NavBar />
        <div className="mt-24 flex min-h-full  md:justify-center lg:justify-center flex-col items-center sm:justify-center justify-between  sm:w-full sm:min-w-full md:w-full">
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit, onErrors)}
              className="bg-white shadow-md rounded px-20 pt-6 pb-8 mb-4"
            >
              <InputText
                label="Nome"
                id="name"
                vldt={{ required: true, minLength: 3 }}
                errors={errors?.name}
              />

              <InputEmail
                label="E-mail"
                id="email"
                errors={errors?.email}
                vldt={{
                  required: true,
                }}
              />

              <InputCPF
                control={methods.control}
                errors={errors?.cpf}
                label="CPF"
                id="cpf"
                name="cpf"
              />

              <InputTelefone
                control={methods.control}
                errors={errors?.phone}
                label="Telefone"
                name="phone"
              />

              <button
                disabled={Object.values(errors).length !== 0}
                type="submit"
                className={`rounded-full w-full h-9 ${
                  Object.values(errors).length !== 0
                    ? "bg-colorBgDisabledButton text-colorFontButtonDisabled"
                    : "bg-colorButton hover:opacity-70"
                }`}
              >
                {loading ? <Spinner width={"4"} height={"4"} /> : `Cadastrar`}
              </button>
            </form>
          </FormProvider>
        </div>
      </main>
    </>
  );
}
