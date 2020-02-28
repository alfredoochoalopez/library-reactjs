import React, { useState } from "react";
import {
  Book,
  Overlay,
  Title,
  Author,
  Sinopsis,
  Button,
  ButtonsAction,
  Delete,
  Edit,
  EditText
} from "./book.styles";
import { connect } from "react-redux";
import { removeBook, editBook } from "../../redux/library/library.actions";

const BookView = ({ book, removeBook, editBook }) => {
  const [bookAction, setBookAction] = useState("book");

  const { cover, title, sinopsis, author } = book;
  const switchActions = () => {
    switch (bookAction) {
      case "book":
        return (
          <ButtonsAction>
            <Button onClick={() => setBookAction("edit")}>Edit</Button>
            <Button onClick={() => setBookAction("delete")}>Delete</Button>
          </ButtonsAction>
        );
      case "delete":
        return (
          <ButtonsAction>
            <Button color="red" onClick={() => removeBook(book)}>
              Yes
            </Button>
            <Button onClick={() => setBookAction("book")}>Cancel</Button>
          </ButtonsAction>
        );
      case "edit":
        return (
          <ButtonsAction>
            <Button size="full" onClick={() => setBookAction("book")}>
              Done
            </Button>
          </ButtonsAction>
        );
      default:
        break;
    }
  };

  const handleOnChangeTitle = e => {
    book.title = e.target.value;
    return editBook(book);
  };
  const handleOnChangeAuthor = e => {
    book.author = e.target.value;
    return editBook(book);
  };
  const handleOnChangeSinopsis = e => {
    book.sinopsis = e.target.value;
    return editBook(book);
  };
  return (
    <Book cover={cover}>
      <Overlay>
        {bookAction !== "edit" ? (
          <div>
            <Title>{title}</Title>
            <Author>{author}</Author>
          </div>
        ) : (
          <div>
            <Edit value={title} onChange={handleOnChangeTitle} />
            <Edit value={author} onChange={handleOnChangeAuthor} />
            <EditText value={sinopsis} onChange={handleOnChangeSinopsis} />
          </div>
        )}
        {bookAction !== "delete" ? (
          bookAction !== "edit" ? (
            <Sinopsis>{sinopsis}</Sinopsis>
          ) : null
        ) : (
          <Delete>Are you sure you want to delete this book?</Delete>
        )}

        {switchActions()}
      </Overlay>
    </Book>
  );
};

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  editBook: book => dispatch(editBook(book))
});

export default connect(null, mapDispatchToProps)(BookView);
