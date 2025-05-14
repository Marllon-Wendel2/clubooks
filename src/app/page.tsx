import Navbar from "@/components/Navbar";
import CardPost from "@/components/CardPost";
import { ToastContainer } from "react-toastify";
import { AppProvider } from "./Context/AppProvider";

export default function Home() {
  return (
    <AppProvider>
      <div>
        <Navbar></Navbar>
        <CardPost></CardPost>
        <ToastContainer />
      </div>
    </AppProvider>
  );
}
