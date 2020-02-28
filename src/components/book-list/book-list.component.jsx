import React from "react";
import Book from "../book/book.component";
import { BookList, Reset, ButtonReset } from "./book-list.styles";
import { connect } from "react-redux";
import { resetLibrary } from "../../redux/library/library.actions";
const BookListView = ({ books,resetLibrary }) => (
  <div>
    {books.length>0 ? (
      <BookList>
        {books.map(book => <Book key={book.id} book={book} />)}
      </BookList>
    ) : (
      <Reset>
        Do you want reset the library ?<ButtonReset onClick={()=>resetLibrary()} >Yes</ButtonReset>
      </Reset>
    )}
  </div>
);

const mapStateToProps = ({ library: { books } }) => ({ books });
const mapDispatchToProps = dispatch => ({
  resetLibrary: () => dispatch(resetLibrary()),

});
export default connect(mapStateToProps,mapDispatchToProps)(BookListView);
