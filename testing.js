```
길이가 너무 길어 교보생명 json 중요한 데이터만 추출
```;
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

    // const extractedData = data.map((item) => ({
    //   cpnyNm: item.cpnyNm,
    //   kcisGoodNm: item.kcisGoodNm,
    //   etncYmd: item.etncYmd,
    //   pmtcyclnm: item.pmtCyclNm,
    //   pmtpd: item.pmtpd,
    //   kcisEnsPvsNm: item.kcisEnsPvsNm,
    //   cpnyEnsPvsNm: item.cpnyEnsPvsNm,
    // }));
    // console.log(data);
    console.log(groupedData);
    // console.log(extractedData);

    console.log(
      responseData.result.response.body.goodList_cnt[0]["goodList_cnt"]
    );
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// const extractedData = data.map((item) => ({
//   cpnyNm: item.cpnyNm,
//   kcisGoodNm: item.kcisGoodNm,
//   etncYmd: item.etncYmd,
//   pmtcyclnm: item.pmtCyclNm,
//   pmtpd: item.pmtpd,
//   kcisEnsPvsNm: item.kcisEnsPvsNm,
//   cpnyEnsPvsNm: item.cpnyEnsPvsNm,
// }));

// console.log(extractedData);
