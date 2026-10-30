import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FormationsView from './components/FormationsView';
import TacticsView from './components/TacticsView';
import MatchupView from './components/MatchupView';
import TacticsBoard from './components/TacticsBoard';
import GlossaryView from './components/GlossaryView';
import QuizView from './components/QuizView';
import { Sparkles, Activity, ShieldCheck, Flame } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('formations');

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
      {/* 頂部導航欄 */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 頂部橫幅 Hero Banner */}
      <div className="relative border-b border-slate-800/80 bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950 py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* 背景裝飾光斑 */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              現代綠茵智慧 · 戰術幾何與空間美學
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              洞悉綠茵棋局，解構現代足球戰術密碼
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed">
              從經典 4-3-3 到 3-2-5 空間輪轉，從巴塞隆納傳控到重金屬高位逼搶。結合動態戰術球場、五通道半空間剖析與自定義戰術畫板，助你全方位掌握頂級足球哲學。
            </p>
          </div>

          {/* 右側快速統計標籤 */}
          <div className="grid grid-cols-2 gap-3 w-full md:w-auto">
            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-black text-white">5+ 主流</div>
                <div className="text-[11px] text-slate-400">現代戰術陣型</div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-black text-white">5 大哲學</div>
                <div className="text-[11px] text-slate-400">名帥戰術流派</div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-black text-white">20+ 術語</div>
                <div className="text-[11px] text-slate-400">特殊角色全書</div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-black text-white">PRO 級</div>
                <div className="text-[11px] text-slate-400">教練互動沙盒</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 主體模組內容區 */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'formations' && <FormationsView />}
        {activeTab === 'tactics' && <TacticsView />}
        {activeTab === 'matchup' && <MatchupView />}
        {activeTab === 'board' && <TacticsBoard />}
        {activeTab === 'glossary' && <GlossaryView />}
        {activeTab === 'quiz' && <QuizView />}
      </main>

      {/* 底部 Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-8 px-4 text-center text-xs text-slate-500 space-y-2">
        <p className="font-semibold text-slate-400">
          TactixMaster · 足球陣型與戰術解析系統
        </p>
        <p className="max-w-xl mx-auto italic text-slate-500">
          「足球是一種用腦子踢的運動，腳只不過是工具。」—— 約翰·克魯伊夫 (Johan Cruyff)
        </p>
      </footer>
    </div>
  );
}
