import classes from "./App.module.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./page/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./page/userList/UserList";
import User from "./page/user/User";
import NewUser from "./page/newUser/NewUser";
import ProductList from "./page/productList/ProductList";
import Product from "./page/product/Product";
import NewProduct from "./page/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <Topbar />
      <div className={classes.container}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/movies" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newProduct" element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
