import './App.css';
import Header from "./Header"
import Home from "./Home"
import About from './About';
import Footer from "./Footer"
import Contact from "./Contact"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      <Switch>
        <Route path="/about">
          
          <About/>
          <Footer/>

        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>

        
        <Route path="/">
          
          <Home/>
          <Footer/>
          
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
