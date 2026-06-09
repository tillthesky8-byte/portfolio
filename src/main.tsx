import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import OracleAnalysisPage from './pages/OracleAnalysisPage/OracleAnalysisPage.tsx';
import PBIndexPage from './pages/PBIndexPage/PBIndexPage.tsx';
import QREUPage from './pages/QREUPage/QREUPage.tsx';
import InflationModelPage from './pages/InflationModelPage/InflationModelPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/oracle-analysis" element={<OracleAnalysisPage />} />
        <Route path="/pb-index" element={<PBIndexPage />} />
        <Route path="/qreu" element={<QREUPage />} />
        <Route path="/inflation-model" element={<InflationModelPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)