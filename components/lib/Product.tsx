'use client'

import Image from "next/image"
import { BsCartPlus, BsShuffle, BsHeart, BsEye } from "react-icons/bs"
import { ProductModal } from "@/context/ContextProvider"

export default function Product(){
    const { cart, price, setCart, setPrice } = ProductModal()

    const handleCartAction = () =>{
        setCart(cart + 1)
        setPrice(price + 150)
    }

    return (
        <>
            <div className="rounded-xl p-3 hover:border-red-300 border border-gray-100 shadow-md flex flex-col text-gray-600">
                <div className="w-full flex items-center justify-center">
                    <Image 
                        alt="product"
                        src="/assets/products/01.jpg"
                        width={150}
                        height={40}
                        className="cursor-pointer"
                    />
                </div>
                <span className="w-full text-center">Assento de segurança</span>
                <div className="w-full text-center text-red-500">
                    2 000, 00 MZN
                </div>
                <span className="text-sm w-full text-center">
                    Acessorios, Lda
                </span>
                <span className="text-xs text-gray-400 w-full text-center">
                    Entregue em aprox. 24h úteis
                </span>
                <div className="w-full flex flex-row mt-5 gap-5 justify-center text-xl">
                    <button type="button" onClick={handleCartAction} className="w-8/12 p-2 rounded-lg bg-red-500 text-white flex flex-row gap-3 items-center justify-center">
                        <BsCartPlus />
                        <span className="text-sm">Adicionar</span>
                    </button>
                </div>
            </div>
        </>
    )
}