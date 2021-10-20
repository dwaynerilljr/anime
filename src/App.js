import { useState } from 'react';
import LoginForm from './components/LoginForm';
import ReviewForm from './components/ReviewForm';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
    const [user, setUser] = useState({
      username: '',
      password: ''
    });
  return (
    <div>
      <Router>
        <li><Link to={'/login'}>Login</Link></li>
        <li><Link to={'/write-review'}>Write Review</Link></li>
        <Switch>
          <Route path='/login'> 
            <LoginForm setUser={setUser} user={user} />
          </Route>
          <Route path='/write-review'>
            <ReviewForm user={user} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
