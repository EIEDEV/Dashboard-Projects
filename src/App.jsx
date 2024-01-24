import { useState } from "react";
import "./App.css";
import ReactECharts from "echarts-for-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RealContainer from "./components/layout/layout";
import DashBoard from "./pages/dashboard/dashboard";
import SalesAnalysis from "./pages/salesanalysis/salesanalysis";
import Example from "./pages/user/user";
import Calender from "./pages/calender/calender";
function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RealContainer
                sidebarVisible={sidebarVisible}
                toggleSidebar={toggleSidebar}
              />
            }
          >
            <Route path="dashboard" element={<DashBoard />}></Route>

            <Route path="sales" element={<SalesAnalysis />}></Route>

            <Route path="example" element={<Example />}></Route>

            <Route path="calender" element={<Calender />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
