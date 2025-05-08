import Navbar from "@/components/Navbar";
import CardPost from "@/components/CardPost";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <CardPost></CardPost>
      <ToastContainer />
    </div>
  );
}
