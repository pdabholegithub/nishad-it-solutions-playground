import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { HomePage } from './pages/HomePage';
import { AuthPage } from './pages/auth/AuthPage';
import { FormControlsPage } from './pages/FormControlsPage';
import { InteractionsPage } from './pages/InteractionsPage';
import { AdvancedUIPage } from './pages/AdvancedUIPage';
import { ChallengesPage } from './pages/ChallengesPage';
import { AlertsPage } from './pages/AlertsPage';
import { ApiIntegrationPage } from './pages/ApiIntegrationPage';
import { WizardPage } from './pages/WizardPage';
import { SearchPage } from './pages/SearchPage';
import { InfiniteScrollPage } from './pages/InfiniteScrollPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="forms" element={<FormControlsPage />} />
          <Route path="interactions" element={<InteractionsPage />} />
          <Route path="advanced" element={<AdvancedUIPage />} />
          <Route path="challenges" element={<ChallengesPage />} />
          <Route path="alerts" element={<AlertsPage />} />
          <Route path="api" element={<ApiIntegrationPage />} />
          <Route path="wizard" element={<WizardPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="scroll" element={<InfiniteScrollPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}
