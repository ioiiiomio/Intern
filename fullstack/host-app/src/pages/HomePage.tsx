"use client";

import React, { useEffect, useState, Suspense } from "react";
import SideBar from "../components/SideBar";
import TablePage from "./TablePage";
import ReferalPage from "./ReferalPage";
import { Routes, Route } from "react-router-dom";

function HomePage() {
  return (
    <div className="w-screen h-screen overflow-hidden no-scrollbar bg-background_prime p-4 grid grid-cols-[320px_1fr_120px] gap-4">
      {/* Sidebar */}
      <div>
        <SideBar />
      </div>

      {/* Main Content динамич роутинг*/}
      <div className="flex flex-col space-y-4 h-full overflow-y-auto">
        <Suspense fallback={<div>Ожидайте...</div>}>
          <Routes>
            <Route path="/referral" element={<ReferalPage />} />
            <Route path="/game" element={<TablePage />} />
            <Route
              path="/"
              element={
                <div>
                  <h1> Srry, no page found yeaaat.</h1>
                  <p>
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⠿⠛⠿⣦⣄⣠⣶⠿⠟⠉⠉⠙⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣴⡟⠁⠀⠀⠀⠈⢿⣯⠁⠀⠀⠀⠀⠀⠘⣿⡀⠀⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⣰⣿⠛⠛⠻⠿⢶⣶⣄⣠⣤⣶⠶⠾⠿⠛⢻⣿⠀⠀⢠⣶⠷⣶⣾⡿⠿⢶⣦⣤⣴⡶⠶⢿⣷⡀⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⣿⠃⠀⠀⠀⠀⠀⠈⠙⠋⠉⠀⠀⠀⠀⠀⢸⣿⠀⠀⠸⣧⣰⡿⠃⠀⠀⠀⠙⣿⣇⡀⠀⠀⢹⣷⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣄⡀⠀⠙⣿⣇⠀⠀⠀⠀⢀⣿⠏⣷⠀⠀⢸⡿⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⣿⣇⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠻⠷⠞⠛⢻⣧⣤⣤⣴⡾⠿⠴⠋⠀⢠⣿⣧⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠘⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠹⣷⣄⣀⣠⣼⡿⠁⢿⣧⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⢠⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠛⠛⠁⠀⠀⠀⣿⣦⠀⣀⣀⣀
                    ⠀⠀⠀⠀⣼⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡶⢿⣿⠛⠛⠛⠋
                    ⠀⠀⠀⠀⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⢠⣿⡀⠀⠀⠀
                    ⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⢠⣀⣠⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⠿⠿⣶⠟⠀⣀⣀⠘⢻⣿⠛⠛⠛⠃
                    ⣠⣤⣴⠶⣿⡷⠚⠻⠧⠀⠀⠀⠹⣿⣿⣷⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⠀⠀⠀⠀⠙⠃⠀⠀⠉⠀⡼⣻⣻⢿⠿⣿⣆⠀⠀⠀
                    ⠙⠉⠀⠀⠘⣿⡀⢀⣀⡀⠀⠀⠀⠘⠿⠋⠀⠀⠀⠀⠀⠀⣿⡉⣉⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⣸⢣⡏⢹⠛⠓⢒⣿⣤⣄⠀
                    ⠀⠀⠀⣀⣠⣿⣿⡟⠉⠁⠀⠀⠀⠀⠀⠀⢀⣀⣀⡀⠀⠀⠉⠉⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⢰⣏⡿⠀⢻⣿⠄⣾⠁⠈⠉⠀
                    ⠀⠀⠀⠛⠁⠀⠘⢿⣦⣠⡼⠆⠀⠀⠀⢠⣿⠋⠛⠿⠿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡟⡽⠁⢀⣨⣧⣴⠻⣧⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⢀⣤⡿⠛⠿⣶⣤⣄⣠⣾⠟⠀⠀⠀⠀⠈⣿⣀⣀⣀⣀⣀⣀⣤⣴⣶⢿⡿⣸⠃⣰⡿⠋⠉⠁⣾⡟⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⠻⠏⠀⠀⠀⠀⠈⢹⡿⠃⠀⠀⠀⠀⠀⣸⡿⠛⠛⠛⢉⡿⠋⠉⢹⣧⣸⣷⡏⢸⡏⠀⠀⠀⠀⣿⠇⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢾⣇⠀⠀⠀⢀⣠⣾⠿⠷⠦⠴⠾⠛⠁⠀⠀⠀⢻⣏⠛⠓⠚⢿⣦⠀⣠⣾⠟⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⣿⣿⣿⣟⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣷⣶⣤⣤⠾⠟⠛⠁⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⡿⠋⠀⠀⠉⣹⡿⠛⠓⠲⠦⠤⠤⠤⠶⠶⢾⣟⠉⠉⠻⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⠏⠀⠀⠀⠀⠘⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠃⠀⠀⠈⢿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣶⣤⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣼⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢹⣟⠛⠿⠿⠶⠶⣶⣶⣶⣶⣶⣴⣶⣶⣶⠶⠶⠶⠿⠟⢿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠶⢤⣤⣤⣀⣀⣀⣄⣼⣿⣤⣀⣀⣀⣀⣀⣤⠤⢶⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣆⠀⠀⠀⠀⠈⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⢀⣼⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣷⣦⣀⣀⣀⣀⣠⣾⣿⣤⣀⣀⣀⣀⣠⠛⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠛⠛⠛⠉⠁⠀⠉⠙⠛⠛⠛⠛⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                  </p>
                </div>
              }
            />
            <Route
              path="/kitty"
              element={
                <div className="bg-white grid place-items-center h-screen border-white border-r-10">
                  {/* <img src="https://media.tenor.com/Nqs4I7RiuNwAAAAM/dragon-dance-memw-dragon-dance-meme.gif" />
                   */}
                  <img src="https://c.tenor.com/_4YgA77ExHEAAAAd/rick-roll.gif" />
                </div>
              }
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
