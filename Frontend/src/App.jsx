import { Route, Routes } from "react-router-dom";
import UserLayout from "./components/UserComponents/UserLayout";
import Home from "./Themes/User/Home";
import About from "./Themes/User/About";
import Contact from "./Themes/User/Contact";
import Orders from "./Themes/User/Orders";
import { Fragment } from "react";
import AdminLayout from "./components/AdminComponents/AdminLayout";
import Dashboard from "./Themes/Admin/Dashboard";
import AllProducts from "./Themes/Admin/AllProducts";
import Addproducts from "./Themes/Admin/Addproducts";

function App() {
  return (
    <Routes>
      <Route path="/user" element={<UserLayout />}>
        <Route path="home" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="orders" element={<Orders />}></Route>
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="addProducts" element={<Addproducts />}></Route>
        <Route path="allProducts" element={<AllProducts />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
