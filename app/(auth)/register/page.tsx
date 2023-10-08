import Link from "next/link"


export default function Register(){
    return (
        <>
            <div className="flex flex-row gap-10 text-sm items-center justify-center">
                <Link href="/login" className="px-10 p-2 rounded-lg border border-red-500 text-center text-red-600 hover:bg-red-500 hover:text-white transition ease-in-out duration-300">
                    Login
                </Link>
                <Link href="/register" className="px-10 p-2 text-white rounded-lg bg-red-500 text-center border border-red-500 ">
                    Registrar
                </Link>
            </div>
        </>
    )
}