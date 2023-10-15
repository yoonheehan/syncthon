import { cookies } from "next/headers";
import AnalyzingField from "./analyzedField";

const Analyzing = () => {
  // let a = cookies().get("formData").value;

  console.log("123");
  return (
    <div>
      Enter
      <AnalyzingField />;
    </div>
  );
};

export default Analyzing;
