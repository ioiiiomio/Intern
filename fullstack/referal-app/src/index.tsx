import React from "react";
import ReactDOM from "react-dom/client";
import ReferalPage from "./pages/ReferalPage";
import { AlertDialogProvider } from "./components/providers/alert-dialog-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReferalPage />
  </React.StrictMode>
);
