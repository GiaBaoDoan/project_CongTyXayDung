"use client";
// ban đầu em để call api ở cái button nma k được
import { useEffect } from "react";
import axios from "axios";

const callAPI = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("Click");
  try {
    const res = await axios.post("http://localhost:1112/account/signup/", {
      name: "Furina",
      email: "lethanhtrung.trungle@gmail.com",
      password: "furinacodedao",
    });
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
};

export default function RootPage() {
  // useEffect(() => {
  //   (async () => {
  //     const res = await axios.get("http://localhost:1112//")
  //     console.log(res.data)
  //   })()
  // }, [])

  return (
    <form onSubmit={async (e) => await callAPI(e)} className="flex flex-col text-black">
      <input type="text" placeholder="name" />
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
      <button className="text-white" type="submit">
        Create account
      </button>
    </form>
  );
}
