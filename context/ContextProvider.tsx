'use client'

import { useState, useContext, ReactNode, createContext } from "react";

interface ProductContextType {
    isOpen: boolean,
    setOpen: (active: boolean) => void,
    cart: number,
    setCart: (add: number) => void,
    price: number,
    setPrice: (add: number) => void,
}

const ProductContext  = createContext<ProductContextType | undefined>(undefined)

interface ProductContextProps {
    children : ReactNode
}

export function ProductProvider({children}: ProductContextProps){
    const [isOpen, setOpen] = useState(false)
    const [price, setPrice] = useState(0)
    const [cart, setCart] = useState(0)

    return (
        <ProductContext.Provider 
            value={{
                isOpen,
                setOpen,
                cart,
                setCart,
                price,
                setPrice,
            }}
        >
            { children }
        </ProductContext.Provider>
    )
}

export function ProductModal(){
    const context =  useContext(ProductContext)

    if(!context){
        throw new Error("ProductModal deve ser usada dentro da PlayerProvider")
    }

    return context;
}