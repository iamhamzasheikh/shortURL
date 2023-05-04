import './App.css';
import Navbar from './Components/Navbar';
import URLCard from './Components/URLCard';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import URLShort from './Components/URLShort';



function App() {
  return (
    <>
      <Navbar />
      <URLCard />
      <Routes>

        <Route path='/URLShorten' element={<URLShort />}></Route>
      </Routes>

    </>
  );
}

export default App;
