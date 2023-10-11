"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function InputForm() {
  const [ifsmoke, setIfSmoke] = useState("");
  useEffect(() => {
    setIfSmoke("1");
  }, []);
  let ageArray = Array(90)
    .fill(0)
    .map((v, i) => i + 10);

  let manyObject = {
    "1개": 1,
    "2개": 2,
    "3개": 3,
    "4개": 4,
    "5개 이상": 5,
  };

  let howMuchSmoke = {
    "1년 미만": 0,
    "1년": 1,
    "2년": 2,
    "3년": 3,
    "4년": 4,
    "5년 이상": 5,
  };

  const setSmoke = (event) => {
    setIfSmoke(event.target.value);
  };

  return (
    <>
      <form className="border border-solid px-5 py-10 rounded-2xl border-black min-w-[600px]">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              인적사항 기입
            </h2>

            <div className="mt-5 ">
              <div className="mb-3">나이와 성별을 입력해주세요.</div>
              <div className="flex items-start w-full space-x-[60px]">
                <div>
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-900"
                  >
                    만 나이
                  </label>
                  <select
                    id="age"
                    className="mt-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block focus:outline-none p-2.5 min-w-[100px]"
                  >
                    {ageArray.map((el) => (
                      <option key={el} value={el}>
                        {el}살
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-gray-900"
                  >
                    성별
                  </label>
                  <div className="">
                    <select
                      id="gender"
                      className="mt-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 min-w-[100px]"
                    >
                      <option key="men" value="0">
                        남자
                      </option>
                      <option key="women" value="1">
                        여자
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className="mb-3">흡연 여부</div>
                <div className="flex space-x-5">
                  <div className="flex items-center">
                    <input
                      id="smoke"
                      type="radio"
                      value="0"
                      name="ifsmoke"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0"
                      checked={ifsmoke === "0"}
                      onChange={setSmoke}
                    />
                    <label
                      htmlFor="smoke"
                      className="ml-2 mb-0.5 text-sm font-medium text-gray-900"
                    >
                      흡연
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="no-smoke"
                      type="radio"
                      value="1"
                      name="ifsmoke"
                      checked={ifsmoke === "1"}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0"
                      onChange={setSmoke}
                    />
                    <label
                      htmlFor="no-smoke"
                      className="ml-2 mb-0.5 text-sm font-medium text-gray-900"
                    >
                      비흡연
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className="mb-3">흡연 기간 및 하루 당 개피</div>
                <div className="flex space-x-5">
                  <div>
                    <label
                      htmlFor="many"
                      className="block text-sm font-medium text-gray-900"
                    >
                      하루당 피는 개수
                    </label>
                    <div className="">
                      <select
                        id="many"
                        className="mt-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 min-w-[100px]"
                      >
                        {Object.entries(manyObject).map(([key, value]) => (
                          <option key={key} value={value}>
                            {key}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="long"
                      className="block text-sm font-medium text-gray-900"
                    >
                      흡연 기간
                    </label>
                    <div className="">
                      <select
                        id="long"
                        className="mt-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 min-w-[100px]"
                      >
                        {Object.entries(howMuchSmoke).map(([key, value]) => (
                          <option key={key} value={value}>
                            {key}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-0 block w-full p-2.5"
                  placeholder="John"
                  required
                />
              </div>

              <div className="mt-10">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  그 이외의 질환
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows="3"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none placeholder:text-gray-400  sm:text-sm sm:leading-6 px-2"
                    placeholder="자유롭게 작성해주세요"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            이전
          </Link>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            제출
          </button>
        </div>
      </form>
    </>
  );
}
