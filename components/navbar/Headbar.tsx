'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BsShuffle, BsCart, BsDoorOpen, BsSearch } from "react-icons/bs"
import { ProductModal } from "@/context/ContextProvider"

const links = [
    {path: '/', label: 'início'},
    {path: '/categorias', label: 'categorias'},
    {path: '/novidades', label: 'Novidades'},
    {path: '/recargas', label: 'recargas' },
    {path: '/promocoes', label: 'promoções'},
    {path: '/lojas', label: 'lojas'}
]

export default function Headbar(){
    const pathname = usePathname()
    const { price, cart } = ProductModal()

    return (
        <>
            <header className="max-w-screen p-2 sticky top-0 bg-white text-gray-600 border-b border-gray-200 z-[999]">
                <nav className="w-full flex flex-row justify-between items-center p-2 px-10">
                    <Image 
                        src="/logo.svg"
                        width={200}
                        height={60}
                        alt="logo"
                    />

                    <ul className="flex flex-row gap-5">
                        {links.map((link, index)=>{
                            const active = link.path === pathname;
                            return (
                                <li className={`capitalize hover:text-red-400 ${ active && 'text-red-500' }`} key={index}><Link href={link.path}>{link.label}</Link></li>
                            )
                        })}
                    </ul>

                    <div className="flex flex-row justify-end gap-5 items-center ">
                        <button className="hover:text-red-400 text-xl" title="Pesquisas">
                            <BsSearch />
                        </button>
                        <button className="hover:text-red-400 text-xl" title="Comparações">
                            <BsShuffle />
                        </button>
                        <button className={`hover:text-red-400 p-2 rounded-xl flex ${cart > 0 && 'bg-slate-100'} flex-row gap-3 items-center justify-center text-xl relative transition ease-in-out duration-400`} title="Compras">
                            { cart > 0 && (
                                <span className="absolute w-[17px] h-[17px] flex items-center justify-center rounded-full top-[-5px] right-0 text-white bg-red-500" style={{ fontSize: '0.65rem' }}> { cart } </span>
                            ) }

                            <BsCart />
                            
                            { cart > 0 && (
                               <span className="text-sm"> { price.toLocaleString() + " MZN"} </span> 
                            )}
                            
                        </button>
                        <Link className="hover:text-red-400 flex flex-row items-center justify-center gap-2" href="/login">Login <BsDoorOpen className="text-xl" /> </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}