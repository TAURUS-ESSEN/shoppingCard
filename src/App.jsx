// import { useState } from 'react'
import { Outlet } from "react-router-dom";
// import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import './App.css'

function App() {
 

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
