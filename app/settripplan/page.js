"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
    <div>
      <input
        type="text"
        value={accountNum}
        onChange={(e) => setAccountNum(e.target.value)}
      />

      <button onClick={handlePlanButtonClick}>계획짜기</button>

      {balance && <p>잔액: {balance}</p>}
    </div>
  );
};

export default SetTripPlan;
