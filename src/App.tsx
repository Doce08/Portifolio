import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import TechnicalActivities from './pages/TechnicalActivities';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/atividades-tecnicas" element={<TechnicalActivities />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
