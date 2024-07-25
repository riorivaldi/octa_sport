import React from 'react'
import Navbar from './components/navbar'
import Image from 'next/image'


export default function page() {
  return (
    <div>
      <Navbar />
      <div className=" items-center min-h-screen w-full ">
        <div className="grid grid-cols-2">
          <div className="">
            <Image
              src="/img/Rectangle 1.png"
              alt="icon"
              width={700}
              height={400}
              className="h-auto"
            />
          </div>
          <div className="">
            <Image
              src="/img/Rectangle 2.png"
              alt="icon"
              width={700}
              height={400}
              className="h-auto"
            />
          </div>
        </div>
        <div className="flex">
          <div className="">
            <Image
              src="/img/Rectangle 35.png"
              alt="icon"
              width={610}
              height={570}
              className="h-auto"
            />
          </div>
          <div className=" ">
            <Image
              src="/img/Rectangle 6 (1).png"
              alt="icon"
              width={660}
              height={540}
              className="h-auto"
            />
          </div>
        </div>
        <div className="flex w-full">
          <div className="  ">
            <Image
              src="/img/RUNNING.png"
              alt="icon"
              width={600}
              height={400}
              className="h-auto"
            />
          </div>
          <div className="  ">
            <Image
              src="/img/ACCESSORIES.png"
              alt="icon"
              width={500}
              height={400}
              className="h-auto"
            />
          </div>
        </div>
      </div>
      <div className="">
        <p className="font-bold text-center ">REKOMENDASI</p>
        <div className="flex flex-row ml-24">
          <Image
            src="/img/Rectangle 14.png"
            alt="icon"
            width={150}
            height={150}
            className="h-auto"
          />
          <div className="ml-44">
            <Image
              src="/img/Rectangle 15.png"
              alt="icon"
              width={150}
              height={150}
              className="h-auto"
            />
          </div>
          <div className="ml-40">
            <Image
              src="/img/Rectangle 16.png"
              alt="icon"
              width={150}
              height={150}
              className="h-auto"
            />
          </div>
          <div className="ml-44">
            <Image
              src="/img/Rectangle 17.png"
              alt="icon"
              width={130}
              height={130}
              className="h-auto"
            />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex-col ml-10">
            <h3 className=" font-black text-center ">NIKE</h3>
            <div className="mb-10 ml-1 flex-col">
              <h3>nike zoom superfly 9 football boots </h3>
              <p>RP.1.599.000.</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex-col ml-10">
              <h3 className=" font-black text-center">PUMA</h3>
              <div className="mb-10">
                <p>Puma Fulture Ultimate Cage Turf 107364 01 </p>
                <p>RP.2.199.000</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex-col ml-10">
              <h3 className=" font-black text-center">ORTUSEIGHT</h3>
              <div className="mb-10">
                <p>Ortuseight Running HYPERFUSE 2.1</p>
                <p>RP.550.000</p>
              </div>
            </div>
          </div>
          <div className='flex flex-row'>
            <div className="flex-col ml-10">
              <h3 className=" font-black text-center">ORTUSEIGHT</h3>
              <div className="mb-10">
                <p>Lightning Fs Ball White Ortrange </p>
                <p>Rp.175.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="FOOTBAL" className="flex flex-col min-h-screen bg-white"></div>
    </div>
  );
}
