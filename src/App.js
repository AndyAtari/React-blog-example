import "./App.css";
import Header from "./components/Header";
import HomeContainer from "./containers/HomeContainer"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    
    <div className="app-container">
      <Router>
        <Header />
        <Switch>
        <Route exact path="/" component={HomeContainer}/> 
      
        </Switch>
      </Router>
    </div>
  )
}

export default App; 

