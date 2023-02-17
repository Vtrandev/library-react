import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";


function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}])    //      hooks with array, need to pass in arrays
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map(item => 
      item.id === book.id 
      ? {
          ...item,
          quantity: +quantity,
        }
        : item
      )
    )

  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  
  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
        <Route path="/" exact element={<Home books={books} />} />
        <Route path="/books" exact element={<Books books={books} />} />
        <Route path="/books/:id" element={<BookInfo books={books} cart={cart} key={books.id} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart books={ books } cart={cart} changeQuantity={changeQuantity} />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
