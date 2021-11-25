import Home from "./Home"
import Header from "./Header"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import React from 'react';



function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
            <Route path="/search">
              <SearchPage />
            </Route>

            <Route path="/">
              <Home />
            </Route>

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
