"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import Link from "next/link";

const TravelPlan = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [resultAnswer, setResultAnswer] = useState([]);

  useEffect(() => {
    let balance = localStorage.getItem("balance");
    let location = localStorage.getItem("location");
    let duration = localStorage.getItem("duration");
    if (balance === null || location == null || duration == null) {
      router.push("/");
      return;
    }

    let totalSentence = `당신은 돈과 날짜가 주어지면 ${location} 여행 계획을 세울꺼야. 통장 잔액 ${balance}원일 때 해당 돈을 사용해서 ${duration}일간의 ${location} 여행 계획을 1400자 내로 만들어줘. 글자수가 넘어가면 뒤의 내용은 100자내로 요약해서 알려줘. 여행 날짜는 현재 날짜를 시작으로 해줘. 목적지는 추천해줘. 잡담은 빼고 인근 맛집, 관광지와 경비를 같이 알려줘`;
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

      const resultText = a.result.choices[0].text;
      setResultAnswer(resultText.split("\n\n"));
      setIsLoading(false);
    };
    getAnswer();
  }, []);

  return (
    <>
      <div>
        {isLoading ? (
          <div className="p-4 space-y-4 bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen flex flex-col items-center justify-center">
            <div className="w-32 h-32 border-t-4 border-white rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="p-4 space-y-4 bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen flex flex-col items-center justify-center">
            {resultAnswer.map(
              (answer, index) =>
                index > 0 && (
                  <div
                    key={index}
                    className="relative bg-white text-gray-800 p-4 rounded-lg my-2 w-full inline-block max-w-2xl shadow-lg"
                  >
                    <span>{answer}</span>
                  </div>
                )
            )}
            <Link href="/">
              <Button>처음으로 돌아가기</Button>
            </Link>
          </div>
        )}
      </div>
      {/* <div className="p-4 space-y-4 bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen flex flex-col items-center justify-center">
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
      </div> */}
    </>
  );
};

export default TravelPlan;
