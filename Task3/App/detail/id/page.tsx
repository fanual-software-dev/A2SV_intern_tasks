"use client"
import { useGetJobByIdQuery } from '@/Api/api';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


// Function to render responsibilities with icon
const renderResponsibilities = (responsibilities: string | undefined) => {
  if (!responsibilities) {
    return null;
  }

  // Split responsibilities into separate paragraphs
  const responsibilityList = responsibilities.split('\n');

  // Map each responsibility to include the icon
  const responsibilitiesWithIcon = responsibilityList.map((responsibility, index) => (
    <div key={index} className="flex items-center gap-1">
      <Image src="/Icon.svg" alt="Responsibility Icon" width={20} height={20} />
      <p className="font-Epilogue text-indigo-950 font-light">{responsibility}</p>
    </div>
  ));

  return (
    <div className="responsibilities">
      {responsibilitiesWithIcon}
    </div>
  );
};

export default function JobDetail({params}: {params: {id: string}}) {
  const router = useRouter();
  const { id } = params; // Extract id from router query

  const { data: job, isLoading, isError } = useGetJobByIdQuery(id);

  if (isLoading) return <p className=" ml-36 font-Poppins text-2xl text-beauty-900 font-black">Loading... Please Wait Gangs!</p>; // 1
  if (isError) return <p>Error</p>; // 2
  if (!id) return <p>No job ID provided.</p>; // 3

  return (
    <div>
      <div className="flex m-5 justify-between p-6 rounded-tl-3xl  rounded-bl-3xl rounded-br-3xl rounded-tr-3xl  border border-solid shadow-lg">
        <div className="flex ">
          <div className="flex-shrink-0 pr-3 ">
          <Image
              src={job?.logoUrl || ""}
              alt={'Image Not Found'}
              className="pl-5"
              width={80}
              height={80}
            />
          </div>
          <div>
            <h1 className="text-3xl text-beauty-900 font-black font-Poppins pb-3">
              {job?.title}
            </h1>
            <p className="text-fanual-400">
            {job?.orgName} . {job?.location} . {job?.opType}
            </p>
          </div>
        </div>

        <div className="flex gap-5 p-3">
        <Image
              src="/share.svg"
              alt="Image Not Found"
              width={20}
              height={20}
            />
             <Image
              src="/line.png"
              alt="Image Not Found"
              width={2}
              height={10}
            />
          <button className='w-28 h-10 mt- text-white text-base font-Poppins font-medium rounded-3xl bg-indigo-900 '>Apply</button>
        </div>
      </div>

      <div>
        <div className="p-6">
          <h1 className="text-xl text-beauty-900 font-black font-Poppins pb-3">Description</h1>
          <ul>
            <li className="font-Epilogue text-indigo-950 font-light ">{job?.description}</li>
          </ul>
        
        </div>
        <div className="p-6 pt-2">
          <h1 className="text-xl text-beauty-900 font-black font-Poppins pb-3">Responsibilities</h1>
          {renderResponsibilities(job?.responsibilities)}
        </div>
        <div className="p-6 pb-1">
          <h1 className="text-xl text-beauty-900 font-black font-Poppins pb-3 pt-0">Ideal Candidate we want</h1>
          <li className="font-Epilogue text-indigo-950 font-light ">{job?.idealCandidate}</li>
        </div>
  
        <div className="flex flex-col p-5">
          <h1 className="text-xl text-beauty-900 font-black font-Poppins pb-3">When & Where</h1>
          <div className="flex pl-5">
            <Image src="/location.svg" alt="Image Not Found" width={30} height={30} />
            <p className="font-Epilogue text-indigo-950 font-light">{job?.whenAndWhere}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

