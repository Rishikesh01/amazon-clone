import "./App.css";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Checkout } from "./components/Checkout";
import { Login } from "./components/Login";
import { Fragment } from "react";
import { Register } from "./components/register";
import { SellerRegister } from "./components/register-seller";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                <Header />
                <Home />
              </Fragment>
            }
          />
          <Route
            path="/login"
            element={
              <Fragment>
                <Login />
              </Fragment>
            }
          />
          <Route
            path="/checkout"
            element={
              <Fragment>
                <Header />
                <Checkout />
              </Fragment>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Register />
              </>
            }
          />
             <Route
            path="/seller/signup"
            element={
              <>
                <SellerRegister/>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
