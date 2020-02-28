import React from "react";

import { BookContainer } from "./library.styles";
import BookList from "../../components/book-list/book-list.component";

const Library = () => (
  <BookContainer>
    <BookList />
  </BookContainer>
);
export default Library;
