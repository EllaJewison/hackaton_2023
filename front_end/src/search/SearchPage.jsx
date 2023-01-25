import React from "react";
import { useNavigate } from "react-router-dom";

import "./SearchPage.css";

const usermock = {name: "user1", lastname: "lastname"}
const books = [
    { name: "book1" },
    { name: "book2" },
    { name: "book3" },
    { name: "book4" },
];


const SearchPage = () => {

  const navigate = useNavigate()
  const toRecommendedBooks = () => { navigate('/RecommendedBooks') }
  return (
    <div>
        <div>
            <h1>Welcome {usermock.name}{usermock.lastname}</h1>
        </div>
      <div className="navsearch">
        <input
          type="text"
          onChange={(e) => console.log("www")}
          value={""}
          required="required"
          placeholder="Search here..."
        ></input>
        <div>
          {books.map((book, index) => (
            <div key={index}>
              <h1>{book.name}</h1>
            </div>
          ))}
        </div>
        <div>
            <button onClick={toRecommendedBooks}>Suggest me new one</button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;