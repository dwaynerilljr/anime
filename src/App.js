import { useState } from 'react';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
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
import Search from './components/Search';

function App() {
    const [user, setUser] = useState({
      username: '',
      password: '',
      email: '',
      birthday: '',
    });

    const [isActive, setIsActive] = useState(false);
    const [grid, setGrid] = useState(true);

    const setListView = () => {
        setIsActive(true);
        setGrid(false);
    }

    const setGridView = () => {
        setIsActive(false);
        setGrid(true);
    }

    // const [userArr, setUserArr] = useState([]);

  return (
    <div className="min-h-full">
      <Router>
        <Navbar user={user} setUser={setUser} />
        <Switch>
          <Route path='/login'> 
            <LoginForm setUser={setUser} user={user} />
          </Route>
          <Route exact path='/anime'>
            {/* <ReviewForm user={user} /> */}
            <AnimeSelection 
              animes={animes} 
              isActive={isActive} 
              grid={grid} 
              setListView={setListView} 
              setGridView={setGridView}
            />
          </Route>
          <Route path='/search'>
            <Search grid={grid} />
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
          {/* <Route exact path='/play'>
            <PlayWithData />
          </Route> */}
          <Route exact path='/admin/upload'>
            <UploadForm />
          </Route>
          <Route path="*">
            <Redirect to='/' />
          </Route>
          {/* <Route exact path='/play/:id'>
            <PlaySelection />
          </Route>
          <Route exact path='/play'>
            <PlayWithData handleSelection={handleSelection} handleClick={handleClick} animeSelection={animeSelection} />
          </Route> */}
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}

export default App;
