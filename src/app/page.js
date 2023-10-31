"use client";
import { useState } from "react";
import Image from "next/image";
import { InputText, InputEmail, InputTelefone } from "./components/Input";
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
  } = useForm();

  const [loading, setLoading] = useState(false);
  const imageSize = { width: 228, height: 76 };
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
      <NavBar />
      <main className="flex min-h-screen sm:p-2 md:justify-center lg:justify-center flex-col items-center sm:justify-center justify-between p-24 sm:w-full sm:min-w-full md:w-full">
        {/* <Image
          src="/logo2.png"
          alt="teste"
          width={imageSize.width}
          height={imageSize.height}
        /> */}
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
            <InputText label="CPF" id="cpf" />

            <InputTelefone
              control={methods.control}
              errors={errors?.telefone}
              label="Telefone"
            />

            <button
              type="submit"
              className="rounded-full w-full h-9 bg-colorButton"
            >
              {loading ? <Spinner /> : `Cadastrar`}
            </button>
          </form>
        </FormProvider>
      </main>
    </>
  );
}
