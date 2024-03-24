'use client';
import React from "react";
import Image from 'next/image';

export default function (){
   

    return ( 
            <>
                <div className='flex justify-center'>
                    <div>
                        <div className = 'border-2 flex justify-between items-center  border-solid border-slate-200 rounded-3xl h-100 px-5 shadow-lg'>
                            
                            <div className='flex'>
                                <Image src = "/logo.svg" width ={65} height={0} alt="" />
                                <div className='pl-5'>
                                    <h1 className='font-Epilogue text-4xl text-beauty-900 font-black'>Social Media Assistant</h1>
                                    <p className='font-Epilogue text-base text-fanual-400 font-normal'>Yenigat Birhan. Addis Ababa, Ethiopia.In Person</p>
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <Image src="/share.svg" width={20} height={20} alt="Image Not Found" />
                                <Image src="/line.png" width={2} height={20} alt="Image Not Found" />
                                <button className='w-28 h-10 mt- text-white text-base font-Poppins font-medium rounded-3xl bg-indigo-900'>Apply</button>
                            </div>
                        </div>
                        <div className='mt-10 pl-5 pr-36'>
                            <div>
                                <h1 className='text-2xl font-Poppins text-beauty-900 font-black'>Description</h1>
                                <p className='mt-5 text-base font-Epilogue text-beauty-900 font-normal'>As a Social Media Assistant, you will work closely with the social
                    media manager or marketing team to execute social media strategies
                    and campaigns. You will be responsible for assisting in the
                    creation and scheduling of engaging content, monitoring social
                    media channels, and interacting with followers. Your primary goal
                    will be to enhance brand visibility, foster positive relationships
                    with the audience, and drive engagement and conversions
                                </p>
                            </div>
                            <div className='mt-10'>
                                <h1 className='text-2xl font-Poppins text-beauty-900 font-black'>Responsibilities</h1>
                                <div className='flex mt-3 gap-2'>
                                    <Image src = "/Icon.svg" width={20} height={20} alt="Image Not Found" />
                                    <p className=' text-base font-Epilogue text-beauty-900 font-normal'>Community engagement to ensure that is supported and actively represented online </p>
                                </div>
                                <div className='flex mt-3 gap-2'>
                                    <Image src = "/Icon.svg" width={20} height={20} alt="Image Not Found" />
                                    <p className=' text-base font-Epilogue text-beauty-900 font-normal'>Focus on social media content development and publication</p>
                                </div>
                                <div className='flex mt-3 gap-2'>
                                    <Image src = "/Icon.svg" width={20} height={20} alt="Image Not Found" />
                                    <p className=' text-base font-Epilogue text-beauty-900 font-normal'>Marketing and strategy support</p>
                                </div>
                                <div className='flex mt-3 gap-2'>
                                    <Image src = "/Icon.svg" width={20} height={20} alt="Image Not Found" />
                                    <p className=' text-base font-Epilogue text-beauty-900 font-normal'>Stay on top of trends on social media platforms, and suggest content ideas to the team</p>
                                </div>
                                <div className='flex mt-3 gap-2'>
                                    <Image src = "/Icon.svg" width={20} height={20} alt="Image Not Found" />
                                    <p className=' text-base font-Epilogue text-beauty-900 font-normal'>Engage with online communities</p>
                                </div>
                                <div className='flex mt-3 gap-2'>
                                    <Image src = "/Icon.svg" width={20} height={20} alt="Image Not Found" />
                                    <p className=' text-base font-Epilogue text-beauty-900 font-normal'>Community engagement to ensure that is supported and actively represented online </p>
                                </div>
                            </div>

                            <div className = 'mt-10'>
                                <h1 className='text-2xl font-Poppins text-beauty-900 font-black'>Ideal Candidate We Want</h1>
                                <div className='mt-3 px-3 text-base font-Epilogue font-normal text-beauty-900'>
                                    <li> <span className='font-black'>Young(18-24 year old) Female social media manager</span></li>
                                    <li>
                                        <span className='font-black'>Passionate & Reliable: </span>Genuine interest in our 
                                        mission and a strong desire to make a positive impact, responsible, and committed to fulfilling volunteer commitments
                                    </li>
                                    <li>  
                                        <span className="font-black " >Adaptable, Team Player & Strong Communication Skills:</span> 
                                        Able to work effectively in diverse teams; and contributes positively.Flexible
                                        and open to embracing new challenges and shifting priorities;
                                        Clear verbal and written communication, active listening, and
                                        constructive feedback.
                                       
                                    </li>
                                    <li> 
                                       <span className='font-black'> Respectful: </span>Embraces diversity, inclusive, and treats others with
                                        respect. Abides with all our rules and regulations
                                    </li>
                                </div>
                            </div>

                            <div className='mt-3'>
                                <h1 className='text-2xl font-Poppins text-beauty-900 font-black'>When and Where</h1>
                                <div className='mt-3 pl-3 flex gap-2'>
                                    <Image src="/location.svg" width={30} height={30} alt="Image Not Found"/>
                                    <p className=' text-base font-Epilogue text-beauty-900 font-normal'>
                                        The onboading event for this event will take place in Jan 18th, 2023 in AAU Auditorium
                                    </p>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
               


                
            </>
        
    )
}

