import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-neutral-900 w-full h-10 flex items-center justify-between px-4 color">
      <h2 className="text-white ml-5 font-playwrite text-lg">Clubooks</h2>

      <div className="flex justify-between">
        <Image
          src="notificacoes.svg"
          width={30}
          height={30}
          alt="Notificações"
        />
        <Image src="Icon.svg" width={30} height={30} alt="Icone" />
      </div>
    </div>
  );
}
