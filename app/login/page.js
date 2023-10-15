"use client";
import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  async function test(event) {
    event.preventDefault();
    console.log(id);
    console.log(pw);
    const a = await fetch("/api/kyobo", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    console.log(a);
    // const apiUrl = "https://4196413129.for-seoul.synctreengine.com/syncathon3";
    // const authToken = "jI12jJhnjJia6tikiLcomhnmhnmhnmhnmhnmaxamEzmz";
    // let data;
    // const requestOptions = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    // let a = fetch(apiUrl, requestOptions);
  }

  useEffect(() => {}, []);

  return (
    <>
      <div className="flex justify-center items-center w-full h-full px-4 sm:p-0">
        <form
          className="flex w-full sm:w-[500px] flex-col gap-4 bg-white px-5 sm:px-10 py-20 border border-black border-solid rounded-xl"
          onSubmit={test}
        >
          <LoginForm id={id} setId={setId} pw={pw} setPw={setPw} />
        </form>
      </div>
    </>
  );
};

export default Login;
