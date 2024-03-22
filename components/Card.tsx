import Image from "next/image";

const Card =  () => {

    return (
        <>
        
        <div className=" w-949 h-304 relative mt-40 rounded-sm bg-slate-300 ">
            <p className=" absolute left-0 pt-1 pl-2 text-xs text-fanual-400  ">Job List</p>
            <div className="bg-white w-919 h-266 m-4 mt-5 border-1 shadow-lg rounded-3xl px-12 relative py-8">
                <div className="pl-8">
                    <Image className=" w-16 h-14 absolute -mt-1 left-0 pl-2" src = "/logo.svg"  alt="Image Not found" width={30} height={30} />
                    <h1 className="text-indigo-950 font-Epilogue font-black text-2xl">Social Media Assistant</h1>
                    <p className = "text-fanual-400  font-Epilogue text-lg">Young Men Christians Association.Addis Ababa, Ethiopia"</p>
                    <p className=" font-Epilogue text-indigo-950 font-light mt-8">
                        As a Social Media Assistant,you will work closely with the social
                        media manager or marketing team to execute social media strategies and
                        campagins.You will be responsible for assisting in the creation and
                        scheduling of engaging content,monitoring social media channels, and
                        interacting with followers
                    </p>

                    <div className="mt-5 w-80 flex">
                        <button className="w-20 h-7 rounded-3xl border-1 border-green-300 border-solid  text-xs text-green-500">In Person</button>
                        <Image className="ml-1" src="/line.png" alt="Image Not Found" width={1} height={30} />
                        <button className="w-20 h-7 rounded-3xl ml-3 border-1 border-orange-400 bg-orange-100 text-xs text-orange-600">Education</button>
                        <button className="w-16 h-7 rounded-3xl ml-3 border-1 border-purple-950 text-purple-900 text-xs">IT</button>
                    </div>
                </div>

            </div>
        </div>
        
    </>
    )
}

export default Card