import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed w-full z-10">
      <div className="bg-opacity-90 py-6 flex flex-col w-full bg-white ">
        <h1 className="mb-2 text-black text-sm mx-auto">
          GET SHIPPING DISCOUNT OF IDR 9.000 WITH MINIMUM PURCHASE OF IDR
          500.000
        </h1>
        <p className="border-b-2 border-black"></p>
        <div>
          <div>
            <nav className="fixed bg-white bg-opacity-95 w-full">
              <div className=" flex items-center justify-between">
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
                    <div className="mb-5 font-serif text-[8px] mx-7">
                      OCTA SPORT
                    </div>
                  </Link>
                  <div className="flex grid-cols-2 mb-5 items-center justify-between space-x-4 top-10">
                    <Link href="#">
                      <p className="text-lg font-bold text-black hover:text-blue-900 ">
                        HOME
                      </p>
                    </Link>
                    <Link href="#FOOTBAL">
                      <p className="text-lg font-bold text-black hover:text-blue-900">
                        FOOTBAL
                      </p>
                    </Link>
                    <Link href="#FUTSAL">
                      <p className="text-lg font-bold text-black hover:text-blue-900">
                        FUTSAL
                      </p>
                    </Link>
                    <Link href="#RUNNING">
                      <p className="text-lg font-bold text-black hover:text-blue-900">
                        RUNNING
                      </p>
                    </Link>
                    <Link href="#ACCESSORIES">
                      <p className="text-lg font-bold text-black hover:text-blue-900">
                        ACCESSORIES
                      </p>
                    </Link>
                  </div>
                </div>

                <div className="mr-10 flex space-x-2">
                  <Image
                    src="/img/Search.svg"
                    alt="Logo"
                    width={50}
                    height={50}
                  />

                  <Image
                    src="/img/User.svg"
                    alt="Logo"
                    width={45}
                    height={45}
                  />

                  <Image src="/img/1.svg" alt="Logo" width={50} height={50} />
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
