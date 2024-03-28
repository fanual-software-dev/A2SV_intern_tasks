import React from "react";
import Image from "next/image";


type CardProps = {
    id: string;
    title: string;
    description: string;
    responsibilities: string;
    requirements: string;
    idealCandidate: string;
    categories: string[];
    opType: string;
    startDate: string;
    endDate: string;
    deadline: string;
    location: string[];
    requiredSkills: string[];
    whenAndWhere: string;
    orgID: string;
    datePosted: string;
    status: string;
    applicantsCount: number;
    viewsCount: number;
    orgName: string;
    logoUrl: string;
    isBookmarked: boolean;
    isRolling: boolean;
    questions: any;
    perksAndBenefits: any;
    createdAt: string;
    updatedAt: string;
    orgPrimaryPhone: string;
    orgEmail: string;

    
}
export default function Card ({
    id,
    title,
    description,
    responsibilities,
    requirements,
    idealCandidate,
    categories,
    opType,
    startDate,
    endDate,
    deadline,
    location,
    requiredSkills,
    whenAndWhere,
    orgID,
    datePosted,
    status,
    applicantsCount,
    viewsCount,
    orgName,
    logoUrl,
    isBookmarked,
    isRolling,
    questions,
    perksAndBenefits,
    createdAt,
    updatedAt,
    orgPrimaryPhone,
    orgEmail,
}:CardProps){

    return ( 
        <>
            <div>
                <div className="bg-white w-919 h-72 m-2 border-1 shadow-lg rounded-3xl px-12 relative py-8">
                    <div className="pl-8">
                        <img className=" w-16 h-14 absolute -mt-1 left-0 pl-2" src = {logoUrl}  alt="Image Not found" />
                        <h1 className="text-indigo-950 font-Epilogue font-black text-2xl">{title}</h1>
                        <p className = "text-fanual-400  font-Epilogue text-lg">{orgName}</p>
                        <div className="mt-4 flex flex-col items-stretch justify-between h-40">
                            <p className=" font-Epilogue text-indigo-950 font-light">
                                {description}
                            </p>

                            <div className="w-80 flex">
                                <button className="w-20 h-7 rounded-3xl border-1 border-green-300 border-solid  text-xs text-green-500">In Person</button>
                                <Image className="ml-1" src="/line.png" alt="Image Not Found" width={1} height={30} />
                                <button className="w-20 h-7 rounded-3xl ml-3 border-1 border-orange-400 bg-orange-100 text-xs text-orange-600">Education</button>
                                <button className="w-16 h-7 rounded-3xl ml-3 border-1 border-purple-950 text-purple-900 text-xs">IT</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        </>
        
    )}

