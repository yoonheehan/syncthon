"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {  Label, TextInput } from "flowbite-react";

const SetTripPlan = () => {
  const router = useRouter();
  const [accountNum, setAccountNum] = useState("");
  const [count, setCount] = useState("");
  const [balance, setBalance] = useState("");

  const handlePlanButtonClick = async () => {
    const response = await fetch("api/balance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ accountNum, count }),
    }).then((res) => res.json());

    localStorage.setItem("balance", response.result["계좌잔액"]);

    router.push("/plan");
  };

  return (
    <div className="border border-solid px-5 py-10 rounded-2xl border-black w-full sm:max-w-[640px] bg-white ">
      {/* <input
        type="text"
        value={accountNum}
        onChange={(e) => setAccountNum(e.target.value)}
      /> */}
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="account"
            value="계좌번호 입력"
          />
        </div>
        <TextInput
          id="account"
          sizing="md"
          type="text"
          value={accountNum}
        onChange={(e) => setAccountNum(e.target.value)}
        />
      </div>

      <button onClick={handlePlanButtonClick}>계획짜기</button>

      {balance && <p>잔액: {balance}</p>}
    </div>
  );
};

export default SetTripPlan;
