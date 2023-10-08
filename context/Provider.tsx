'use client'

import { ProductProvider } from "@/context/ContextProvider"

export default function Provider({children}:{
    children: React.ReactNode
}){
    return (
        <ProductProvider>
            { children }
        </ProductProvider>
    )
}