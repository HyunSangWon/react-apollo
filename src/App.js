import React from 'react';
import client from "./apolloClient";
import {HashRouter as Router,Route} from "react-router-dom";
import {ApolloProvider} from "react-apollo";
import Home from "./Home";
import Detail from "./Detail";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact={true} path={"/"} component={Home}/>
        <Route exact={true} path={"/details/:movieId"} component={Detail}/>
      </Router>
    </ApolloProvider>
  );
}

export default App;
