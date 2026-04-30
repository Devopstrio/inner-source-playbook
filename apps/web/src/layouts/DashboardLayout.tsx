import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Users, 
  Search, 
  Bell, 
  Menu, 
  X, 
  Settings,
  LayoutDashboard,
  Code,
  BookOpen,
  Activity,
  Trophy,
  Globe,
  Share2,
  Zap,
  Rocket
} from 'lucide-react';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const location = useLocation();

  const navItems = [
    { name: 'InnerSource Hub', path: '/', icon: LayoutDashboard },
    { name: 'Repo Catalog', path: '/catalog', icon: Globe },
    { name: 'Contributions', path: '/contributions', icon: Share2 },
    { name: 'Community Insights', path: '/analytics', icon: Activity },
    { name: 'Onboarding Portal', path: '/onboarding', icon: Rocket },
    { name: 'Reuse Standards', path: '/standards', icon: Code },
    { name: 'Leaderboard', path: '/leaderboard', icon: Trophy },
    { name: 'Playbook Library', path: '/playbook', icon: BookOpen },
    { name: 'Platform Settings', path: '/settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-slate-950 text-slate-200 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className={`bg-slate-900 border-r border-slate-800 transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'} flex flex-col`}>
        <div className="p-6 flex items-center gap-4 border-b border-slate-800">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20">
            <Users className="text-white w-5 h-5" />
          </div>
          {sidebarOpen && <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">InnerOS</span>}
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                  isActive 
                  ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {sidebarOpen && <span className="font-medium">{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3 p-2 bg-slate-800/50 rounded-xl">
            <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold">
              JD
            </div>
            {sidebarOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">Jane Developer</p>
                <p className="text-xs text-slate-500 truncate">InnerSource Mentor</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-slate-900/50 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-6 z-10">
          <div className="flex items-center gap-4 flex-1">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-slate-800 rounded-lg text-slate-400">
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search repos, contributors, reuse patterns..." 
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600/50 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-500 border border-blue-500/20 rounded-full text-xs font-bold">
              +12 New Contributions
            </div>
            <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-blue-600 rounded-full border-2 border-slate-900"></span>
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 bg-slate-950">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
