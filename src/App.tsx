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
  PlayCircle,
  RefreshCw,
  Languages,
  ChevronDown,
  ClipboardList
} from 'lucide-react';
import { GIFTED_CONTENT, LANGUAGES, Language } from './data/content';
import Markdown from 'react-markdown';
import GiftednessChecklist from './components/GiftednessChecklist';

type SectionId = 'overview' | 'discovery' | 'testing' | 'parenting' | 'proscons' | 'checklist' | 'schoolImprovement';

export default function App() {
  const [language, setLanguage] = useState<Language>('pt');
  const [activeSection, setActiveSection] = useState<SectionId>('overview');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [expandedSchoolSection, setExpandedSchoolSection] = useState<number | null>(null);
  const [expandedOverviewSection, setExpandedOverviewSection] = useState<number | null>(null);

  const content = GIFTED_CONTENT[language];

  const navItems = [
    { id: 'overview', label: content.nav.overview, icon: Brain },
    { id: 'discovery', label: content.nav.discovery, icon: Search },
    { id: 'testing', label: content.nav.testing, icon: ClipboardCheck },
    { id: 'checklist', label: content.nav.checklist, icon: ClipboardList },
    { id: 'schoolImprovement', label: content.nav.schoolImprovement, icon: GraduationCap },
    { id: 'proscons', label: content.nav.proscons, icon: PlusCircle },
    { id: 'parenting', label: content.nav.parenting, icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-[#F7FAF8] text-[#2D3A30] font-sans selection:bg-[#E2F0E9] selection:text-[#3D5245]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-[#E1EDE6] print:hidden">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#8FB996] rounded-lg flex items-center justify-center shadow-sm">
              <Lightbulb className="text-white w-5 h-5" />
            </div>
            <h1 className="text-xl font-serif font-bold tracking-tight text-[#3D5245]">Gifted Minds</h1>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id as SectionId)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeSection === item.id 
                      ? 'bg-[#E2F0E9] text-[#3D5245]' 
                      : 'text-[#627A6C] hover:text-[#2D3A30] hover:bg-[#F0FAF4]'
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
                className="flex items-center gap-2 px-3 py-2 rounded-xl border border-[#E1EDE6] hover:bg-white transition-all text-sm font-medium"
              >
                <Languages size={18} className="text-[#8FB996]" />
                <span className="hidden sm:inline">{LANGUAGES.find(l => l.code === language)?.flag}</span>
                <ChevronDown size={14} className={`transition-transform ${showLangMenu ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {showLangMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-[#E1EDE6] py-2 overflow-hidden z-[60]"
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
                            ? 'bg-[#E2F0E9] text-[#3D5245] font-bold' 
                            : 'text-[#627A6C] hover:bg-[#F7FAF8]'
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
          <div className="lg:hidden flex overflow-x-auto pb-4 gap-2 no-scrollbar print:hidden">
            {navItems.map((item) => (
                  <button
                key={item.id}
                onClick={() => setActiveSection(item.id as SectionId)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-2xl border transition-all ${
                  activeSection === item.id
                    ? 'bg-white border-[#C9DED2] shadow-sm text-[#3D5245]'
                    : 'bg-white border-[#E1EDE6] text-[#627A6C]'
                }`}
              >
                <item.icon size={18} />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Left Sidebar (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3 space-y-2 print:hidden">
            <div className="sticky top-28">
              <p className="text-xs font-bold text-[#A7BDB1] uppercase tracking-widest mb-6 px-4">{content.sidebar.navigation}</p>
              {navItems.map((item) => (
                  <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id as SectionId)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
                    activeSection === item.id
                      ? 'bg-white shadow-sm text-[#3D5245] ring-1 ring-black/5'
                      : 'text-[#627A6C] hover:bg-white/50 hover:text-[#2D3A30]'
                  }`}
                >
                  <item.icon size={20} className={activeSection === item.id ? 'text-[#8FB996]' : 'text-[#C9DED2] group-hover:text-[#A7BDB1]'} />
                  <span className="font-medium">{item.label}</span>
                  {activeSection === item.id && (
                    <motion.div layoutId="active-indicator" className="ml-auto">
                      <ChevronRight size={16} />
                    </motion.div>
                  )}
                </button>
              ))}
              
              <a 
                href="https://wa.me/5511942771412" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-12 p-8 bg-[#8FB996] rounded-[2rem] text-white relative overflow-hidden shadow-lg shadow-[#8FB996]/20 block hover:scale-[1.02] transition-transform cursor-pointer"
              >
                <div className="relative z-10">
                  <h3 className="font-serif text-lg font-bold mb-2">{content.sidebar.needHelp}</h3>
                  <p className="text-white/90 text-sm leading-relaxed opacity-90">
                    {content.sidebar.helpText}
                  </p>
                </div>
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
              </a>
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
                      <h2 className="text-5xl font-serif font-bold tracking-tight mb-4 text-[#2D3A30]">{content.overview.title}</h2>
                      <p className="text-xl text-[#4F6153] leading-relaxed font-serif italic">
                        {content.overview.description}
                      </p>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 gap-4">
                        {/* Section 1: Traits */}
                        <div className="bg-white rounded-[2rem] border border-[#EBF2EE] shadow-sm overflow-hidden">
                          <button
                            onClick={() => setExpandedOverviewSection(expandedOverviewSection === 0 ? null : 0)}
                            className="w-full p-8 flex items-center justify-between hover:bg-[#F7FAF8] transition-colors text-left"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-2xl bg-[#F0FAF4] flex items-center justify-center flex-shrink-0">
                                <Brain className="text-[#8FB996] w-5 h-5" />
                              </div>
                              <span className="text-xl font-serif font-bold text-[#3D5245]">{content.overview.traitsTitle}</span>
                            </div>
                            <ChevronDown 
                              size={20} 
                              className={`text-[#A7BDB1] transition-transform duration-300 ${expandedOverviewSection === 0 ? 'rotate-180 text-[#8FB996]' : 'rotate-0'}`} 
                            />
                          </button>
                          <AnimatePresence>
                            {expandedOverviewSection === 0 && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="border-t border-[#F7FAF8]"
                              >
                                <div className="p-8 space-y-6">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {content.overview.traits.map((trait: string, i: number) => (
                                      <div key={i} className="p-6 bg-[#F7FAF8]/50 rounded-[1.5rem] border border-[#EBF2EE] flex gap-4 items-start transition-all">
                                        <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                                          <Info className="text-[#8FB996] w-4 h-4" />
                                        </div>
                                        <p className="text-[#3D5245] font-medium leading-snug">{trait}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Section 2: IQ Ranges */}
                        <div className="bg-white rounded-[2rem] border border-[#EBF2EE] shadow-sm overflow-hidden">
                          <button
                            onClick={() => setExpandedOverviewSection(expandedOverviewSection === 1 ? null : 1)}
                            className="w-full p-8 flex items-center justify-between hover:bg-[#F7FAF8] transition-colors text-left"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-2xl bg-[#F0FAF4] flex items-center justify-center flex-shrink-0">
                                <ClipboardCheck className="text-[#8FB996] w-5 h-5" />
                              </div>
                              <span className="text-xl font-serif font-bold text-[#3D5245]">{content.overview.iqTitle}</span>
                            </div>
                            <ChevronDown 
                              size={20} 
                              className={`text-[#A7BDB1] transition-transform duration-300 ${expandedOverviewSection === 1 ? 'rotate-180 text-[#8FB996]' : 'rotate-0'}`} 
                            />
                          </button>
                          <AnimatePresence>
                            {expandedOverviewSection === 1 && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="border-t border-[#F7FAF8]"
                              >
                                <div className="p-8 space-y-6">
                                  <div className="bg-white rounded-[1.5rem] border border-[#EBF2EE] shadow-sm overflow-hidden">
                                    <table className="w-full text-left border-collapse">
                                      <thead>
                                        <tr className="bg-[#F7FAF8] border-b border-[#EBF2EE]">
                                          <th className="px-8 py-5 text-xs font-bold text-[#A7BDB1] uppercase tracking-widest">{content.overview.iqHeaders.classification}</th>
                                          <th className="px-8 py-5 text-xs font-bold text-[#A7BDB1] uppercase tracking-widest">{content.overview.iqHeaders.range}</th>
                                          <th className="px-8 py-5 text-xs font-bold text-[#A7BDB1] uppercase tracking-widest">{content.overview.iqHeaders.prevalence}</th>
                                        </tr>
                                      </thead>
                                      <tbody className="divide-y divide-[#F7FAF8]">
                                        {content.overview.iqRanges.map((range: any, i: number) => (
                                          <tr key={i} className="hover:bg-[#F0FAF4]/30 transition-colors">
                                            <td className="px-8 py-5 font-serif text-lg font-bold text-[#3D5245]">{range.label}</td>
                                            <td className="px-8 py-5 text-[#5E8B6F] font-mono font-bold">{range.range}</td>
                                            <td className="px-8 py-5 text-[#627A6C] text-sm">{range.percent}</td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                  <div className="p-6 bg-[#F0FAF4] rounded-2xl border border-[#D6E7DD]">
                                    <p className="text-sm text-[#3D5245] font-medium leading-relaxed italic">
                                      {content.overview.iqAverages}
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Section 3: Factors */}
                        <div className="bg-white rounded-[2rem] border border-[#EBF2EE] shadow-sm overflow-hidden">
                          <button
                            onClick={() => setExpandedOverviewSection(expandedOverviewSection === 2 ? null : 2)}
                            className="w-full p-8 flex items-center justify-between hover:bg-[#F7FAF8] transition-colors text-left"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-2xl bg-[#F0FAF4] flex items-center justify-center flex-shrink-0">
                                <PlusCircle className="text-[#8FB996] w-5 h-5" />
                              </div>
                              <span className="text-xl font-serif font-bold text-[#3D5245]">{content.overview.factorsTitle}</span>
                            </div>
                            <ChevronDown 
                              size={20} 
                              className={`text-[#A7BDB1] transition-transform duration-300 ${expandedOverviewSection === 2 ? 'rotate-180 text-[#8FB996]' : 'rotate-0'}`} 
                            />
                          </button>
                          <AnimatePresence>
                            {expandedOverviewSection === 2 && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="border-t border-[#F7FAF8]"
                              >
                                <div className="p-8 space-y-6">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {content.overview.factors.map((factor: any, i: number) => (
                                      <div key={i} className="p-8 bg-[#F7FAF8]/50 rounded-[1.5rem] border border-[#EBF2EE] shadow-sm hover:border-[#C9DED2] transition-all">
                                        <h4 className="text-xl font-serif font-bold mb-3 text-[#3D5245]">{factor.title}</h4>
                                        <p className="text-[#4F6153] leading-relaxed">{factor.text}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Section 4: Videos */}
                        <div className="bg-white rounded-[2rem] border border-[#EBF2EE] shadow-sm overflow-hidden">
                          <button
                            onClick={() => setExpandedOverviewSection(expandedOverviewSection === 3 ? null : 3)}
                            className="w-full p-8 flex items-center justify-between hover:bg-[#F7FAF8] transition-colors text-left"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-2xl bg-[#F0FAF4] flex items-center justify-center flex-shrink-0">
                                <PlayCircle className="text-[#8FB996] w-5 h-5" />
                              </div>
                              <span className="text-xl font-serif font-bold text-[#3D5245]">{content.overview.videosTitle}</span>
                            </div>
                            <ChevronDown 
                              size={20} 
                              className={`text-[#A7BDB1] transition-transform duration-300 ${expandedOverviewSection === 3 ? 'rotate-180 text-[#8FB996]' : 'rotate-0'}`} 
                            />
                          </button>
                          <AnimatePresence>
                            {expandedOverviewSection === 3 && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="border-t border-[#F7FAF8]"
                              >
                                <div className="p-8 space-y-6">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {(content.overview.videos || []).map((video: any, i: number) => (
                                      <a 
                                        key={i} 
                                        href={video.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="p-6 bg-[#F7FAF8]/50 rounded-[1.5rem] border border-[#EBF2EE] flex gap-4 items-center transition-all hover:border-[#8FB996] hover:shadow-md group"
                                      >
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-[#8FB996] group-hover:text-white transition-colors">
                                          <PlayCircle className="w-5 h-5" />
                                        </div>
                                        <span className="text-[#3D5245] font-medium leading-snug group-hover:text-[#2D3A30]">{video.title}</span>
                                        <ExternalLink size={14} className="ml-auto text-[#A7BDB1] group-hover:text-[#8FB996]" />
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Section 5: Legislation */}
                        <div className="bg-white rounded-[2rem] border border-[#EBF2EE] shadow-sm overflow-hidden">
                          <button
                            onClick={() => setExpandedOverviewSection(expandedOverviewSection === 4 ? null : 4)}
                            className="w-full p-8 flex items-center justify-between hover:bg-[#F7FAF8] transition-colors text-left"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-2xl bg-[#F0FAF4] flex items-center justify-center flex-shrink-0">
                                <Scale className="text-[#8FB996] w-5 h-5" />
                              </div>
                              <span className="text-xl font-serif font-bold text-[#3D5245]">{content.overview.legislationTitle}</span>
                            </div>
                            <ChevronDown 
                              size={20} 
                              className={`text-[#A7BDB1] transition-transform duration-300 ${expandedOverviewSection === 4 ? 'rotate-180 text-[#8FB996]' : 'rotate-0'}`} 
                            />
                          </button>
                          <AnimatePresence>
                            {expandedOverviewSection === 4 && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="border-t border-[#F7FAF8]"
                              >
                                <div className="p-8 space-y-6">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {(content.overview.legislationLinks || []).map((link: any, i: number) => (
                                      <a 
                                        key={i} 
                                        href={link.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="p-6 bg-[#F7FAF8]/50 rounded-[1.5rem] border border-[#EBF2EE] flex gap-4 items-center transition-all hover:border-[#8FB996] hover:shadow-md group"
                                      >
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-[#8FB996] group-hover:text-white transition-colors">
                                          <Scale className="w-5 h-5" />
                                        </div>
                                        <span className="text-[#3D5245] font-medium leading-snug group-hover:text-[#2D3A30]">{link.title}</span>
                                        <ExternalLink size={14} className="ml-auto text-[#A7BDB1] group-hover:text-[#8FB996]" />
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'discovery' && (
                  <div className="space-y-8">
                    <h2 className="text-5xl font-serif font-bold tracking-tight text-[#2D3A30]">{content.discovery.title}</h2>
                    <div className="space-y-6">
                      {content.discovery.steps.map((step: any, i: number) => (
                        <div key={i} className="group relative pl-12 pb-8 last:pb-0">
                          {i !== content.discovery.steps.length - 1 && (
                            <div className="absolute left-[19px] top-10 bottom-0 w-px bg-[#EBF2EE]" />
                          )}
                          <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white border-2 border-[#8FB996] flex items-center justify-center z-10 shadow-sm">
                            <span className="text-[#8FB996] font-bold text-sm">{i + 1}</span>
                          </div>
                          <div className="bg-white p-8 rounded-[2rem] border border-[#EBF2EE] shadow-sm group-hover:shadow-md transition-all">
                            <h3 className="text-xl font-serif font-bold mb-3 text-[#3D5245]">{step.subtitle}</h3>
                            <p className="text-[#4F6153] leading-relaxed">{step.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeSection === 'testing' && (
                  <div className="space-y-12">
                    <h2 className="text-5xl font-serif font-bold tracking-tight text-[#2D3A30]">{content.testing.title}</h2>
                    
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3 text-[#3D5245]">
                          <div className="w-8 h-8 rounded-full bg-[#F0FAF4] flex items-center justify-center">
                            <span className="text-[#8FB996] text-xs font-bold font-sans">01</span>
                          </div>
                          {content.testing.earlyTitle}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {content.testing.earlyChildhood.map((test: any, i: number) => (
                            <div key={i} className="p-8 bg-white rounded-[2rem] border border-[#EBF2EE] shadow-sm hover:border-[#C9DED2] transition-all">
                              <div className="text-[10px] font-bold text-[#8FB996] uppercase tracking-wider mb-2">{test.ageRange}</div>
                              <h4 className="text-xl font-serif font-bold mb-2 text-[#3D5245]">{test.name}</h4>
                              <p className="text-[#627A6C] text-sm leading-relaxed">{test.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3 text-[#3D5245]">
                          <div className="w-8 h-8 rounded-full bg-[#F0FAF4] flex items-center justify-center">
                            <span className="text-[#8FB996] text-xs font-bold font-sans">02</span>
                          </div>
                          {content.testing.schoolTitle}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {content.testing.schoolAge.map((test: any, i: number) => (
                            <div key={i} className="p-8 bg-white rounded-[2rem] border border-[#EBF2EE] shadow-sm hover:border-[#C9DED2] transition-all">
                              <div className="text-[10px] font-bold text-[#8FB996] uppercase tracking-wider mb-2">{test.ageRange}</div>
                              <h4 className="text-xl font-serif font-bold mb-2 text-[#3D5245]">{test.name}</h4>
                              <p className="text-[#627A6C] text-sm leading-relaxed">{test.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-10 bg-[#8FB996] rounded-[3rem] text-white shadow-lg shadow-[#8FB996]/20">
                      <h4 className="text-2xl font-serif font-bold mb-4">{content.testing.footerTitle}</h4>
                      <p className="text-white/90 leading-relaxed mb-8 italic">
                        {content.testing.footerText}
                      </p>
                      <div className="p-6 bg-white/10 rounded-2xl border border-white/20 text-xs italic text-white/50 font-medium">
                        {content.testing.disclaimer}
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'checklist' && (
                  <GiftednessChecklist content={content} />
                )}

                {activeSection === 'schoolImprovement' && (
                  <div className="space-y-8">
                    <div className="max-w-2xl">
                      <h2 className="text-5xl font-serif font-bold tracking-tight mb-4 text-[#2D3A30]">{content.schoolImprovement.title}</h2>
                      <p className="text-xl text-[#4F6153] leading-relaxed font-serif italic">
                        {content.schoolImprovement.subtitle}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {content.schoolImprovement.sections.map((section: any, i: number) => (
                        <div key={i} className="bg-white rounded-[2rem] border border-[#EBF2EE] shadow-sm overflow-hidden">
                          <button
                            onClick={() => setExpandedSchoolSection(expandedSchoolSection === i ? null : i)}
                            className="w-full p-8 flex items-center justify-between hover:bg-[#F7FAF8] transition-colors text-left"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-2xl bg-[#F0FAF4] flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="text-[#8FB996] w-5 h-5" />
                              </div>
                              <span className="text-lg font-serif font-bold text-[#3D5245]">{section.title}</span>
                            </div>
                            <ChevronDown 
                              size={20} 
                              className={`text-[#A7BDB1] transition-transform duration-300 ${expandedSchoolSection === i ? 'rotate-180 text-[#8FB996]' : 'rotate-0'}`} 
                            />
                          </button>
                          <AnimatePresence>
                            {expandedSchoolSection === i && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="border-t border-[#F7FAF8]"
                              >
                                <div className="p-8 bg-[#F0FAF4]/30 text-[#4F6153] leading-relaxed font-serif italic">
                                  {section.content}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeSection === 'proscons' && (
                  <div className="space-y-8">
                    <h2 className="text-5xl font-serif font-bold tracking-tight text-[#2D3A30]">{content.prosCons.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Pros */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-3 px-6 py-3 bg-[#E2F0E9] text-[#3D5245] rounded-full w-fit font-bold text-xs uppercase tracking-widest shadow-sm">
                          <PlusCircle size={18} className="text-[#8FB996]" />
                          {content.prosCons.prosTitle}
                        </div>
                        <div className="space-y-4">
                          {content.prosCons.pros.map((pro: string, i: number) => (
                            <div key={i} className="p-6 bg-white rounded-[2rem] border border-[#EBF2EE] flex gap-4 items-start shadow-sm hover:shadow-md transition-all">
                              <div className="w-8 h-8 rounded-full bg-[#E2F0E9] flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-[#3D5245] text-xs font-bold font-sans">{i + 1}</span>
                              </div>
                              <p className="text-[#4F6153] text-sm font-medium leading-relaxed">{pro}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Cons */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-3 px-6 py-3 bg-[#FAF3F3] text-[#634545] rounded-full w-fit font-bold text-xs uppercase tracking-widest shadow-sm">
                          <MinusCircle size={18} className="text-[#B98F8F]" />
                          {content.prosCons.consTitle}
                        </div>
                        <div className="space-y-4">
                          {content.prosCons.cons.map((con: string, i: number) => (
                            <div key={i} className="p-6 bg-white rounded-[2rem] border border-[#EBF2EE] flex gap-4 items-start shadow-sm hover:shadow-md transition-all">
                              <div className="w-8 h-8 rounded-full bg-[#FAF3F3] flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-[#634545] text-xs font-bold font-sans">{i + 1}</span>
                              </div>
                              <p className="text-[#4F6153] text-sm font-medium leading-relaxed">{con}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'parenting' && (
                  <div className="space-y-8">
                    <h2 className="text-5xl font-serif font-bold tracking-tight text-[#2D3A30]">{content.parenting.title}</h2>
                    <div className="grid grid-cols-1 gap-4">
                      {content.parenting.strategies.map((strategy: string, i: number) => (
                        <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-[#EBF2EE] flex gap-6 items-center shadow-sm hover:translate-x-2 transition-all">
                          <div className="w-14 h-14 rounded-full bg-[#F9F1EF] flex items-center justify-center flex-shrink-0 shadow-inner">
                            <Heart className="text-[#D1978F] w-7 h-7" />
                          </div>
                          <p className="text-[#3D5245] font-serif text-lg font-medium">{strategy}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-24 border-t border-[#E1EDE6] bg-white py-16 print:hidden">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Lightbulb className="text-[#8FB996] w-8 h-8" />
            <span className="text-2xl font-serif font-bold tracking-tight text-[#3D5245]">Altas Habilidades</span>
          </div>
          <p className="text-[#627A6C] text-sm max-w-md mx-auto leading-relaxed font-serif italic">
            {content.footer.tagline}
          </p>
          <div className="mt-10 flex justify-center gap-8">
            <a href="#" className="text-[#A7BDB1] hover:text-[#8FB996] transition-all transform hover:scale-110"><Users size={24} /></a>
            <a href="#" className="text-[#A7BDB1] hover:text-[#8FB996] transition-all transform hover:scale-110"><Info size={24} /></a>
          </div>
          <p className="mt-12 text-xs text-[#A7BDB1] font-medium tracking-widest uppercase">{content.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
