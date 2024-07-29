import React from 'react'
import Image from 'next/image'
import Navbar from '../components/navbar'

function Page() {
  return (
    <div>
      <Navbar />
      <a href="/Footbal" className="text-blue-500 cursor-pointer">
        footbal
      </a>
      <div className="flex px-24 my-24 space-x-10">
        <Image
          src="/img/Rectangle 48.png"
          alt="icon"
          width={200}
          height={200}
          className="h-auto"
        />
        <Image
          src="/img/Nike.jfif.jpg"
          alt="icon"
          width={150}
          height={150}
          className="h-auto"
        />
        <Image
          src="/img/Rectangle 50.png"
          alt="icon"
          width={200}
          height={200}
          className="h-auto"
        />
      </div>
      <div className="py-5 text-slate-200">
        <Image
          src="/img/Rectangle 20.png"
          alt="icon"
          width={150}
          height={150}
          className="h-auto w-full opacity-30"
        />
      </div>
      <div className="-translate-y-40 flex ml-32">
        <Image
          src="/img/Map pin.svg"
          alt="icon"
          width={50}
          height={50}
          className="h-auto"
        />
        <div className="-translate-y-40 flex ml-32"></div>
        <Image
          src="/img/Phone Call.svg"
          alt="icon"
          width={55}
          height={55}
          className="h-auto"
        />
        <div className="-translate-y-40 flex ml-36"></div>
        <Image
          src="/img/Instagram.svg"
          alt="icon"
          width={60}
          height={60}
          className="h-auto"
        />
        <div className="-translate-y-40 flex ml-20"></div>
        <Image
          src="/img/Rectangle 39.svg"
          alt="icon"
          width={100}
          height={100}
          className="h-auto"
        />
        <div className="-translate-y-40 flex ml-20"></div>
        <Image
          src="/img/Rectangle 37.svg"
          alt="icon"
          width={100}
          height={100}
          className="h-auto"
        />
      </div>
      <div className="text-center">OFFICIAL PARTNER :</div>
      <div className="flex py-10 ml-52">
        <Image
          src="/img/Adidas.jfif 1.svg"
          alt="icon"
          width={150}
          height={150}
          className="h-auto"
        />
        <Image
          src="/img/Rectangle 22.svg"
          alt="icon"
          width={150}
          height={150}
          className="h-auto"
        />
        <Image
          src="/img/Rectangle 23.svg"
          alt="icon"
          width={150}
          height={150}
          className="h-auto"
        />
        <Image
          src="/img/Rectangle 24.svg"
          alt="icon"
          width={150}
          height={150}
          className="h-auto"
        />
        <Image
          src="/img/Rectangle 25.svg"
          alt="icon"
          width={150}
          height={150}
          className="h-auto"
        />
        <Image
          src="/img/Rectangle 26.svg"
          alt="icon"
          width={150}
          height={150}
          className="h-auto"
        />
      </div>
    </div>
  );
}

export default Page;