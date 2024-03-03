import classes from "./App.module.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./page/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserList from "./page/userList/UserList";
import User from "./page/user/User";
import NewUser from "./page/newUser/NewUser";
import ProductList from "./page/productList/ProductList";
import Product from "./page/product/Product";
import NewProduct from "./page/newProduct/NewProduct";
import { Login } from "./page/login/Login";
import { CSSProperties, Suspense, useContext, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { AuthContext } from "./context/authContext/AuthContext";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Loading = () => (
  <ClipLoader
    color="#ff0058"
    cssOverride={override}
    size={150}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
);

function App() {
  const { state: loginState } = useContext(AuthContext);
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/login"
            element={
              loginState.user ? <Navigate to="/" replace={true} /> : <Login />
            }
          />
          <Route
            path="/*"
            element={
              loginState.user && (
                <>
                  <Topbar />
                  <div className={classes.container}>
                    <Sidebar />
                    <Suspense fallback={<Loading />}>
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/users" element={<UserList />} />
                        <Route path="/user/:userId" element={<User />} />
                        <Route path="/newUser" element={<NewUser />} />
                        <Route path="/videos" element={<ProductList />} />
                        <Route
                          path="/product/:productId"
                          element={<Product />}
                        />
                        <Route path="/newProduct" element={<NewProduct />} />
                      </Routes>
                    </Suspense>
                  </div>
                </>
              )
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
