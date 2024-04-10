"use client";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Home() {
  const params = useParams<{ tag: string; item: string }>();
  return (
    <main className="">
      <h2>Trang chủ</h2>
    </main>
  );
}
