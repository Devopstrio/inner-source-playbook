import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import InnerSourceDashboard from './pages/InnerSourceDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The InnerSource governance engine is currently mapping cross-team dependencies and contribution flows. This community module will be synchronized shortly.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<InnerSourceDashboard />} />
          <Route path="/catalog" element={<Placeholder name="Internal Reuse Catalog" />} />
          <Route path="/contributions" element={<Placeholder name="Contribution Workflow Manager" />} />
          <Route path="/analytics" element={<Placeholder name="Cross-Team Collaboration Insights" />} />
          <Route path="/onboarding" element={<Placeholder name="Developer Onboarding & Mentorship" />} />
          <Route path="/standards" element={<Placeholder name="Repository & Governance Standards" />} />
          <Route path="/leaderboard" element={<Placeholder name="Contributor Recognition Leaderboard" />} />
          <Route path="/playbook" element={<Placeholder name="InnerSource Strategy Playbooks" />} />
          <Route path="/settings" element={<Placeholder name="Platform & OSPO Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
