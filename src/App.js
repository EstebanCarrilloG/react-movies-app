import { useEffect, useState } from 'react';
import api from './api/axiosConfig';
import './App.css';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';

function App() {
  const [movies, setMovies] = useState([]);


  const loadMovies = async () => {
    try{
    const response = await api.get('/api/v1/movies');
    console.log(response);
    setMovies(response.data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    loadMovies();
  })
  return (
    <div className="App">
      <Routes>
        <Route path= "/" element={<Layout/>}>
    <Route path= "/" element={<Home movies={movies} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
