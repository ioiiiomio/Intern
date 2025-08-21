import React from "react";

// Lazy load ReferralPage
export const ReferralPage = React.lazy(() =>
  import("referalApp/Pages").then((module) => ({
    default: module.ReferralPage,
  }))
);

// Lazy load ApplicationPage
export const ApplicationPage = React.lazy(() =>
  import("referalApp/Pages").then((module) => ({
    default: module.ApplicationPage,
  }))
);

// Lazy load Clients
export const ClientsPage = React.lazy(() =>
  import("referalApp/Pages").then((module) => ({ default: module.ClientsPage }))
);

// Lazy load RewardsPage
export const RewardsPage = React.lazy(() =>
  import("referalApp/Pages").then((module) => ({ default: module.RewardsPage }))
);
