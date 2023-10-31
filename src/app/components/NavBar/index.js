import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex mb-24 items-center justify-between flex-wrap bg-teal-500 p-6 my-0">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow sm:w-auto">
          <Link
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            href="/"
          >
            Cadastrar Usuários
          </Link>

          <Link
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            href="/usuarios-listar"
          >
            Listar Usuários
          </Link>
        </div>
      </div>
    </nav>
  );
}
