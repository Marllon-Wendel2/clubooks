import Image from "next/image";
import Navbar from "@/components/Navbar";
import CardPost from "@/components/CardPost";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <CardPost></CardPost>
      <div>Hello world</div>
    </div>
  );
}
