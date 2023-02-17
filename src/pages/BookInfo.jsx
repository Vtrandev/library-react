import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom"
import Book from "../components/Book";
import Price from "../components/ui/Price";
import Ratings from "../components/ui/Ratings";

export default function BookInfo({ books, addToCart, cart }) {
    const { id } = useParams();

    const book = books.find(book => +book.id === +id)

    function addBookToCart(book) {
        addToCart(book)
    }

    function bookExistsOnCart() {
        return cart.find((book) => +book.id === +id)
    }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img className="book__selected--img" src={book.url} alt="" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Ratings rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo aspernatur placeat dolores, impedit culpa neque
                    rem, voluptatibus enim illum quod ullam fugiat inventore
                    iste repellendus non quidem! Molestiae, velit ea!
                  </p>
                  <p className="book__summary--para">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo aspernatur placeat dolores, impedit culpa neque
                    rem, voluptatibus enim illum quod ullam fugiat inventore
                    iste repellendus non quidem! Molestiae, velit ea!
                  </p>
                </div>

                {bookExistsOnCart() ? (
                    <Link to={`/cart`} className="book__link">
                  <button className="btn">Checkout</button>
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addBookToCart(book)}>
                    Add to cart
                  </button>
                )}
                
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
