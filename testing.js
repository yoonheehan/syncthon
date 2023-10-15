import fetch from "node-fetch";

const apiUrl = "https://4196413129.for-seoul.synctreengine.com/syncathon3";
const authToken = "jI12jJhnjJia6tikiLcomhnmhnmhnmhnmhnmaxamEzmz";
let data;
const requestOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};
fetch(apiUrl, requestOptions)
  .then((response) => response.json())
  .then((responseData) => {
    data = responseData.result.response.body.goodList;
    console.log(
      responseData.result.response.body.goodList_cnt[0]["goodList_cnt"]
    );
    const groupedData = data.reduce((acc, item) => {
      const existingItem = acc.find(
        (group) => group.kcisGoodNm === item.kcisGoodNm
      );
      if (existingItem) {
        existingItem.kcisEnsPvsNm.push(item.kcisEnsPvsNm);
      } else {
        acc.push({
          cpnyNm: item.cpnyNm,
          kcisGoodNm: item.kcisGoodNm,
          etncYmd: item.etncYmd,
          pmtcyclnm: item.pmtCyclNm,
          pmtpd: item.pmtpd,
          kcisEnsPvsNm: [item.kcisEnsPvsNm],
          cpnyEnsPvsNm: item.cpnyEnsPvsNm,
        });
      }
      return acc;
    }, []);
    // console.log(groupedData);
    console.log(groupedData[0]);
    let resultString;
    // let insuranceData = groupedData;
    for (let i = 0; i < groupedData.length; i++) {
      let insuranceArray = groupedData[i];
      let kcisList = insuranceArray.kcisEnsPvsNm;
      let kcisEnsPvsNmString = JSON.stringify(kcisList).replace(/"/g, "'");
      let s =
        `${i + 1}번째 보험 회사명: ${insuranceArray.cpnyNm}` +
        `상품명: ${insuranceArray.kcisGoodNm}` +
        ": 보험 보장 목록:" +
        kcisEnsPvsNmString;
      resultString += s;
    }
    console.log(resultString);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
