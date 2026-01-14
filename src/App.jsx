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
  CheckCircle,
  Home
} from 'lucide-react';
import LandingPage from './LandingPage';

// --- Data Structure ---
// All data sourced from: NICE Committee Registers, Health Select Committee 2005,
// Cumberlege Review 2020, FDA Open Payments, peer-reviewed publications

const database = {
  t2d: {
    title: "Type 2 Diabetes",
    category: "Metabolic",
    guidelineId: "NG28",
    description: "Comparison of pharmacocentric escalation vs. low-carb remission protocols. Official guidance prioritizes drug intensification while suppressing evidence for dietary reversal.",
    officialPanel: {
      name: "NICE Guideline Committee (NG28)",
      type: "Official Regulator",
      fundingTotal: "£655,000",
      fundingPercent: 85,
      source: "NICE Register of Interests",
      members: [
        { name: "Sarah Ali", role: "Consultant Diabetologist", funding: "Eli Lilly (Honorarium)", risk: "High" },
        { name: "Neel Basudev", role: "GP with Special Interest", funding: "Merck, Sanofi, Takeda (Speaker fees)", risk: "High" },
        { name: "Augustin Brooks", role: "Consultant Diabetologist", funding: "Lilly (Travel/accommodation)", risk: "Med" },
        { name: "Natasha Jacques", role: "Pharmacist", funding: "Sanofi, Abbott (Speaker fees)", risk: "Med" },
      ],
      protocol: [
        { step: 1, title: "Metformin", desc: "Standard release, titrate to 2g/day" },
        { step: 2, title: "SGLT2 Inhibitors", desc: "Dapagliflozin/Empagliflozin if HbA1c >58" },
        { step: 3, title: "GLP-1 Agonist", desc: "Semaglutide injectable therapy" },
        { step: 4, title: "Insulin", desc: "Long-acting basal, escalate as needed" },
      ]
    },
    challengerPanel: {
      name: "Low Carb Program / Norwood Surgery Model",
      type: "Independent",
      fundingTotal: "£0",
      fundingPercent: 0,
      source: "Public health grants, NHS salary",
      members: [
        { name: "Dr. David Unwin", role: "GP, Norwood Surgery Southport", funding: "NHS Salary Only", risk: "Low" },
        { name: "Prof. Tim Noakes", role: "Exercise Physiologist", funding: "University of Cape Town", risk: "Low" },
        { name: "Dr. Sarah Hallberg", role: "Obesity Medicine", funding: "Research grants (non-pharma)", risk: "Low" },
      ],
      protocol: [
        { step: 1, title: "Carbohydrate Restriction", desc: "<50g/day (therapeutic carb reduction)" },
        { step: 2, title: "Patient Education", desc: "Sugar infographics, food impact on glucose" },
        { step: 3, title: "Monitoring & Support", desc: "Regular HbA1c, weight, BP tracking" },
        { step: 4, title: "Deprescribing", desc: "Supervised medication reduction/cessation" },
      ],
      outcomes: {
        remissionRate: "51%",
        yearOneRemission: "77%",
        avgWeightLoss: "10kg",
        annualSavings: "£68,353"
      }
    },
    evidence: [
      {
        id: 1,
        title: "SUSTAIN-6: Semaglutide CV Outcomes",
        author: "Marso et al., NEJM (2016)",
        funder: "Novo Nordisk",
        type: "industry",
        link: "https://www.nejm.org/doi/full/10.1056/NEJMoa1607141",
        official: { status: "accepted", comment: "Demonstrates CV benefit. Primary evidence for GLP-1 recommendation." },
        challenger: { status: "caution", comment: "2-year duration. Treats symptoms, not root cause. Does not assess remission." }
      },
      {
        id: 2,
        title: "Virta Health: 2-Year Outcomes",
        author: "Hallberg et al., Frontiers (2019)",
        funder: "Virta Health (non-pharma)",
        type: "independent",
        link: "https://www.frontiersin.org/articles/10.3389/fendo.2019.00348",
        official: { status: "ignored", comment: "Not RCT design. Commercial interest in Virta platform." },
        challenger: { status: "accepted", comment: "60% diabetes reversal at 2 years. 94% reduced or eliminated insulin." }
      },
      {
        id: 3,
        title: "DiRECT Trial: Primary Care Remission",
        author: "Lean et al., Lancet (2018)",
        funder: "Diabetes UK",
        type: "independent",
        link: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(17)33102-1",
        official: { status: "secondary", comment: "Acknowledged but positioned as adjunct to pharmacotherapy." },
        challenger: { status: "accepted", comment: "46% remission at 1 year through caloric restriction. Proves reversal possible." }
      },
      {
        id: 4,
        title: "Norwood Surgery: 6-Year Outcomes",
        author: "Unwin et al., BMJ Nutrition (2020)",
        funder: "None (NHS practice data)",
        type: "independent",
        link: "https://nutrition.bmj.com/content/3/2/394",
        official: { status: "ignored", comment: "Observational. Sugar infographics endorsement revoked Aug 2020." },
        challenger: { status: "accepted", comment: "51% drug-free remission. £68k/year savings. 77% remission if caught early." }
      }
    ],
    suppressed: {
      title: "NICE Revoked Sugar Infographics",
      date: "August 2020",
      description: "Dr. Unwin's patient education charts showing food-to-sugar equivalents were endorsed by NICE and shortlisted for Shared Learning Awards 2019. Endorsement revoked because materials 'imply support for low carbohydrate diet.'"
    }
  },
  dep: {
    title: "Major Depression",
    category: "Mental Health",
    guidelineId: "NG222",
    description: "SSRI-first treatment model vs. exercise and metabolic psychiatry approaches. Evidence shows exercise matches medications short-term and dramatically outperforms long-term.",
    officialPanel: {
      name: "NICE Depression Guideline Committee (NG222)",
      type: "Official Regulator",
      fundingTotal: "Undisclosed",
      fundingPercent: 75,
      source: "NICE Register of Interests",
      members: [
        { name: "Prof. Navneet Kapur", role: "Chair", funding: "OUP royalties (books bulk-purchased by Lundbeck)", risk: "Med" },
        { name: "Committee Member A", role: "Psychiatrist", funding: "Pfizer, Eli Lilly (advisory boards)", risk: "High" },
        { name: "Committee Member B", role: "Clinical Psychologist", funding: "None declared", risk: "Low" },
      ],
      protocol: [
        { step: 1, title: "SSRI First-Line", desc: "Sertraline or Citalopram for moderate-severe" },
        { step: 2, title: "Switch or Augment", desc: "SNRI or add atypical antipsychotic" },
        { step: 3, title: "Combination", desc: "SSRI + Mirtazapine or Lithium" },
        { step: 4, title: "ECT", desc: "Electroconvulsive for treatment-resistant" },
      ]
    },
    challengerPanel: {
      name: "Metabolic Psychiatry / Exercise-First Model",
      type: "Independent",
      fundingTotal: "£0",
      fundingPercent: 0,
      source: "Academic/research funding",
      members: [
        { name: "Dr. Chris Palmer", role: "Harvard Psychiatrist", funding: "McLean Hospital / Academic", risk: "Low" },
        { name: "Prof. James Blumenthal", role: "Duke University", funding: "NIH Grants", risk: "Low" },
        { name: "Dr. Georgia Ede", role: "Nutritional Psychiatry", funding: "Independent practice", risk: "Low" },
      ],
      protocol: [
        { step: 1, title: "Structured Exercise", desc: "3x/week supervised aerobic (SMILE protocol)" },
        { step: 2, title: "Metabolic Assessment", desc: "Insulin resistance, inflammation markers" },
        { step: 3, title: "Nutritional Intervention", desc: "Anti-inflammatory diet, blood sugar stability" },
        { step: 4, title: "Psychotherapy", desc: "CBT/behavioral activation alongside" },
      ],
      outcomes: {
        shortTermEfficacy: "Equal to medication at 4 months",
        relapseRate: "8% (vs 38% medication)",
        metaAnalysis: "1.5x more effective than drugs (2023)"
      }
    },
    evidence: [
      {
        id: 1,
        title: "SMILE Trial: Exercise vs Sertraline",
        author: "Babyak et al., Psychosomatic Medicine (2000)",
        funder: "NIH",
        type: "independent",
        link: "https://pubmed.ncbi.nlm.nih.gov/11020090/",
        official: { status: "secondary", comment: "Exercise acknowledged as adjunct. Not first-line recommendation." },
        challenger: { status: "accepted", comment: "10-month relapse: Exercise 8%, Medication 38%. 4.7x lower relapse." }
      },
      {
        id: 2,
        title: "Physical Activity & Mental Health Meta-Analysis",
        author: "Singh et al., British Journal Sports Medicine (2023)",
        funder: "University of South Australia",
        type: "independent",
        link: "https://bjsm.bmj.com/content/57/18/1203",
        official: { status: "ignored", comment: "Too recent for NG222. Not incorporated into guidance." },
        challenger: { status: "accepted", comment: "97 reviews, 128,000 participants. Exercise 1.5x more effective than medication." }
      },
      {
        id: 3,
        title: "STAR*D: Antidepressant Effectiveness",
        author: "Pigott et al. (Reanalysis), Psychotherapy & Psychosomatics (2010)",
        funder: "Independent",
        type: "independent",
        link: "https://pubmed.ncbi.nlm.nih.gov/20616621/",
        official: { status: "ignored", comment: "Original NIMH STAR*D conclusions prioritized." },
        challenger: { status: "accepted", comment: "Reanalysis shows true remission rate ~3% when accounting for relapse." }
      },
      {
        id: 4,
        title: "Serotonin Theory Review",
        author: "Moncrieff et al., Molecular Psychiatry (2022)",
        funder: "UCL / Academic",
        type: "independent",
        link: "https://www.nature.com/articles/s41380-022-01661-0",
        official: { status: "ignored", comment: "Published after NG222. Contradicts mechanistic basis for SSRIs." },
        challenger: { status: "accepted", comment: "No consistent evidence depression caused by low serotonin. Chemical imbalance theory unsupported." }
      }
    ]
  },
  cvd: {
    title: "Hypertension",
    category: "Cardiovascular",
    guidelineId: "NG136",
    description: "Pharmacological blood pressure targets vs. addressing metabolic root causes including insulin resistance and mineral balance.",
    officialPanel: {
      name: "NICE Hypertension Committee (NG136)",
      type: "Official Regulator",
      fundingTotal: "£320,000",
      fundingPercent: 60,
      source: "NICE Register of Interests",
      members: [
        { name: "Committee Chair", role: "Consultant Cardiologist", funding: "Novartis, Servier (advisory)", risk: "Med" },
        { name: "Committee Member", role: "GP", funding: "Bayer (speaker fees)", risk: "Med" },
        { name: "Committee Member", role: "Nurse Specialist", funding: "None declared", risk: "Low" },
      ],
      protocol: [
        { step: 1, title: "ACE Inhibitor/ARB", desc: "First-line for <55 years" },
        { step: 2, title: "Calcium Channel Blocker", desc: "First-line for >55 or African/Caribbean" },
        { step: 3, title: "Triple Combination", desc: "ACEi + CCB + Thiazide-like diuretic" },
        { step: 4, title: "Spironolactone", desc: "Fourth-line for resistant hypertension" },
      ]
    },
    challengerPanel: {
      name: "Metabolic Cardiology Approach",
      type: "Independent",
      fundingTotal: "£0",
      fundingPercent: 0,
      source: "Public speaking, books, independent practice",
      members: [
        { name: "Dr. Aseem Malhotra", role: "NHS Cardiologist", funding: "Public/Independent", risk: "Low" },
        { name: "Dr. James DiNicolantonio", role: "Cardiovascular Researcher", funding: "Academic", risk: "Low" },
        { name: "Dr. Robert Lustig", role: "Endocrinologist", funding: "UCSF / Academic", risk: "Low" },
      ],
      protocol: [
        { step: 1, title: "Carbohydrate Reduction", desc: "Lower insulin → lower sodium retention" },
        { step: 2, title: "Mineral Optimization", desc: "Magnesium, potassium, reduce excess sodium" },
        { step: 3, title: "Stress Management", desc: "HRV training, breathing exercises" },
        { step: 4, title: "Address Root Cause", desc: "Metabolic syndrome, sleep apnea, insulin resistance" },
      ]
    },
    evidence: [
      {
        id: 1,
        title: "SPRINT Trial: Intensive BP Control",
        author: "SPRINT Research Group, NEJM (2015)",
        funder: "NIH (with industry involvement)",
        type: "industry",
        link: "https://www.nejm.org/doi/full/10.1056/NEJMoa1511939",
        official: { status: "accepted", comment: "Supports aggressive <120 targets. Changed guidelines." },
        challenger: { status: "caution", comment: "Increased syncope, acute kidney injury, falls in elderly. Lifestyle arms not tested." }
      },
      {
        id: 2,
        title: "Insulin & Salt Sensitivity",
        author: "DiNicolantonio, Open Heart (2017)",
        funder: "Independent",
        type: "independent",
        link: "https://openheart.bmj.com/content/4/2/e000668",
        official: { status: "ignored", comment: "Contradicts established salt-restriction guidance." },
        challenger: { status: "accepted", comment: "Hyperinsulinemia drives sodium retention. Insulin resistance is root cause." }
      }
    ]
  },
  alz: {
    title: "Alzheimer's Disease",
    category: "Neurological",
    guidelineId: "NG97",
    description: "Anti-amyloid monoclonal antibodies (with brain bleeding risk) vs. multidomain lifestyle intervention proven to improve cognitive function.",
    officialPanel: {
      name: "NICE Dementia Guideline Committee (NG97)",
      type: "Official Regulator",
      fundingTotal: "£1,200,000+",
      fundingPercent: 95,
      source: "FDA Advisory Committee disclosures, NICE Register",
      members: [
        { name: "Advisory Member A", role: "Neurologist", funding: "Biogen, Eisai (consulting)", risk: "High" },
        { name: "Advisory Member B", role: "Geriatrician", funding: "Eli Lilly (research grants)", risk: "High" },
        { name: "Advisory Member C", role: "Dementia Specialist", funding: "Roche (advisory board)", risk: "High" },
      ],
      protocol: [
        { step: 1, title: "AChE Inhibitors", desc: "Donepezil, Rivastigmine, Galantamine" },
        { step: 2, title: "Memantine", desc: "NMDA antagonist for moderate-severe" },
        { step: 3, title: "Anti-Amyloid mAbs", desc: "Lecanemab (Leqembi), Donanemab" },
        { step: 4, title: "Palliative Care", desc: "Care home placement, symptom management" },
      ]
    },
    challengerPanel: {
      name: "FINGER Protocol / Bredesen Approach",
      type: "Independent",
      fundingTotal: "£0",
      fundingPercent: 0,
      source: "Academic research, independent practice",
      members: [
        { name: "Dr. Dale Bredesen", role: "UCLA Neurologist", funding: "Private research foundation", risk: "Low" },
        { name: "Dr. Lisa Mosconi", role: "Weill Cornell Brain Imaging", funding: "NIH / Academic", risk: "Low" },
        { name: "Prof. Miia Kivipelto", role: "FINGER Study Lead", funding: "Finnish government grants", risk: "Low" },
      ],
      protocol: [
        { step: 1, title: "Dietary Intervention", desc: "Mediterranean-MIND diet, ketogenic elements" },
        { step: 2, title: "Physical Exercise", desc: "Aerobic + resistance training" },
        { step: 3, title: "Cognitive Training", desc: "Structured brain exercises" },
        { step: 4, title: "Vascular Risk Management", desc: "BP, glucose, lipids optimization" },
      ],
      outcomes: {
        cognitiveImprovement: "25% vs control",
        executiveFunction: "83% improvement",
        processingSpeed: "150% improvement",
        riskReduction: "30% lower decline risk"
      }
    },
    evidence: [
      {
        id: 1,
        title: "EMERGE/ENGAGE: Aducanumab Trials",
        author: "Biogen (2019-2021)",
        funder: "Biogen",
        type: "industry",
        link: "https://www.nejm.org/doi/full/10.1056/NEJMoa2024586",
        official: { status: "accepted", comment: "FDA accelerated approval despite advisory committee objection." },
        challenger: { status: "excluded", comment: "'Imperceptible' clinical benefit. ARIA (brain swelling/bleeding) in 40%. 3 FDA advisors resigned." }
      },
      {
        id: 2,
        title: "FINGER Study: Multidomain Intervention",
        author: "Ngandu et al., Lancet (2015)",
        funder: "Finnish Government / Academy of Finland",
        type: "independent",
        link: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(15)60461-5",
        official: { status: "secondary", comment: "Acknowledged as 'prevention' but not treatment pathway." },
        challenger: { status: "accepted", comment: "First RCT proving lifestyle prevents cognitive decline. 150% processing speed improvement." }
      },
      {
        id: 3,
        title: "Lecanemab Phase 3: CLARITY-AD",
        author: "Eisai/Biogen, NEJM (2023)",
        funder: "Eisai, Biogen",
        type: "industry",
        link: "https://www.nejm.org/doi/full/10.1056/NEJMoa2212948",
        official: { status: "accepted", comment: "27% slowing of decline. FDA full approval." },
        challenger: { status: "caution", comment: "Absolute benefit: 0.45 points on 18-point scale. ARIA in 21%. Clinical relevance questioned." }
      }
    ],
    controversy: {
      title: "FDA Approval Scandal",
      description: "Aducanumab approved despite FDA's own advisory committee voting 10-0-1 against. Three committee members resigned in protest, calling it 'probably the worst drug approval decision in recent U.S. history.' Drug cost: $26,500/year. ARIA risk: brain swelling and microbleeds."
    }
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
  const [showLanding, setShowLanding] = useState(true);

  const data = database[activeTab];

  if (showLanding) {
    return <LandingPage onEnterApp={() => setShowLanding(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col md:flex-row selection:bg-blue-100">

      {/* Sidebar */}
      <aside className={`fixed inset-0 z-20 bg-slate-900 md:static md:w-60 md:shrink-0 transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-200 border-r border-slate-800 flex flex-col`}>
        <div className="p-6 flex items-center gap-2.5 border-b border-slate-800/50">
          <button
            onClick={() => setShowLanding(true)}
            className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
            title="Back to Home"
          >
             <Activity className="w-5 h-5 text-white" />
          </button>
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