import { Title, CategoriesList, Product } from "@/components";

export default function Novidades(){
    return (
        <>
            <div className="w-full flex flex-col gap-5">
                <Title title="Novidades" position="left" />
                <CategoriesList />

                <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-5">
                    <Product />
                </div>
            </div>
        </>
    )
}