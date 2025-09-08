import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GenteGrandePage from './pages/GenteGrandePage';
import AceVenturaPage from './pages/AceVenturaPage';
import Quiz from './pages/Quiz';

function App() {

  return (
    <>
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/gentegrande' element={<GenteGrandePage/>} />
        <Route path='/aceventura' element={<AceVenturaPage/>} />
        <Route path='/quiz' element={<Quiz/>} />
      </Routes>
    </HashRouter>
    </>
  )
}

export default App;
