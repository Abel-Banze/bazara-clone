import { BsUmbrella, BsTruck } from "react-icons/bs"
import { BiMapPin } from "react-icons/bi"


export default function Hero(){
    return (
        <>
            <div className="max-w-screen h-[80vh] bg-cover bg-center bg-no-repeat  flex relative" style={{ backgroundImage: 'url(assets/bg-01.jpg)' }}>
                <div className="w-full h-1/5 flex  items-center justify-center absolute bottom-10 ">
                    <div className="w-1/2 flex flex-row bg-white backdrop-blur backdrop-filter bg-opacity-80 firefox:bg-opacity-90 text-gray-600 shadow-md rounded-2xl py-3 p-5 items-center justify-between">
                        <div className="px-5 flex flex-row items-center justify-center gap-3">
                            <BsTruck className="text-3xl" />
                            Entregas ao domicílio
                        </div>
                        <div className="border border-b-0 border-t-0 px-5 flex flex-row items-center justify-center gap-3 border-gray-300 p-3">
                            <BsUmbrella className="text-3xl" />
                            Compras com garantia
                        </div>
                        <div className="px-5 flex flex-row items-center justify-center gap-3">
                            <BiMapPin className="text-3xl" />
                            Zonas de entregas
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}