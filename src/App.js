import "./App.css";
import Header from "./components/Header";
import HomeContainer from "./containers/HomeContainer";
import AboutContainer from "./containers/AboutContainer";
import PortfolioContainer from "./containers/PortfolioContainer";
import BlogContainer from "./containers/BlogContainer";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    
    <div className="app-container">
      <Router>
        <Header />
        <Switch>
        <Route exact path="/" component={HomeContainer}/> 
        <Route exact path="/about" component={AboutContainer}/>
        <Route exact path="/portfolio" component={PortfolioContainer}/>
        <Route exact path="/blog" component={BlogContainer}/> 
        </Switch>
      </Router>
    </div>
  )
}

export default App; 

