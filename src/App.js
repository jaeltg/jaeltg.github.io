import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home'
import WorkList from './components/WorkList'
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <>
      <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/my-work" component={WorkList}/>
        </Switch>
      </>
    </Router>
  );
}

export default App;