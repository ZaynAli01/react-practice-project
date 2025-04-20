import About from './component/About';
import Home from './component/Home';
import Movie from './component/Movie';
import NavBar from './component/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sigup from './component/Sigup';
import Stopwatch from './component/Stopwatch';



function App() {

  return (
    <>
      <Router >
        <NavBar name={'Test'} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/movies' element={<Movie />} />
          <Route path='/signup' element={<Sigup />} />
          <Route path='/stopwatch' element={<Stopwatch />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
