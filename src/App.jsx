import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Header cart={cart} />
      <main>
        <Outlet context={{ cart, setCart }}/>
      </main>
      <Footer />
    </>
  )
}

export default App
