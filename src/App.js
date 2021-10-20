import { useState } from 'react';
import LoginForm from './components/LoginForm';
import ReviewForm from './components/ReviewForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
    const [user, setUser] = useState({
      username: '',
      password: ''
    });
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/login'> 
            <LoginForm setUser={setUser} user={user} />
          </Route>
          <Route path='/write-review'>
            <ReviewForm user={user} />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
