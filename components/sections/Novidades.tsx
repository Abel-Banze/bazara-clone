import { Product, Title } from "@/components";

export default function Novidades(){
    return (
        <>
            <div className="w-full p-5 flex flex-col gap-5 px-10">
                <Title title="Novidades" position="left" />
                <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-5 px-5 lg:px-10">
                    <Product />
                </div>
            </div>
        </>
    )
}