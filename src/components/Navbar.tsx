"use client";
import {  logout } from "@/app/service/clubooks-api";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {


  return (
    <div className="bg-neutral-900 w-full h-12 flex items-center justify-between px-4 color">
      <Link href='/'>
          <h2 className="text-white ml-5 font-playwrite text-lg cursor-pointer">Clubooks</h2>
      </Link>

      <div className="flex justify-between m-1 p-1 space-x-4">
        <Image
          src="/notificacoes.svg"
          width={30}
          height={30}
          alt="Notificações"
        />
        <Image
          src="/perfil1eu.jpg"
          width={30}
          height={30}
          alt="Icone"
          className="rounded-full mt-2 mb-2 transition duration-300 cursor-pointer"
        />
        <Image
          src={"/logout.svg"}
          width={30}
          height={30}
          alt="Sair"
          className=" mt-2 mb-2 transition duration-300 cursor-pointer"
          onClick={() => logout()}
        />
      </div>
    </div>
  );
}
