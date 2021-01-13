import { ApolloProvider } from "@apollo/client";
import React from "react";
import client from "../apollo/client";
import GlobalStyles from "../styles/GlobalStyles";
import { HeaderTop } from "./Header";
import AppRouter from "./Router";

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <HeaderTop />
        <AppRouter />
        <GlobalStyles />
      </ApolloProvider>
    </>
  );
}

export default App;
