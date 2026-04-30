import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, LineChart, Line
} from 'recharts';
import { 
  Users, 
  Activity, 
  Clock,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  Share2,
  ArrowUpRight,
  ArrowDownRight,
  Globe,
  Zap,
  Code
} from 'lucide-react';

const contributionGrowth = [
  { month: 'Jan', code: 120, docs: 45, reviews: 80 },
  { month: 'Feb', code: 150, docs: 55, reviews: 95 },
  { month: 'Mar', code: 210, docs: 90, reviews: 140 },
  { month: 'Apr', code: 280, docs: 130, reviews: 210 },
  { month: 'May', code: 350, docs: 180, reviews: 290 },
  { month: 'Jun', code: 450, docs: 240, reviews: 380 },
];

const teamEngagement = [
  { name: 'Core Platform', value: 450, color: '#3b82f6' },
  { name: 'Payments', value: 320, color: '#06b6d4' },
  { name: 'Identity', value: 280, color: '#6366f1' },
  { name: 'Mobile SDK', value: 240, color: '#8b5cf6' },
  { name: 'Data Eng', value: 180, color: '#ec4899' },
];

const KPI_CARDS = [
  { title: 'Total Contributions', value: '4.8k', trend: '+42% MoM', color: 'blue', icon: Share2 },
  { title: 'Code Reuse Rate', value: '68%', trend: '+15% QoQ', color: 'blue', icon: Zap },
  { title: 'Active Projects', value: '142', trend: 'Growing Community', color: 'blue', icon: Globe },
  { title: 'Avg PR Merge', value: '4.2h', trend: 'High Velocity', color: 'blue', icon: Clock },
];

const InnerSourceDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">InnerSource Community Hub</h1>
          <p className="text-slate-400">Institutional open source collaboration for internal developer productivity.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Browse Reuse Catalog
          </button>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Join a Project
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-blue-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-blue-400`} />
              </div>
              <div className="text-xs font-medium text-emerald-400">
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contribution Growth */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Contribution Velocity (Last 6 Months)</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={contributionGrowth}>
                <defs>
                  <linearGradient id="colorCode" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="code" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorCode)" name="Code PRs" />
                <Area type="monotone" dataKey="reviews" stroke="#8b5cf6" strokeWidth={2} fillOpacity={0} name="Code Reviews" />
                <Area type="monotone" dataKey="docs" stroke="#ec4899" strokeWidth={2} fillOpacity={0} name="Docs Improvements" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Team Engagement */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Top Contributing Teams</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={teamEngagement}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {teamEngagement.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {teamEngagement.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-slate-400">{item.name}</span>
                </div>
                <span className="text-sm font-bold text-white">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Trending InnerSource Repositories</h3>
          <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">Explore All Repos</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Repository / Owner</th>
                <th className="px-6 py-4 font-semibold">Maturity</th>
                <th className="px-6 py-4 font-semibold">External Contributors</th>
                <th className="px-6 py-4 font-semibold">Reuse Count</th>
                <th className="px-6 py-4 font-semibold">Health Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { name: 'shared-auth-sdk', owner: 'Identity Team', maturity: 'Stable', contributors: 42, reuse: 156, health: 98 },
                { name: 'cloud-cost-optimizer', owner: 'FinOps Hub', maturity: 'Growing', contributors: 12, reuse: 24, health: 85 },
                { name: 'design-system-v2', owner: 'UX Engineering', maturity: 'Stable', contributors: 85, reuse: 412, health: 99 },
              ].map((repo) => (
                <tr key={repo.name} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{repo.name}</span>
                      <span className="text-xs text-slate-500">{repo.owner}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      repo.maturity === 'Stable' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-blue-500/10 text-blue-500'
                    }`}>
                      {repo.maturity}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">{repo.contributors} Engineers</td>
                  <td className="px-6 py-4 text-sm text-slate-300">{repo.reuse} Services</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-12 bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-blue-500 h-full" style={{ width: `${repo.health}%` }}></div>
                      </div>
                      <span className="text-xs text-slate-400">{repo.health}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InnerSourceDashboard;
