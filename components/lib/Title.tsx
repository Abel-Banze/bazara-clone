export default function Title({
    title,
    position,
}: {
    title: string,
    position: string
}){
    return (
        <>
            <div className="w-full">
                <div className={`flex flex-row items-center gap-5 ${position === 'center' && 'justify-center'}`}>
                    <div className="w-[5vw] h-[1px] bg-gray-300"></div>
                    <h1 className="text-xl text-gray-700 font-bold"> {title} </h1>
                    {position === 'center' && (
                        <div className="w-[5vw] h-[1px] bg-gray-300"></div>
                    )}
                </div>
            </div>
        </>
    )
}