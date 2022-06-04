import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/scss/global.scss'

import Header from './components/Header';
import Err from './pages/Err';
import Home from './pages/Home';
import Plan from './pages/Plan';
import PlanSuccess from './pages/PlanSuccess';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/Plano" element={<Plan />} />
        <Route path="/Plano/Sucesso" element={<PlanSuccess />} />
        <Route path="/*" element={<Err />} />
      </Routes>
    </Router>
  );
}

export default App;
