import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import ImpressumPage from "./pages/ImpressumPage";

function useNetlifyIdentityRedirect() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
    script.async = true;
    script.onload = () => {
      const identity = window.netlifyIdentity;
      if (!identity) return;
      identity.on("init", (user) => {
        if (!user) {
          identity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    };
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);
}

export default function App() {
  useNetlifyIdentityRedirect();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
      </Routes>
    </BrowserRouter>
  );
}
