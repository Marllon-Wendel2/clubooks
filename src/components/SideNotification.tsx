export default function SideNotification() {
  return (
    <>
      <aside className="w-64 bg-black text-white p-4 space-y-6">
        <div className="bg-neutral-900 p-4 rounded-md">
          <h2 className="text-lg font-bold mb-4">Feed de Atividades</h2>
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
          <h2 className="text-lg font-bold text-center mb-4">TOP DA SEMANA</h2>
          <div className="space-y-4">
            <div className="text-center">
              <p className="mb-1">1º LIVRO ABC</p>
              <div className="w-24 h-32 bg-gray-200 mx-auto rounded-md"></div>
            </div>
            <div className="text-center">
              <p className="mb-1">1º LIVRO ABC</p>
              <div className="w-24 h-32 bg-gray-200 mx-auto rounded-md"></div>
            </div>
            <div className="text-center">
              <p className="mb-1">1º LIVRO ABC</p>
              <div className="w-24 h-32 bg-gray-200 mx-auto rounded-md"></div>
            </div>
          </div>
          <p className="text-center mt-4 text-sm font-semibold">
            VEJA O TOP 10 AQUI
          </p>
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
