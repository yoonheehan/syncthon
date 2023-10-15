"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TravelPlan = () => {
  const router = useRouter();

  useEffect(() => {
    let balance = localStorage.getItem("balance");
    if (balance === null) {
      router.push("/");
      return;
    }

    let totalSentence = `당신은 여행 플래너야. 통장 잔액 ${balance}만원으로 대한민국 국내 여행 계획을 세워줘. 인근 맛집도 추천해주면 베스트!`;
    const getAnswer = async () => {
      let a = await fetch("api/gptapi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: totalSentence,
        }),
      });
      console.log("eseses" + a);
    };
    getAnswer();
  }, [router]);

  return (
    <>
      <div>Enterdddddddddddddddddd</div>
    </>
  );
};

export default TravelPlan;
