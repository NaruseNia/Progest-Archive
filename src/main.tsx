import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.scss";
import { TitleBar } from "./components/TitleBar";
import { BrowserRouter } from "react-router-dom";
import { NextUIWrapper } from "./NextUIWrapper";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIWrapper>
        <main className="select-none dark text-foreground bg-background">
          <TitleBar />
          <App />
        </main>
      </NextUIWrapper>
    </BrowserRouter>
  </React.StrictMode>,
);
