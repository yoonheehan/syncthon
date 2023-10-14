import { cookies } from "next/headers";

const Analyzing = () => {
  let a = cookies().get("formData").value;
  console.log(typeof a);
  return <div>Enter</div>;
};

export default Analyzing;
