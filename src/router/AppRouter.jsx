import { Routes, Route } from "react-router-dom";
import Games from "../pages/games/Games";
import Contact from "../pages/contact/Contact";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Games />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
