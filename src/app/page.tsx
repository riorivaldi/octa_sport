import React from 'react'
import Navbar from './components/navbar'
import Image from 'next/image'


export default function page() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2 items-center min-h-screen w-full ">
        <div className='ml-7 mt-14'>
          <Image
            src="/img/Rectangle 1.png"
            alt="icon"
            width={600}
            height={400}
            className="h-auto"
          />
        </div>
        <div className="ml-7 mt-14">
          <Image
            src="/img/Rectangle 2.png"
            alt="icon"
            width={600}
            height={400}
            className="h-auto"
          />
        </div>
      </div>
    </div>
  );
}
