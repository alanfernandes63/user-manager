"use client";
import Image from "next/image";
import InputText from "./components/Input";
import { useForm, FormProvider } from "react-hook-form";
export default function Home() {
  const methods = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src="/logo2.png" alt="teste" width={228} height={76} />
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
            className="rounded-full w-full h-9 bg-buttonColor"
          >
            Cadastrar
          </button>
        </form>
      </FormProvider>
    </main>
  );
}
