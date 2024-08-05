import React from 'react'
import Image from 'next/image';

export default function page() {
  return (
    <div>
      <div className="flex flex-row ml-20">
        <div className="py-80">
          <Image
            src="/img/Rectangle 48.png"
            alt="icon"
            width={550}
            height={500}
            className="h-auto ml-28"
          />
        </div>
        <div className="flex py-40 ml-52">
          <div>
            <Image
              src="/img/Rectangle 23.svg"
              alt="icon"
              width={100}
              height={100}
              className="h-auto"
            />
            <p className="text-[40px] font-bold">
              FUTURE Z 32 FG AG CHAUSSURES DE FOOT
            </p>
            <p className="text-[15px] font-bold py-10">STOK TERSEDIA</p>
            <p className="ml-[120px] -translate-y-16 text-[#818181]">
              |1879 BARANG
            </p>
            <p className="text-[40px] -translate-y-10 font-bold">Rp 499.999</p>
            <p className="text-[26px] -translate-y-5">UKURAN EURO</p>
            <div>
              <div className="flex gap-x-1">
                <p className="text-[24px] border-2 border-black w-10">37</p>
                <p className="text-[24px] border-2 border-black w-10">38</p>
                <p className="text-[24px] border-2 border-black w-10">39</p>
                <p className="text-[24px] border-2 border-black w-10">40</p>
                <p className="text-[24px] border-2 border-black w-10">41</p>
                <p className="text-[24px] border-2 border-black w-10">42</p>
                <p className="text-[24px] border-2 border-black w-10">43</p>
              </div>
              <div className="flex gap-x-1">
                <p className="text-[24px] border-2 border-black w-10">44</p>
                <p className="text-[24px] border-2 border-black w-10">45</p>
                <p className="text-[24px] border-2 border-black w-10">46</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
