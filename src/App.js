import React, { useState, useEffect } from "react";
// import { Card, Container, Grid, Header } from "semantic-ui-react";
// import { DBWrapper } from "workbox-core/_private";
// import Book from './components/Book';
import "./App.css";
import logo from "./images/logo.png";
import db from "./api/db.json";
// import Rating from "react-rating";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
} from "reactstrap";
import Ratings from 'react-ratings-declarative';


function App() {
    const [books, setBooks] = useState(db.books);
    const [search, setsearch] = useState("");
    const [change, setchange] = useState(true)

    const onRatingChange = (value, id) => {
        setchange(false);
        // console.log("value", value,id, books);
        let newBooks = books;
        for (let i = 0; i < books.length; i++) {
            if (books[i].id === (id)) {
                newBooks[i].averageRating = String(value);
                break;
            }
        }
        setBooks(newBooks);
        setTimeout(() => {
            setchange(true);
        }, 0.5);
    };
    const onSearch = event => {
        setsearch(event.target.value);
    };

    return (
        <main className="App">
            <div className="container">
                <div className="jumbotron">
                    <img src={logo} alt="logo" />
                    <br />
                    <h3 className="display-3">Technical Assessment</h3>
                    <h6>Created By: Patience Deaton in 2021</h6>
                    <p className="lead">
                        This was created as a technical assessment for O'Reilly Media. This page was created with React, and utilizes the book API provided by O'Reilly Media.
                        Feel free to use the search bar to quickly search for any of the books shown. You can also change the rating of a book by clicking on a star.
                        This rating will reset when the page is refreshed. This page is also mobile responsive, check it out!
                    </p>
                </div>
                <br></br>
                <h1>Books</h1>
                <hr></hr>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <form action="#" method="#" role="search">
                            <div className="input-group">
                                <input
                                    className="form-control"
                                    placeholder="Search For a Book"
                                    name="srch-term"
                                    id="ed-srch-term"
                                    type="text"
                                    value={search}
                                    onChange={onSearch}
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <br></br>
                <div className="grid">
                    {books.length > 0 && change ?
                        books.filter(book => {
                            if (!search) return true;
                            if (book.title.toLowerCase().includes(search)) {
                                return true;
                            }
                            return false;
                        }).map(book => (
                            <>
                                <Card>
                                    <CardImg
                                        top
                                        width="100%"
                                        src={book.src}
                                        alt="Card image cap"
                                    />
                                    <CardBody>
                                        <CardTitle tag="h5">
                                            {book.title}
                                        </CardTitle>
                                        <CardText>
                                            {book.description}
                                        </CardText>
                                        <p>Rating: </p>
                                        <Ratings
                                            rating={Number(book.averageRating)}
                                            widgetDimensions="20px"
                                            widgetSpacings="3px"
                                            changeRating={(rating) => onRatingChange(rating, book.id)}
                                        >
                                            <Ratings.Widget widgetRatedColor="red" />
                                            <Ratings.Widget widgetRatedColor="red" />
                                            <Ratings.Widget widgetRatedColor="red" />
                                            <Ratings.Widget widgetRatedColor="red" />
                                            <Ratings.Widget widgetRatedColor="red" />

                                        </Ratings>
                                    </CardBody>
                                </Card>
                            </>
                        )) : null}
                </div>
                <br></br>
                <footer></footer>
            </div>
        </main>
    );
}

export default App;
