import './App.css';
import Navbar from './Components/Navbar';
import InputShorten from './Components/InputShorten';
import { Routes, Route } from 'react-router-dom';
import LinkResult from './Components/LinkResult';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<InputShorten setInputValue={setInputValue} />}></Route>
          <Route path='/LinkResult' element={<LinkResult inputValue={inputValue} />} ></Route>
        </Routes>
      </div>

    </>
  );
}

export default App;
