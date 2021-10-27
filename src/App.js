import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Results from "./pages/results/Results";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
