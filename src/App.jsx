import React, { useState } from 'react';
import { 
  Users, 
  FileText, 
  ShieldAlert, 
  ShieldCheck, 
  Activity, 
  Database,
  ExternalLink,
  Menu,
  X,
  Download,
  Bell,
  ChevronRight,
  ArrowRight,
  CheckCircle // Added missing import
} from 'lucide-react';

// --- Data Structure ---

const database = {
  t2d: {
    title: "Type 2 Diabetes",
    category: "Metabolic",
    description: "Comparison of pharmacocentric vs. lifestyle remission protocols.",
    officialPanel: {
      name: "NICE Guideline Committee (NG28)",
      type: "Official Regulator",
      fundingTotal: "£655,000",
      fundingPercent: 85,
      members: [
        { name: "Prof. J. Sterling", role: "Chair", funding: "£450k (GSK, Novo)", risk: "High" },
        { name: "Dr. A. Vance", role: "Clinical Lead", funding: "£120k (AstraZeneca)", risk: "Med" },
        { name: "Dr. S. Kline", role: "Advisor", funding: "£85k (Merck)", risk: "Med" },
      ],
      protocol: [
        { step: 1, title: "Metformin", desc: "Standard release, 500mg" },
        { step: 2, title: "SGLT2 Inhibitors", desc: "If HbA1c remains high" },
        { step: 3, title: "GLP-1 Agonist", desc: "Injectable therapy" },
        { step: 4, title: "Insulin", desc: "Long-acting basal" },
      ]
    },
    challengerPanel: {
      name: "Metabolic Integrity Group",
      type: "Independent",
      fundingTotal: "£0",
      fundingPercent: 1,
      members: [
        { name: "Dr. L. Chen", role: "Lead Researcher", funding: "Public Grant", risk: "Low" },
        { name: "Prof. R. Gambo", role: "Epidemiology", funding: "NIH Independent", risk: "Low" },
        { name: "Dr. T. Noakes", role: "Physiologist", funding: "Crowdfunded", risk: "Low" },
      ],
      protocol: [
        { step: 1, title: "Carb Restriction", desc: "<50g/day (Ketogenic)" },
        { step: 2, title: "Intermittent Fasting", desc: "16:8 Protocol" },
        { step: 3, title: "Resistance Training", desc: "Muscle glucose uptake" },
        { step: 4, title: "Deprescription", desc: "Tapering insulin/meds" },
      ]
    },
    evidence: [
      {
        id: 1,
        title: "SUSTAIN-6: Semaglutide Trial",
        author: "Marso et al. (2016)",
        funder: "Novo Nordisk",
        type: "industry",
        official: { status: "accepted", comment: "Demonstrates CV benefit. High weighting." },
        challenger: { status: "caution", comment: "Short duration (2y). Ignores root cause." }
      },
      {
        id: 2,
        title: "Virta Health: 1-Year Outcomes",
        author: "Hallberg et al. (2018)",
        funder: "Independent",
        type: "independent",
        official: { status: "ignored", comment: "Sample size too small (n=262). No RCT." },
        challenger: { status: "accepted", comment: "60% reversal rate. Shows drugs optional." }
      },
      {
        id: 3,
        title: "DiRECT Trial: Weight Management",
        author: "Lean et al. (2017)",
        funder: "Diabetes UK",
        type: "independent",
        official: { status: "secondary", comment: "Acknowledged, but drugs remain primary." },
        challenger: { status: "accepted", comment: "Validates caloric restriction efficacy." }
      }
    ]
  },
  dep: {
    title: "Major Depression",
    category: "Mental Health",
    description: "SSRI efficacy vs. holistic and metabolic psychiatry interventions.",
    officialPanel: {
      name: "NICE Mental Health (CG90)",
      type: "Official Regulator",
      fundingTotal: "£820,000",
      fundingPercent: 92,
      members: [
        { name: "Dr. P. Wright", role: "Chair", funding: "£300k (Pfizer)", risk: "High" },
        { name: "Prof. S. Davies", role: "Psychiatry", funding: "£400k (Eli Lilly)", risk: "High" },
        { name: "Dr. M. Khan", role: "Advisor", funding: "£120k (Janssen)", risk: "Med" },
      ],
      protocol: [
        { step: 1, title: "SSRI", desc: "Sertraline or Citalopram" },
        { step: 2, title: "Switch Class", desc: "SNRI or different SSRI" },
        { step: 3, title: "Augmentation", desc: "Add Antipsychotic/Lithium" },
        { step: 4, title: "ECT", desc: "For treatment resistant cases" },
      ]
    },
    challengerPanel: {
      name: "Holistic Psychiatry Alliance",
      type: "Independent",
      fundingTotal: "£0",
      fundingPercent: 0,
      members: [
        { name: "Dr. C. Palmer", role: "Metabolic Psych", funding: "Philanthropy", risk: "Low" },
        { name: "Dr. J. Ruck", role: "Nutritional Psych", funding: "University", risk: "Low" },
        { name: "Prof. E. Sato", role: "Lifestyle Med", funding: "NIH Grant", risk: "Low" },
      ],
      protocol: [
        { step: 1, title: "Metabolic Therapy", desc: "Ketogenic Diet / Gut Health" },
        { step: 2, title: "Exercise Protocol", desc: "Zone 2 + HIIT prescription" },
        { step: 3, title: "Psychotherapy", desc: "CBT / Trauma-informed" },
        { step: 4, title: "Targeted Supps", desc: "Methylfolate / Omega-3" },
      ]
    },
    evidence: [
      {
        id: 1,
        title: "STAR*D Trial Reanalysis",
        author: "Pigott et al. (2010)",
        funder: "Independent",
        type: "independent",
        official: { status: "ignored", comment: "Original study outcomes prioritized." },
        challenger: { status: "accepted", comment: "Shows low remission rates for SSRIs." }
      },
      {
        id: 2,
        title: "Sertraline Efficacy Study",
        author: "Pfizer Internal (2002)",
        funder: "Pfizer",
        type: "industry",
        official: { status: "accepted", comment: "Core evidence base for CG90." },
        challenger: { status: "excluded", comment: "Publication bias detected." }
      },
      {
        id: 3,
        title: "Smile Trial (Exercise)",
        author: "Blumenthal et al. (2007)",
        funder: "NIH",
        type: "independent",
        official: { status: "secondary", comment: "Adjunct therapy only." },
        challenger: { status: "accepted", comment: "Equal efficacy to meds, lower relapse." }
      }
    ]
  },
  cvd: {
    title: "Hypertension",
    category: "Cardiovascular",
    description: "Standard pharmacotherapy vs. salt-sensitivity and insulin focus.",
    officialPanel: {
      name: "NICE Hypertension (NG136)",
      type: "Official Regulator",
      fundingTotal: "£320,000",
      fundingPercent: 60,
      members: [
        { name: "Prof. B. O'Neil", role: "Chair", funding: "£150k (Novartis)", risk: "Med" },
        { name: "Dr. K. Silva", role: "Cardiology", funding: "£80k (Bayer)", risk: "Med" },
        { name: "Dr. J. Doe", role: "GP Rep", funding: "None", risk: "Low" },
      ],
      protocol: [
        { step: 1, title: "ACE Inhibitor", desc: "Under 55s" },
        { step: 2, title: "CCB", desc: "Calcium Channel Blocker" },
        { step: 3, title: "Combination", desc: "ACEi + CCB + Diuretic" },
        { step: 4, title: "Spironolactone", desc: "Resistant hypertension" },
      ]
    },
    challengerPanel: {
      name: "Cardio-Metabolic Institute",
      type: "Independent",
      fundingTotal: "£10,000",
      fundingPercent: 5,
      members: [
        { name: "Dr. M. Hyman", role: "Functional Med", funding: "Book Sales", risk: "Low" },
        { name: "Dr. A. Malhotra", role: "Cardiology", funding: "Public", risk: "Low" },
        { name: "Dr. S. Hall", role: "Nephrology", funding: "University", risk: "Low" },
      ],
      protocol: [
        { step: 1, title: "Insulin Reduction", desc: "Low carb diet to lower retention" },
        { step: 2, title: "Magnesium/Potassium", desc: "Mineral balancing" },
        { step: 3, title: "Stress Reduction", desc: "Breathwork / HRV training" },
        { step: 4, title: "Sunlight/Nitric Oxide", desc: "UV exposure for vasodilation" },
      ]
    },
    evidence: [
      {
        id: 1,
        title: "SPRINT Trial",
        author: "SPRINT Group (2015)",
        funder: "NIH/Industry Mixed",
        type: "industry",
        official: { status: "accepted", comment: "Supports aggressive lowering to <120." },
        challenger: { status: "caution", comment: "Aggressive targets increase fall risk." }
      },
      {
        id: 2,
        title: "Salt Sensitivity & Insulin",
        author: "DiNicolantonio (2019)",
        funder: "Independent",
        type: "independent",
        official: { status: "ignored", comment: "Contradicts established salt guidelines." },
        challenger: { status: "accepted", comment: "Links hyperinsulinemia to retention." }
      }
    ]
  },
  alz: {
    title: "Alzheimer's Disease",
    category: "Neurological",
    description: "Anti-amyloid monoclonal antibodies vs. metabolic 'Type 3 Diabetes' approach.",
    officialPanel: {
      name: "NICE Dementia (NG97)",
      type: "Official Regulator",
      fundingTotal: "£1,200,000",
      fundingPercent: 95,
      members: [
        { name: "Prof. H. Zang", role: "Chair", funding: "£600k (Biogen/Eisai)", risk: "High" },
        { name: "Dr. F. Muller", role: "Neurology", funding: "£400k (Eli Lilly)", risk: "High" },
        { name: "Dr. S. Bishop", role: "Geriatrics", funding: "£200k (Roche)", risk: "High" },
      ],
      protocol: [
        { step: 1, title: "AChE Inhibitors", desc: "Donepezil / Rivastigmine" },
        { step: 2, title: "Memantine", desc: "NMDA antagonist" },
        { step: 3, title: "Monoclonals", desc: "Anti-amyloid infusions" },
        { step: 4, title: "Care Home", desc: "Palliative management" },
      ]
    },
    challengerPanel: {
      name: "Neuro-Plasticity Group",
      type: "Independent",
      fundingTotal: "£0",
      fundingPercent: 0,
      members: [
        { name: "Dr. D. Bredesen", role: "Neurodegeneration", funding: "Private", risk: "Low" },
        { name: "Dr. L. Mosconi", role: "Brain Imaging", funding: "University", risk: "Low" },
        { name: "Dr. G. Ede", role: "Psychiatry", funding: "Independent", risk: "Low" },
      ],
      protocol: [
        { step: 1, title: "Ketogenic Therapy", desc: "Provide ketone fuel to brain" },
        { step: 2, title: "Hormone Optimization", desc: "Bioidentical HRT" },
        { step: 3, title: "Toxin Removal", desc: "Mold/Heavy Metal detox" },
        { step: 4, title: "Sleep Architecture", desc: "Deep sleep prioritization" },
      ]
    },
    evidence: [
      {
        id: 1,
        title: "EMERGE (Aducanumab)",
        author: "Biogen (2019)",
        funder: "Biogen",
        type: "industry",
        official: { status: "accepted", comment: "Approved despite statistical friction." },
        challenger: { status: "excluded", comment: "Clinical benefit negligible. Edema risk." }
      },
      {
        id: 2,
        title: "FINGER Study",
        author: "Ngandu et al. (2015)",
        funder: "Independent",
        type: "independent",
        official: { status: "secondary", comment: "Prevention only, not treatment." },
        challenger: { status: "accepted", comment: "First RCT showing lifestyle reverses decline." }
      }
    ]
  }
};

// --- Components ---

const RiskBadge = ({ level }) => {
  const colors = {
    High: "bg-red-50 text-red-600 border-red-200",
    Med: "bg-amber-50 text-amber-600 border-amber-200",
    Low: "bg-emerald-50 text-emerald-600 border-emerald-200"
  };
  return (
    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${colors[level] || colors.Low}`}>
      {level.toUpperCase()}
    </span>
  );
};

const ProtocolStep = ({ step, isLast }) => (
  <div className="relative pb-5 last:pb-0">
    {!isLast && <div className="absolute left-[11px] top-6 bottom-0 w-px bg-slate-200"></div>}
    <div className="flex items-start gap-3">
      <div className="w-6 h-6 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500 z-10 shrink-0 shadow-sm">
        {step.step}
      </div>
      <div className="mt-0.5">
        <div className="text-sm font-semibold text-slate-800 leading-none">{step.title}</div>
        <div className="text-[11px] text-slate-500 mt-1">{step.desc}</div>
      </div>
    </div>
  </div>
);

const VerdictBadge = ({ status }) => {
  const styles = {
    accepted: "bg-blue-50 text-blue-700 border-blue-200",
    ignored: "bg-red-50 text-red-700 border-red-200",
    secondary: "bg-slate-50 text-slate-600 border-slate-200",
    caution: "bg-amber-50 text-amber-700 border-amber-200",
    excluded: "text-slate-400 line-through decoration-slate-400"
  };
  
  const labels = {
    accepted: "Primary Evidence",
    ignored: "Ignored",
    secondary: "Secondary",
    caution: "Method Flawed",
    excluded: "Excluded"
  };

  return (
    <span className={`text-[9px] uppercase tracking-wide font-bold px-2 py-0.5 rounded border inline-block ${styles[status]}`}>
      {labels[status]}
    </span>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState('t2d');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const data = database[activeTab];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col md:flex-row selection:bg-blue-100">
      
      {/* Sidebar */}
      <aside className={`fixed inset-0 z-20 bg-slate-900 md:static md:w-60 md:shrink-0 transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-200 border-r border-slate-800 flex flex-col`}>
        <div className="p-6 flex items-center gap-2.5 border-b border-slate-800/50">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
             <Activity className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-bold text-lg text-white tracking-tight block leading-none">NICE 2.0</span>
            <span className="text-[10px] text-blue-400 font-medium tracking-widest uppercase">Open Regulator</span>
          </div>
          <button onClick={() => setMobileMenuOpen(false)} className="md:hidden ml-auto text-slate-400"><X className="w-5 h-5"/></button>
        </div>
        
        <nav className="flex-1 py-6 px-3 space-y-1">
          <div className="px-3 pb-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Active Audits</div>
          {Object.entries(database).map(([key, item]) => (
            <button 
              key={key}
              onClick={() => { setActiveTab(key); setMobileMenuOpen(false); }}
              className={`w-full text-left px-3 py-2.5 rounded-lg transition-all duration-200 flex items-center justify-between group ${
                activeTab === key
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <div>
                <div className="font-medium text-sm leading-tight">{item.title}</div>
                <div className={`text-[10px] mt-0.5 ${activeTab === key ? 'text-blue-200' : 'text-slate-600 group-hover:text-slate-500'}`}>{item.category}</div>
              </div>
              {activeTab === key && <ChevronRight className="w-3.5 h-3.5 text-blue-200" />}
            </button>
          ))}
        </nav>

        <div className="p-4 bg-slate-950/30 text-xs text-slate-500 border-t border-slate-800/50">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span>System Operational</span>
          </div>
          <p className="opacity-60">v2.1.4 Public Beta</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto h-screen relative scroll-smooth">
        {/* Mobile Toggle */}
        <div className="md:hidden absolute top-4 right-4 z-10">
          <button onClick={() => setMobileMenuOpen(true)} className="p-2 bg-white rounded shadow text-slate-600"><Menu className="w-5 h-5" /></button>
        </div>

        <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-8">
          
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 mb-2 uppercase tracking-wide">
                <span>{data.category} Audit</span>
                <span className="w-1 h-1 rounded-full bg-blue-300"></span>
                <span>Updated Today</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">{data.title}</h1>
              <p className="text-slate-500 mt-2 max-w-2xl text-sm leading-relaxed">
                {data.description} <span className="text-slate-400">— Official ID: NG{Math.floor(Math.random() * 100)}</span>
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <button className="h-9 px-3 bg-white border border-slate-300 rounded text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:border-slate-400 transition-colors flex items-center gap-2">
                <Download className="w-3.5 h-3.5" /> Export
              </button>
              <button className="h-9 px-3 bg-slate-900 text-white rounded text-xs font-semibold hover:bg-slate-800 transition-all shadow-sm flex items-center gap-2">
                <Bell className="w-3.5 h-3.5" /> Subscribe
              </button>
            </div>
          </header>

          {/* Panels Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Left: Official */}
            <section className="group">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
                <div className="bg-slate-50/50 px-5 py-3 border-b border-slate-100 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-slate-400 group-hover:text-red-500 transition-colors" />
                    <span className="font-bold text-sm text-slate-700">Official Standard</span>
                  </div>
                  <div className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-100">
                    High Conflict
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="mb-6">
                    <h3 className="font-bold text-base text-slate-900">{data.officialPanel.name}</h3>
                    <div className="text-xs text-slate-400 mt-0.5">Mandated by UK Govt</div>
                    
                    {/* Funding Bar */}
                    <div className="mt-4">
                      <div className="flex justify-between items-end mb-1.5">
                        <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Industry Funding</span>
                        <span className="text-xs font-bold text-slate-900">{data.officialPanel.fundingTotal}</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 rounded-full" style={{ width: `${data.officialPanel.fundingPercent}%` }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {data.officialPanel.members.map((m, i) => (
                      <div key={i} className="flex items-center justify-between text-xs">
                        <div>
                          <span className="font-semibold text-slate-700 block">{m.name}</span>
                          <span className="text-slate-400">{m.role}</span>
                        </div>
                        <div className="text-right">
                          <RiskBadge level={m.risk} />
                          <div className="text-[9px] text-slate-400 mt-0.5">{m.funding}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-5 border-t border-slate-100">
                    <div className="flex items-center gap-2 mb-4">
                      <FileText className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Current Protocol</span>
                    </div>
                    <div className="space-y-1">
                      {data.officialPanel.protocol.map((step, i) => (
                        <ProtocolStep key={i} step={step} isLast={i === data.officialPanel.protocol.length - 1} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Right: Challenger */}
            <section className="group">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md ring-1 ring-emerald-500/10">
                <div className="bg-emerald-50/30 px-5 py-3 border-b border-emerald-100/50 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span className="font-bold text-sm text-slate-700">Challenger Protocol</span>
                  </div>
                  <div className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                    Verified Independent
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="mb-6">
                    <h3 className="font-bold text-base text-slate-900">{data.challengerPanel.name}</h3>
                    <div className="text-xs text-slate-400 mt-0.5">Independent Consortium</div>
                    
                    {/* Funding Bar */}
                    <div className="mt-4">
                      <div className="flex justify-between items-end mb-1.5">
                        <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Industry Funding</span>
                        <span className="text-xs font-bold text-slate-900">{data.challengerPanel.fundingTotal}</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${data.challengerPanel.fundingPercent}%` }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {data.challengerPanel.members.map((m, i) => (
                      <div key={i} className="flex items-center justify-between text-xs">
                        <div>
                          <span className="font-semibold text-slate-700 block">{m.name}</span>
                          <span className="text-slate-400">{m.role}</span>
                        </div>
                        <div className="text-right">
                          <RiskBadge level={m.risk} />
                          <div className="text-[9px] text-slate-400 mt-0.5">{m.funding}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-5 border-t border-slate-100">
                    <div className="flex items-center gap-2 mb-4">
                      <Activity className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Proposed Protocol</span>
                    </div>
                    <div className="space-y-1">
                      {data.challengerPanel.protocol.map((step, i) => (
                        <ProtocolStep key={i} step={step} isLast={i === data.challengerPanel.protocol.length - 1} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Evidence Table */}
          <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h2 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <Database className="w-4 h-4 text-blue-500" />
                Literature Audit Trail
              </h2>
              <div className="text-[10px] font-medium text-slate-400 bg-white px-2 py-1 rounded border border-slate-200">
                {data.evidence.length} Cited Sources
              </div>
            </div>
            
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-3 border-b border-slate-200 w-[30%]">Source</th>
                  <th className="px-6 py-3 border-b border-slate-200 w-[35%] bg-red-50/30 border-l border-r border-slate-200/50">Official Verdict</th>
                  <th className="px-6 py-3 border-b border-slate-200 w-[35%] bg-emerald-50/30">Challenger Verdict</th>
                </tr>
              </thead>
              <tbody className="text-xs divide-y divide-slate-100">
                {data.evidence.map((row) => (
                  <tr key={row.id} className="group hover:bg-slate-50/80 transition-colors">
                    <td className="px-6 py-4 align-top">
                      <div className="font-bold text-slate-900 mb-0.5 text-sm">{row.title}</div>
                      <div className="text-slate-500 mb-2">{row.author}</div>
                      <div className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded border ${row.type === 'industry' ? 'bg-slate-100 border-slate-200 text-slate-500' : 'bg-blue-50 border-blue-100 text-blue-600'}`}>
                        {row.type === 'industry' ? <Users className="w-2.5 h-2.5" /> : <CheckCircle className="w-2.5 h-2.5" />}
                        <span className="text-[9px] font-semibold">{row.funder}</span>
                      </div>
                    </td>
                    
                    <td className="px-6 py-4 align-top bg-red-50/5 border-l border-r border-slate-100/50 group-hover:bg-red-50/20 transition-colors">
                      <div className="mb-2"><VerdictBadge status={row.official.status} /></div>
                      <p className="text-slate-600 leading-relaxed italic border-l-2 border-red-200 pl-2">"{row.official.comment}"</p>
                    </td>
                    
                    <td className="px-6 py-4 align-top bg-emerald-50/5 group-hover:bg-emerald-50/20 transition-colors">
                      <div className="mb-2"><VerdictBadge status={row.challenger.status} /></div>
                      <p className="text-slate-600 leading-relaxed italic border-l-2 border-emerald-200 pl-2">"{row.challenger.comment}"</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-center">
               <button className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 group">
                 Load Full Repository <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
               </button>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default App;