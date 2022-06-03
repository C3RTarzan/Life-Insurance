import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/scss/global.scss'

import Err from './pages/Err';
import Home from './pages/Home';
import Plan from './pages/Plan';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/Plano" element={<Plan />} />
        <Route path="/*" element={<Err />} />
      </Routes>
    </Router>
  );
}

export default App;
