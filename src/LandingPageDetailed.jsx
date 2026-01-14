import React, { useState } from 'react';
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
  Sparkles,
  XCircle,
  Brain,
  Heart,
  Pill,
  Dumbbell,
  Apple,
  TrendingDown,
  Quote,
  ExternalLink,
  ChevronDown,
  Ban,
  DollarSign,
  Building2,
  Network,
  BookOpen,
  Siren,
  HeartPulse,
  Stethoscope,
  FlaskConical,
  Target,
  Coins,
  AlertOctagon,
  Flame,
  LineChart
} from 'lucide-react';

// Animated counter component
const AnimatedStat = ({ value, suffix = '', prefix = '' }) => {
  return (
    <span className="tabular-nums">{prefix}{value}{suffix}</span>
  );
};

// Big quote component
const BigQuote = ({ quote, source, year, className = '' }) => (
  <div className={`relative ${className}`}>
    <div className="absolute -top-4 -left-2 text-6xl text-red-500/20 font-serif">"</div>
    <blockquote className="relative pl-6 border-l-4 border-red-500/50">
      <p className="text-xl md:text-2xl text-slate-200 font-light italic leading-relaxed">{quote}</p>
      <footer className="mt-4 text-sm text-slate-400">
        — {source}, <span className="text-red-400">{year}</span>
      </footer>
    </blockquote>
  </div>
);

// Stat card with big number
const StatCard = ({ number, label, sublabel, color = 'red', icon: Icon }) => (
  <div className={`bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 md:p-8 text-center hover:bg-slate-800/60 transition-all group`}>
    {Icon && <Icon className={`w-6 h-6 mx-auto mb-3 text-${color}-400 group-hover:scale-110 transition-transform`} />}
    <div className={`text-4xl md:text-5xl font-bold text-${color}-400 mb-2`}>{number}</div>
    <div className="text-white font-medium">{label}</div>
    {sublabel && <div className="text-sm text-slate-500 mt-1">{sublabel}</div>}
  </div>
);

// Case study section component
const CaseStudySection = ({
  id,
  badge,
  badgeColor,
  title,
  highlight,
  subtitle,
  problem,
  solution,
  stats,
  quote,
  visual,
  reversed = false,
  bgGradient
}) => (
  <section id={id} className={`relative py-24 md:py-32 ${bgGradient}`}>
    <div className="max-w-7xl mx-auto px-6">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className={`inline-flex items-center gap-2 px-4 py-2 bg-${badgeColor}-500/10 border border-${badgeColor}-500/20 rounded-full text-sm text-${badgeColor}-400 mb-6`}>
          {badge}
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight font-serif">
          {title} <span className={`text-${badgeColor}-400`}>{highlight}</span>
        </h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">{subtitle}</p>
      </div>

      {/* Content Grid */}
      <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reversed ? 'direction-rtl' : ''}`}>
        {/* Text Content */}
        <div className={reversed ? 'lg:order-2' : ''}>
          {/* The Problem */}
          <div className="mb-10">
            <div className="flex items-center gap-2 text-red-400 text-sm font-bold uppercase tracking-wider mb-4">
              <AlertTriangle className="w-4 h-4" />
              The Official Narrative
            </div>
            <p className="text-lg text-slate-300 leading-relaxed">{problem}</p>
          </div>

          {/* The Solution */}
          <div className="mb-10">
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold uppercase tracking-wider mb-4">
              <CheckCircle className="w-4 h-4" />
              The Suppressed Evidence
            </div>
            <p className="text-lg text-slate-300 leading-relaxed">{solution}</p>
          </div>

          {/* Quote if provided */}
          {quote && (
            <div className="mt-8 p-6 bg-slate-800/30 rounded-xl border border-slate-700/50">
              <BigQuote {...quote} />
            </div>
          )}
        </div>

        {/* Visual Content */}
        <div className={reversed ? 'lg:order-1' : ''}>
          {visual}
        </div>
      </div>

      {/* Stats Row */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>
      )}
    </div>
  </section>
);

const LandingPage = ({ onEnterApp }) => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-bold text-xl tracking-tight font-serif">NICE 2.0</span>
              <span className="hidden sm:inline text-slate-500 text-sm ml-2">The Shadow Regulator</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="#diabetes" className="hidden lg:block text-sm text-slate-400 hover:text-white transition-colors">Diabetes</a>
            <a href="#depression" className="hidden lg:block text-sm text-slate-400 hover:text-white transition-colors">Depression</a>
            <a href="#dementia" className="hidden lg:block text-sm text-slate-400 hover:text-white transition-colors">Dementia</a>
            <a href="#conflict-map" className="hidden md:block text-sm text-slate-400 hover:text-white transition-colors">Conflict Map</a>
            <button
              onClick={onEnterApp}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-emerald-600/25 hover:shadow-emerald-500/40"
            >
              Enter Platform
            </button>
          </div>
        </div>
      </nav>

      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-red-950/20 via-slate-950 to-slate-950"></div>
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Warning Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-red-950/50 border border-red-500/30 rounded-full text-sm mb-8 backdrop-blur-sm">
            <Siren className="w-4 h-4 text-red-400 animate-pulse" />
            <span className="text-red-200">House of Commons Health Select Committee, 2005: <span className="text-red-400 font-semibold">"Medicalisation of Society"</span></span>
          </div>

          {/* Main Headline - From the brief */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05] font-serif">
            <span className="text-slate-100">The Guideline Says</span>
            <br />
            <span className="text-red-400">'Take a Pill'</span>
            <br />
            <span className="text-slate-100">The Evidence Says</span>
            <br />
            <span className="text-emerald-400">'Take Control'</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto mb-10 leading-relaxed">
            Discover the real stories of remission, the conflicts of interest in your care,
            and the lifestyle medicine solutions that save lives—
            <span className="text-white font-medium">while saving the NHS billions</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button
              onClick={onEnterApp}
              className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl text-lg font-semibold transition-all shadow-2xl shadow-emerald-600/30 hover:shadow-emerald-500/50 flex items-center gap-3"
            >
              Explore the Evidence
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#the-crisis"
              className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-slate-600 rounded-xl text-lg font-medium transition-all flex items-center gap-2"
            >
              See the Problem
              <ChevronDown className="w-5 h-5" />
            </a>
          </div>

          {/* Key Stats Row - From the brief */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            <div className="bg-red-950/30 border border-red-500/20 rounded-xl p-5 md:p-6 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-1">45%</div>
              <div className="text-sm text-slate-300">of guideline authors</div>
              <div className="text-xs text-slate-500">have industry conflicts</div>
            </div>
            <div className="bg-red-950/30 border border-red-500/20 rounded-xl p-5 md:p-6 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-1">£1.2M</div>
              <div className="text-sm text-slate-300">to parliamentary groups</div>
              <div className="text-xs text-slate-500">from pharma (2012-2018)</div>
            </div>
            <div className="bg-emerald-950/30 border border-emerald-500/20 rounded-xl p-5 md:p-6 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-1">51%</div>
              <div className="text-sm text-slate-300">diabetes remission</div>
              <div className="text-xs text-slate-500">with lifestyle alone</div>
            </div>
            <div className="bg-emerald-950/30 border border-emerald-500/20 rounded-xl p-5 md:p-6 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-1">1.5x</div>
              <div className="text-sm text-slate-300">exercise effectiveness</div>
              <div className="text-xs text-slate-500">vs. antidepressants</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#the-crisis" className="block">
            <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-2.5 bg-slate-500 rounded-full"></div>
            </div>
          </a>
        </div>
      </section>

      {/* ========== THE CRISIS SECTION - 2005 REPORT ========== */}
      <section id="the-crisis" className="relative py-24 md:py-32 bg-gradient-to-b from-slate-950 via-red-950/10 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-sm text-red-400 mb-6">
              <AlertOctagon className="w-4 h-4" />
              <span>The 2005 Health Select Committee Warning</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-serif">
              They <span className="text-red-400">knew</span> 20 years ago.
              <br />Nothing changed.
            </h2>
          </div>

          {/* The Big Quote */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-slate-800/30 border border-red-500/20 rounded-2xl p-8 md:p-12">
              <BigQuote
                quote="The pharmaceutical industry has exacerbated an unhealthy reliance on medicines... The very high costs of developing new drugs make it vital that a company recoups its costs as quickly as possible after licensing. It is little wonder that prescribing practices are affected."
                source="House of Commons Health Select Committee"
                year="2005"
              />
            </div>
          </div>

          {/* Problem Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-6">
                <Pill className="w-6 h-6 text-red-400" />
              </div>
              <div className="text-4xl font-bold text-red-400 mb-2">650M</div>
              <div className="text-white font-medium mb-2">prescriptions per year</div>
              <p className="text-slate-400 text-sm">Written by GPs alone in the UK. This volume is driven by intense pharmaceutical promotion.</p>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-red-400" />
              </div>
              <div className="text-4xl font-bold text-red-400 mb-2">80%</div>
              <div className="text-white font-medium mb-2">of ESC authors conflicted</div>
              <p className="text-slate-400 text-sm">European Society of Cardiology guideline committee members with direct financial ties to industry.</p>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-6">
                <XCircle className="w-6 h-6 text-red-400" />
              </div>
              <div className="text-4xl font-bold text-red-400 mb-2">32%</div>
              <div className="text-white font-medium mb-2">undisclosed payments</div>
              <p className="text-slate-400 text-sm">Of guideline authors had undisclosed industry payments when cross-referenced with payment databases.</p>
            </div>
          </div>

          {/* The Vioxx Warning */}
          <div className="bg-gradient-to-r from-red-950/50 to-slate-800/50 border border-red-500/30 rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center shrink-0">
                <Flame className="w-8 h-8 text-red-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 font-serif">The Vioxx Scandal: A Warning Ignored</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  The 2005 report specifically cited the COX-2 inhibitor scandal, where over-prescription of drugs like Vioxx and Celebrex
                  was linked to <span className="text-red-400 font-semibold">thousands of deaths and many more cases of heart failure</span>.
                  The committee found manufacturers had suppressed negative trial results, and the regulator (MHRA) had
                  <span className="text-red-400 font-semibold"> "failed to adequately scrutinize licensing data."</span>
                </p>
                <p className="text-slate-400 text-sm italic">
                  Twenty years later, the same patterns continue in diabetes, depression, and dementia guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CUMBERLEGE REVIEW SECTION ========== */}
      <section className="relative py-24 md:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-sm text-amber-400 mb-6">
                <FileText className="w-4 h-4" />
                <span>The Cumberlege Review, 2020</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-serif">
                "First Do No Harm"
                <span className="text-amber-400">— They Didn't Listen</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                The Independent Medicines and Medical Devices Safety Review investigated three major healthcare scandals:
                Primodos, sodium valproate, and pelvic mesh. What it found was a system designed to protect itself, not patients.
              </p>

              <BigQuote
                quote="The system is disjointed, siloed, unresponsive and defensive. It does not adequately recognise that patients are its raison d'être."
                source="Baroness Cumberlege"
                year="2020"
              />
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Dismissed as 'Anecdotal'",
                  desc: "Patient concerns were routinely dismissed while industry data was treated as gospel truth.",
                  icon: XCircle
                },
                {
                  title: "Decades of Harm",
                  desc: "Patients—mostly women—whose lives were ruined by interventions had to fight for decades to be believed.",
                  icon: AlertTriangle
                },
                {
                  title: "Loss of Identity",
                  desc: "Victims reported 'persistent feelings of guilt' and were made to feel their suffering was their own fault.",
                  icon: Heart
                },
                {
                  title: "No Safety Commissioner",
                  desc: "The review recommended a Patient Safety Commissioner. The government delayed implementation for years.",
                  icon: Shield
                }
              ].map((item, i) => (
                <div key={i} className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 flex items-start gap-4 hover:bg-slate-800/60 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== DIABETES CASE STUDY ========== */}
      <section id="diabetes" className="relative py-24 md:py-32 bg-gradient-to-b from-slate-900 via-blue-950/10 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400 mb-6">
              <HeartPulse className="w-4 h-4" />
              <span>Case Study: Type 2 Diabetes</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight font-serif">
              The <span className="text-blue-400">51% Remission</span> They Don't Want You to Know About
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Dr. David Unwin achieved drug-free diabetes reversal in over half his patients.
              His reward? NICE revoked the endorsement of his educational materials.
            </p>
          </div>

          {/* The Story Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
            {/* The Problem */}
            <div>
              <div className="flex items-center gap-2 text-red-400 text-sm font-bold uppercase tracking-wider mb-6">
                <AlertTriangle className="w-4 h-4" />
                The Official Narrative
              </div>
              <div className="bg-red-950/20 border border-red-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4 font-serif">"Progressive Disease"</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Type 2 diabetes is traditionally managed as a chronic, progressive disease. Patients are told their
                  beta-cell function will inevitably decline. Treatment is a one-way escalator: diet advice (often high-carb),
                  then metformin, then sulfonylureas, and eventually insulin injections.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-400">
                    <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-sm font-bold text-red-400">1</div>
                    <span>Metformin</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-sm font-bold text-red-400">2</div>
                    <span>SGLT2 Inhibitors (£££)</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-sm font-bold text-red-400">3</div>
                    <span>GLP-1 Agonist (££££)</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-sm font-bold text-red-400">4</div>
                    <span>Insulin for Life</span>
                  </div>
                </div>
              </div>
            </div>

            {/* The Solution */}
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold uppercase tracking-wider mb-6">
                <CheckCircle className="w-4 h-4" />
                The Suppressed Evidence
              </div>
              <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4 font-serif">Dr. David Unwin's Results</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  At Norwood Surgery in Southport, Dr. Unwin implemented low-carbohydrate dietary protocols for his
                  diabetic patients. By addressing the root cause—insulin resistance from excess carbohydrate—rather
                  than just suppressing symptoms with drugs, he achieved:
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-emerald-500/10 rounded-lg">
                    <span className="text-white font-medium">Overall Remission Rate</span>
                    <span className="text-2xl font-bold text-emerald-400">51%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-emerald-500/10 rounded-lg">
                    <span className="text-white font-medium">Year 1 Diagnoses Remission</span>
                    <span className="text-2xl font-bold text-emerald-400">77%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-emerald-500/10 rounded-lg">
                    <span className="text-white font-medium">Average Weight Loss</span>
                    <span className="text-2xl font-bold text-emerald-400">10kg</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-emerald-500/10 rounded-lg">
                    <span className="text-white font-medium">Annual Drug Savings</span>
                    <span className="text-2xl font-bold text-emerald-400">£68,353</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Banned Infographics */}
          <div className="bg-gradient-to-r from-slate-800/50 to-red-950/30 border border-red-500/30 rounded-2xl p-8 md:p-10 mb-16">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="w-20 h-20 rounded-2xl bg-red-500/20 flex items-center justify-center shrink-0">
                <Ban className="w-10 h-10 text-red-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-white font-serif">The "Banned" Sugar Infographics</h3>
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded">REMOVED BY NICE</span>
                </div>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Dr. Unwin created simple visual charts showing patients how common foods affect blood glucose—measured in
                  "teaspoons of sugar." A 150g bowl of rice? <span className="text-red-400 font-semibold">10 teaspoons</span>.
                  A baked potato? <span className="text-red-400 font-semibold">9 teaspoons</span>.
                </p>
                <p className="text-slate-300 leading-relaxed mb-6">
                  These infographics were initially endorsed by NICE and shortlisted for their Shared Learning Awards in 2019.
                  Then in August 2020, <span className="text-white font-semibold">NICE suddenly revoked the endorsement</span> and
                  removed the resources. The reason? They "imply support for a low carbohydrate diet."
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Scientifically accurate
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Award-nominated
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Proven to drive behavior change
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <XCircle className="w-4 h-4 text-red-400" />
                    Removed for contradicting high-carb orthodoxy
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Conflict Map Preview */}
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Network className="w-6 h-6 text-red-400" />
              <h3 className="text-xl font-bold text-white">Follow the Money: NG28 Committee</h3>
            </div>
            <p className="text-slate-400 mb-6">
              The NICE NG28 Diabetes guideline committee members with documented financial ties to manufacturers of the drugs they recommend:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Sarah Ali', role: 'Consultant', source: 'Eli Lilly', type: 'Honorarium' },
                { name: 'Neel Basudev', role: 'GP', source: 'Merck, Sanofi, Takeda', type: 'Speaker fees' },
                { name: 'Augustin Brooks', role: 'Consultant', source: 'Lilly', type: 'Travel/accommodation' },
                { name: 'Natasha Jacques', role: 'Pharmacist', source: 'Sanofi, Abbott', type: 'Speaker fees' },
              ].map((member, i) => (
                <div key={i} className="bg-slate-900/50 border border-red-500/20 rounded-lg p-4">
                  <div className="font-medium text-white mb-1">{member.name}</div>
                  <div className="text-xs text-slate-500 mb-2">{member.role}</div>
                  <div className="text-sm text-red-400">{member.source}</div>
                  <div className="text-xs text-slate-600">{member.type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== DEPRESSION CASE STUDY ========== */}
      <section id="depression" className="relative py-24 md:py-32 bg-gradient-to-b from-slate-900 via-purple-950/10 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm text-purple-400 mb-6">
              <Brain className="w-4 h-4" />
              <span>Case Study: Major Depression</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight font-serif">
              <span className="text-purple-400">8% vs 38%</span>
              <br />The Relapse Rate They Don't Advertise
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Exercise matches antidepressants at 4 months. But at 10 months?
              Only 8% of exercisers relapsed vs 38% on medication.
            </p>
          </div>

          {/* The Babyak Study Visualization */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-serif">The SMILE Study (Duke University)</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                156 adults with Major Depressive Disorder were randomized to three groups:
                sertraline (Zoloft), supervised exercise, or both. The 4-month results showed
                all groups improved equally. But the 10-month follow-up revealed something the
                pharmaceutical industry doesn't advertise.
              </p>

              <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 mb-6">
                <div className="text-sm text-slate-500 uppercase tracking-wider mb-4">10-Month Relapse Rates</div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-red-400 font-medium">Medication Only</span>
                      <span className="text-red-400 font-bold">38%</span>
                    </div>
                    <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 rounded-full" style={{ width: '38%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-amber-400 font-medium">Combination</span>
                      <span className="text-amber-400 font-bold">31%</span>
                    </div>
                    <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: '31%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-emerald-400 font-medium">Exercise Only</span>
                      <span className="text-emerald-400 font-bold">8%</span>
                    </div>
                    <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: '8%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-950/30 border border-purple-500/20 rounded-xl p-6">
                <h4 className="font-semibold text-white mb-2">The Self-Efficacy Hypothesis</h4>
                <p className="text-slate-400 text-sm">
                  Researchers found patients who exercised developed an <span className="text-purple-400">internal locus of control</span>—they
                  learned they could manage their mood through their own effort. Those on medication attributed improvement to the
                  external agent, leaving them psychologically vulnerable when treatment stopped.
                </p>
              </div>
            </div>

            {/* The 1.5x Study */}
            <div>
              <div className="bg-gradient-to-br from-emerald-950/30 to-slate-800/50 border border-emerald-500/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <Dumbbell className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-emerald-400">1.5x</div>
                    <div className="text-slate-400 text-sm">More Effective</div>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-4 font-serif">2023 Meta-Analysis: 128,000 Participants</h4>
                <p className="text-slate-300 leading-relaxed mb-6">
                  A University of South Australia review of 97 studies and 1,039 trials found physical activity is
                  <span className="text-emerald-400 font-semibold"> 1.5 times more effective</span> than counseling
                  or the leading medications for managing depression.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>12-week interventions most effective</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>Higher intensity = greater improvement</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>Benefits across all clinical populations</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>Positive side effects (unlike SSRIs)</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-red-950/30 border border-red-500/20 rounded-xl p-6">
                <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  SSRI Side Effects (Not Optional)
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-slate-400">
                  <div>• Weight gain</div>
                  <div>• Sexual dysfunction</div>
                  <div>• Emotional blunting</div>
                  <div>• Severe withdrawal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== DEMENTIA CASE STUDY ========== */}
      <section id="dementia" className="relative py-24 md:py-32 bg-gradient-to-b from-slate-900 via-amber-950/10 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-sm text-amber-400 mb-6">
              <Brain className="w-4 h-4" />
              <span>Case Study: Alzheimer's Disease</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight font-serif">
              The <span className="text-amber-400">150% Improvement</span> vs
              <br />The Drug That Causes Brain Bleeding
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              The FINGER study showed lifestyle improves processing speed by 150%.
              The FDA approved a drug with "imperceptible" benefits despite advisory committee objections.
            </p>
          </div>

          {/* The Comparison */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* The Failure: Amyloid Drugs */}
            <div className="bg-red-950/20 border border-red-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <Pill className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-serif">Anti-Amyloid Drugs</h3>
                  <div className="text-sm text-red-400">Aducanumab, Lecanemab, Donanemab</div>
                </div>
              </div>

              <BigQuote
                quote="Probably the worst drug approval decision in recent U.S. history."
                source="FDA Advisory Committee Member (Resigned)"
                year="2021"
              />

              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">"Imperceptible slowing" of decline</div>
                    <div className="text-sm text-slate-500">Clinical benefit barely measurable</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Brain swelling & bleeding (ARIA)</div>
                    <div className="text-sm text-slate-500">Amyloid-Related Imaging Abnormalities</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">$20,000 - $50,000 per year</div>
                    <div className="text-sm text-slate-500">Plus monitoring costs</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">3 committee members resigned</div>
                    <div className="text-sm text-slate-500">In protest over FDA approval</div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Success: FINGER Study */}
            <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-serif">FINGER Study</h3>
                  <div className="text-sm text-emerald-400">Multidomain Lifestyle Intervention</div>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed mb-6">
                The Finnish Geriatric Intervention Study followed 1,200+ older adults at risk of dementia.
                Using a multidomain approach targeting diet, exercise, cognitive training, and vascular health,
                they achieved results no drug has matched.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">25% greater cognitive improvement</div>
                    <div className="text-sm text-slate-500">vs control group</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">83% improvement in executive function</div>
                    <div className="text-sm text-slate-500">Planning, decision-making, focus</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-4xl font-bold text-emerald-400">150%</div>
                    <div className="text-white font-medium">improvement in processing speed</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">30% lower risk of decline</div>
                    <div className="text-sm text-slate-500">Control group had 30% higher risk</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-emerald-500/20">
                <div className="text-sm text-slate-500 mb-3">THE FINGER PROTOCOL</div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-emerald-500/10 rounded-lg p-3 text-center">
                    <Apple className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                    <div className="text-sm text-white">Diet</div>
                  </div>
                  <div className="bg-emerald-500/10 rounded-lg p-3 text-center">
                    <Dumbbell className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                    <div className="text-sm text-white">Exercise</div>
                  </div>
                  <div className="bg-emerald-500/10 rounded-lg p-3 text-center">
                    <Brain className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                    <div className="text-sm text-white">Cognitive</div>
                  </div>
                  <div className="bg-emerald-500/10 rounded-lg p-3 text-center">
                    <Heart className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                    <div className="text-sm text-white">Vascular</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Question */}
          <div className="bg-slate-800/40 border border-amber-500/30 rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
              Why is the drug that causes brain bleeding approved,
              <br />while the lifestyle that improves processing speed by <span className="text-emerald-400">150%</span> is ignored?
            </h3>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              The answer lies in the £1.2M that flows to parliamentary groups,
              the 45% of guideline authors with industry conflicts,
              and the 650 million prescriptions written each year.
            </p>
          </div>
        </div>
      </section>

      {/* ========== WHAT NICE 2.0 OFFERS ========== */}
      <section id="conflict-map" className="relative py-24 md:py-32 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-sm text-emerald-400 mb-6">
              <Shield className="w-4 h-4" />
              <span>The Digital Remedy</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight font-serif">
              NICE 2.0: The <span className="text-emerald-400">Shadow Regulator</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A counter-weight to pharmaceutical hegemony. An evidence engine for patient empowerment.
              The platform the Cumberlege Review called for—built for the digital age.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/30 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Network className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-serif">The Conflict Map</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Interactive network graph showing financial flows between pharmaceutical companies, patient groups,
                APPGs, and guideline committee members. Search any drug or condition—see who paid whom.
              </p>
              <div className="text-sm text-slate-500">
                "Check your guideline's integrity."
              </div>
            </div>

            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/30 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-serif">The Remission Engine</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Live counter and case study repository based on the Unwin model. Calculate savings for your
                health system. Submit your own HbA1c journey.
              </p>
              <div className="text-sm text-slate-500">
                "The 51% they said was impossible."
              </div>
            </div>

            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/30 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-amber-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-serif">The Evidence Vault</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Repository of suppressed data: the "banned" sugar infographics, the Babyak relapse graphs,
                the FINGER protocol. The information they removed, restored.
              </p>
              <div className="text-sm text-slate-500">
                "The charts they didn't want you to see."
              </div>
            </div>

            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/30 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-serif">Real Stories Feed</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Patient testimonials and whistleblower doctor interviews. Dr. Unwin's lightbulb moment.
                FDA panelists who resigned. The voices the Cumberlege Review said were silenced.
              </p>
              <div className="text-sm text-slate-500">
                "The patient voice, finally heard."
              </div>
            </div>
          </div>

          {/* Source Verification */}
          <div className="bg-slate-800/20 border border-slate-700/50 rounded-xl p-6 text-center">
            <div className="text-sm text-slate-500 mb-4">SOURCED FROM OFFICIAL RECORDS</div>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-emerald-400" /> Health Select Committee 2005</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-emerald-400" /> Cumberlege Review 2020</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-emerald-400" /> NICE Committee Registers</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-emerald-400" /> FDA Payment Databases</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-emerald-400" /> Peer-Reviewed Publications</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-950 to-emerald-950/20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
            The evidence is there.
            <span className="block text-emerald-400">It's just been buried.</span>
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            NICE 2.0 is the shovel. Explore the conflict map, discover the remission protocols,
            and access the evidence that the "Pill for Every Ill" system has suppressed.
          </p>
          <button
            onClick={onEnterApp}
            className="group px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl text-xl font-semibold transition-all shadow-2xl shadow-emerald-600/30 hover:shadow-emerald-500/50 inline-flex items-center gap-3"
          >
            Enter NICE 2.0
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-6 text-sm text-slate-500">
            Free. Open. Built for transparency.
          </p>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg font-serif">NICE 2.0</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-500 text-sm">The Shadow Regulator</span>
            </div>
            <div className="text-sm text-slate-500 text-center md:text-right">
              <p>Built for transparency. Not affiliated with NICE UK.</p>
              <p className="text-xs text-slate-600 mt-1">Sources: Health Select Committee 2005, Cumberlege Review 2020, NICE Registers, FDA Open Payments</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
