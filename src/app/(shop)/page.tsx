import Slideshow from "@/components/ui/slideshow/Slideshow";
import { Middle } from "@/components/static-components/Middle";
import Image from "next/image";
import BrandSlideShow from "@/components/ui/brand-slideshow/BrandSlideShow";
import { ProductGrids } from "@/components/products/products-grid/ProductGrids";

export default function Home() {

  return (
    <>
      <Slideshow />
      <div className="w-[95%] mt-5 h-[1px] mx-auto bg-gray-300  rounded-xl" />
      <Middle />
      <div className="w-[95%] mt-5 h-[1px] mx-auto bg-gray-300  rounded-xl" />

      <div className="grid max-[767px]:grid-cols-1 grid-cols-4 container  mx-auto w-4/6 my-16 gap-6 ">
        <div className="cursor-pointer overflow-hidden lg:w-full md:w-3/4 sm:w-1/2 sm:mx-auto">
          <Image className="transition-transform duration-500 ease-in-out transform hover:scale-105" src={"/fashion/1.png"} alt={"dsad"} width={1000} height={1000} />
        </div>
        <div className="cursor-pointer overflow-hidden lg:w-full md:w-3/4 sm:w-1/2 sm:mx-auto">
          <Image className="transition-transform duration-500 ease-in-out transform hover:scale-105" src={"/fashion/2.png"} alt={"dsad"} width={1000} height={1000} />
        </div>
        <div className="cursor-pointer overflow-hidden lg:w-full md:w-3/4 sm:w-1/2 sm:mx-auto">
          <Image className="transition-transform duration-500 ease-in-out transform hover:scale-105" src={"/fashion/3.png"} alt={"dsad"} width={1000} height={1000} />
        </div>
        <div className="cursor-pointer overflow-hidden lg:w-full md:w-3/4 sm:w-1/2 sm:mx-auto">
          <Image className="transition-transform duration-500 ease-in-out transform hover:scale-105" src={"/fashion/4.png"} alt={"dsad"} width={1000} height={1000} />
        </div>
      </div>

      <h1 className="text-4xl font-semibold w-fit mx-auto"> MIRA NUESTROS PRODUCTOS </h1>
      <div className="w-1/12 h-1 mt-2 bg-pink-300 mx-auto"></div>
      <h1 className="text-pink-300 w-fit mx-auto mt-3"> ¡No te pierdas de nada! </h1>
      <BrandSlideShow />
    </>
  );
}
