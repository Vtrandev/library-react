import React, { useState, useEffect } from "react";
import Book from "../components/Book";

const Books = ({ books: initialBooks }) => {
  const [books, setBooks] = useState(initialBooks);

  function filterBooks(filter) {
    
    if (filter === "LOW_TO_HIGH") {
      setBooks(
          books
            .slice()
            .sort(
              (a, b) =>
                (a.salePrice || a.originalPrice) -
                (b.salePrice || b.originalPrice)
            )
        );
            }
      else if (filter === "HIGH_TO_LOW") {
        setBooks(
          books
            .slice()
            .sort(
              (a, b) =>
                (b.salePrice || b.originalPrice) -
                (a.salePrice || a.originalPrice)
            )
        );
            }
      else {
        return setBooks(books.slice().sort((a, b) => b.rating - a.rating));
      }
      
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>
                
                <select
                  id="filter"
                  onChange={(event) => filterBooks(event.target.value)}
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>

              <div className="books">
                {
                books && books.map((book) => {
                  return <Book book={book} key={book.id} />;
                })
                }
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;
