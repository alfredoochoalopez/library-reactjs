import React from "react";
import Header from "./components/header/header.component";
import Library from "./pages/library/library.component";

import { GlobalStyle } from "./App.styles";

const App = () => (
  <div>
    <GlobalStyle />
    <Header />
    <Library />
  </div>
);

export default App;
