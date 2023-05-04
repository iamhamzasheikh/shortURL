import './App.css';
import Navbar from './Components/Navbar';
import URLCard from './Components/URLCard';
import { Routes, Route } from 'react-router-dom';
import URLShort from './Components/URLShort';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/URLShorten" element={<URLShort />}></Route>
        <Route path='/' element={<URLCard />}></Route>
      </Routes>

    </>
  );
}

export default App;
