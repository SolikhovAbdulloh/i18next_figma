import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Layout() {
  return (
    <div className="w-[90%] m-auto px-5 py-8 ">
      <Navbar />
      <div>
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
