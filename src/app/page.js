"use client";
import { useState } from "react";
import Image from "next/image";
import { InputText, InputEmail, InputTelefone } from "./components/Input";
import { useForm, FormProvider } from "react-hook-form";
import Spinner from "./components/Spinner";
import { save } from "./services/user/index";

export default function Home() {
  const {
    formState: { errors },
    ...methods
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [telefone, setTelefone] = useState();
  const imageSize = { width: 228, height: 76 };
  const onErrors = (err) => {};
  const onSubmit = (data) => {
    (async () => {
      try {
        console.log(data);
        setLoading(true);
        const response = await save(data);
        methods.clearErrors();
        setLoading(false);
        if (response.status === 200) {
          methods.reset();
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
  );
}
