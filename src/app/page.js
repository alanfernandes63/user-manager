"use client";
import { useState } from "react";
import Image from "next/image";
import InputText from "./components/Input";
import { useForm, FormProvider } from "react-hook-form";
import Spinner from "./components/Spinner";
import { save } from "./services/user/index";

export default function Home() {
  const methods = useForm();
  const [loading, setLoading] = useState(false);
  const imageSize = { width: 228, height: 76 };

  const onSubmit = (data) => {
    (async () => {
      try {
        setLoading(true);
        const response = await save(data);
        console.log(response);
        setLoading(false);
        if (response.status === 200) {
          methods.reset({ nome: null, email: null, cpf: null, telefone: null });
        }
      } catch (err) {
        setLoading(false);
        console.error(err);
      }
    })();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src="/logo2.png"
        alt="teste"
        width={imageSize.width}
        height={imageSize.height}
      />
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <InputText label="Nome" id="nome" />
          <InputText label="E-mail" id="email" />
          <InputText label="CPF" id="cpf" />
          <InputText label="Telefone" id="telefone" />
          <button
            type="submit"
            className="rounded-full w-full h-9 bg-colorButton"
          >
            {loading ? <Spinner /> : `Cadastrar`}
          </button>
        </form>
      </FormProvider>
    </main>
  );
}
