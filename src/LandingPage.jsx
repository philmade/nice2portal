import React from 'react';
import {
  Activity,
  Shield,
  Search,
  Users,
  FileText,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Eye,
  Scale,
  Zap,
  Globe,
  Lock,
  BarChart3,
  Sparkles
} from 'lucide-react';

const LandingPage = ({ onEnterApp }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-bold text-xl tracking-tight">NICE 2.0</span>
              <span className="hidden sm:inline text-slate-500 text-sm ml-2">Open Regulator</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#how-it-works" className="hidden md:block text-sm text-slate-400 hover:text-white transition-colors">How it Works</a>
            <a href="#features" className="hidden md:block text-sm text-slate-400 hover:text-white transition-colors">Features</a>
            <button
              onClick={onEnterApp}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40"
            >
              Launch App
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full text-sm mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-slate-300">Exposing Conflicts in Medical Guidelines</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            <span className="text-white">Who Really Writes</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Your Medical Guidelines?
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            An open audit platform comparing <span className="text-white font-medium">industry-funded official protocols</span> against <span className="text-emerald-400 font-medium">independent challenger approaches</span>.
            Follow the money. Question everything.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={onEnterApp}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl text-lg font-semibold transition-all shadow-2xl shadow-blue-600/30 hover:shadow-blue-500/50 flex items-center gap-3"
            >
              Explore Active Audits
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#how-it-works"
              className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-slate-600 rounded-xl text-lg font-medium transition-all"
            >
              Learn More
            </a>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
            {[
              { value: '£3M+', label: 'Conflicts Mapped', icon: AlertTriangle },
              { value: '4', label: 'Active Audits', icon: FileText },
              { value: '15+', label: 'Panel Members Tracked', icon: Users },
              { value: '12', label: 'Studies Analyzed', icon: BarChart3 }
            ].map((stat, i) => (
              <div key={i} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 md:p-6 backdrop-blur-sm">
                <stat.icon className="w-5 h-5 text-blue-400 mb-2 mx-auto" />
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs md:text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-2.5 bg-slate-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-32 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full text-sm text-red-400 mb-6">
                <AlertTriangle className="w-4 h-4" />
                The Problem
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                85% of guideline authors have
                <span className="text-red-400"> financial ties</span> to industry
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Medical guidelines shape treatment for millions. Yet the panels writing them are often funded by the same pharmaceutical companies whose products they recommend. This isn't conspiracy—it's documented, and it's legal.
              </p>
              <ul className="space-y-4">
                {[
                  'NICE diabetes guidelines: £655K in panel conflicts',
                  'Mental health protocols shaped by SSRI manufacturers',
                  'Alzheimer\'s guidelines: £1.2M from anti-amyloid drug makers'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold text-slate-400">NICE Panel Funding Analysis</span>
                  <span className="text-xs text-red-400 bg-red-500/10 px-2 py-1 rounded">HIGH CONFLICT</span>
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'Prof. J. Sterling', amount: '£450,000', source: 'GSK, Novo Nordisk', percent: 90 },
                    { name: 'Dr. A. Vance', amount: '£120,000', source: 'AstraZeneca', percent: 60 },
                    { name: 'Dr. S. Kline', amount: '£85,000', source: 'Merck', percent: 45 }
                  ].map((member, i) => (
                    <div key={i} className="bg-slate-900/50 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="font-medium text-white">{member.name}</div>
                          <div className="text-xs text-slate-500">{member.source}</div>
                        </div>
                        <div className="text-red-400 font-bold">{member.amount}</div>
                      </div>
                      <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full" style={{ width: `${member.percent}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual Card */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-slate-800/50 border border-emerald-500/20 rounded-2xl p-8 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold text-slate-400">Independent Panel</span>
                  <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">VERIFIED INDEPENDENT</span>
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'Dr. L. Chen', role: 'Lead Researcher', funding: 'Public Grant' },
                    { name: 'Prof. R. Gambo', role: 'Epidemiology', funding: 'NIH Independent' },
                    { name: 'Dr. T. Noakes', role: 'Physiologist', funding: 'Crowdfunded' }
                  ].map((member, i) => (
                    <div key={i} className="bg-slate-900/50 rounded-lg p-4 flex items-center justify-between">
                      <div>
                        <div className="font-medium text-white">{member.name}</div>
                        <div className="text-xs text-slate-500">{member.role}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-emerald-400">{member.funding}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <div className="text-xs text-slate-500 mb-2">Industry Funding</div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 flex-1 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: '1%' }}></div>
                    </div>
                    <span className="text-emerald-400 font-bold">£0</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-sm text-emerald-400 mb-6">
                <Shield className="w-4 h-4" />
                The Solution
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Independent voices deserve
                <span className="text-emerald-400"> equal airtime</span>
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                NICE 2.0 surfaces challenger protocols from independent researchers with no industry ties. See the evidence they cite, compare methodologies, and decide for yourself which approach makes sense.
              </p>
              <ul className="space-y-4">
                {[
                  '60% Type 2 Diabetes reversal rates with lifestyle protocols',
                  'Exercise shown equal to SSRIs for depression, with lower relapse',
                  'Multi-domain lifestyle approach showing cognitive improvement'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative py-32 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400 mb-6">
              <Zap className="w-4 h-4" />
              How It Works
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transparency in <span className="text-blue-400">three steps</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              We map the money, surface the alternatives, and let you compare the evidence side by side.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: 'Map the Conflicts',
                description: 'Every panel member\'s industry funding is documented and visualized. See exactly who paid whom, and how much.',
                color: 'blue'
              },
              {
                icon: Scale,
                title: 'Compare Protocols',
                description: 'Official treatment pathways shown alongside independent challenger approaches. Same condition, different philosophies.',
                color: 'indigo'
              },
              {
                icon: Eye,
                title: 'Audit the Evidence',
                description: 'See which studies each panel accepts, ignores, or excludes—and why. Follow the literature trail yourself.',
                color: 'purple'
              }
            ].map((step, i) => (
              <div key={i} className="group relative">
                <div className={`absolute inset-0 bg-${step.color}-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <div className="relative bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 h-full hover:border-slate-600/50 transition-all">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 flex items-center justify-center mb-6 shadow-lg`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-sm text-slate-500 font-medium mb-2">Step {i + 1}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="relative py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built for <span className="text-blue-400">radical transparency</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Every feature designed to surface hidden information and enable informed decision-making.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'Panel Tracking', desc: 'Complete conflict of interest mapping for every guideline author' },
              { icon: FileText, title: 'Protocol Comparison', desc: 'Side-by-side view of official vs. challenger treatment pathways' },
              { icon: BarChart3, title: 'Funding Visualization', desc: 'Interactive charts showing industry money flow to panel members' },
              { icon: Search, title: 'Literature Audit', desc: 'Track which studies are accepted, ignored, or excluded by each panel' },
              { icon: Globe, title: 'Open Access', desc: 'All data freely available. No paywalls. No gatekeeping.' },
              { icon: Lock, title: 'Source Verified', desc: 'Every funding disclosure traced to official declarations' }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-800/20 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/40 hover:border-slate-600/50 transition-all group">
                <feature.icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to see behind the
            <span className="block text-blue-400">guidelines?</span>
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Explore active audits across diabetes, depression, hypertension, and Alzheimer's. More conditions added regularly.
          </p>
          <button
            onClick={onEnterApp}
            className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl text-xl font-semibold transition-all shadow-2xl shadow-blue-600/30 hover:shadow-blue-500/50 inline-flex items-center gap-3"
          >
            Enter NICE 2.0
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">NICE 2.0</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-500 text-sm">Open Regulator Project</span>
            </div>
            <div className="text-sm text-slate-500">
              Built for transparency. Not affiliated with NICE UK.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
