import './App.css';
import SignUp from "./components/signup/SignUp"
import Login  from './components/login/Login';
import MovieList from './components/movieList/MovieList';
import MovieDetail from './components/MovieDetail/MovieDetail';
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/movies" element={<MovieList/>}></Route>
        <Route path="/movies/:id" element={<MovieDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
