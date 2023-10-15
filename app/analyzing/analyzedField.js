"use client";

import { useEffect } from "react";

const AnalyzingField = () => {
  // let a = cookies().get("formData").value;
  useEffect(() => {
    console.log("1244443");
    let a = localStorage.getItem("formData");
    console.log(typeof a);
    console.log(JSON.parse(a));
    console.log(typeof JSON.parse(a));
  });

  return <div>Enterdddddddddddddddddd</div>;
};

export default AnalyzingField;
