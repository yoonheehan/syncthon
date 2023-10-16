import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col xl:flex-row">
      <div className="absolute top-[50%] -translate-y-1/2 left-[50%] xl:top-[20%] xl:left-[50%] -translate-x-1/2 flex flex-col sm:flex-row">
        <div>
          <span className="text-8xl font-bold">여</span>{" "}
          <span className="text-2xl">행과</span>{" "}
        </div>
        <div>
          <span className="text-8xl font-bold">보</span>{" "}
          <span className="text-2xl ">험</span>
        </div>
      </div>

      <div className="absolute top-[70%] lg:left-[25%] flex flex-col lg:flex-row lg:justify-between w-full lg:w-[50%]">
        <div className="text-center">
          <button className="w-[220px] h-[56px] bg-indigo-600 rounded-md  text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <Link href="/recommendinsurance">보험 추천 받기</Link>
          </button>
        </div>

        <div className="text-center mt-10 xl:mt-0">
          <button className="w-[220px] h-[56px] bg-indigo-600 rounded-md  text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <Link href="/settripplan">여행 계획 세우기</Link>
          </button>
        </div>
      </div>

      <img
        src="/image/insurance.jpg"
        className="w-screen h-[50vh] xl:h-screen xl:w-[50%]"
      />
      <img
        src="/image/trip.jpg"
        className="w-screen h-[50vh] xl:h-screen xl:w-[50%]"
      />
    </div>
  );
}
