import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="py-20">
      <div className="max-w-2xl mx-auto">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing our next round of funding.{" "}
            <a href="#" className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true"></span>
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Data to enrich your online business
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/recommendinsurance"
              className="rounded-md bg-indigo-600 px-12 py-4 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              시작하기
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center mx-auto w-full">
        <Image
          src="/image/kookminbank.png"
          width={400}
          height={300}
          alt="kookminbank"
        />
        <Image
          src="/image/kyobolife.png"
          width={300}
          height={300}
          alt="kyobolife"
        />
        <Image
          src="/image/synctree.png"
          width={300}
          height={300}
          alt="synctree"
        />
      </div>
    </div>
  );
}
