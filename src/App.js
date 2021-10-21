import { useState } from 'react';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TopAnime from './components/TopAnime';
import RegisterPage from './components/RegisterPage';
import { ANIMES as animes } from './animes';
import AnimeSelection from './components/AnimeSelection';

function App() {
    const [user, setUser] = useState({
      username: '',
      password: '',
      email: '',
      birthday: ''
    });

    // const [userArr, setUserArr] = useState([]);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/login'> 
            <LoginForm setUser={setUser} user={user} />
          </Route>
          <Route path='/anime'>
            {/* <ReviewForm user={user} /> */}
            <AnimeSelection animes={animes} />
          </Route>
          <Route path='/register'>
            <RegisterPage />
          </Route>
          <Route path='/'>
            <Home />
            <TopAnime animes={animes} />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
