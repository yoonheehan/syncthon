"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TravelPlan = () => {
  const router = useRouter();
  const [resultAnswer, setResultAnswer] = useState([]);

  useEffect(() => {
    let balance = localStorage.getItem("balance");
    if (balance === null) {
      router.push("/");
      return;
    }
    console.log("eseses");

    let totalSentence = `당신은 여행 플래너야.통장 잔액 ${balance}원으로 여행 계획을 1500자로 써줘. 돈이 100만원 이상이면 해외로, 100만원 이하면 국내로 추천해줘`;
    const getAnswer = async () => {
      let a = await fetch("api/gptapi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: totalSentence,
        }),
      }).then((res) => res.json());

      console.log("eseses" + a.result.choices[0].text);
      const resultText = a.result.choices[0].text;
      setResultAnswer(resultText.split("\n\n"));
    };
    getAnswer();
  }, []);

  return (
    <>
      <div className="p-4 space-y-4 bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen flex flex-col items-center justify-center">
        {resultAnswer.map(
          (answer, index) =>
            index > 1 && (
              <div
                key={index}
                className="relative bg-white text-gray-800 p-4 rounded-lg my-2 w-full inline-block max-w-2xl shadow-lg"
              >
                <span>{answer}</span>
              </div>
            )
        )}
      </div>
    </>
  );
};

export default TravelPlan;
