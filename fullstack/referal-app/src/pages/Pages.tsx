"use client";
import React from "react";
import Applications from "@/components/Applications";
import Rewards from "@/components/Rewards";

export function ApplicationPage() {
  return (
    <div className="bg-white border border-r-4">
      <Applications />
    </div>
  );
}

export function ClientsPage() {
  return (
    <div className="bg-white border border-r-4">
      <p>Страница клиентов</p>
    </div>
  );
}

export function RewardsPage() {
  return (
    <div className="bg-white border border-r-4">
      <Rewards />
    </div>
  );
}

export function SimulationPage() {
  return (
    <div className="bg-white border border-r-4">
      <p>Simulation stuff</p>
    </div>
  );
}

export function CuratorsPanelPage() {
  return (
    <div className="bg-white border border-r-4">
      <p>Stranichka</p>
    </div>
  );
}
