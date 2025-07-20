import { Books } from "@/app/interfaces/Books";
import { useEffect, useState } from "react";
import Image from "next/image";
import { clubooksApi } from "@/app/service/clubooks-api";

export default function SideNotification() {
  const [top5, setTop5] = useState<Books[]>([]);

  useEffect(() => {
    handleTop5Books();
  }, []);

  const handleTop5Books = async () => {
    const result = await clubooksApi.getTop5Books();
    if (result.status === 200) {
      setTop5(result.data);
    } else {
      console.error("Erro ao buscar os livros");
    }
  };

  return (
    <>
      <aside className="w-64 bg-black text-white p-4 space-y-6">
        <div className="bg-neutral-900 p-4 rounded-md">
          <h2 className="text-lg font-bold mb-4">
            Feed de Atividades (Em criação)
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              <span>@fulana seguiu você</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-red-600 rounded-full"></span>
              <span>@fulana comentou você</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span>@fulana compartilhou você</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span>@fulana marcou você</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-rose-900 rounded-full"></span>
              <span>@fulana ofertou seu livro</span>
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900 p-4 rounded-md">
          <div className="space-y-4">
            {top5.map((book, index) => (
              <div className="text-center" key={index}>
                <p className="mb-1">
                  {index + 1}º {book.title.toUpperCase()}
                </p>
                <div className=" bg-gray-200 mx-auto rounded-md overflow-hidden">
                  {book.image ? (
                    <Image
                      width={24}
                      height={32}
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-sm text-gray-500">
                      Sem imagem
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center space-y-4 text-sm font-light">
          <p>ADSENSES</p>
          <p>OFERTAS DE LIVROS</p>
          <p>IMPULSIONAMENTOS</p>
          <p>MARCAS</p>
        </div>
      </aside>
    </>
  );
}
