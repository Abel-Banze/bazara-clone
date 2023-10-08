export default function CategoriesList(){
    return (
        <>
            <div className="w-full flex flex-row overflow-x-scroll gap-5 py-2">
                <span className="p-3 rounded-lg text-xs text-white bg-red-500 cursor-pointer">Tudo</span>
                <span className="p-3 rounded-lg bg-slate-100 text-xs hover:text-white hover:bg-red-500 cursor-pointer">Acessorios</span>
            </div>
        </>
    )
}