import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Dashboardproduct from "./Dashboardproduct";
import DashboardOrder from "./DashboardOrder";
import Dashboardtransaction from "./Dashboardtransaction";
import Addproduct from "./Addproduct";
import Updateproduct from "./Updateproduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardProduct" element={<Dashboardproduct />} />
        <Route path="/addProduct" element={<Addproduct />} />
        <Route path="/dashboardOrder" element={<DashboardOrder />} />
        <Route path="/updateProduct" element={<Updateproduct />} />
        <Route
          path="/dashboardTransaction"
          element={<Dashboardtransaction />}
        />
      </Routes>
    </>
  );
}

export default App;
