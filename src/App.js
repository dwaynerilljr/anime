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
import DragonBallZ from './components/DragonBallZ';
import Footer from './components/Footer';
import UploadForm from './components/UploadForm';

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
          <Route exact path='/anime'>
            {/* <ReviewForm user={user} /> */}
            <AnimeSelection animes={animes} />
          </Route>
          <Route path="/anime/show/:id">
            <DragonBallZ user={user} animes={animes} />
          </Route>
          <Route path='/register'>
            <RegisterPage />
          </Route>
          <Route exact path='/'>
            <Home />
            <TopAnime animes={animes} />
          </Route>
          <Route exact path='/admin/upload'>
            <UploadForm />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  )
}

export default App;
