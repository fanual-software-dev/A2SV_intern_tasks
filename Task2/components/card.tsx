import React from "react";
import Image from "next/image";


interface CardProps{
    id: number;
    imageUrl: string;
    title: string;
    subtitle: string;
    description: string;
    relatedTopics: string[];
    responsibility: any;
    
}
export default function Card ({id,imageUrl,title,subtitle,description,relatedTopics}:CardProps){
    return ( 
        <>
            <div>
                <div className="bg-white w-919 h-266 m-2 border-1 shadow-lg rounded-3xl px-12 relative py-8">
                    <div className="pl-8">
                        <img className=" w-16 h-14 absolute -mt-1 left-0 pl-2" src = {imageUrl}  alt="Image Not found" />
                        <h1 className="text-indigo-950 font-Epilogue font-black text-2xl">{title}</h1>
                        <p className = "text-fanual-400  font-Epilogue text-lg">{subtitle}</p>
                        <p className=" font-Epilogue text-indigo-950 font-light mt-8">
                            {description}
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
        
    )}

