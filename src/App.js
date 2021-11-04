import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Results from "./pages/results/Results";
import SearchContext from "./context/searchContext";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/results/:searchQuery">
              <Results />
            </Route>
          </Switch>
        </div>
      </SearchContext.Provider>
    </Router>
  );
}

export default App;
