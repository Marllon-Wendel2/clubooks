interface SidebarProps {
  userData: string;
}

import { logout } from "@/app/service/clubooks-api";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Sidebar({ userData }: SidebarProps) {
  const user = JSON.parse(userData);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <aside className="w-80 h-100  text-white p-8">
      <div className="flex items-center mb-6 flex-col bg-neutral-900 p-8 rounded-xl">
        <Image
          width={150}
          height={200}
          src={user.userImg || "Icon.svg"}
          alt="User Avatar"
          className="w-30 h-30 rounded-2xl mr-4 mt-6 border border-white"
        />
        <h2 className="text-lg font-semibold">{user.userName}</h2>
      </div>
      <nav className="mb-10">
        <ul>
          <li className="mb-4 bg-neutral-900 text-center h-8 rounded-sm">
            <Link
              href="/perfil"
              className="text-gray-300 hover:text-white align-middle"
            >
              PERFIL
            </Link>
          </li>
          <li className="mb-4 bg-neutral-900 text-center h-8 rounded-sm">
            <a href="/marcações" className="text-gray-300 hover:text-white">
              MARCAÇÕES
            </a>
          </li>
          <li className="mb-4 bg-neutral-900 text-center h-8 rounded-sm">
            <a href="/books" className="text-gray-300 hover:text-white">
              MEUS LIVROS
            </a>
          </li>
          <li className="mb-4 bg-neutral-900 text-center h-8 rounded-sm">
            <a href="/comunidade" className="text-gray-300 hover:text-white">
              COMUNIDADE
            </a>
          </li>
          <li className="mb-4 bg-neutral-900 text-center h-8 rounded-sm">
            <a href="/settings" className="text-gray-300 hover:text-white">
              CONFIGURAÇÕES
            </a>
          </li>
          <li className="mb-4 bg-neutral-900 text-center h-8 rounded-sm">
            <p
              onClick={logout}
              className="text-gray-300 hover:text-white cursor-pointer"
            >
              SAIR
            </p>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col text-center mb-9">
        <h3>SEUS DESTAQUES</h3>
      </div>
      <div className="flex flex-col text-center mb-9">
        <h3>SEUS LIVROS</h3>
      </div>
    </aside>
  );
}
