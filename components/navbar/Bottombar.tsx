import { BsEnvelope, BsWhatsapp, BsFacebook, BsInstagram } from "react-icons/bs"

export default function Bottombar(){
    return (
        <>
            <div className="max-w-screen flex flex-col p-5 bg-slate-100 gap-10 ">
                <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-5 px-10">
                    <div className="text-gray-500">
                        <h3 className="font-bold text-gray-700 uppercase text-sm">Contactos</h3>

                        <ul className="block  mt-5 text-xs">
                            <li className="flex py-1 items-center flex-row gap-3">
                                <BsEnvelope />
                                abelbartolomeu06@gmail.com
                            </li>
                            <li className="flex py-1 items-center flex-row gap-3">
                                <BsWhatsapp />
                                +258 84 184 8185
                            </li>
                            <li className="flex py-1 items-center flex-row gap-3">
                                <BsFacebook />
                                facebook.com/abel.bartolomeu
                            </li>
                            <li className="flex py-1 items-center flex-row gap-3">
                                <BsInstagram />
                                instagram.com/abel.bartolomeu
                            </li>
                        </ul>
                    </div>

                    <div className="text-gray-500">
                        <h3 className="font-bold text-gray-700 uppercase text-sm">informações</h3>
                    </div>

                    <div className="text-gray-500">
                        <h3 className="font-bold text-gray-700 uppercase text-sm">obter a aplicação</h3>
                    </div>
                    <div className="text-gray-500">
                        <h3 className="font-bold text-gray-700 uppercase text-sm">Metódos de pagamento</h3>
                    </div>
                </div>
                <span className="w-full text-center text-xs text-gray-500">Clone do Bazara - Vodacom Moçambique. Powered by Abel Banze</span>
            </div>
        </>
    )
}