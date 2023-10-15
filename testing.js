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

("1번째 보험 회사명: 대전생명보험상품명: 무배당 360 종합보장보험(무해지환급금형): 보험 보장 목록:['질병사망','상해사망','암진단','고액암진단','소액암진단','특정암진단','응급치료']2번째 보험 회사명: 서울생명보험상품명: 서울변액연금보험(무배당): 보험 보장 목록:['특정질병사망']3번째 보험 회사명: 서울생명보험상품명: 서울라이프놀라운건강보험(무배당,갱신형)(3대질병보장형): 보험 보장 목록:['질병사망','상해사망','질병종수술','상해종수술','질병입원일당','상해입원일당','기타통원','항암방사선약물치료비','상해후유장해']4번째 보험 회사명: 서울생명 보험상품명: 서울간편가입용감한종신보험(무배당,해약환급금 일부지급형): 보험 보장 목록:['특정질병진단','갑상선암진단']5번째 보험 회사명: 서울생명보험상품명: 서울간편가입큐브종합건강상해보험라이트(무배당,갱신형): 보험 보장 목록:['골절진단','여성/부인과질환수술','특정질병수술','암수술','질병중환자실입원일당','특정질병입원일당','상해중환자실입원일당','기타통원','항암방사선약물치료비','갑상선암진단','상해 입원의료비','상해 처방조제료','상해 외래의료비','질병 입원의료비','질병 처방조제료','질병 외래의료비','비급여도수, 체외충격파, 증식치료 의료비','비급여 주사제 의료비']6번째 보험 회사명: 서울생명보험상품명: 서울딱하나만묻는암보험(무배당,갱신형): 보험 보장 목록:['비급여 MRI 의료비']7번째 보험 회사명: 부산손해보험상품명: (무)부산손보실손의료비보장보험(19.04): 보험 보장 목록:['상해사망','상해후유장해','상해80%이상후유장해','특정상해수술','상해입원일당','자동차사고부상위로금','기타 인보험(정액)담보','상해사망','상해후유장해']8번째 보험 회사명: 대구화재보 험상품명: (무)부산홈앤비즈케어종합보험(19.07): 보험 보장 목록:['상해80%이상후유장해','특정상해수술','상해입원일당','자동차사고부상위로금','기타 인보험(정액)담보','상해80%이상후유장해','뇌출혈진단','급성심근경색진단','고액암진단','특정암진단','특정질병수술','특정질병수술',' 암수술','항암방사선약물치료비']9번째 보험 회사명: 경기손해보험상품명: 초간편고지건강보험: 보험보장 목록:['암진단','갑상선암진단','암수술','암입원일당','기타 인보험(정액)담보','기타 인보험(정액)담보','질병사망','상해사망','질병사망','상해사망']10번째 보험 회사명: 울산생명보','상해사망','상해사망']11번째 보험 회사명: 포항생명보험상품명: (무)1년부터e저축보험: 보험 보장 목록:['휴일교통상해사망','사망후유장해']12번째 보험 회사명: 포항생명보험상품명: (무)포항e정기보험Ⅱ(순수보장형,비흡연체): 보험 보장 목록:['특정암사망후유장해','사망고도후유장해']13번째 보험회사명: 용산손해보험상품명: (무) New리치하우스가정종합보험2107: 보험 보장 목록:['질병후유장해']14번째 보험 회사명: 우정사업본부상품명: 우체국안전벨트보험: 보험 보장 목록:['암후유장해','장해1급']15번째 보험 회사명: 인천생명보험상품명: 인천생명 암플러스장신보험 표준체 무배당: 보험 보장 목록:['암진단','암진단','고액암진단','수술','상해수술','입원당','질병입원일당','질병입원일당','성인병입원일당','상해입원일당','교통상해입원일당','기 타입원일당','통원','질병통원','치과통원','한방통원','기타통원','간병','차량손해위로금','벌금비용','변호사선임비용','렌트비용','홀인원비용','알바트로스비용','보이스ㆍ메신저피싱손해비용','질병사망','상해사망','질병80%이상후유 장해','상해80%이상후유장해','뇌출혈진단','급성심근경색진단','암진단','질병종수술','특정질병수술','암수술','상해종수술']16번째 보험 회사명: 강원생명보험상품명: 로얄VIP유니버셜종신보험(무배당,보증비용부과형)1종(기본)비일시납: 보험 보장 목록:['질병입원일당','암입원일당','상해입원일당','일반사망','특정암사망','상해사망','상해사망','사망후유장해','암진단','입원일당','질병입원일당','특정질병입원일당','특정질병입원일당','변호사선임비용']17번째 보험 회사명: 제주도손해보험상품명: 여성플러스 의료보장보험(2005): 보험 보장 목록:['렌트비용','','','','','','','','','','',''] 이 중, 한국나이 30살, 흡연자이고, 하루에 1갑, 다른 병은 없는 사람에게 추천할만한 보험 3가지");
