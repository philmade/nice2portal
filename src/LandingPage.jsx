import React from 'react';
import {
  Activity,
  ArrowRight,
  ArrowDown,
  CheckCircle,
  XCircle,
  AlertTriangle,
  TrendingUp,
  Pill,
  Dumbbell,
  Brain,
  Heart,
  Ban,
  Scale,
  Users,
  Building2,
  Sparkles
} from 'lucide-react';

const LandingPage = ({ onEnterApp }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* ===== MINIMAL NAV ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg">NICE 2.0</span>
          </div>
          <button
            onClick={onEnterApp}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-sm font-semibold transition-all"
          >
            Enter Platform
          </button>
        </div>
      </nav>

      {/* ===== HERO: THE HOOK ===== */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/30 via-slate-950 to-slate-950" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-red-400 text-sm font-medium tracking-wide uppercase mb-6">
            House of Commons, 2005
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
            <span className="text-slate-400">"The pharmaceutical industry has created an</span>
            <br />
            <span className="text-red-400">unhealthy reliance on medicines"</span>
          </h1>

          <p className="text-2xl md:text-3xl text-slate-300 mb-12">
            Twenty years later, nothing changed.
            <br />
            <span className="text-white font-semibold">Until now.</span>
          </p>

          <a href="#the-problem" className="inline-flex flex-col items-center gap-2 text-slate-500 hover:text-white transition-colors">
            <span className="text-sm">The Story</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </section>

      {/* ===== ACT 1: THE PROBLEM ===== */}
      <section id="the-problem" className="py-32 px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">

          <p className="text-emerald-400 text-sm font-medium tracking-wide uppercase mb-4 text-center">
            Act I
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            The System is <span className="text-red-400">Captured</span>
          </h2>

          {/* Three damning stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-red-400 mb-4">45%</div>
              <p className="text-slate-300">of guideline authors have financial ties to the drugs they recommend</p>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-red-400 mb-4">£1.2M</div>
              <p className="text-slate-300">flowed from pharma to parliamentary health groups in 6 years</p>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-red-400 mb-4">650M</div>
              <p className="text-slate-300">prescriptions written per year in the UK alone</p>
            </div>
          </div>

          {/* The consequence */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              The people who write your treatment guidelines
              <span className="text-white font-semibold"> are paid by the companies </span>
              whose drugs they recommend.
            </p>
            <p className="text-slate-500 mt-6 text-sm">
              This isn't conspiracy. It's in the public record.
            </p>
          </div>

        </div>
      </section>

      {/* ===== ACT 2: THE BURIED EVIDENCE ===== */}
      <section className="py-32 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-5xl mx-auto">

          <p className="text-emerald-400 text-sm font-medium tracking-wide uppercase mb-4 text-center">
            Act II
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            The Evidence They <span className="text-emerald-400">Buried</span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-20 max-w-2xl mx-auto">
            Three conditions. Three suppressed solutions. Exposed.
          </p>

          {/* Story 1: Diabetes */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Heart className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold">Type 2 Diabetes</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-950/30 border border-red-500/30 rounded-xl p-6">
                <p className="text-red-400 text-xs font-bold uppercase tracking-wide mb-3">What they tell you</p>
                <p className="text-xl text-slate-200 mb-4">"It's progressive. You'll need more drugs over time."</p>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Pill className="w-4 h-4" />
                  <span>Metformin → SGLT2 → GLP-1 → Insulin</span>
                </div>
              </div>

              <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-6">
                <p className="text-emerald-400 text-xs font-bold uppercase tracking-wide mb-3">What they suppressed</p>
                <p className="text-xl text-slate-200 mb-4">Dr. David Unwin reversed diabetes in <span className="text-emerald-400 font-bold">51%</span> of patients.</p>
                <p className="text-slate-400 text-sm">Using diet alone. No drugs. NICE removed his educational materials.</p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-400">77%</div>
                <div className="text-xs text-slate-500">remission in year-1 patients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400">£68K</div>
                <div className="text-xs text-slate-500">saved per practice per year</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400">Banned</div>
                <div className="text-xs text-slate-500">his charts by NICE in 2020</div>
              </div>
            </div>
          </div>

          {/* Story 2: Depression */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Brain className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold">Depression</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-950/30 border border-red-500/30 rounded-xl p-6">
                <p className="text-red-400 text-xs font-bold uppercase tracking-wide mb-3">What they tell you</p>
                <p className="text-xl text-slate-200 mb-4">"You have a chemical imbalance. Take this SSRI."</p>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Pill className="w-4 h-4" />
                  <span>Side effects: weight gain, sexual dysfunction, withdrawal</span>
                </div>
              </div>

              <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-6">
                <p className="text-emerald-400 text-xs font-bold uppercase tracking-wide mb-3">What they suppressed</p>
                <p className="text-xl text-slate-200 mb-4">Exercise is <span className="text-emerald-400 font-bold">1.5x more effective</span> than medication.</p>
                <p className="text-slate-400 text-sm">With positive side effects instead of negative ones.</p>
              </div>
            </div>

            <div className="mt-8 bg-slate-800/50 border border-slate-700 rounded-xl p-6 max-w-xl mx-auto">
              <p className="text-sm text-slate-500 uppercase tracking-wide mb-4 text-center">10-Month Relapse Rate (Duke University)</p>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="w-24 text-sm text-slate-400">Medication</span>
                  <div className="flex-1 h-6 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full flex items-center justify-end pr-2" style={{width: '38%'}}>
                      <span className="text-xs font-bold">38%</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-24 text-sm text-slate-400">Exercise</span>
                  <div className="flex-1 h-6 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full flex items-center justify-end pr-2" style={{width: '8%'}}>
                      <span className="text-xs font-bold">8%</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-slate-500 text-xs mt-4">Exercise patients were 4.7x less likely to relapse</p>
            </div>
          </div>

          {/* Story 3: Dementia */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold">Alzheimer's Disease</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-950/30 border border-red-500/30 rounded-xl p-6">
                <p className="text-red-400 text-xs font-bold uppercase tracking-wide mb-3">What they approved</p>
                <p className="text-xl text-slate-200 mb-4">Anti-amyloid drugs with "imperceptible" benefits</p>
                <div className="space-y-2 text-sm text-slate-400">
                  <div className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-400" /> Causes brain bleeding</div>
                  <div className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-400" /> $26,000+ per year</div>
                  <div className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-400" /> 3 FDA advisors resigned in protest</div>
                </div>
              </div>

              <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-6">
                <p className="text-emerald-400 text-xs font-bold uppercase tracking-wide mb-3">What they ignored</p>
                <p className="text-xl text-slate-200 mb-4">The FINGER study: lifestyle intervention</p>
                <div className="space-y-2 text-sm text-slate-400">
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> 150% improvement in processing speed</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> 83% improvement in executive function</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> Zero harmful side effects</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===== ACT 3: THE PATTERN ===== */}
      <section className="py-32 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">

          <p className="text-emerald-400 text-sm font-medium tracking-wide uppercase mb-4">
            Act III
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            See the <span className="text-red-400">Pattern</span>?
          </h2>

          <div className="space-y-6 text-xl md:text-2xl text-slate-300 mb-16">
            <p>Effective, low-cost lifestyle interventions exist.</p>
            <p className="flex items-center justify-center gap-3">
              <ArrowDown className="w-5 h-5 text-red-400" />
            </p>
            <p>They threaten pharmaceutical revenue.</p>
            <p className="flex items-center justify-center gap-3">
              <ArrowDown className="w-5 h-5 text-red-400" />
            </p>
            <p>Guideline authors have industry ties.</p>
            <p className="flex items-center justify-center gap-3">
              <ArrowDown className="w-5 h-5 text-red-400" />
            </p>
            <p className="text-white font-semibold">The evidence gets buried. The drugs get prescribed.</p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-lg text-slate-400 italic">
              "The system is disjointed, siloed, unresponsive and defensive.
              It does not adequately recognise that patients are its raison d'être."
            </p>
            <p className="text-sm text-slate-500 mt-4">— Baroness Cumberlege, Independent Review, 2020</p>
          </div>

        </div>
      </section>

      {/* ===== ACT 4: WHY A NEW SYSTEM ===== */}
      <section className="py-32 px-6 bg-gradient-to-b from-slate-950 to-emerald-950/20">
        <div className="max-w-5xl mx-auto">

          <p className="text-emerald-400 text-sm font-medium tracking-wide uppercase mb-4 text-center">
            Act IV
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Why We Need a <span className="text-emerald-400">New System</span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            The current regulators can't fix this. They are the problem.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-xl font-bold">The Old System</h3>
              </div>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>Conflicts of interest are disclosed but not disqualifying</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>Industry-funded studies weighted equally with independent research</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>Lifestyle interventions dismissed as "anecdotal"</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>Patient voices ignored for decades</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold">NICE 2.0</h3>
              </div>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Conflicts mapped and made visible before you read a guideline</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Independent evidence surfaced alongside official protocols</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Remission success stories tracked and verified</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>The patient voice, finally amplified</span>
                </li>
              </ul>
            </div>
          </div>

          {/* The mission statement */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl text-slate-200 leading-relaxed">
              Not a replacement for medical advice.
              <br />
              <span className="text-emerald-400 font-semibold">A lens to see what's been hidden from you.</span>
            </p>
          </div>

        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-32 px-6 bg-emerald-950/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The evidence exists.
            <br />
            <span className="text-emerald-400">It's time you saw it.</span>
          </h2>

          <p className="text-xl text-slate-400 mb-10">
            Explore the conflicts. Discover the suppressed protocols.
            <br />Make informed decisions about your health.
          </p>

          <button
            onClick={onEnterApp}
            className="group px-10 py-5 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-xl font-semibold transition-all shadow-2xl shadow-emerald-600/30 hover:shadow-emerald-500/50 inline-flex items-center gap-3"
          >
            Enter NICE 2.0
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="mt-8 text-sm text-slate-500">
            Free. Open source. Sourced from official government records.
          </p>
        </div>
      </section>

      {/* ===== MINIMAL FOOTER ===== */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-500" />
            <span>NICE 2.0 — The Shadow Regulator</span>
          </div>
          <div>
            Sources: Health Select Committee 2005 · Cumberlege Review 2020 · NICE Registers · FDA Open Payments
          </div>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;
