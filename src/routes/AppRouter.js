import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  LoginEmployeer  from "../components/login/LoginEmployeer";
import  RegisterEmployee  from "../components/login/RegisterEmployee";
import  RegisterEmployer  from "../components/login/RegisterEmployer";
import { NavBar } from "../components/navBar/NavBar";
import { Home } from "../components/pages/Home";

function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies/new" element={<RegisterEmployer />} />
        <Route path="/webpros/login" element={<RegisterEmployee />} />
        <Route path="/members/auth/login" element={<LoginEmployeer />} />
     </Routes>
    </Router>
  );
}

export default AppRouter;
