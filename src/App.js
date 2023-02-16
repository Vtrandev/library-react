import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import BookInfo from "./pages/BookInfo";


function App() {
  
  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
        <Route path="/" exact element={<Home books={books} />} />
        <Route path="/books" exact element={<Books books={books} />} />
        <Route path="/books/:id" element={<BookInfo books={books} key={books.id} />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
