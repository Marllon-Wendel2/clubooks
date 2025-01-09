import Image from "next/image"

export function Interacoes() {
    return (
        <div
        className="flex w-[242px] h-[37px] inline-flex rounded-md shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
        role="group"
        >
            <button type="button" className="bg-neutral-800 p-2 rounded-full">
                <Image 
                    src="Like 1.svg"
                    alt="Botão de Like"
                    width={25}
                    height={25}
                    className="rounded-full"
                />
            </button>
            <button type="button" className="bg-neutral-800 p-2 rounded-full">
                <Image 
                    src="Comentários 1.svg"
                    alt="Botão de Like"
                    width={25}
                    height={25}
                    className="rounded-full"
                />
            </button>
            <button type="button" className="bg-neutral-800 p-2 rounded-full">
                <Image 
                    src="Bookmark.svg"
                    alt="Botão de Like"
                    width={25}
                    height={25}
                    className="rounded-full"
                />
            </button>
            <button type="button" className="bg-neutral-800 p-2 rounded-full">
                <Image 
                    src="Share.svg"
                    alt="Botão de Like"
                    width={25}
                    height={25}
                    className="rounded-full"
                />
            </button>
            <button
            type="button"
            className="inline-block rounded-e bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-700 focus:bg-neutral-700 focus:outline-none focus:ring-0 active:bg-neutral-900 motion-reduce:transition-none rounded-full"
            data-twe-ripple-init
            data-twe-ripple-color="light">
                <Image 
                    src="Icon.svg"
                    alt="Botão de Like"
                    width={25}
                    height={25}
                    className="rounded-full"
                />
            </button>
  </div>
    )
}