import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

import "./App.css";
import HomePage from "./pages/home/HomePage";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import ProfilePage from "./pages/profile/ProfilePage";
import AboutPage from "./pages/about/About";
import ContactPage from "./pages/contact/Contact";
import PricingPage from "./pages/pricing/Pricing";
import FAQPage from "./pages/faq/Faq";

// admin
import Home from "./admin/pages/Home";
import Categories from "./admin/pages/Categories";
import Products from "./admin/pages/Products";
import Purchases from "./admin/pages/Purchases";
import Sales from "./admin/pages/Sales";
import Billings from "./admin/pages/Billings";
import Reports from "./admin/pages/Reports";
import Settings from "./admin/pages/Settings";
import Notification from "./admin/pages/Notification";
import Profile from "./admin/pages/Profile";
import AddProduct from "./admin/pages/AddProduct";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<HomePage />} />
        {/* admin routes */}
        <Route path="/dashboard" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/billings" element={<Billings />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/user-profile" element={<Profile />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
