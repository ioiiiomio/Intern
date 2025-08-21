"use client";

import React, { useEffect, useState, Suspense } from "react";
import SideBar from "../components/SideBar";
import TablePage from "./TablePage";
import ReferalPage from "./ReferalPage";
import { Routes, Route } from "react-router-dom";
import { ClientsPage, RewardsPage, ApplicationPage } from "./Pages";

function HomePage() {
  return (
    <div className="w-screen h-screen overflow-hidden no-scrollbar bg-background_prime grid grid-cols-[320px_1fr_120px] gap-4">
      {/* Sidebar */}
      <div className="ml-4 mt-4">
        <SideBar />
      </div>

      {/* Main Content динамич роутинг*/}
      <div className="flex flex-col space-y-4 h-full overflow-y-auto">
        <Suspense fallback={<div>Ожидайте...</div>}>
          <Routes>
            <Route path="/referral" element={<ReferalPage />} />
            <Route path="/game" element={<TablePage />} />
            <Route
              path="/referral/applications"
              element={<ApplicationPage />}
            />
            <Route path="/referral/clients" element={<ClientsPage />} />
            <Route path="/referral/rewards" element={<RewardsPage />} />
            <Route path="/referral/clients" element={<ClientsPage />} />
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
