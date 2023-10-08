export default function AuthLayout({
    children,
}:{
    children: React.ReactNode
}){
    return (
        <>
            <div className="max-w-screen h-screen flex pt-10  justify-center p-5">
                <div className="w-full lg:w-7/12 flex flex-col gap-5">
                    { children }
                </div>
            </div>
        </>
    )
}