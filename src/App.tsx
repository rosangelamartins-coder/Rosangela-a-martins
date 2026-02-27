/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Brain, 
  Search, 
  ClipboardCheck, 
  DollarSign, 
  Heart, 
  PlusCircle, 
  MinusCircle, 
  ChevronRight,
  Info,
  Lightbulb,
  Users,
  MapPin,
  Loader2,
  ExternalLink,
  Scale,
  GraduationCap,
  Stethoscope,
  CheckCircle,
  RefreshCw,
  HelpCircle,
  Languages,
  ChevronDown
} from 'lucide-react';
import { GIFTED_CONTENT, LANGUAGES, Language } from './data/content';
import { GoogleGenAI } from "@google/genai";
import Markdown from 'react-markdown';

type SectionId = 'overview' | 'discovery' | 'testing' | 'costs' | 'parenting' | 'proscons' | 'local' | 'quiz';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState<SectionId>('overview');
  const [citySearch, setCitySearch] = useState('');
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [groundingLinks, setGroundingLinks] = useState<{ uri: string; title: string }[]>([]);
  const [showLangMenu, setShowLangMenu] = useState(false);

  const content = GIFTED_CONTENT[language];

  // Quiz State
  const [quizAnswers, setQuizAnswers] = useState<Record<number, boolean>>({});
  const [showQuizResult, setShowQuizResult] = useState(false);

  const navItems = [
    { id: 'overview', label: content.nav.overview, icon: Brain },
    { id: 'discovery', label: content.nav.discovery, icon: Search },
    { id: 'testing', label: content.nav.testing, icon: ClipboardCheck },
    { id: 'quiz', label: content.nav.quiz, icon: HelpCircle },
    { id: 'costs', label: content.nav.costs, icon: DollarSign },
    { id: 'parenting', label: content.nav.parenting, icon: Heart },
    { id: 'proscons', label: content.nav.proscons, icon: PlusCircle },
    { id: 'local', label: content.nav.local, icon: MapPin },
  ];

  const handleQuizAnswer = (questionId: number, answer: boolean) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const calculateQuizResult = () => {
    const score = Object.values(quizAnswers).filter(Boolean).length;
    return content.screeningQuiz.results.find(
      (r: any) => score >= r.minScore && score <= r.maxScore
    );
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setShowQuizResult(false);
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!citySearch.trim()) return;

    setIsSearching(true);
    setSearchResult(null);
    setGroundingLinks([]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Provide a comprehensive guide for gifted children resources in ${citySearch}. 
        Include:
        1. Local or national legislation/laws regarding gifted education in this region.
        2. 5 specific specialists or clinics (names and locations) that perform gifted/IQ testing in or near ${citySearch}.
        3. 5 highly-regarded schools (public or private) known for their gifted programs or knowledge in ${citySearch}.
        
        IMPORTANT: Respond entirely in ${LANGUAGES.find(l => l.code === language)?.label} language.
        Format the response using Markdown with clear headings.`,
        config: {
          tools: [{ googleSearch: {} }],
        },
      });

      setSearchResult(response.text || "No results found.");
      
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      if (chunks) {
        const links = chunks
          .filter(chunk => chunk.web)
          .map(chunk => ({ uri: chunk.web!.uri, title: chunk.web!.title }));
        setGroundingLinks(links);
      }
    } catch (error) {
      console.error("Search error:", error);
      setSearchResult("An error occurred while searching. Please try again.");
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Lightbulb className="text-white w-5 h-5" />
            </div>
            <h1 className="text-xl font-semibold tracking-tight">GiftedMind</h1>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id as SectionId)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeSection === item.id 
                      ? 'bg-indigo-50 text-indigo-600' 
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-100 hover:bg-gray-50 transition-all text-sm font-medium"
              >
                <Languages size={18} className="text-indigo-600" />
                <span className="hidden sm:inline">{LANGUAGES.find(l => l.code === language)?.flag}</span>
                <ChevronDown size={14} className={`transition-transform ${showLangMenu ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {showLangMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 overflow-hidden z-[60]"
                  >
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setShowLangMenu(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                          language === lang.code 
                            ? 'bg-indigo-50 text-indigo-600 font-bold' 
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar Navigation (Mobile) */}
          <div className="lg:hidden flex overflow-x-auto pb-4 gap-2 no-scrollbar">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id as SectionId)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-2xl border transition-all ${
                  activeSection === item.id
                    ? 'bg-white border-indigo-200 shadow-sm text-indigo-600'
                    : 'bg-white border-gray-100 text-gray-500'
                }`}
              >
                <item.icon size={18} />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Left Sidebar (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3 space-y-2">
            <div className="sticky top-28">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 px-4">{content.sidebar.navigation}</p>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id as SectionId)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
                    activeSection === item.id
                      ? 'bg-white shadow-sm text-indigo-600 ring-1 ring-black/5'
                      : 'text-gray-500 hover:bg-white/50 hover:text-gray-900'
                  }`}
                >
                  <item.icon size={20} className={activeSection === item.id ? 'text-indigo-600' : 'text-gray-400 group-hover:text-gray-600'} />
                  <span className="font-medium">{item.label}</span>
                  {activeSection === item.id && (
                    <motion.div layoutId="active-indicator" className="ml-auto">
                      <ChevronRight size={16} />
                    </motion.div>
                  )}
                </button>
              ))}
              
              <div className="mt-12 p-6 bg-indigo-600 rounded-3xl text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="font-semibold mb-2">{content.sidebar.needHelp}</h3>
                  <p className="text-indigo-100 text-sm leading-relaxed">
                    {content.sidebar.helpText}
                  </p>
                </div>
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
              </div>
            </div>
          </aside>

          {/* Content Area */}
          <section className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="space-y-8"
              >
                {activeSection === 'overview' && (
                  <div className="space-y-12">
                    <div className="max-w-2xl">
                      <h2 className="text-4xl font-bold tracking-tight mb-4">{content.overview.title}</h2>
                      <p className="text-xl text-gray-600 leading-relaxed">
                        {content.overview.description}
                      </p>
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold flex items-center gap-2">
                        <Brain className="text-indigo-600" size={24} />
                        {content.overview.traitsTitle}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {content.overview.traits.map((trait: string, i: number) => (
                          <div key={i} className="p-6 bg-white rounded-3xl border border-gray-100 flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                              <Info className="text-indigo-600 w-5 h-5" />
                            </div>
                            <p className="text-gray-700 font-medium leading-snug">{trait}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold flex items-center gap-2">
                        <ClipboardCheck className="text-indigo-600" size={24} />
                        {content.overview.iqTitle}
                      </h3>
                      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-gray-50 border-b border-gray-100">
                              <th className="px-6 py-4 text-sm font-bold text-gray-400 uppercase tracking-widest">{content.overview.iqHeaders.classification}</th>
                              <th className="px-6 py-4 text-sm font-bold text-gray-400 uppercase tracking-widest">{content.overview.iqHeaders.range}</th>
                              <th className="px-6 py-4 text-sm font-bold text-gray-400 uppercase tracking-widest">{content.overview.iqHeaders.prevalence}</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-50">
                            {content.overview.iqRanges.map((range: any, i: number) => (
                              <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4 font-bold text-gray-800">{range.label}</td>
                                <td className="px-6 py-4 text-indigo-600 font-mono font-bold">{range.range}</td>
                                <td className="px-6 py-4 text-gray-500 text-sm">{range.percent}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold flex items-center gap-2">
                        <PlusCircle className="text-indigo-600" size={24} />
                        {content.overview.factorsTitle}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {content.overview.factors.map((factor: any, i: number) => (
                          <div key={i} className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:border-indigo-200 transition-all">
                            <h4 className="text-xl font-bold mb-3 text-indigo-600">{factor.title}</h4>
                            <p className="text-gray-600 leading-relaxed">{factor.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'discovery' && (
                  <div className="space-y-8">
                    <h2 className="text-4xl font-bold tracking-tight">{content.discovery.title}</h2>
                    <div className="space-y-6">
                      {content.discovery.steps.map((step: any, i: number) => (
                        <div key={i} className="group relative pl-12 pb-8 last:pb-0">
                          {i !== content.discovery.steps.length - 1 && (
                            <div className="absolute left-[19px] top-10 bottom-0 w-px bg-gray-200" />
                          )}
                          <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white border-2 border-indigo-600 flex items-center justify-center z-10">
                            <span className="text-indigo-600 font-bold text-sm">{i + 1}</span>
                          </div>
                          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm group-hover:shadow-md transition-all">
                            <h3 className="text-xl font-bold mb-3">{step.subtitle}</h3>
                            <p className="text-gray-600 leading-relaxed">{step.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeSection === 'testing' && (
                  <div className="space-y-12">
                    <h2 className="text-4xl font-bold tracking-tight">{content.testing.title}</h2>
                    
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                            <span className="text-indigo-600 text-sm">01</span>
                          </div>
                          {content.testing.earlyTitle}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {content.testing.earlyChildhood.map((test: any, i: number) => (
                            <div key={i} className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:border-indigo-200 transition-all">
                              <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2">{test.ageRange}</div>
                              <h4 className="text-xl font-bold mb-2">{test.name}</h4>
                              <p className="text-gray-600 text-sm leading-relaxed">{test.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                            <span className="text-indigo-600 text-sm">02</span>
                          </div>
                          {content.testing.schoolTitle}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {content.testing.schoolAge.map((test: any, i: number) => (
                            <div key={i} className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:border-indigo-200 transition-all">
                              <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2">{test.ageRange}</div>
                              <h4 className="text-xl font-bold mb-2">{test.name}</h4>
                              <p className="text-gray-600 text-sm leading-relaxed">{test.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-8 bg-indigo-600 rounded-[2rem] text-white">
                      <h4 className="text-xl font-bold mb-4">{content.testing.footerTitle}</h4>
                      <p className="text-indigo-100 leading-relaxed mb-6">
                        {content.testing.footerText}
                      </p>
                    </div>
                  </div>
                )}

                {activeSection === 'costs' && (
                  <div className="space-y-8">
                    <h2 className="text-4xl font-bold tracking-tight">{content.costs.title}</h2>
                    <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                        {content.costs.details.map((item: any, i: number) => (
                          <div key={i} className="p-10 flex flex-col items-center text-center space-y-4">
                            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{item.category}</span>
                            <div className="text-4xl font-black text-indigo-600">{item.price}</div>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.info}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'parenting' && (
                  <div className="space-y-8">
                    <h2 className="text-4xl font-bold tracking-tight">{content.parenting.title}</h2>
                    <div className="grid grid-cols-1 gap-4">
                      {content.parenting.strategies.map((strategy: string, i: number) => (
                        <div key={i} className="p-6 bg-white rounded-2xl border border-gray-100 flex gap-4 items-center shadow-sm hover:translate-x-2 transition-transform">
                          <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center flex-shrink-0">
                            <Heart className="text-rose-500 w-6 h-6" />
                          </div>
                          <p className="text-gray-800 font-medium">{strategy}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeSection === 'proscons' && (
                  <div className="space-y-8">
                    <h2 className="text-4xl font-bold tracking-tight">{content.prosCons.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Pros */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-3 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full w-fit font-bold text-sm">
                          <PlusCircle size={18} />
                          {content.prosCons.prosTitle}
                        </div>
                        <div className="space-y-3">
                          {content.prosCons.pros.map((pro: string, i: number) => (
                            <div key={i} className="p-5 bg-white rounded-2xl border border-gray-100 flex gap-4 items-start shadow-sm">
                              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-emerald-700 text-xs font-bold">{i + 1}</span>
                              </div>
                              <p className="text-gray-700 text-sm font-medium leading-relaxed">{pro}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Cons */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-3 px-4 py-2 bg-rose-50 text-rose-700 rounded-full w-fit font-bold text-sm">
                          <MinusCircle size={18} />
                          {content.prosCons.consTitle}
                        </div>
                        <div className="space-y-3">
                          {content.prosCons.cons.map((con: string, i: number) => (
                            <div key={i} className="p-5 bg-white rounded-2xl border border-gray-100 flex gap-4 items-start shadow-sm">
                              <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-rose-700 text-xs font-bold">{i + 1}</span>
                              </div>
                              <p className="text-gray-700 text-sm font-medium leading-relaxed">{con}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'quiz' && (
                  <div className="space-y-8">
                    <div className="max-w-2xl">
                      <h2 className="text-4xl font-bold tracking-tight mb-4">{content.screeningQuiz.title}</h2>
                      <p className="text-xl text-gray-600 leading-relaxed">
                        {content.screeningQuiz.description}
                      </p>
                    </div>

                    {!showQuizResult ? (
                      <div className="space-y-6">
                        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                          <div className="p-8 space-y-8">
                            {content.screeningQuiz.questions.map((q: any) => (
                              <div key={q.id} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                                <p className="text-gray-800 font-medium flex-1">{q.text}</p>
                                <div className="flex gap-2">
                                  <button
                                    onClick={() => handleQuizAnswer(q.id, true)}
                                    className={`px-6 py-2 rounded-xl font-bold text-sm transition-all ${
                                      quizAnswers[q.id] === true
                                        ? 'bg-indigo-600 text-white shadow-md'
                                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                    }`}
                                  >
                                    {content.screeningQuiz.yes}
                                  </button>
                                  <button
                                    onClick={() => handleQuizAnswer(q.id, false)}
                                    className={`px-6 py-2 rounded-xl font-bold text-sm transition-all ${
                                      quizAnswers[q.id] === false
                                        ? 'bg-rose-600 text-white shadow-md'
                                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                    }`}
                                  >
                                    {content.screeningQuiz.no}
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="p-8 bg-gray-50 border-t border-gray-100 flex justify-end">
                            <button
                              disabled={Object.keys(quizAnswers).length < content.screeningQuiz.questions.length}
                              onClick={() => setShowQuizResult(true)}
                              className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-200 flex items-center gap-2"
                            >
                              <CheckCircle size={20} />
                              {content.screeningQuiz.seeResults}
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="space-y-8"
                      >
                        {(() => {
                          const result = calculateQuizResult();
                          const score = Object.values(quizAnswers).filter(Boolean).length;
                          return (
                            <div className="bg-white p-10 md:p-16 rounded-[3rem] border border-gray-100 shadow-xl text-center space-y-8 relative overflow-hidden">
                              <div className="absolute top-0 left-0 w-full h-2 bg-indigo-600" />
                              <div className="space-y-4">
                                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 text-indigo-600 mb-4">
                                  <Brain size={40} />
                                </div>
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">{content.screeningQuiz.resultTitle}</h3>
                                <h4 className="text-4xl font-black text-gray-900">{result?.title}</h4>
                                <div className="text-6xl font-black text-indigo-600">{score}/10</div>
                              </div>
                              
                              <div className="max-w-xl mx-auto space-y-6">
                                <p className="text-gray-600 text-lg leading-relaxed">
                                  {result?.text}
                                </p>
                                
                                <div className="p-8 bg-indigo-50 rounded-3xl space-y-2">
                                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">{content.screeningQuiz.iqRangeLabel}</span>
                                  <div className="text-3xl font-black text-indigo-700">{result?.potentialIQ}</div>
                                  <p className="text-[10px] text-indigo-300 italic">{content.screeningQuiz.iqDisclaimer}</p>
                                </div>
                              </div>

                              <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
                                <button
                                  onClick={resetQuiz}
                                  className="px-8 py-4 bg-gray-100 text-gray-600 rounded-2xl font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
                                >
                                  <RefreshCw size={20} />
                                  {content.screeningQuiz.retake}
                                </button>
                                <button
                                  onClick={() => setActiveSection('testing')}
                                  className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
                                >
                                  <ClipboardCheck size={20} />
                                  {content.screeningQuiz.learnTesting}
                                </button>
                              </div>
                            </div>
                          );
                        })()}
                      </motion.div>
                    )}
                  </div>
                )}

                {activeSection === 'local' && (
                  <div className="space-y-8">
                    <div className="max-w-2xl">
                      <h2 className="text-4xl font-bold tracking-tight mb-4">{content.local.title}</h2>
                      <p className="text-xl text-gray-600 leading-relaxed">
                        {content.local.description}
                      </p>
                    </div>

                    <form onSubmit={handleSearch} className="relative max-w-xl">
                      <input
                        type="text"
                        value={citySearch}
                        onChange={(e) => setCitySearch(e.target.value)}
                        placeholder={content.local.placeholder}
                        className="w-full pl-12 pr-32 py-4 bg-white rounded-2xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none shadow-sm transition-all"
                      />
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <button
                        type="submit"
                        disabled={isSearching}
                        className="absolute right-2 top-2 bottom-2 px-6 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                      >
                        {isSearching ? <Loader2 className="animate-spin" size={16} /> : content.local.search}
                      </button>
                    </form>

                    {isSearching && (
                      <div className="py-20 flex flex-col items-center justify-center text-center space-y-4">
                        <div className="w-16 h-16 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin" />
                        <p className="text-gray-500 font-medium">{content.local.searching}</p>
                      </div>
                    )}

                    {searchResult && !isSearching && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-8"
                      >
                        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm">
                          <div className="markdown-body prose prose-indigo max-w-none">
                            <Markdown>{searchResult}</Markdown>
                          </div>
                        </div>

                        {groundingLinks.length > 0 && (
                          <div className="space-y-4">
                            <h3 className="text-lg font-bold flex items-center gap-2">
                              <ExternalLink size={20} className="text-indigo-600" />
                              {content.local.sources}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {groundingLinks.map((link, i) => (
                                <a
                                  key={i}
                                  href={link.uri}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-4 bg-white border border-gray-100 rounded-xl hover:border-indigo-200 hover:shadow-sm transition-all flex items-center justify-between group"
                                >
                                  <span className="text-sm font-medium text-gray-700 truncate mr-4">{link.title || link.uri}</span>
                                  <ChevronRight size={16} className="text-gray-300 group-hover:text-indigo-600 transition-colors flex-shrink-0" />
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}

                    {!searchResult && !isSearching && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                        <div className="p-8 bg-white rounded-3xl border border-gray-100 text-center space-y-4">
                          <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto">
                            <Scale className="text-indigo-600" />
                          </div>
                          <h3 className="font-bold">{content.local.legislation}</h3>
                          <p className="text-sm text-gray-500">{content.local.legislationDesc}</p>
                        </div>
                        <div className="p-8 bg-white rounded-3xl border border-gray-100 text-center space-y-4">
                          <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto">
                            <Stethoscope className="text-emerald-600" />
                          </div>
                          <h3 className="font-bold">{content.local.specialists}</h3>
                          <p className="text-sm text-gray-500">{content.local.specialistsDesc}</p>
                        </div>
                        <div className="p-8 bg-white rounded-3xl border border-gray-100 text-center space-y-4">
                          <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto">
                            <GraduationCap className="text-amber-600" />
                          </div>
                          <h3 className="font-bold">{content.local.schools}</h3>
                          <p className="text-sm text-gray-500">{content.local.schoolsDesc}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-24 border-t border-gray-100 bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Lightbulb className="text-indigo-600 w-6 h-6" />
            <span className="text-xl font-bold tracking-tight">GiftedMind</span>
          </div>
          <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
            {content.footer.tagline}
          </p>
          <div className="mt-8 flex justify-center gap-6">
            <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors"><Users size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors"><Info size={20} /></a>
          </div>
          <p className="mt-8 text-xs text-gray-400">{content.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
