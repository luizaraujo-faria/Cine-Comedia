import { icons } from './assets/importAssets';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage icons={icons} />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
