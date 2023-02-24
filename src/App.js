import { Routes, Route } from "react-router-dom";
import Account from "./component/config/Account";
import "./App.css";
import Home from "./component/Home";
import Reset from "./component/config/Reset";
import PopUp from "./component/config/PopUp";
import DashboardApp from "./DashboardFile/DashboardApp";
import Verification from "./component/config/Verification";
import Admin from "./component/config/Admin";
import Product from "./component/Product";
function App() {
  return (
    <>
      {/* <Graph /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Account />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<PopUp />} />
        <Route path="/reset-password" element={<Reset />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <DashboardApp />
    </>
  );
}

export default App;
