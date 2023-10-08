import { Destaques, Hero, Lojas, Novidades, Promocoes, Title } from "@/components"

export default function Home(){
    return (
        <>
            <div className="w-full flex flex-col gap-10">
                <Hero />
                <Destaques />
                <Lojas />
                <Promocoes />
                <div className="w-full flex flex-col items-center justify-center gap-5 text-gray-600">
                    <Title title="Principais categorias" position="center" />

                    <div className="w-full lg:w-8/12 grid grid-cols-2 lg:grid-cols-4 rounded-xl border border-gray-200 p-5">
                        <div className="flex flex-col gap-3 items-center justify-center border-b border-gray-100 p-3">
                            <h1>alimentos</h1>
                        </div>

                        <div className="flex flex-col gap-3 items-center justify-center border-x border-gray-100 p-3">
                            <h1>Electronicos</h1>
                        </div>

                        <div className="flex flex-col gap-3 items-center justify-center border-r border-gray-100">
                            <h1>Acessorios</h1>
                        </div>

                        <div className="flex flex-col gap-3 items-center justify-center">
                            <h1>Bebidas</h1>
                        </div>

                        <div className="flex flex-col gap-3 items-center justify-center  p-3">
                            <h1>alimentos</h1>
                        </div>

                        <div className="flex flex-col gap-3 items-center justify-center border border-b-0 border-gray-100 p-3">
                            <h1>Electronicos</h1>
                        </div>

                        <div className="flex flex-col gap-3 items-center justify-center border border-b-0 border-gray-100">
                            <h1>Acessorios</h1>
                        </div>

                        <div className="flex flex-col gap-3 items-center justify-center border-t border-gray-100">
                            <h1>Bebidas</h1>
                        </div>


                    </div>
                </div>
                <Novidades />
            </div>
        </>
    )
}