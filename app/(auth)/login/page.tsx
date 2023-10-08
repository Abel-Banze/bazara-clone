import Link from "next/link"


export default function Login(){

    return (
        <>
            <div className="flex flex-row gap-10 text-sm items-center justify-center">
                <Link href="/login" className="px-10 p-2 text-white rounded-lg bg-red-500 text-center border border-red-500 ">
                    Login
                </Link>

                <Link href="/register" className="px-10 p-2 rounded-lg border border-red-500 text-center text-red-600 hover:bg-red-500 hover:text-white transition ease-in-out duration-300">
                    Registrar
                </Link>
            </div>

            <form className="w-full lg:w-8/12 mt-10 rounded-xl shadow-md self-center p-5 border border-gray-100 flex flex-col items-center justify-center" action="">
                <h2 className="text-gray-600 ">Bem-vindo novamente!</h2>

                <div className="w-full flex flex-col items-center justify-center gap-5 mt-10">
                    <input type="text" className="focus:outline-none focus:border focus:border-red-300 p-2 px-5 w-full lg:w-10/12 rounded-lg bg-slate-100 " placeholder="Email" />
                    <input type="password" className="focus:outline-none focus:border focus:border-red-300 p-2 px-5 w-full lg:w-10/12 rounded-lg bg-slate-100 " placeholder="Senha" />

                    <button className="bg-red-500 text-white px-10 rounded-lg p-2">
                        Login
                    </button>
                </div>
            </form>
        </>
    )
}