"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Checkbox, Label, TextInput, Button } from "flowbite-react";

import { useRouter } from "next/navigation";

export default function InputForm({}) {
  const [ifSmoke, setIfSmoke] = useState(undefined);
  const [age, setAge] = useState(10);
  const [gender, setGender] = useState("남자");
  const [howManySmoke, setHowManySmoke] = useState("1");
  const [howMuchSmoke, setHowMuchSmoke] = useState("0");
  const [diseases, setdiseases] = useState([]);
  const [height, setHeight] = useState(150);
  const [weight, setWeight] = useState(60);

  const router = useRouter();

  useEffect(() => {
    setIfSmoke("비흡연");
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

  let MuchObject = {
    "1년 미만": "0",
    "1년": "1",
    "2년": "2",
    "3년": "3",
    "4년": "4",
    "5년 이상": "5",
  };

  function checkDiseases(disease) {
    if (diseases.includes(disease)) {
      let dIndex = diseases.indexOf(disease);
      diseases.splice(dIndex, 1);
    } else {
      diseases.push(disease);
    }
  }

  async function submitForm(e) {
    e.preventDefault();
    let cookieBody = {};
    if (ifSmoke === "흡연") {
      cookieBody = {
        age: age,
        gender: gender,
        height: height,
        weight: weight,
        ifSmoke: ifSmoke,
        howMuchSmoke: howMuchSmoke,
        howManySmoke: howManySmoke,
        diseases: diseases,
      };
    } else {
      cookieBody = {
        age: age,
        gender: gender,
        height: height,
        weight: weight,
        ifSmoke: ifSmoke,
        diseases: diseases,
      };
    }
    localStorage.setItem("formData", JSON.stringify(cookieBody));
    router.push("/analyzing");
  }


  return (
    <>
      <form
        className="border border-solid px-5 py-10 rounded-2xl border-black w-full sm:max-w-[640px] bg-white "
        onSubmit={(e) => submitForm(e)}
      >
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-xl font-semibold leading-7 text-gray-900">
              건강상태 기입
            </h2>

            <div className="mt-5 ">
              <div className="mb-3">신체정보를 입력해주세요.</div>
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
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
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
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option key="men" value="남자">
                        남자
                      </option>
                      <option key="women" value="여자">
                        여자
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex items-start w-full space-x-12 mt-5">
                <div>
                  <div className="mb-1 block">
                    <Label htmlFor="height" value="키" />
                  </div>
                  <div className="flex items-end">
                    <TextInput
                      id="height"
                      type="text"
                      maxLength={3}
                      value={height}
                      className="w-[80px]"
                      onChange={(e) => setHeight(e.target.value)}
                    />
                    <span className="ml-1.5 text-lg">cm</span>
                  </div>
                </div>

                <div>
                  <div className="mb-1 block">
                    <Label htmlFor="weight" value="몸무게" />
                  </div>
                  <div className="flex items-end">
                    <TextInput
                      id="weight"
                      type="text"
                      value={weight}
                      maxLength={3}
                      className="w-[80px]"
                      onChange={(e) => setWeight(e.target.value)}
                    />
                    <span className="ml-1.5 text-lg">kg</span>
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
                      value="흡연"
                      name="ifsmoke"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0"
                      checked={ifSmoke == "흡연"}
                      onChange={(e) => setIfSmoke(e.target.value)}
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
                      value="비흡연"
                      name="ifsmoke"
                      checked={ifSmoke == "비흡연"}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0"
                      onChange={(e) => setIfSmoke(e.target.value)}
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

              {ifSmoke === "흡연" && (
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
                          value={howManySmoke}
                          onChange={(e) => setHowManySmoke(e.target.value)}
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
                          value={howMuchSmoke}
                          onChange={(e) => setHowMuchSmoke(e.target.value)}
                        >
                          {Object.entries(MuchObject).map(([key, value]) => (
                            <option key={key} value={value}>
                              {key}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-5 mb-2">가족력</div>
            {/* PC용 보여주기 */}
            <div className=" justify-between flex flex-wrap gap-x-1.5 gap-y-2">
              <div className="flex items-center space-x-1.5">
                <Checkbox
                  id="diabetes"
                  value="당뇨"
                  name="disease"
                  onChange={(e) => checkDiseases(e.target.value)}
                />
                <Label className="flex" htmlFor="diabetes">
                  <p>당뇨</p>
                </Label>
              </div>
              <div className="flex items-center space-x-1.5">
                <Checkbox
                  id="hypertension"
                  value="고혈압"
                  name="disease"
                  onChange={(e) => checkDiseases(e.target.value)}
                />
                <Label className="flex" htmlFor="hypertension">
                  <p>고혈압</p>
                </Label>
              </div>
              <div className="flex items-center space-x-1.5">
                <Checkbox
                  id="cardiovascular"
                  value="심장질환"
                  name="disease"
                  onChange={(e) => checkDiseases(e.target.value)}
                />
                <Label className="flex" htmlFor="cardiovascular">
                  <p>심장질환</p>
                </Label>
              </div>
              <div className="flex items-center space-x-1.5">
                <Checkbox
                  id="cancer"
                  value="암"
                  name="disease"
                  onChange={(e) => checkDiseases(e.target.value)}
                />
                <Label className="flex" htmlFor="cancer">
                  <p>암</p>
                </Label>
              </div>
              <div className="flex items-center space-x-1.5">
                <Checkbox
                  id="Cerebral"
                  value="뇌출혈"
                  name="disease"
                  onChange={(e) => checkDiseases(e.target.value)}
                />
                <Label className="flex" htmlFor="Cerebral">
                  <p>뇌출혈</p>
                </Label>
              </div>
              <div className="flex items-center space-x-1.5">
                <Checkbox
                  id="asthma"
                  value="천식"
                  name="disease"
                  onChange={(e) => checkDiseases(e.target.value)}
                />
                <Label className="flex" htmlFor="asthma">
                  <p>천식</p>
                </Label>
              </div>
            </div>
            
              
         
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          ><Button color="light">
            이전
          </Button>
            
          </Link>
          <Button
            type="submit"
            className="rounded-md bg-indigo-600 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            설문 제출
          </Button>
        </div>
      </form>
    </>
  );
}
