export default function SidebarMyBooks() {
    return (
    <aside className="w-72 bg-black text-white p-4 flex flex-col gap-4 h-screen overflow-y-auto">
      <h2 className="text-center text-white font-bold text-lg bg-neutral-900 hover:bg-gray-600 py-2 rounded">MEUS LIVROS</h2>

      <div>
        <h3 className="font-semibold mb-2">Fantasia</h3>
        <div className="flex gap-2 justify-start mb-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-16 h-24 bg-gray-300 rounded"></div>
          ))}
        </div>
        <hr className="border-gray-600" />
      </div>

      {/* Categoria: Ficção Científica */}
      <div>
        <h3 className="font-semibold mb-2">Ficção Científica</h3>
        <div className="flex gap-2 justify-start mb-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-16 h-24 bg-gray-300 rounded"></div>
          ))}
        </div>
        <hr className="border-gray-600" />
      </div>

      {/* Categoria: Terror */}
      <div>
        <h3 className="font-semibold mb-2">Terror</h3>
        <div className="flex gap-2 justify-start mb-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-16 h-24 bg-gray-300 rounded"></div>
          ))}
        </div>
        <hr className="border-gray-600" />
      </div>

      {/* Botões de ação */}
      <div className="mt-auto flex flex-col gap-2">
        <button className="bg-neutral-900 hover:bg-gray-600 text-white py-2 rounded">
          Escrever novo livro
        </button>
        <button className="bg-neutral-900 hover:bg-gray-600 text-white py-2 rounded">
          Editar livro
        </button>
        <button className="bg-neutral-900 hover:bg-gray-600 text-white py-2 rounded">
          Seu Diário
        </button>
      </div>
    </aside>
  );
}