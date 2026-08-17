import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/home.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#fdf3f6", fontFamily: "system-ui" }}>
      <p style={{ color: "#a9852f" }}>Loading Lumière…</p>
    </div>
  );
}
