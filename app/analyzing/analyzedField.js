"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AnalyzingField = ({ insuranceSentence }) => {
  const router = useRouter();
  useEffect(() => {
    let item = localStorage.getItem("formData");
    console.log(item);
    console.log(!item);
    if (item === null) {
      console.log("123");
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
        "를 가지고 있는 사람에게 추천할 만한 보험 3가지와 추천하는 이유";
    } else {
      anotherSentence +=
        "다른 병은 없는 사람에게 추천할 만한 보험 3가지와 추천하는 이유";
    }

    console.log(anotherSentence);
  }, []);

  //   const answer = await fetch("api/gpt", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  return (
    <>
      <div>Enterdddddddddddddddddd</div>
    </>
  );
};

export default AnalyzingField;
