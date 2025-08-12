"use client";

import React, { useEffect, useState, Suspense } from "react";
import SideBar from "../components/SideBar";
import TablePage from "./TablePage";
import ReferalPage from "./ReferalPage";
import { Routes, Route } from "react-router-dom";

function HomePage() {
  return (
    <div className="w-screen h-screen overflow-hidden no-scrollbar bg-background_prime p-4 grid grid-cols-[320px_1fr_120px] gap-3">
      {/* Sidebar */}
      <div>
        <SideBar />
      </div>

      {/* Main Content динамич роутинг*/}
      <div className="flex flex-col space-y-4 h-full overflow-y-auto pr-2">
        <Suspense fallback={<div>Ожидайте...</div>}>
          <Routes>
            <Route path="/referral" element={<ReferalPage />} />
            <Route path="/game" element={<TablePage />} />
            <Route
              path="/"
              element={<div>Welcome! Select a page from the sidebar.</div>}
            />
          </Routes>
        </Suspense>
      </div>

      {/* Right Padding Box */}
      <div className="bg-background_prime" />
    </div>
  );
}

export default HomePage;
