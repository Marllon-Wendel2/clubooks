import Image from "next/image";
import { Poster } from "@/app/interfaces/Poster";

export function Interacoes(post: { post: Poster }) {
  return (
    <div>
      <ul className="flex items-center space-x-2 bg-neutral-800 p-1 rounded-3xl">
        <li>
          <button className="flex items-center gap-2 text-white focus:outline-none hover:border-2 hover:border-white p-1 rounded-full">
            <p className="mt-1">{post.post.likes.toString()}</p>
            <Image
              src={"Like 1.svg"}
              width={20}
              height={20}
              alt="botao de like"
            />
          </button>
        </li>
        <li>
          <button className="flex items-center text-white focus:outline-none hover:border-2 hover:border-white p-1 rounded-full">
            <Image
              src={"Comentários 1.svg"}
              width={20}
              height={20}
              alt="botao de comentários"
            />
          </button>
        </li>
        <li>
          <button className="flex items-center text-white focus:outline-none hover:border-2 hover:border-white p-1 rounded-full">
            <Image
              src={"Bookmark.svg"}
              width={20}
              height={20}
              alt="botao de salvar"
            />
          </button>
        </li>
        <li>
          <button className="flex items-center text-white focus:outline-none hover:border-2 hover:border-white p-1 rounded-full">
            <Image
              src={"Share.svg"}
              width={20}
              height={20}
              alt="botao de compartilhar"
            />
          </button>
        </li>
        <li className="flex items-center text-white ml-4 gap-1">
          <Image src={"Icon.svg"} width={20} height={20} alt="ícone" />
          <p>16k</p>
        </li>
      </ul>
    </div>
  );
}
