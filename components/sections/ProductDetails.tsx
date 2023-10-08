'use client'
import { ProductModal } from "@/context/ContextProvider"

export default function ProductDetails(){
    const { isOpen, setOpen } = ProductModal()

    return (
        <>
            <div className="w-screen h-screen fixed left-0 top-0 bg-black bg-opacity-40 firefox:bg-opacity-70 backdrop-blur backdrop-filter z-[999]">
                <div className="w-full h-full  flex p-5 items-center justify-center transition ease-in-out duration-400">
                    <div className="w-full relative lg:w-8/12 p-5 rounded-xl bg-white">
                        <span onClick={()=> setOpen(!isOpen)} className="py-1 px-2 cursor-pointer absolute top-[-10px] right-5 text-sm rounded-full bg-red-500 text-white">x</span>
                    </div>
                </div>
            </div>
        </>
    )
}