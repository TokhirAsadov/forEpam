import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import styled from "styled-components";

function App() {
    const Wrapper = styled.div`
      margin-top: 69px;
    `;
  return (
    <div className="App">
        <Navbar />
        <Wrapper>
            <Home />
        </Wrapper>
        <Footer />
    </div>
  );
}

export default App;
