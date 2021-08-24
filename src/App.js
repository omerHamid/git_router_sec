import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './HomePage';
import SubPage from './SubPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <HomePage/>
          </Route>
          <Route path='/sub'>
            <SubPage/>
          </Route>

        </Switch>
     </div>
    </Router>
  );
}

export default App;
