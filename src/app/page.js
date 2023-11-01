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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const {
    reset,
    formState: { errors },
    ...methods
  } = useForm({ mode: "onTouched" });

  const [loading, setLoading] = useState(false);
  const onErrors = (err) => {};
  const onSubmit = (data) => {
    console.log(data);
    (async () => {
      try {
        setLoading(true);
        const response = await save(data);
        setLoading(false);
        if (response.status === 200) {
          notify();
          reset();
        }
      } catch (err) {
        setLoading(false);
        console.error(err);
      }
    })();
  };

  const notify = () => {
    const options = {
      autoClose: 1500,
      type: toast.TYPE.SUCCESS,
      hideProgressBar: false,
      position: toast.POSITION.BOTTOM_RIGHTs,
      pauseOnHover: true,
    };
    return toast("Salvo com sucesso", options);
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
                id="nome"
                vldt={{ required: true, minLength: 3 }}
                errors={errors?.nome}
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
                errors={errors?.telefone}
                label="Telefone"
                id="telefone"
                name="telefone"
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
                {loading ? <Spinner width={4} height={4} /> : `Cadastrar`}
              </button>
            </form>
          </FormProvider>
        </div>
      </main>
    </>
  );
}
