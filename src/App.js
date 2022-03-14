import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppContainer } from './AppStyles';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login';
import MovieInfo from './Containers/MovieInfo/MovieInfo';
import Profile from './Containers/Profile/Profile';
import Register from './Containers/Register/Register';
import SearchResults from './Containers/SearchResults/SearchResults';

const App = () => {
  return (
    <AppContainer>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/info' element={ <MovieInfo /> } />
            <Route path='/profile' element={ <Profile /> } />
            <Route path='/register' element={ <Register /> } />
            <Route path='/search' element={ <SearchResults /> } />
          </Routes>
        <Footer />
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
