import { Loja, Title } from "@/components";

export default function Lojas(){
    return (
        <>
            <div className="w-full p-5 flex flex-col gap-5 px-10">
                <Title title="Lojas" position="left" />
                <div className="w-full grid grid-cols-2 lg:grid-cols-6 gap-5 px-5 lg:px-10">
                    <Loja />
                </div>
            </div>
        </>
    )
}