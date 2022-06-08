import "./App.css";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Checkout } from "./components/Checkout";
import { Login } from "./components/Login";
import { Fragment } from "react";
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
