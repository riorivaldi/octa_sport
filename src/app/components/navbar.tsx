import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <div className="bg-white p-6 flex flex-col">
        <h1 className="mb-2 text-black cursor-pointer hover:underline text-xs mx-auto">
          GET SHIPPING DISCOUNT OF IDR 9.000 WITH MINIMUM PURCHASE OF IDR
          500.000
        </h1>
        <p className="border-b-2 border-black"></p>

        <div>
          <div>
            <nav className="fixed bg-white bg-opacity-30 w-full">
              <div className="grid grid-cols-2"></div>
              <div className="mx-auto flex items-center">
                <div className="flex items-center space-x-1">
                  <Link href="#home">
                    <p className="flex px-5">
                      <Image
                        src="/img/Rectangle 4 (1).svg"
                        alt="Logo"
                        width={70}
                        height={70}
                      />
                    </p>
                    <div className="mb-5 font-serif text-[8px] mx-6">
                      OCTA SPORT
                    </div>
                  </Link>
                </div>
                <div className="flex grid-cols-2 mb-5 items-center space-x-4 me-8 top-10">
                  <Link href="#">
                    <p className="flex  text-black font-bold ">HOME</p>
                  </Link>
                  <Link href="#FOOTBAL">
                    <p className="text-black font-bold">FOOTBAL</p>
                  </Link>
                  <Link href="#FUTSAL">
                    <p className="text-black font-bold">FUTSAL</p>
                  </Link>
                  <Link href="#RUNNING">
                    <p className="text-black font-bold">RUNNING</p>
                  </Link>
                  <Link href="#ACCESSORIES">
                    <p className="text-black font-bold">ACCESSORIES</p>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
