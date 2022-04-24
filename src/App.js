import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Computer from "./pages/Computer";
import Laptop from "./pages/Laptop";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
        <Router>
                <Navbar />
           <Routes>
               <Route path="/" exact element={<Home />}/>
               <Route path="/about" exact element={<About />}/>
               <Route path="/computer" exact element={<Computer marginTop={"60px"}/>}/>
               <Route path="/laptop" exact element={<Laptop />}/>
               <Route path="/products" exact element={<Products marginTop={"65px"}/>}/>
               <Route path="/contact" exact element={<Contact marginTop={"60px"}/>}/>
           </Routes>
                <Footer />
        </Router>
    </div>
  );
}

export default App;
