"use client";
import { AuthContext } from "@/app/Context/AuthContext";
import ProfileForm from "@/components/FormPerfil";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import SidebarProfile from "@/components/SideProfile";

import { useContext } from "react";
import { ToastContainer } from "react-toastify";

export default function ProfilePage({ params }: { params: { id: string } }) {
  const { isMobile, userData } = useContext(AuthContext)!;

  if (!isMobile) {
    return (
      <section className="flex align-middle justify-center flex-col">
        <Navbar />
        <div className="flex">
          <SidebarProfile />
          <ProfileForm />
        </div>
        <ToastContainer />
      </section>
    );
  }

  if (isMobile) {
    return (
      <>
        <div>
          <Navbar></Navbar>
        </div>
        <ToastContainer />
      </>
    );
  }
}
