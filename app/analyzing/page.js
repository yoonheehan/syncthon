import AnalyzingField from "./analyzedField";

const Analyzing = async () => {
  const apiUrl = `https://3726439538.for-seoul.synctreengine.com/kyobo`;
  let data;
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let insuranceSentence = await fetch(apiUrl, requestOptions)
    .then((response) => response.json())
    .then((responseData) => {
      data = responseData.result.response.body.goodList;
 
      const groupedData = data.reduce((acc, item) => {
        const existingItem = acc.find(
          (group) => group.kcisGoodNm === item.kcisGoodNm
        );
        if (existingItem) {
          if (item.kcisEnsPvsNm) {
            existingItem.kcisEnsPvsNm.push(item.kcisEnsPvsNm);
          }
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
      let resultString = "";
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
      return resultString;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return (
    <div>
      <AnalyzingField insuranceSentence={insuranceSentence} />
    </div>
  );
};

export default Analyzing;
