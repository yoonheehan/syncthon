"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Label, TextInput, Button, Select } from "flowbite-react";
import Link from "next/link";
import trip from "../../public/image/tripform.jpg";

const SetTripPlan = () => {
  const router = useRouter();
  const [accountNum, setAccountNum] = useState("");
  const [count, setCount] = useState("");
  const [balance, setBalance] = useState("");
  const [location, setLocation] = useState("국내");
  const [duration, setDuration] = useState("1");

  const handlePlanButtonClick = async () => {
    const response = await fetch("api/balance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ accountNum, count }),
    }).then((res) => res.json());

    localStorage.setItem("balance", response.result["계좌잔액"]);
    localStorage.setItem("location", location);
    localStorage.setItem("duration", duration);

    router.push("/plan");
  };

  return (
    <div
      className="flex justify-center items-center h-full"
      style={{
        backgroundImage: `url(${trip.src})`,
        width: "100vw",
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <div className="border border-solid px-5 py-10 rounded-2xl border-black w-full sm:max-w-[640px] bg-white ">
        <div className="my-3 text-lg">
          잔액 조회를 통해 가지고 있는 금액으로 ai로 최적의 여행계획을 받아봐요.
        </div>
        <div>
          <div className="mb-1 block">
            <Label htmlFor="account" value="계좌번호 입력" />
          </div>
          <TextInput
            id="account"
            sizing="md"
            type="text"
            value={accountNum}
            onChange={(e) => setAccountNum(e.target.value)}
          />
        </div>
        {/* 국내/해외 선택 드롭다운 */}
        <div className="mt-3">
          <div className="mb-1 block">
            <Label htmlFor="location" value="국내외 선택" />
          </div>
          <Select
            id="location"
            required
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="국내">국내</option>
            <option value="해외">해외</option>
          </Select>
        </div>

        {/* 여행 기간 입력 */}
        <div className="mt-3">
          <div className="mb-1">
            <Label htmlFor="duration" value="여행 기간 (일)" />
          </div>
          <TextInput
            id="duration"
            sizing="md"
            type="number"
            min="1"
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>

        <div className="flex mt-5 space-x-2 justify-end">
          <Button
            onClick={handlePlanButtonClick}
            className="rounded-md bg-indigo-600 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            계획 세우기
          </Button>
          <Link href="/">
            <Button color="light">이전</Button>
          </Link>
        </div>

        {balance && <p>잔액: {balance}</p>}
      </div>
    </div>
  );
};

export default SetTripPlan;
