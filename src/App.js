import "./App.css";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Checkout } from "./components/Checkout";

function App() {
  
    return (
      <Router>
      <Header/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
