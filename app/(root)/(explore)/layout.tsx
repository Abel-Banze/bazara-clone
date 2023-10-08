import { SideCategories, SideFilters } from "@/components"



export default function ExploreLayout({
    children,
}:{
    children: React.ReactNode
}){
    return (
        <>
            <div className="w-full flex flex-row">
                <div className="hidden lg:flex w-2/12 sticky left-0  h-screen">
                    <SideCategories />
                </div>

                <div className="w-full lg:w-8/12 p-5">
                    { children }
                </div>

                <div className="hidden lg:flex w-2/12 sticky right-0 h-screen">
                    <SideFilters />
                </div>
            </div>
        </>
    )
}