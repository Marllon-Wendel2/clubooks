import { Interacoes } from "./Interacoes";

export default function CardPost() {
  return (
    <div className="font-oldStandard">
      <div
        className="h-[0.3px] bg-gray-200 w-[90%] mt-6 mx-auto"
        style={{ backgroundColor: "rgba(156, 163, 175, 0.5)" }}
      ></div>
      <div className="block bg-neutral-800 shadow-secondary-1 dark:bg-surface-dark m-8 mb-0 rounded-none p-4">
        <div className="px-1 py-4">
          <p className="text-gray-300 text-2xl px-8">
            &quot;Ser ou não ser, eis a questão.&quot;
            <span className="block text-right text-sm text-gray-400">
              @Exemplo
            </span>
            <span className="block text-right text-sm text-gray-400">
              - David, CEO
            </span>
          </p>
          <span className="block text-center text-gray-400 mt-4 ml-0">
            #livro #clubook #aventura
          </span>
        </div>
      </div>
      <div className="flex justify-start ml-7">
        <Interacoes />
      </div>
    </div>
  );
}
