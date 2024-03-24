import data from '../data.json'
import Link from "next/link";
import Card from "../components/card";
import Image from 'next/image';


export default  function Home() {

  return (
          <div className='flex justify-center'>
            <div>
              <div className='w-919  m-3 mb-8 relative flex justify-between'>
                <div>
                  <h1 className='text-3xl text-indigo-950 font-black'>Opportunities</h1>
                  <p>Showing 72 results</p>
                </div>

                <div className='flex justify-end items-center w-72'>
                  <p className='font-Epilogue text-indigo-950 font-medium'><span className = 'text-fanual-400  font-Epilogue text-lg'>Sort by:</span> Most relevant</p>
                  <Image className='pt-1' src="/dropdown.svg" width={30} height={30} alt="Image Not Found" />
                </div>
              </div>
              <div>
              {data.map((job,index) => (
                <Link href= {`/detail/${job.id}`} key={index}>
                  <Card id = {job.id} title={job.title} 
                  imageUrl = {job.imageUrl} subtitle = {job.subTitle} 
                  description = {job.description} relatedTopics={job.relatedTopics} 
                  responsibility = {job.responsibility}>

                  </Card>
                  <div className='h-8'></div>
                </Link>
      
              ))}

              </div>
              
            </div>
        </div>
          


    
  
  )
}
