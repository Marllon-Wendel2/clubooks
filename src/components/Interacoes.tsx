import Image from "next/image";

export function Interacoes() {
  return (
    <div>
      <ul className="flex space-x-2 bg-neutral-800 p-1 rounded-3xl">
        <li>
          <button className="focus:outline-none hover:border-solid hover:border-2 hover:border-white p-1 rounded-full">
            <Image
              src={"Like 1.svg"}
              width={20}
              height={20}
              alt="botao de like"
            />
          </button>
        </li>
        <li>
          <button className="focus:outline-none hover:border-solid hover:border-2 hover:border-white p-1 rounded-full">
            <Image
              src={"Comentários 1.svg"}
              width={20}
              height={20}
              alt="botao de like"
            />
          </button>
        </li>
        <li>
          <button className="focus:outline-none hover:border-solid hover:border-2 hover:border-white p-1 rounded-full">
            <Image
              src={"Bookmark.svg"}
              width={20}
              height={20}
              alt="botao de like"
            />
          </button>
        </li>
        <li>
          <button className="focus:outline-none hover:border-solid hover:border-2 hover:border-white p-1 rounded-full">
            <Image
              src={"Share.svg"}
              width={20}
              height={20}
              alt="botao de like"
            />
          </button>
        </li>
        <li className="flex text-white space-x-1">
          <Image
            src={"Icon.svg"}
            width={20}
            height={20}
            alt="botao de like"
            className="ml-4"
          />
          <p>16k</p>
        </li>
      </ul>
    </div>
  );
}
