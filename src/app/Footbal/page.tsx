import React from 'react'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Link from 'next/link';

function Page() {
  return (
    <div>
      <Navbar />
      <a href="/Footbal" className="text-blue-500 cursor-pointer">
        footbal
      </a>
      <div className="flex px-32 my-24 space-x-32">
        <div>
          <Link href='/Puma'>
            <Image
              src="/img/Rectangle 48.png"
              alt="icon"
              width={200}
              height={200}
              className="h-auto"
            />
          </Link>

          <div className="-translate-y-16 ml-5">
            <p className="text-[#817D7D] ml-14">PUMA</p>
            <p>
              FUTURE Z 32 FG AG<p className="ml-5"> Chaussures de</p>{" "}
              <p className="ml-14">foot</p>
            </p>
            <p className="text-[#817D7D] ml-7">RP 499,999</p>
          </div>
        </div>
        <div>
          <Image
            src="/img/Nike.jfif.jpg"
            alt="icon"
            width={200}
            height={200}
            className="h-auto"
          />
          <div className="-translate-y-10 ml-10">
            <p className="text-[#817D7D] ml-10">NIKE</p>
            <p>Nike Blue Green </p>
            <p className="ml-2">Soccer Shoes</p>
            <p className="text-[#817D7D] ml-4">RP 1.259,00</p>
          </div>
        </div>
        <div>
          <Image
            src="/img/Rectangle 50.png"
            alt="icon"
            width={250}
            height={250}
            className="h-auto"
          />
          <div className="-translate-y-24 ml-10">
            <p className="text-[#817D7D] ml-10">ORTUSEIGHT</p>
            <p className="ml-5">Ortuseight catalys</p>{" "}
            <p className="ml-12">raiden vol 2</p>
            <p className="text-[#817D7D] ml-12">RP 340,000</p>
          </div>
        </div>
      </div>
      <div className="flex px-32 space-x-32">
        <div>
          <Image
            src="/img/Rectangle 51.png"
            alt="icon"
            width={200}
            height={200}
            className="h-auto"
          />
          <div className="-translate-y-10 ml-10">
            <p className="text-[#817D7D] ml-10">SPESC</p>
            <p>Accelerator illuzion </p>
            <p className="ml-7">3 elite white</p>
            <p className="text-[#817D7D] my-7 ml-7">RP 699,000</p>
          </div>
        </div>
        <div className="-translate-y-24">
          <Image
            src="/img/Rectangle 52.png"
            alt="icon"
            width={190}
            height={190}
            className="h-auto"
          />
          <p className="text-[#817D7D] ml-14">ADIDAS</p>
          <p className="ml-7">Adidas Predator</p>{" "}
          <p className="ml-10">soccer Cleats</p>
          <p className="ml-16"> Shoes </p>
          <p className="text-[#817D7D] ml-10">RP 1.400,000</p>
        </div>
        <div>
          <div className="ml-10">
            <Image
              src="/img/Rectangle 53.png"
              alt="icon"
              width={200}
              height={200}
              className="h-auto"
            />
          </div>
          <div>
            <p className="text-[#817D7D] ml-28">ADIDAS</p>
            <p className="ml-20">Adidas Nemeziz </p>{" "}
            <p className="ml-20">19+FG ftwr white</p>
            <p className="text-[#817D7D] my-3 ml-24">RP 2.400,000</p>
          </div>
        </div>
      </div>
      <div className="flex px-32 my-24 space-x-32">
        <div>
          <div className="my-10">
            <Image
              src="/img/Rectangle 54.png"
              alt="icon"
              width={200}
              height={200}
              className="h-auto"
            />
          </div>
          <div className="-translate-y-10">
            <p className="text-[#817D7D] ml-16">ADIDAS</p>
            <p className="ml-6">Adidas Copa 20.1</p>{" "}
            <p className="ml-7">FG Glory Hunter</p>
            <p className="ml-14">Royal blue</p>
            <p className="text-[#817D7D] ml-10">RP 1.000,000</p>
          </div>
        </div>
        <div>
          <div className="my-5">
            <Image
              src="/img/Rectangle 55.png"
              alt="icon"
              width={200}
              height={200}
              className="h-auto"
            />
          </div>
          <div className="-translate-y-16">
            <p className="text-[#817D7D] ml-16">MIZUNO</p>
            <p className="ml-10">Chuteira Campo</p>{" "}
            <p className="ml-10">Mizuno Morelia</p>{" "}
            <p className="ml-16">Club MD</p>{" "}
            <p className="text-[#817D7D] ml-14">Rp 870,000</p>
          </div>
        </div>
        <div>
          <div className="my-7">
            <Image
              src="/img/Rectangle 56.png"
              alt="icon"
              width={200}
              height={200}
              className="h-auto"
            />
          </div>
          <div className="-translate-y-20">
            <p className="text-[#817D7D] ml-16">MIZUNO</p>
            <p className="ml-10">Scarpe Mizuno</p>{" "}
            <p className="ml-6">Morelia Neo liibeta</p>
            <p className="ml-20">JP</p>
            <p className="text-[#817D7D] ml-12">Rp 650,000</p>
          </div>
        </div>
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
        <div className="-translate-y-40 flex ml-40"></div>
        <Image
          src="/img/Phone Call.svg"
          alt="icon"
          width={55}
          height={55}
          className="h-auto"
        />
        <div className="-translate-y-40 flex ml-40"></div>
        <Image
          src="/img/Instagram.svg"
          alt="icon"
          width={65}
          height={65}
          className="h-auto"
        />
        <div className="-translate-y-40 flex ml-40"></div>
        <Image
          src="/img/Rectangle 39.svg"
          alt="icon"
          width={100}
          height={100}
          className="h-auto"
        />
        <div className="-translate-y-40 flex ml-40"></div>
        <Image
          src="/img/Rectangle 37.svg"
          alt="icon"
          width={110}
          height={110}
          className="h-auto"
        />
      </div>
      <div className="flex -translate-y-36">
        <p className="text-base -translate-y-7 ml-20">
          JL.Amir machmud <p className="ml-3">No.763,Cimahi</p>
        </p>
      </div>
      <div className="flex -translate-y-36">
        <p className="text-base -translate-y-16 ml-[300px]">0877-2511-0888</p>
      </div>
      <div className="-translate-y-36">
        <p className="text-base -translate-y-24 ml-[550px]">octasport.id</p>
      </div>
      <div className="-translate-y-40">
        <p className="text-base -translate-y-28 ml-[780px]">Octasports</p>
      </div>
      <div className="-translate-y-36">
        <p className="text-base -translate-y-36 ml-[1050px]">Octa sports</p>
      </div>
      <div className="text-center -translate-y-20 text-[32px]">
        OFFICIAL PARTNER :
      </div>
      <div className="-translate-y-28">
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
    </div>
  );
}

export default Page;