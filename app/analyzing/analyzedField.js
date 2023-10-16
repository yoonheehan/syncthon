"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AnalyzingField = ({ insuranceSentence }) => {
  const router = useRouter();
  const [firstAnswer, setFirstAnswer] = useState(undefined)
  const [secondAnswer, setSecondAnswer] = useState(undefined)
  const [thirdAnswer, setThirdAnswer] = useState(undefined)

  useEffect(() => {
    let item = localStorage.getItem("formData");
    if (item === null) {
      router.push("/");
      return;
    }
    const itemObject = JSON.parse(item);

    let anotherSentence = ` 이 중, 한국 나이 ${itemObject.age}살, 키 ${itemObject.height}cm, 몸무게 ${itemObject.weight}kg, `;

    if (itemObject.ifSmoke === "흡연") {
      let howMuchSentence = "";

      switch (Number(itemObject.howMuchSmoke)) {
        case 0:
          howMuchSentence += "1년 미만";
          break;
        case 1:
        case 2:
        case 3:
        case 4:
          howMuchSentence += `${itemObject.howMuchSmoke}년`;
          break;
        case 5:
          howMuchSentence += "5년 이상";
          break;
      }
      anotherSentence += `흡연자이고, 하루에 ${itemObject.howManySmoke}갑 ${howMuchSentence} 피웠고 `;
    } else {
      anotherSentence += "비흡연자이고, ";
    }

    if (itemObject.diseases.length !== 0) {
      anotherSentence += `가족력은 `;
      itemObject.diseases.forEach((d) => (anotherSentence += `${d}, `));
      anotherSentence = anotherSentence.slice(0, -2);
      anotherSentence +=
        "를 가지고 있는 사람에게 추천할 만한 보험 3가지와 추천하는 이유를 n번째로 900자내로 써줘";
    } else {
      anotherSentence +=
        "다른 병은 없는 사람에게 추천할 만한 보험 3가지와 추천하는 이유를 n번째로 900자내로 써줘";
    }

    let totalSentence = "";
    totalSentence += insuranceSentence + anotherSentence;

    async function getAnswer(){
      let result = await fetch("api/gptapi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: totalSentence,
        }),
      }).then(res => res.json());
      const resultText = result.result.choices[0].text
      setResultAnswer(resultText)
      let raw = resultText.split('1번째')
      let raw2 = raw[1].split('2번째')
      let raw3 = raw2[1].split('3번째')
      const firstAnswer = '1번째' + raw2[0]
      const secondAnswer = '2번째' + raw3[0]
      const thirdAnswer = '3번째' + raw3[1]
      
      setFirstAnswer(firstAnswer)
      setSecondAnswer(secondAnswer)
      setThirdAnswer(thirdAnswer)
    }

   getAnswer()

  }, [router, insuranceSentence]);

  return (
    <>
   

        <div className="whitespace-pre-line relative bg-white text-gray-800 p-4 rounded-lg my-2 w-full inline-block max-w-2xl shadow-lg">{firstAnswer}</div>
        <div className="whitespace-pre-line relative bg-white text-gray-800 p-4 rounded-lg my-2 w-full inline-block max-w-2xl shadow-lg">{secondAnswer}</div>
        <div className="whitespace-pre-line relative bg-white text-gray-800 p-4 rounded-lg my-2 w-full inline-block max-w-2xl shadow-lg">{thirdAnswer}</div>
    
    </>
  );
};

export default AnalyzingField;
