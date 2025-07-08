export default function SidebarProfile() {
  return (
    <aside className="h-screen w-48 bg-black flex flex-col justify-between items-center py-6">
      <div>
        <button className="bg-gray-700 text-white font-semibold text-sm px-4 py-2 rounded-md">
          EDIÇÃO DE PERFIL
        </button>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md w-36 text-sm hover:bg-gray-700">
          MARCAÇÕES
        </button>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md w-36 text-sm hover:bg-gray-700">
          COMUNIDADE
        </button>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md w-36 text-sm hover:bg-gray-700">
          CONFIGURAÇÕES
        </button>
      </div>
    </aside>
  );
}