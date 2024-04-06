import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Referrals from "./pages/Referrals";
import Layout from "./pages/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/referrals" element={<Referrals />} />
      </Routes>
    </Layout>
  );
}

export default App;
