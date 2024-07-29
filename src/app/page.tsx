import React from 'react'
import Navbar from './components/navbar'
import Image from 'next/image'


export default function page() {
  return (
    <div>
      <div className=" items-center min-h-screen w-full ">
        <div className="grid grid-cols-2">
          <div className="">
            <Image
              src="/img/Rectangle 1.png"
              alt="icon"
              width={710}
              height={430}
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
        <div className="grid grid-cols-2">
          <div className="">
            <Image
              src="/img/Rectangle 35.png"
              alt="icon"
              width={700}
              height={570}
              className="h-auto"
            />
          </div>
          <div className=" ">
            <Image
              src="/img/Rectangle 6 (1).png"
              alt="icon"
              width={700}
              height={570}
              className="h-auto"
            />
          </div>
        </div>
        <div className="flex w-full">
          <div className="  ">
            <Image
              src="/img/Rectangle 9 (1).png"
              alt="icon"
              width={800}
              height={500}
              className="h-auto"
            />
          </div>
          <div className="  ">
            <Image
              src="/img/Rectangle 8 (1).png"
              alt="icon"
              width={478}
              height={500}
              className="h-auto"
            />
          </div>
        </div>
      </div>
      <div className="">
        <p className="font-bold text-center text-2xl ml-10">REKOMENDASI</p>
        <div className="flex flex-row ml-24">
          <Image
            src="/img/Rectangle 14.png"
            alt="icon"
            width={200}
            height={200}
            className="h-auto"
          />
          <div className="ml-16">
            <Image
              src="/img/Rectangle 15.png"
              alt="icon"
              width={180}
              height={180}
              className="h-auto"
            />
          </div>
          <div className="ml-20">
            <Image
              src="/img/Rectangle 16.png"
              alt="icon"
              width={190}
              height={190}
              className="h-auto"
            />
          </div>
          <div className="ml-32">
            <Image
              src="/img/Rectangle 17.png"
              alt="icon"
              width={150}
              height={150}
              className="h-auto"
            />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex-col ml-20">
            <p className=" font-black text-center ">NIKE</p>
            <div className="mb-10 ml-1 flex-col">
              <p className="text-xs">nike zoom superfly 9 football boots </p>
              <div className="ml-14">
                <p className="text-xs">RP.1.599.000.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex-col ml-10">
              <h3 className=" font-black text-center">PUMA</h3>
              <div className="mb-10">
                <p className="text-xs">
                  Puma Fulture Ultimate Cage Turf 107364 01{" "}
                </p>
                <div className="ml-20">
                  <p className="text-xs">RP.2.199.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex-col ml-10">
              <p className=" font-black text-center">ORTUSEIGHT</p>
              <div className="mb-10">
                <p className="text-xs">Ortuseight Running HYPERFUSE 2.1</p>
                <div className="ml-16">
                  <p className="text-xs">RP.550.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex-col ml-32">
              <h3 className=" font-black text-center">ORTUSEIGHT</h3>
              <div className="mb-10">
                <p className="text-xs">Lightning Fs Ball White Ortrange </p>
                <div className="ml-14">
                  <p className="text-xs">Rp.175.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-3xl">
          <p className="font-bold">
            OCTA SPORT:PUSAT SEPATU BOLA,FUTSAL DAN LARI <p>ORIGINAL</p>
          </p>
          <div className="text-2xl">
            <p className="px-8">
              sudah ada banyak toko online yang menjual perlengkapan olahraga
              khususnya sepatu futsal,sepatu sepak bola hingga sepatu lari tapi
              tanpa jaminan keaslian barang dan kualitas yang tidak bisa
              diketahui
            </p>
          </div>
          <div className="text-2xl">
            <p className="px-8 py-5">
              Tersedia beragam pilihan sepatu sepak bola, sepatu futsal, bola,
              jersey, kaos kaki, tas olahraga hingga perlengkapan latihan bola
              yang bisa dibeli secara online.Mengapa OCTA SPORT adalah tempat
              yang tepat untuk membeli sepatu sepak bola, sepatu futsal, sepatu
              lari, jersey, kaos kaki, tas olahraga hingga perlengkapan
              latihan?Karena, Hanya di OCTA SPORT yang menjual beragam pilihan
              sepatu sepak bola, sepatu futsal, sepatu lari dan perlengkapan
              latihan lainnya dengan kualitas tinggi dan harga yang murah dan
              terjangkau.Koleksi lengkap, jaminan keaslian dan produk asli dan
              originals adalah yang ditawarkan oleh OCTA SPORT.Tunggu apa lagi?
              Beli sepatu sepak bola, sepatu futsal dan sepatu lari asli
              original secara online di OCTA SPORT sekarang!
            </p>
          </div>
          <div>
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
                width={65}
                height={65}
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
                width={110}
                height={110}
                className="h-auto"
              />
            </div>
            <div className="flex -translate-y-36">
              <p className="text-base -translate-y-7 ml-20">
                JL.Amir machmud <p>No.763,Cimahi</p>
              </p>
            </div>
            <div className="flex -translate-y-36">
              <p className="text-base -translate-y-16 ml-72">0877-2511-0888</p>
            </div>
            <div className="-translate-y-36">
              <p className="text-base -translate-y-24 mr-44">octasport.id</p>
            </div>
            <div className="-translate-y-36">
              <p className="text-base -translate-y-28 ml-36">Octasports</p>
            </div>
            <div className="-translate-y-36">
              <p className="text-base -translate-y-36 ml-[500px]">Octa sports</p>
            </div>
            <div>OFFICIAL PARTNER :</div>
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
      </div>
    </div>
  );
}
