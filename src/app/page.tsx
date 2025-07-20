"use client";
import Navbar from "@/components/Navbar";
import CardPost from "@/components/CardPost";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import Sidebar from "@/components/SidesBars/Sidebar";
import SideNotification from "@/components/SidesBars/SideNotification";

export default function Home() {
  const { isMobile, userData } = useContext(AuthContext)!;

  if (!isMobile) {
    return (
      <section className="flex align-middle justify-center">
        <Sidebar userData={userData} />
        <div className="flex-col">
          <CardPost></CardPost>
        </div>
        <SideNotification />
      </section>
    );
  }

  if (isMobile) {
    return (
      <>
        <div>
          <Navbar></Navbar>
          <CardPost></CardPost>
        </div>
        <ToastContainer />
      </>
    );
  }
}
