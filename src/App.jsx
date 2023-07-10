import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./Components/Header";
import Landing from "./pages/Landing";
import Talent from "./pages/Talent";
import Upload from "./pages/Upload";
import About from "./pages/About";
import Profile from "./pages/Profile"; 
import Login from "./pages/Login";
import Register from "./pages/Register";

import Engineering from "./pages/Engineering";
import Marketing from "./pages/Marketing";
import Sales from "./pages/Sales";
import Product from "./pages/Product";
import Footer from "./pages/Footer";
import { Toaster } from "react-hot-toast";
import {EngineeringDetails} from "./pages/DetailPages/EngineeringDetails"
import SalesDetails from "./pages/DetailPages/SalesDetails";
import ProductDetails from "./pages/DetailPages/ProductDetails";
import MarketingDetails from "./pages/DetailPages/MarketingDetails";
import TalentDetails from "./pages/DetailPages/TalentDetails";

import "./style/jobdetail.scss"


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/talent" element={<Talent/>}/>
        <Route path="/talent/details/:_id" element={<TalentDetails/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/engineering" element={<Engineering/>}/>
        <Route path="/engineering/details/:jobID" element={<EngineeringDetails/>}/>
        <Route path="/sales" element={<Sales/>}/>
        <Route path="/sales/details/:jobID" element={<SalesDetails/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/details/:jobID" element={<ProductDetails/>}/>
        <Route path="/marketing" element={<Marketing/>}/>
        <Route path="/marketing/details/:jobID" element={<MarketingDetails/>}/>
        <Route path="*" element={<h1>No page found</h1>}/>
      </Routes>
      <Footer/>
      <Toaster/>
    </Router>
  );
}

export default App;
