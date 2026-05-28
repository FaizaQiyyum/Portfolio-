import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  Trophy, 
  Award, 
  Cpu, 
  Shield, 
  Flame, 
  Terminal, 
  X, 
  Send, 
  CheckCircle,
  Volume2,
  VolumeX,
  Sparkles,
  Search,
  Check,
  Code,
  MapPin,
  Calendar,
  Briefcase,
  User,
  GraduationCap
} from 'lucide-react';
import { PROFILE, ACHIEVEMENTS, EXPERIENCES, PROJECTS, SKILL_CATEGORIES } from './data';

export default function App() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [muted, setMuted] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  
  // Skill Compatibility Tool State (AccessJobs Inspo)
  const [selectedMatchSkills, setSelectedMatchSkills] = useState<string[]>(['React.js', 'Python', 'Django REST']);
  const availableMatchSkills = ['React.js', 'Python', 'Django REST', 'PostgreSQL', 'SQL Server', 'ChatGPT API', 'UI Usability'];

  // Intercept Secure Dispatch State (Contact Form)
  const [dispatchResult, setDispatchResult] = useState<string | null>(null);
  const [dispatchLoading, setDispatchLoading] = useState<boolean>(false);
  const [courierName, setCourierName] = useState('');
  const [courierObjective, setCourierObjective] = useState('Full-Time Remote Mission');
  const [courierMessage, setCourierMessage] = useState('');

  // Audio synthesis feedback (synthesizes page flaps, scribble clicks, and chime sounds)
  const playSoundEffect = (type: 'page' | 'pencil' | 'success') => {
    if (muted) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      if (type === 'page') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 0.35);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
      } else if (type === 'pencil') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1400, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.07, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      } else if (type === 'success') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.12); // E5
        osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.24); // G5
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
        osc.start();
        osc.stop(ctx.currentTime + 0.5);
      }
    } catch (e) {
      console.log("AudioContext state restricted or blocked on this device", e);
    }
  };

  const handlePageChange = (pIndex: number) => {
    if (pIndex < 0 || pIndex > 6) return;
    playSoundEffect('page');
    setCurrentPage(pIndex);
  };

  const handleCopyEmailAddress = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    playSoundEffect('success');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleToggleMatchSkill = (skill: string) => {
    playSoundEffect('pencil');
    setSelectedMatchSkills(prev => 
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const currentMatchRatio = Math.round(
    (selectedMatchSkills.length / availableMatchSkills.length) * 100
  );

  const handleSubmitDispatch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDispatchLoading(true);
    playSoundEffect('pencil');
    setTimeout(() => {
      setDispatchLoading(false);
      setDispatchResult(`Mission Logged! Dispatch sent directly onto Faiza's terminal nested mailbox. Response incoming beautifully! ✉️🔐`);
      playSoundEffect('success');
    }, 1200);
  };

  // Custom pages defining our notebook spreads
  const totalPages = 7;
  const pageTabs = [
    { title: '📔 Welcome', icon: '📔', color: 'bg-red-500 hover:bg-red-600' },
    { title: '👤 About Me', icon: '👤', color: 'bg-orange-500 hover:bg-orange-600' },
    { title: '💼 Experiences', icon: '💼', color: 'bg-amber-500 hover:bg-amber-600' },
    { title: '🏆 Hackathon', icon: '🏆', color: 'bg-emerald-500 hover:bg-emerald-600' },
    { title: '💻 Tech Skills', icon: '💻', color: 'bg-sky-500 hover:bg-sky-600' },
    { title: '🧩 Projects', icon: '🧩', color: 'bg-indigo-500 hover:bg-indigo-600' },
    { title: '✉️ Dispatch', icon: '✉️', color: 'bg-purple-500 hover:bg-purple-600' }
  ];

  return (
    <div className="min-h-screen text-slate-900 desk-tabletop px-2 sm:px-6 py-4 sm:py-8 font-sans antialiased relative selection:bg-red-600 selection:text-white">
      
      {/* Absolute Header: Ambient Controls */}
      <div className="max-w-7xl mx-auto mb-4 flex justify-between items-center bg-slate-900/90 border border-slate-800 p-3 sm:p-4 rounded-xl shadow-xl z-55 relative">
        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </div>
          <div>
            <h5 className="font-mono text-[10px] sm:text-xs tracking-wider font-extrabold text-red-500 uppercase flex items-center gap-1.5 leading-none">
              <Shield size={12} /> FAIZA QIYYUM // SCIENTIFIC NOTEBOOK // COMPILER ACTIVE
            </h5>
            <p className="text-[9px] text-slate-400 font-mono mt-0.5 leading-none sm:block hidden border-red-500/30">
              PORTFOLIO LOG REGISTER (4.0 FYP GPA DESIGN)
            </p>
          </div>
        </div>

        {/* Ambient controls block */}
        <div className="flex items-center gap-3 font-mono text-xs">
          <button
            onClick={() => {
              setMuted(!muted);
              playSoundEffect('pencil');
            }}
            className="p-2 bg-slate-850 hover:bg-slate-800 border border-slate-700/80 rounded-lg text-slate-300 transition-all flex items-center gap-2"
            title="Toggle Sound Effects"
            id="mute-toggle-btn"
          >
            {muted ? <VolumeX size={15} className="text-red-500" /> : <Volume2 size={15} className="text-green-500 animate-pulse" />}
            <span className="hidden md:inline">{muted ? "MUTED" : "HAPTIC ON"}</span>
          </button>
          
          <button
            onClick={handleCopyEmailAddress}
            className="bg-red-950/40 hover:bg-red-900/50 border border-red-505 border-red-700/80 text-red-400 text-[10px] sm:text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2.1 rounded-lg transition-colors"
            id="copy-email-btn"
          >
            {copiedEmail ? "EMAIL COPIED! 📬" : "faizaqiyyum121@gmail.com"}
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Binder / Notebook Spread Assembly */}
        <div className="w-full relative min-h-[750px] md:min-h-[820px] lg:min-h-[850px] flex items-stretch py-4">
          
          {/* LEFT DECORATION: Spilled Coffee Mug Ring & Pencil shadow */}
          <div className="coffee-stain top-12 left-6 z-0" />
          <div className="coffee-stain bottom-24 right-1/4 z-0 opacity-40" />

          {/* S-Grade Ledger Folder Shadow Overlay */}
          <div className="absolute inset-0 bg-[#06080a]/60 rounded-[36px] blur-2xl -z-10 mt-6" />

          {/* Open Notebook Spine Book Base */}
          <div className="w-full bg-[#3e2c1e] border-8 border-[#21160d] rounded-[24px] shadow-[0_30px_90px_rgba(0,0,0,0.9)] flex items-stretch relative overflow-hidden p-2 sm:p-5">
            
            {/* Ambient Shadow cast crossing the book pages (Light Source from top-left) */}
            <div className="shadow-cast-layer rounded-lg" />

            {/* Notebook Backing Inside Cover Margins */}
            <div className="absolute inset-2 bg-[#2d1e14] rounded-lg border-2 border-[#1c120a] -z-10 pointer-events-none" />

            {/* BINDER TABS - Stick out from the RIGHT edge of the notebook */}
            <div className="absolute right-0 top-16 bottom-16 w-14 z-50 flex flex-col justify-between pointer-events-none md:flex">
              {pageTabs.map((tab, idx) => {
                const isActive = currentPage === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handlePageChange(idx)}
                    className={`pointer-events-auto w-12 py-3.5 pr-2 pl-3 text-right text-xs font-extrabold uppercase font-mono tracking-widest text-white rounded-l-lg transition-all duration-300 transform flex items-center justify-center cursor-pointer shadow-md ${
                      tab.color
                    } ${
                      isActive 
                        ? 'translate-x-[-12px] w-14 border-y-2 border-l-2 border-slate-900 shadow-2xl scale-110' 
                        : 'translate-x-[4px] opacity-80 hover:translate-x-[-4px]'
                    }`}
                    title={tab.title}
                    id={`binder-tab-${idx}`}
                  >
                    <span className="text-base select-none">{tab.icon}</span>
                  </button>
                );
              })}
            </div>

            {/* Double Spiral Core Down the Vertical Center */}
            <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-12 z-40 pointer-events-none hidden md:flex flex-col justify-between py-6">
              {Array.from({ length: 18 }).map((_, i) => (
                <div key={i} className="flex justify-between items-center w-full px-1.5 h-6">
                  {/* Left Ring Slot */}
                  <div className="w-3 h-4 binder-slot-cut" />
                  {/* Metal Coiled Ring */}
                  <div className="w-9 h-3.5 binder-spiral-ring transform rotate-[-6deg] z-50 shadow-md" />
                  {/* Right Ring Slot */}
                  <div className="w-3 h-4 binder-slot-cut" />
                </div>
              ))}
            </div>

            {/* MAIN DAMP REGISTER CARD SHEETS */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 self-stretch rounded-md overflow-hidden relative z-20 min-h-[680px] sm:min-h-[740px]">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={`spread-${currentPage}`}
                  initial={{ opacity: 0, rotateY: 20 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: -20 }}
                  transition={{ duration: 0.45 }}
                  className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 col-span-2 items-stretch"
                >
                  
                  {/* ====================================
                      PAGE COLUMN A (LEFT / SEC 1)
                      ==================================== */}
                  <div className="relative scrapbook-grid-blue border-r-2 border-[#1e140c] shadow-[inset_-12px_0_30px_rgba(0,0,0,0.06)] p-5 sm:p-8 flex flex-col justify-between overflow-hidden">
                    <div className="journal-margin-line" />
                    
                    {/* Coffee stains / ink blot overlays */}
                    <div className="absolute top-[40%] right-10 w-24 h-24 rounded-full bg-orange-900/5 filter blur-xl pointer-events-none" />
                    
                    {/* Top status indicator on every page */}
                    <div className="flex justify-between items-center border-b border-dashed border-slate-300 pb-2 relative z-30">
                      <div className="flex items-center gap-1">
                        <span className="text-slate-400 font-mono text-[9px] uppercase tracking-wider font-extrabold pb-0.5">PAGE REGISTRY: 0{(currentPage * 2) + 1}</span>
                      </div>
                      <span className="text-slate-400 font-mono text-[9px] font-bold">FAIZA Q. SERIES</span>
                    </div>

                    {/* DYNAMIC VIEW FOR LEFT PAGES */}
                    <div className="my-6 flex-1 flex flex-col justify-center relative z-30">
                      
                      {/* PAGE 0: COVER SCRIPT LEFT */}
                      {currentPage === 0 && (
                        <div className="space-y-6 flex flex-col items-center">
                          {/* Polaroids showing anime female character */}
                          <div className="relative p-3.5 bg-white border border-slate-300 shadow-xl transform rotate-[-2deg] max-w-[280px] w-full mt-4">
                            {/* Decorative Binder Clip on top of the polaroid picture */}
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-10 h-8 opacity-90 filter drop-shadow z-20 bg-slate-400 rounded-b border border-slate-500 flex flex-col justify-end items-center pb-1">
                              <span className="w-5 h-5 rounded-full border border-slate-300 bg-slate-200 shadow-inner block" />
                            </div>
                            
                            <div className="aspect-[4/5] overflow-hidden bg-slate-900 border border-slate-200 relative">
                              <img
                                src="/src/assets/images/anime_profile_hero_1779733464290.png"
                                alt="Anime Female Coder Persona"
                                className="w-full h-full object-cover brightness-100"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-pink-500/5 mix-blend-overlay" />
                            </div>
                            
                            <div className="mt-3 text-center">
                              <span className="font-handwritten text-xl text-slate-800 font-bold block">Hi! I'm Faiza Qiyyum</span>
                              <div className="flex justify-center border-t border-dashed border-slate-300 pt-1 mt-1">
                                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-black">ROLE: AI ENGINEER</span>
                              </div>
                            </div>
                          </div>

                          {/* Welcome handwriting tag */}
                          <div className="text-center max-w-[325px] relative">
                            {/* Beautiful red arrow pointing down */}
                            <p className="font-handwritten text-2xl text-red-600 leading-tight">
                              Welcome to my scrapbook portfolio! Feel free to flip the tabs for my projects, Hackathon prizes, and interactive tools! ↓
                            </p>
                            
                            {/* SVG arrow vector simulated in cute hand drawing */}
                            <svg className="w-12 h-12 text-red-600 mx-auto mt-2 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                          </div>
                        </div>
                      )}

                      {/* PAGE 1: ABOUT ME LEFT (Polaroid frame with stamp edges pointing "me :)") */}
                      {currentPage === 1 && (
                        <div className="flex flex-col items-center justify-center space-y-6">
                          
                          {/* Polaroid Postage-Stamp Hybrid picture for page 1 */}
                          <div className="relative p-4 bg-white border-2 border-slate-300 shadow-2xl transform rotate-[2deg] max-w-[280px] w-full">
                            
                            {/* Cute handdrawn red arrow pointing pointing "me :)" exactly like the reference image */}
                            <div className="absolute -top-12 -right-8 w-18 h-18 text-red-600 pointer-events-none select-none z-30 font-handwritten text-3xl font-extrabold transform rotate-[15deg]">
                              <span>me :)</span>
                              <svg className="w-14 h-12 text-red-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" className="transform rotate-[-120deg]" />
                              </svg>
                            </div>

                            {/* Decorative tape on corners */}
                            <div className="dossier-tape absolute -top-4 -left-6 w-16 h-5 rotate-[-40deg] z-20" />
                            <div className="dossier-tape absolute -bottom-4 -right-6 w-16 h-5 rotate-[35deg] z-20" />

                            <div className="aspect-square bg-slate-950 border border-slate-300 relative overflow-hidden rounded-sm">
                              <img
                                src="/src/assets/images/tactical_anime_agent_1779735032501.png"
                                alt="Anime female character"
                                className="w-full h-full object-cover shadow-inner"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-yellow-500/5 mix-blend-color-burn" />
                            </div>

                            <div className="mt-3.5 flex items-center justify-between text-[10px] font-mono font-bold text-slate-500 uppercase px-1">
                              <span>ANIME_AGENT.JPG</span>
                              <span className="text-red-600 font-extrabold">VERIFIED ✔</span>
                            </div>
                          </div>

                          <div className="bg-amber-100/70 border border-amber-300 p-3.5 rounded-lg max-w-[290px] text-center transform rotate-[-1.5deg]" id="bio-sticky-note">
                            <h5 className="font-handwritten text-lg text-amber-900 font-extrabold">My Personal Bio Notes 📝</h5>
                            <p className="font-handwritten text-base text-amber-950 mt-1 leading-tight">
                              "I focus on simple solutions for tough problems. I like clean web pages and secure, fast backend code."
                            </p>
                          </div>

                        </div>
                      )}

                      {/* PAGE 2: EXPERIENCES LEFT (Seek & Sight Log / EcoVerum Logs) */}
                      {currentPage === 2 && (
                        <div className="space-y-6">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono bg-amber-200 text-amber-850 px-2 py-0.5 rounded font-black border border-amber-300">ROLE 01</span>
                            <span className="text-[10px] font-mono text-slate-500">FULL-TIME APPOINTMENT</span>
                          </div>
                          
                          {/* Seek Sight log styled like torn ledger paper */}
                          <div className="bg-[#f0f4f8] border-2 border-slate-300 p-5 rounded-lg shadow-md relative overflow-hidden" id="exp-seek-sight">
                            {/* Tape decoration */}
                            <div className="dossier-tape absolute -top-3 left-1/3 w-24 h-5 z-20" />
                            
                            <h3 className="font-display font-extrabold text-lg text-slate-900 leading-tight">
                              {EXPERIENCES[0].role}
                            </h3>
                            <p className="font-mono text-xs text-blue-700 font-bold mt-1">
                              {EXPERIENCES[0].company} ( US Interactive Learning )
                            </p>
                            <p className="text-[10px] font-mono text-slate-500 mt-0.5">
                              {EXPERIENCES[0].period} // Lahore (Remote)
                            </p>

                            <ul className="mt-3.5 space-y-2 text-xs text-slate-800 list-disc list-inside leading-snug font-medium">
                              {EXPERIENCES[0].points.map((pt, idx) => (
                                <li key={idx} className="marker:text-blue-500 font-sans">
                                  {pt}
                                </li>
                              ))}
                            </ul>

                            <div className="mt-4 pt-2 border-t border-dashed border-slate-300 flex flex-wrap gap-1.5">
                              {EXPERIENCES[0].techStack?.map((t, i) => (
                                <span key={i} className="text-[9px] font-mono bg-slate-200 px-2 py-0.5 rounded text-slate-700 font-bold border border-slate-350">
                                  ● {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* PAGE 3: HACKATHON LEFT (Newspaper Clipping Victory) */}
                      {currentPage === 3 && (
                        <div className="space-y-5">
                          {/* Newspaper Clipping styling for Hackathon */}
                          <div className="bg-[#f5f2eb] border-3 border-double border-amber-900/40 p-5 rounded shadow-lg relative transform rotate-[-1deg] overflow-hidden" id="hackathon-newspaper">
                            
                            {/* Distressed Red ink stamp */}
                            <div className="absolute top-4 right-4 dossier-stamp-red uppercase font-black text-xs px-2 py-1 select-none pointer-events-none transform rotate-[15deg]">
                              CHAMPIONS 🏆
                            </div>

                            <span className="text-[9px] font-mono text-slate-500 block border-b border-dashed border-slate-300 pb-1.5 uppercase font-bold">
                              ★ CLASSIFIED WIRE REPORT // GLOBAL ARENA ★
                            </span>
                            
                            <h2 className="font-display font-black text-xl text-amber-950 mt-3 pt-1 uppercase tracking-tight leading-none leading-tight">
                              FAIZA QIYYUM CLAIMS 1ST PLACE GOLDEN WIN!
                            </h2>
                            <p className="text-xs font-mono text-yellow-800 font-bold mt-2">
                              1st Place out of 163+ international candidates
                            </p>
                            
                            <p className="text-xs text-slate-800 font-sans mt-3.5 leading-relaxed font-semibold">
                              "Engineered <strong>Forum-AI-Lite</strong>, a groundbreaking AI chat summarization pipeline in a high-concurrency, 24-hour sprint. Competed against 163+ senior global developers to bring absolute glory back to our squad."
                            </p>

                            <div className="mt-4 bg-orange-100/80 border border-orange-200 p-3 rounded text-xs text-amber-900/90 font-handwritten text-lg leading-tight transform rotate-[1deg]">
                              ⭐ Ch chieftains comment: "The blazing fast summarize algorithm filters messy forum comments into clean interactive indices in seconds."
                            </div>
                          </div>
                        </div>
                      )}

                      {/* PAGE 4: TECHNICAL SKILLS LEFT (Strike & Sharp classes) */}
                      {currentPage === 4 && (
                        <div className="space-y-5">
                          <h3 className="font-display font-extrabold text-lg text-slate-900 uppercase border-b border-dashed border-slate-300 pb-2 flex items-center justify-between">
                            <span>⚡ STRIKE CLASS (AI CORE)</span>
                            <span className="font-handwritten text-red-600 text-lg">Elite Level</span>
                          </h3>

                          <div className="space-y-3.5">
                            {SKILL_CATEGORIES[0].items.map((item, id) => (
                              <div key={id} className="bg-white/80 border border-slate-300 p-3.5 rounded-lg relative hover:border-red-500/60 transition-all shadow-sm">
                                <span className="absolute top-2 right-2.5 bg-red-100 text-red-700 text-[8px] font-mono font-black border border-red-300 px-1.5 rounded uppercase tracking-wider">
                                  {item.level || 'Expert'}
                                </span>
                                <h4 className="font-display font-extrabold text-xs text-slate-900 group-hover:text-red-600 transition-colors uppercase">
                                  {item.name}
                                </h4>
                                <p className="text-[11px] text-slate-600 mt-1.5 font-sans leading-normal font-medium">
                                  {item.description}
                                </p>
                              </div>
                            ))}
                          </div>

                          <div className="pt-4 border-t border-dashed border-slate-300">
                            <h4 className="font-display font-extrabold text-sm text-slate-900 uppercase">CLASS REGISTRY NOTES</h4>
                            <p className="font-handwritten text-base text-red-600 block leading-tight mt-1">
                              "Fully capable of drafting zero-latency speech interfaces and custom contextual GPT feedback agents."
                            </p>
                          </div>
                        </div>
                      )}

                      {/* PAGE 5: PROJECTS LEFT (Selection Folder UI) */}
                      {currentPage === 5 && (
                        <div className="space-y-5">
                          <div className="border-b-2 border-dashed border-slate-300 pb-3">
                            <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest font-extrabold">// ACTIVE EXPERIMENTAL MODULES</span>
                            <h3 className="font-display font-black text-xl text-slate-900 uppercase tracking-tight">
                              PROJECT DIRECTORY
                            </h3>
                          </div>

                          <div className="space-y-3.5">
                            {PROJECTS.map((p, idx) => (
                              <div
                                key={p.id}
                                className="bg-white/90 border border-slate-350 p-4 rounded-xl shadow-sm relative group hover:border-indigo-500 transition-all cursor-pointer" id={`proj-left-${p.id}`}
                              >
                                {p.hackathonWinner && (
                                  <span className="absolute top-2 right-2 bg-emerald-100 text-emerald-850 text-[8px] border border-emerald-300 font-mono font-black px-1.5 rounded uppercase">
                                    ★ CHAMPION MODULE
                                  </span>
                                )}
                                {p.gpaIndicator && (
                                  <span className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-[8px] border border-blue-200 font-mono font-black px-1.5 rounded uppercase font-bold">
                                    🎓 4.0 GPA in FYP
                                  </span>
                                )}

                                <h4 className="font-display font-extrabold text-sm text-slate-900 uppercase tracking-wide group-hover:text-indigo-600">
                                  {p.title}
                                </h4>
                                <p className="text-[10px] font-mono text-indigo-700 font-semibold uppercase mt-0.5">
                                  {p.subtitle}
                                </p>
                                
                                <p className="text-[11px] text-slate-600 mt-2 font-sans leading-normal font-semibold">
                                  {p.description}
                                </p>

                                <div className="mt-3 flex flex-wrap gap-1">
                                  {p.techStack.slice(0, 4).map((tech, i) => (
                                    <span key={i} className="text-[9px] font-mono bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded border border-indigo-150">
                                      {tech}
                                    </span>
                                  ))}
                                </div>

                                <div className="mt-3.5 pt-3 border-t border-dashed border-slate-200 flex flex-wrap gap-3 text-[10px] font-mono">
                                  {p.demoUrl && p.demoUrl !== '#demo' && (
                                    <a
                                      href={p.demoUrl}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="text-teal-700 hover:text-teal-900 font-black flex items-center gap-1 cursor-pointer"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      🌐 Live ↗
                                    </a>
                                  )}
                                  {p.githubUrl && (
                                    <a
                                      href={p.githubUrl}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="text-purple-700 hover:text-purple-900 font-bold flex items-center gap-1 cursor-pointer"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      📂 Code ↗
                                    </a>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* PAGE 6: DISPATCH COURIER LEFT */}
                      {currentPage === 6 && (
                        <div className="space-y-5 pr-4">
                          <div className="bg-purple-100/50 border border-purple-300 p-4.5 p-4 rounded-xl shadow-sm">
                            <span className="text-[10px] font-mono text-purple-700 font-black block tracking-widest uppercase">// INCOMING TRANSMISSION ROUTER</span>
                            <h3 className="font-display font-extrabold text-base text-purple-950 uppercase mt-1">
                              SECURED COMMLINK DIRECTORY
                            </h3>
                            <p className="text-xs text-slate-700 mt-2 font-sans leading-relaxed font-semibold">
                              Looking for an expert Full-Stack / AI engineer for a specialized project or full-time remote role? Submit this parcel, or reach out directly to the encrypted channels.
                            </p>
                          </div>

                          <div className="space-y-4 pt-1 text-xs">
                            <div className="flex items-center gap-3 bg-white/70 border border-slate-300 p-3 rounded-xl shadow-sm hover:border-purple-500 transition-colors">
                              <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center text-white shrink-0">
                                <Mail size={18} />
                              </div>
                              <div>
                                <span className="text-[8.5px] font-mono text-slate-400 block tracking-widest uppercase">DIRECT EMAIL CARRIER</span>
                                <button onClick={handleCopyEmailAddress} className="font-mono text-[11px] bg-slate-100 hover:bg-slate-200 px-2 py-0.5 mt-0.5 rounded font-bold text-slate-800 border cursor-pointer">
                                  {PROFILE.email}
                                </button>
                              </div>
                            </div>

                            <a
                              href={PROFILE.github}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-3 bg-white/70 border border-slate-330 border-slate-300 p-3 rounded-xl shadow-sm hover:border-purple-500 transition-colors cursor-pointer"
                            >
                              <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-white shrink-0">
                                <Github size={18} />
                              </div>
                              <div>
                                <span className="text-[8.5px] font-mono text-slate-400 block tracking-widest uppercase">GITHUB NEST</span>
                                <span className="font-mono font-extrabold text-slate-800 text-[11px] flex items-center gap-1">
                                  /FaizaQiyyum <ExternalLink size={10} />
                                </span>
                              </div>
                            </a>

                            <a
                              href={PROFILE.linkedin}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-3 bg-white/70 border border-slate-330 border-slate-100 border-slate-300 p-3 rounded-xl shadow-sm hover:border-purple-500 transition-colors cursor-pointer"
                            >
                              <div className="w-10 h-10 rounded-lg bg-blue-700 flex items-center justify-center text-white shrink-0">
                                <Linkedin size={18} />
                              </div>
                              <div>
                                <span className="text-[8.5px] font-mono text-slate-400 block tracking-widest uppercase">LINKEDIN BLUE SHEET</span>
                                <span className="font-mono font-extrabold text-blue-800 text-[11px] flex items-center gap-1">
                                  /faizaqiyyum <ExternalLink size={10} />
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>
                      )}

                    </div>

                    {/* Left Page Numbering Indicator */}
                    <div className="flex justify-between items-center border-t border-slate-300 pt-2 text-[10.5px] font-mono relative z-30 font-bold">
                      <span className="pencil-blue">✔ verified parameters index</span>
                      <span>0{(currentPage * 2) + 1}</span>
                    </div>

                  </div>

                  {/* ====================================
                      PAGE COLUMN B (RIGHT / SEC 2)
                      ==================================== */}
                  <div className="relative scrapbook-grid-red shadow-[inset_12px_0_30px_rgba(0,0,0,0.06)] p-5 sm:p-8 flex flex-col justify-between overflow-hidden">
                    <div className="journal-margin-line" />

                    {/* Coffee overlay */}
                    <div className="absolute bottom-[30%] left-10 w-28 h-28 rounded-full bg-yellow-900/5 filter blur-xl pointer-events-none" />

                    {/* Top status header */}
                    <div className="flex justify-between items-center border-b border-dashed border-slate-300 pb-2 relative z-30">
                      <span className="text-slate-400 font-mono text-[9px]">DOCS REGISTER ID: FQ-121-S</span>
                      <span className="text-slate-400 font-mono text-[9px] uppercase tracking-wider font-extrabold">PAGE REGISTRY: 0{(currentPage * 2) + 2}</span>
                    </div>

                    {/* DYNAMIC VIEW FOR RIGHT PAGES */}
                    <div className="my-6 flex-1 flex flex-col justify-center relative z-30">
                      
                      {/* PAGE 0: COVER SCRIPT RIGHT */}
                      {currentPage === 0 && (
                        <div className="space-y-6">
                          
                          {/* "Port folio" large red cursive text circled in red exactly like the reference image */}
                          <div className="text-center relative py-4">
                            
                            <h1 className="font-display font-black text-4xl sm:text-5.5xl text-slate-900 uppercase tracking-tight relative z-10 leading-none">
                              <span className="font-handwritten text-red-600 text-6.5xl sm:text-8.5xl lowercase leading-none block transform rotate-[-8deg] mr-8">Port</span>
                              <span className="block mt-[-10px] tracking-[0.15em]">folio</span>
                            </h1>

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-32 border-3 border-dotted border-red-500 rounded-full rotate-[-4deg] opacity-60 z-0 pointer-events-none flex items-center justify-center">
                              <span className="font-handwritten text-xl text-red-500 mt-24 font-extrabold uppercase">2024-2026</span>
                            </div>
                          </div>

                          {/* Sticky note styled 01/ About menu pointing correctly exactly like reference */}
                          <div className="p-5 bg-[#fffeeb] border border-[#e5e4cc] rounded shadow-lg max-w-[280px] mx-auto transform rotate-[1deg] relative" id="quick-indices-notebook">
                            
                            {/* Tape layout element */}
                            <div className="dossier-tape absolute -top-4 right-1/4 w-20 h-5 rotate-[4deg] z-20" />
                            
                            <ul className="space-y-3 font-handwritten text-2.5xl text-red-700 leading-tight">
                              <li className="flex items-center gap-2 hover:translate-x-1 transition-transform cursor-pointer" onClick={() => handlePageChange(1)}>
                                <span>01/ About</span>
                              </li>
                              <li className="flex items-center gap-2 hover:translate-x-1 transition-transform cursor-pointer" onClick={() => handlePageChange(5)}>
                                <span>02/ Projects</span>
                              </li>
                              <li className="flex items-center gap-2 hover:translate-x-1 transition-transform cursor-pointer" onClick={() => handlePageChange(2)}>
                                <span>03/ Experience</span>
                              </li>
                              <li className="flex items-center gap-2 hover:translate-x-1 transition-transform cursor-pointer" onClick={() => handlePageChange(6)}>
                                <span>04/ Contact</span>
                              </li>
                            </ul>
                            
                            <div className="border-t border-dashed border-red-300 mt-4 pt-2 text-center text-[10px] font-mono text-slate-500 uppercase tracking-widest leading-none">
                              Rioport // folioo
                            </div>
                          </div>
                        </div>
                      )}

                      {/* PAGE 1: ABOUT ME RIGHT (Info Table) */}
                      {currentPage === 1 && (
                        <div className="space-y-5">
                          <div>
                            <span className="text-red-650 text-3xl font-handwritten font-black block transform rotate-[-3deg]">01/ About</span>
                            <p className="text-xs text-slate-700 font-semibold font-sans mt-2 leading-relaxed">
                              Hi, I'm Faiza Qiyyum. I am an AI Engineer currently working at a USA-based startup, where I lead the technical architecture for "Techie Tim's World" — an AI-focused literacy platform for neurodiverse children. I integrate OpenAI GPT-4o via Django REST API with Phaser.js, and build adaptive learning data pipelines using PostgreSQL and Supabase.
                            </p>
                          </div>

                          {/* Info specifications table styled like journal index entries */}
                          <div className="bg-white/80 border border-slate-300 rounded-lg p-4 font-mono text-xs text-slate-800 space-y-2.5 shadow-sm" id="about-table">
                            <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-1.5 font-semibold">
                              <span className="text-slate-500 uppercase text-[10px]">Location:</span>
                              <span className="text-slate-900 flex items-center gap-0.5"><MapPin size={11} className="text-red-500" /> {PROFILE.location}</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-1.5 font-semibold">
                              <span className="text-slate-500 uppercase text-[10px]">Hometown:</span>
                              <span className="text-slate-900">Lahore, Punjab</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-1.5 font-semibold">
                              <span className="text-slate-500 uppercase text-[10px]">Education:</span>
                              <span className="text-slate-900 text-right leading-none block">BSCS — Virtual University of Pakistan</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-1.5 font-semibold">
                              <span className="text-slate-500 uppercase text-[10px]">GPA standing:</span>
                              <span className="text-emerald-700 font-extrabold">Perfect 4/4 CGPA (FYP) + A Grade in CS Core</span>
                            </div>
                            <div className="flex justify-between items-start font-semibold">
                              <span className="text-slate-500 uppercase text-[10px] pt-1.5">Tech Sticker:</span>
                              <div className="flex flex-wrap gap-1 justify-end max-w-[200px]">
                                <span className="text-[8px] bg-slate-900 text-white font-mono px-1.5 py-0.5 rounded font-bold">Python</span>
                                <span className="text-[8px] bg-slate-900 text-white font-mono px-1.5 py-0.5 rounded font-bold">Django</span>
                                <span className="text-[8px] bg-sky-600 text-white font-mono px-1.5 py-0.5 rounded font-bold">React</span>
                                <span className="text-[8px] bg-purple-600 text-white font-mono px-1.5 py-0.5 rounded font-bold">Postgres</span>
                              </div>
                            </div>
                          </div>

                          {/* Soft Skills Section */}
                          <div className="space-y-2">
                            <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-extrabold">Soft Skills Directory:</h4>
                            <div className="flex flex-wrap gap-2 pt-0.5">
                              {['Visual Design', 'Research Skills', 'Design Thinking', 'Teamwork', 'Active Listening'].map((sk, idx) => (
                                <span key={idx} className="font-handwritten text-lg text-slate-800 bg-[#f9f5eb] border border-dashed border-slate-350 px-2.5 py-0.5 rounded transform rotate-[1.2deg] shadow-sm">
                                  ✓ {sk}
                                </span>
                              ))}
                            </div>
                          </div>

                        </div>
                      )}

                      {/* PAGE 2: EXPERIENCES RIGHT (EcoVerum & CoachBridge logs) */}
                      {currentPage === 2 && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono bg-emerald-200 text-emerald-850 px-2 py-0.5 rounded font-black border border-emerald-300">ROLE 02 &amp; 03</span>
                            <span className="text-[10px] font-mono text-slate-500">REMOTE PROJECTS LOG</span>
                          </div>

                          {/* EcoVerum Log */}
                          <div className="bg-[#fbfcfa] border border-slate-300 p-4.5 p-4 rounded-xl shadow-sm relative overflow-hidden" id="exp-ecoverum">
                            <h4 className="font-display font-extrabold text-sm text-slate-900 leading-tight">
                              {EXPERIENCES[1].role}
                            </h4>
                            <p className="font-mono text-[11px] text-green-700 font-bold">
                              {EXPERIENCES[1].company} ( Soil Heath Analytics Maps )
                            </p>
                            <p className="text-[9px] font-mono text-slate-550 text-slate-500">
                              {EXPERIENCES[1].period} // Lahore (Remote)
                            </p>
                            <p className="text-[11px] text-slate-600 mt-2 font-sans font-semibold leading-relaxed">
                              {EXPERIENCES[1].points[0]} / {EXPERIENCES[1].points[1]}
                            </p>
                          </div>

                          {/* CoachBridge Log */}
                          <div className="bg-[#fcfbfc] border border-slate-300 p-4.5 p-4 rounded-xl shadow-sm relative overflow-hidden" id="exp-coachbridge">
                            <h4 className="font-display font-extrabold text-sm text-slate-900 leading-tight">
                              {EXPERIENCES[2].role}
                            </h4>
                            <p className="font-mono text-[11px] text-purple-700 font-bold">
                              {EXPERIENCES[2].company} ( Remote QA Specialist )
                            </p>
                            <p className="text-[9px] font-mono text-slate-550 text-slate-500">
                              {EXPERIENCES[2].period} // Lahore (Remote)
                            </p>
                            <p className="text-[11px] text-slate-600 mt-2 font-sans font-semibold leading-relaxed">
                              Checking usability behaviors & performance delays for speech interfaces, reporting precise bug reproduction paths.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* PAGE 3: COMPUTER WORKSPACE BATTLE STATION (Enemy / Workstation illustration + Red stamps) */}
                      {currentPage === 3 && (
                        <div className="flex flex-col items-center justify-center space-y-6">
                          
                          {/* The Workstation / Enemy Picture generated */}
                          <div className="relative p-3 bg-white border border-slate-350 shadow-2xl transform rotate-[1.5deg] max-w-[280px] w-full">
                            
                            {/* Decorative Tape labels on corner exactly like reference */}
                            <div className="dossier-tape absolute -top-5 left-1/2 -translate-x-1/2 w-28 h-6 z-20" />
                            
                            <div className="aspect-[4/3] bg-slate-900 border border-slate-300 overflow-hidden relative">
                              <img
                                src="/src/assets/images/computer_desk_1779762281137.png"
                                alt="Developer desk workstation setup with clean code on display screen"
                                className="w-full h-full object-cover grayscale brightness-95 opacity-90"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-x-0 inset-y-0 border border-green-500/10 pointer-events-none" />
                            </div>

                            <div className="mt-2 text-center uppercase">
                              <span className="text-[8px] font-mono text-red-600 font-black block tracking-widest animate-pulse">
                                testing_terminal.exe
                              </span>
                            </div>
                          </div>

                          {/* Notes describing the battle station / enemy association */}
                          <div className="max-w-[325px] text-center relative font-handwritten text-xl text-red-600 leading-tight bg-red-50/50 border border-red-200/50 p-3 rounded" id="enemy-clipping-note">
                            <p>
                              "I love testing and finding bugs! This retro screen represents finding hard backend bugs and fixing them using clean code. ⚔️"
                            </p>
                          </div>

                        </div>
                      )}

                      {/* PAGE 4: TECHNICAL SKILLS RIGHT (Sharp & Boulder classes) */}
                      {currentPage === 4 && (
                        <div className="space-y-4">
                          
                          {/* Sharp Class */}
                          <div>
                            <h3 className="font-display font-extrabold text-sm text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 flex items-center justify-between">
                              <span>🗡️ SHARP CLASS (REACT DESIGNS)</span>
                              <span className="text-blue-600 font-handwritten text-base">Expert</span>
                            </h3>

                            <div className="grid grid-cols-2 gap-2 mt-2 font-mono text-[10px]">
                              {SKILL_CATEGORIES[1].items.slice(0, 4).map((item, id) => (
                                <div key={id} className="bg-white/80 border border-slate-205 border-slate-300 p-2 rounded relative">
                                  <span className="text-slate-900 font-extrabold block">{item.name}</span>
                                  <span className="text-[8px] text-slate-500 font-medium leading-none block mt-0.5">{item.level}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Boulder Class */}
                          <div>
                            <h3 className="font-display font-extrabold text-sm text-slate-900 uppercase tracking-widest border-b border-slate-205 border-slate-200 pb-1 flex items-center justify-between">
                              <span>🪨 BOULDER CLASS (DATABASE ROBUSTNESS)</span>
                              <span className="text-emerald-700 font-handwritten text-base">Verified</span>
                            </h3>

                            <div className="grid grid-cols-2 gap-2 mt-2 font-mono text-[10px]">
                              {SKILL_CATEGORIES[2].items.slice(0, 4).map((item, id) => (
                                <div key={id} className="bg-white/80 border border-slate-205 border-slate-300 p-2 rounded relative">
                                  <span className="text-slate-900 font-extrabold block">{item.name}</span>
                                  <span className="text-[8px] text-slate-500 font-medium leading-none block mt-0.5">{item.level}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Certified badge stamp */}
                          <div className="pt-3 border-t border-dashed border-slate-300 flex justify-between items-center relative select-none">
                            <div>
                              <span className="text-[8px] font-mono text-slate-400 block uppercase">verification badge</span>
                              <span className="font-handwritten text-slate-900 text-lg">Academic Board</span>
                            </div>
                            <div className="dossier-stamp-blue uppercase font-black text-[9px]">
                              FYP PASS (4.0 GPA)
                            </div>
                          </div>

                        </div>
                      )}

                      {/* PAGE 5: PROJECTS RIGHT (Interactive Fit Calculator Matcher) */}
                      {currentPage === 5 && (
                        <div className="space-y-4">
                          
                          {/* Interactive Section themed around "AccessJobs" Fit Matcher! */}
                          <div className="bg-[#f0f3f6] border border-slate-350 p-4.5 p-4 rounded-xl shadow-inner relative overflow-hidden" id="proj-fit-matcher">
                            
                            <div className="flex justify-between items-center border-b border-slate-300 pb-2 mb-3">
                              <span className="text-[9px] font-mono text-indigo-700 font-black tracking-widest uppercase block">
                                🔌 ACTIVE RE-FIT ALGORITHM MATRIX
                              </span>
                              <span className="text-[8px] bg-slate-900 text-white font-mono px-2 py-0.5 rounded font-bold">
                                ACCESSJOBS PROJ
                              </span>
                            </div>

                            <p className="text-xs text-slate-700 font-semibold font-sans mb-3.5 leading-snug">
                              Fit Simulator: Choose skill loadouts to query Faiza's alignment ratios in real-time calculations.
                            </p>

                            {/* Selectable Skill Loadouts */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {availableMatchSkills.map((skill) => {
                                const isSelected = selectedMatchSkills.includes(skill);
                                return (
                                  <button
                                    key={skill}
                                    onClick={() => handleToggleMatchSkill(skill)}
                                    className={`px-3 py-1.5 rounded-lg font-mono text-[10px] font-bold border cursor-pointer transition-all ${
                                      isSelected
                                        ? 'bg-indigo-600 text-white border-indigo-700 shadow'
                                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                                    }`}
                                  >
                                    {isSelected ? '✔ ' : '+ '} {skill}
                                  </button>
                                );
                              })}
                            </div>

                            {/* Live calculation meters */}
                            <div className="bg-white p-3.5 rounded-lg border border-slate-300 space-y-2.5 relative">
                              
                              <div className="flex justify-between items-center text-xs font-mono font-extrabold text-slate-800">
                                <span>COMPATIBILITY CONFIDENCE:</span>
                                <span className="text-indigo-700 text-sm font-black">{currentMatchRatio}%</span>
                              </div>

                              <div className="h-3 bg-slate-200 rounded overflow-hidden border border-slate-400">
                                <div
                                  className="h-full bg-indigo-600 transition-all duration-500"
                                  style={{ width: `${currentMatchRatio}%` }}
                                />
                              </div>

                              {/* Congratulations state when match is high/100% */}
                              {currentMatchRatio === 100 && (
                                <div className="absolute inset-0 bg-emerald-500/95 text-white flex flex-col justify-center items-center rounded-lg font-mono p-4 text-center border-2 border-emerald-600 z-30">
                                  <Sparkles size={18} className="text-yellow-300 animate-spin" />
                                  <span className="text-xs font-black block uppercase mt-1">PERFECT CADET CORPS MATCH</span>
                                  <p className="text-[10px] mt-1 leading-snug">
                                    All parameters aligned perfectly. Deploy Faiza directly to your remote team!
                                  </p>
                                  <button
                                    onClick={() => setSelectedMatchSkills(['React.js', 'Python'])}
                                    className="bg-white text-emerald-800 text-[10px] font-bold px-3 py-1 mt-2.5 rounded hover:bg-slate-100 transition-colors uppercase border cursor-pointer"
                                  >
                                    Reset Fit Model
                                  </button>
                                </div>
                              )}
                            </div>

                          </div>

                          <div className="text-center font-handwritten text-lg text-slate-650 leading-tight">
                            "I made the AccessJobs match project as my Final Year Project (FYP). The examiners loved it and gave me a perfect 4.0 GPA for this project! 🎓"
                          </div>

                        </div>
                      )}

                      {/* PAGE 6: DISPATCH COURIER FORM RIGHT */}
                      {currentPage === 6 && (
                        <div className="space-y-4">
                          
                          {/* Packing Slip Dispatch Carrier styled form */}
                          <form onSubmit={handleSubmitDispatch} className="bg-[#fbfaee] border-2 border-slate-350 p-4 rounded shadow-md relative overflow-hidden" id="courier-cargo-form">
                            
                            {/* Paper guidelines and lines */}
                            <div className="absolute top-2 right-4 text-[9px] font-mono text-slate-400 uppercase tracking-widest leading-none font-bold">
                              PARCEL INDEX: AQ-121.C
                            </div>

                            <h4 className="font-display font-black text-sm text-slate-900 border-b border-slate-300 pb-1.5 uppercase tracking-wide">
                              ✉ DISPATCH SECURED DIRECTIVE ✉
                            </h4>

                            <div className="space-y-3.5 mt-3 text-xs font-mono text-slate-800 font-semibold mb-2">
                              
                              <div>
                                <label className="block text-[10px] uppercase text-slate-500 mb-1">COMMANDER NAME / AGENCY:</label>
                                <input
                                  type="text"
                                  required
                                  value={courierName}
                                  onChange={(e) => {
                                    setCourierName(e.target.value);
                                    playSoundEffect('pencil');
                                  }}
                                  placeholder="e.g. Director Bowman / SeekSight"
                                  className="w-full bg-white border border-slate-300 px-2.5 py-1.5 rounded text-xs select-text text-indigo-900 focus:outline-none focus:border-purple-500 font-sans"
                                />
                              </div>

                              <div>
                                <label className="block text-[10px] uppercase text-slate-500 mb-1">CONTRACT MISSION OBJECTIVE:</label>
                                <select
                                  value={courierObjective}
                                  onChange={(e) => {
                                    setCourierObjective(e.target.value);
                                    playSoundEffect('pencil');
                                  }}
                                  className="w-full bg-white border border-slate-300 px-2.5 py-1.5 rounded text-xs text-slate-800 focus:outline-none focus:border-purple-500"
                                >
                                  <option value="Full-Time Remote Mission">Full-Time Remote software dev</option>
                                  <option value="Strategic Joint Venture">Joint Venture API project</option>
                                  <option value="Consulting Assessment Audit">Usability / QA consult</option>
                                </select>
                              </div>

                              <div>
                                <label className="block text-[10px] uppercase text-slate-500 mb-1">CRYPTOGRAPHIC TARGET SPECIFICATIONS:</label>
                                <textarea
                                  required
                                  rows={2.5}
                                  value={courierMessage}
                                  onChange={(e) => {
                                    setCourierMessage(e.target.value);
                                    playSoundEffect('pencil');
                                  }}
                                  placeholder="Type mission coordinates or budget requirements..."
                                  className="w-full bg-white border border-slate-300 px-2.5 py-1.5 rounded text-xs select-text text-indigo-900 focus:outline-none focus:border-purple-500 font-sans"
                                />
                              </div>

                              <button
                                type="submit"
                                disabled={dispatchLoading}
                                className="w-full bg-purple-750 bg-purple-600 hover:bg-purple-700 text-white font-mono text-xs font-black uppercase tracking-wider py-2 rounded-lg border border-purple-505 border-purple-800 shadow transition-colors cursor-pointer"
                              >
                                {dispatchLoading ? "TRANSMITTING PARCEL DATA..." : "🚀 DISPATCH COURIER PROTOCOL"}
                              </button>

                            </div>

                            {/* Successful dynamic stamp popup over form! */}
                            {dispatchResult && (
                              <div className="absolute inset-0 bg-[#fffdf0] text-purple-950 p-4 flex flex-col justify-center items-center text-center font-mono border-2 border-purple-500 z-30">
                                <CheckCircle size={28} className="text-purple-600 animate-bounce" />
                                <span className="font-black block uppercase text-sm mt-2">PARCEL DISPATCH CODE CLEARED ✔</span>
                                <p className="text-xs mt-1.5 leading-relaxed max-w-[240px] font-sans font-semibold">
                                  Greetings, <strong>{courierName || 'Commander'}</strong>! Your secure parcel was stamped & launched. Faiza will reply instantly back to your post office!
                                </p>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setDispatchResult(null);
                                    setCourierName('');
                                    setCourierMessage('');
                                  }}
                                  className="bg-purple-900 text-white text-[10px] font-bold px-3 py-1.5 mt-3 rounded hover:bg-purple-800 cursor-pointer uppercase border border-purple-700"
                                >
                                  Send another dispatch
                                </button>
                              </div>
                            )}

                          </form>
                        </div>
                      )}

                    </div>

                    {/* Right Page Numbering Indicator */}
                    <div className="flex justify-between items-center border-t border-slate-300 pt-2 text-[10.5px] font-mono relative z-30 font-bold">
                      <span>0{(currentPage * 2) + 2}</span>
                      <span className="pencil-red">✔ index 2024-2026</span>
                    </div>

                  </div>

                </motion.div>
              </AnimatePresence>

            </div>

          </div>

        </div>

        {/* Notebook Pagination Footer Controls */}
        <div className="mt-6 flex items-center justify-between w-full max-w-lg bg-slate-900/95 border border-slate-800 p-2.5 rounded-2xl shadow-xl z-30 font-mono text-xs">
          <button
            onClick={() => handlePageChange(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            className="p-2 bg-slate-850 hover:bg-slate-800 border border-slate-700 hover:text-white rounded-lg text-slate-300 disabled:opacity-30 cursor-pointer flex items-center gap-1 transition-all"
            id="prev-page-btn"
          >
            <ChevronLeft size={16} />
            <span>PREV</span>
          </button>

          <span className="text-slate-400 font-extrabold select-none">
            PAGE {(currentPage * 2) + 1}-{(currentPage * 2) + 2} OF {totalPages * 2}
          </span>

          <button
            onClick={() => handlePageChange(Math.min(totalPages - 1, currentPage + 1))}
            disabled={currentPage === totalPages - 1}
            className="p-2 bg-slate-850 hover:bg-slate-800 border border-slate-700 hover:text-white rounded-lg text-slate-300 disabled:opacity-30 cursor-pointer flex items-center gap-1 transition-all"
            id="next-page-btn"
          >
            <span>NEXT</span>
            <ChevronRight size={16} />
          </button>
        </div>

      </div>

      {/* Retro desktop props scatter at the very bottom strictly layout decoration */}
      <footer className="mt-16 text-center select-none z-10 relative max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800/60 pt-6 text-slate-500 font-mono text-[10px]">
        <div className="flex items-center gap-2">
          <span>● Coded with ☕ in Lahore, Pakistan</span>
          <span className="text-slate-700">|</span>
          <span>● FYP GPA (4.0/4.0)</span>
        </div>
        <div>
          <span>FAIZA QIYYUM © 2026 // ALL SYSTEM PROTOCOLS CLEARED</span>
        </div>
      </footer>

    </div>
  );
}
