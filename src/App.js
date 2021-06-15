import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home'
import WorkList from './components/WorkList'

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/my-work" component={WorkList}/>
        </Switch>
      </>
    </Router>
  );
}

export default App;