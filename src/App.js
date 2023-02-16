import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  
  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
        <Route path="/" exact render={() => <Home books={books} />} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        {/* <Route path="/books/:id" /> */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
