import React, { useEffect, useState } from 'react';
import { FORMATIONS_DATA } from '../data/formationsData';
import Pitch from './Pitch';
import { Shield, Zap, RefreshCw, Trophy, AlertTriangle, CheckCircle, Info, Sparkles, Pause, Play, RotateCcw } from 'lucide-react';

export default function FormationsView() {
  const [selectedFormationId, setSelectedFormationId] = useState('4-3-3');
  const [currentPhase, setCurrentPhase] = useState('normal'); // 'defense' | 'normal' | 'attack'
  const [showZones, setShowZones] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [isPhaseSimulationPlaying, setIsPhaseSimulationPlaying] = useState(false);

  const formation = FORMATIONS_DATA.find((f) => f.id === selectedFormationId) || FORMATIONS_DATA[0];
  const activePlayers = formation.phases[currentPhase] || formation.phases.normal;

  const handleSelectFormation = (id) => {
    setSelectedFormationId(id);
    setSelectedPlayer(null);
    setCurrentPhase('normal');
    setIsPhaseSimulationPlaying(false);
  };

  useEffect(() => {
    if (!isPhaseSimulationPlaying) return undefined;
    const phaseOrder = ['defense', 'normal', 'attack'];
    const timeoutId = window.setTimeout(() => {
      const currentIndex = phaseOrder.indexOf(currentPhase);
      setCurrentPhase(phaseOrder[(currentIndex + 1) % phaseOrder.length]);
    }, 1900);
    return () => window.clearTimeout(timeoutId);
  }, [currentPhase, isPhaseSimulationPlaying]);

  const selectPhase = (phase) => {
    setIsPhaseSimulationPlaying(false);
    setCurrentPhase(phase);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 陣型選擇卡片列表 */}
      <div className="flex flex-wrap gap-2.5 p-2 bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800">
        {FORMATIONS_DATA.map((item) => {
          const isActive = item.id === selectedFormationId;
          return (
            <button
              key={item.id}
              onClick={() => handleSelectFormation(item.id)}
              className={`flex-1 min-w-[140px] px-4 py-3 rounded-xl font-bold transition-all duration-300 flex flex-col items-center gap-1 ${
                isActive
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30 scale-102 border border-emerald-400'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700/60'
              }`}
            >
              <span className="text-base sm:text-lg tracking-wider">{item.name.split(' ')[0]}</span>
              <span className={`text-[11px] font-normal ${isActive ? 'text-emerald-100' : 'text-slate-400'}`}>
                {item.category}
              </span>
            </button>
          );
        })}
      </div>

      {/* 核心內容區 (球場 + 戰術詳解) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* 左側: 球場視圖與控制欄 */}
        <div className="lg:col-span-7 space-y-4">
          {/* 球場狀態控制欄 */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
            {/* 攻防階段切換 */}
            <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => selectPhase('defense')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition-all ${
                  currentPhase === 'defense'
                    ? 'bg-rose-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Shield className="w-3.5 h-3.5" />
                防守落位
              </button>
              <button
                onClick={() => selectPhase('normal')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition-all ${
                  currentPhase === 'normal'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <RefreshCw className="w-3.5 h-3.5" />
                常規轉換
              </button>
              <button
                onClick={() => selectPhase('attack')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition-all ${
                  currentPhase === 'attack'
                    ? 'bg-amber-500 text-slate-950 shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                全線壓上
              </button>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setIsPhaseSimulationPlaying((playing) => !playing)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold bg-sky-600 hover:bg-sky-500 text-white transition-colors"
                title="播放陣型在防守、轉換與進攻階段的站位變化"
              >
                {isPhaseSimulationPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    暫停跑位
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    播放陣型跑位
                  </>
                )}
              </button>
              {isPhaseSimulationPlaying && (
                <button
                  onClick={() => {
                    setIsPhaseSimulationPlaying(false);
                    setCurrentPhase('normal');
                  }}
                  className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                  title="停止模擬並重置到常規站位"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* 半空間 (Five-Corridor) 開關 */}
            <button
              onClick={() => setShowZones(!showZones)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium border transition-all ${
                showZones
                  ? 'bg-amber-400/20 text-amber-300 border-amber-400/50'
                  : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              {showZones ? '隱藏半空間' : '顯示五通道 (半空間)'}
            </button>
          </div>

          {/* 足球場本體 */}
          <Pitch
            players={activePlayers}
            selectedPlayerId={selectedPlayer?.id}
            onSelectPlayer={setSelectedPlayer}
            showZones={showZones}
            height="580px"
          />

          <div className="flex items-center justify-between text-xs text-slate-400 px-2">
            <span>💡 點擊球場上的任一球員，查看該位置在 {formation.name} 中的具體戰術職責。</span>
            <span className="text-emerald-400 font-medium">當前階段：{currentPhase === 'defense' ? '防守' : currentPhase === 'attack' ? '進攻' : '常規'}</span>
          </div>

          {/* 被選中球員的即時職責說明卡片 */}
          {selectedPlayer && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-slate-900 to-indigo-950/80 border border-indigo-500/40 shadow-xl animate-fadeIn flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-900 font-extrabold flex items-center justify-center shrink-0 text-base shadow-md">
                {selectedPlayer.num}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-white text-base">
                    {selectedPlayer.name} ({selectedPlayer.role})
                  </h4>
                  <span className="px-2 py-0.5 rounded text-[11px] bg-indigo-500/20 text-indigo-300 font-mono">
                    X: {selectedPlayer.x}% | Y: {selectedPlayer.y}%
                  </span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedPlayer.tip}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* 右側: 深度戰術剖析手冊 */}
        <div className="lg:col-span-5 space-y-6">
          {/* 陣型頭部概覽 */}
          <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                {formation.popularity}
              </span>
              <span className="text-xs text-slate-400">{formation.category}</span>
            </div>
            <h2 className="text-2xl font-black text-white tracking-tight">{formation.name}</h2>
            <p className="text-slate-300 text-sm leading-relaxed">{formation.shortDesc}</p>
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400">
              <strong className="text-amber-400">戰術核心哲學：</strong> {formation.philosophy}
            </div>
          </div>

          {/* 攻守優缺點分析 */}
          <div className="grid grid-cols-1 gap-4">
            {/* 優勢 */}
            <div className="bg-slate-900/80 rounded-xl p-5 border border-emerald-900/40 shadow-lg space-y-3">
              <h3 className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                陣型進攻優勢 (Tactical Strengths)
              </h3>
              <ul className="space-y-2">
                {formation.strengths.map((str, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 隱患與弱點 */}
            <div className="bg-slate-900/80 rounded-xl p-5 border border-rose-900/40 shadow-lg space-y-3">
              <h3 className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                防守弱點與隱患 (Tactical Vulnerabilities)
              </h3>
              <ul className="space-y-2">
                {formation.weaknesses.map((w, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 關鍵球員職責角色 */}
          <div className="bg-slate-900/80 rounded-xl p-5 border border-slate-800 shadow-lg space-y-3">
            <h3 className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
              <Info className="w-4 h-4 text-indigo-400" />
              關鍵核心位置與角色要求
            </h3>
            <div className="space-y-2.5">
              {formation.keyRoles.map((role, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 space-y-1">
                  <span className="text-xs font-bold text-amber-300">{role.role}</span>
                  <p className="text-xs text-slate-300 leading-relaxed">{role.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 歷史經典名隊傳奇 */}
          <div className="bg-slate-900/80 rounded-xl p-5 border border-slate-800 shadow-lg space-y-3">
            <h3 className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <Trophy className="w-4 h-4 text-amber-400" />
              歷史巔峰代表球隊 (Legendary Teams)
            </h3>
            <div className="space-y-2.5">
              {formation.famousTeams.map((team, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-white text-sm">{team.name}</h5>
                    <p className="text-xs text-slate-400">主教練：{team.coach}</p>
                  </div>
                  <span className="text-right text-[11px] font-medium text-emerald-400 max-w-[170px]">
                    {team.feat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
