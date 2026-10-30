import React, { useState } from 'react';
import { FORMATIONS_DATA } from '../data/formationsData';
import { MATCHUP_DATA } from '../data/matchupData';
import Pitch from './Pitch';
import { Swords, Compass, ShieldAlert, Lightbulb } from 'lucide-react';

export default function MatchupView() {
  const [redFormationId, setRedFormationId] = useState('4-3-3');
  const [blueFormationId, setBlueFormationId] = useState('4-2-3-1');

  const redFormation = FORMATIONS_DATA.find((f) => f.id === redFormationId) || FORMATIONS_DATA[0];
  const blueFormation = FORMATIONS_DATA.find((f) => f.id === blueFormationId) || FORMATIONS_DATA[1];

  // 取得兩陣型對決數據（如果順序反了也支持對稱查找）
  const matchupKey = `${redFormationId}_vs_${blueFormationId}`;
  const reverseKey = `${blueFormationId}_vs_${redFormationId}`;
  const matchup = MATCHUP_DATA[matchupKey] || MATCHUP_DATA[reverseKey] || {
    title: `${redFormation.name} vs ${blueFormation.name}`,
    midfieldBattle: `紅方 (${redFormation.name}) 與藍方 (${blueFormation.name}) 在中場的空間絞殺。需特別注意雙方中場人數差異與二點球爭奪。`,
    wideBattle: `邊路空間的爭奪，觀察雙方邊後衛與翼衛壓上的時機與身後防守保護。`,
    keyAdvantage: `取決於兩隊執行戰術的紀律性與關鍵球員（如後腰與邊鋒）的一對一個人爆發力。`,
    tacticalTip: `針對對手弱側進行快速縱深轉移，拉扯防守密集區。`
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 陣型對決選擇器 */}
      <div className="bg-slate-900/80 rounded-2xl p-6 border border-slate-800 shadow-xl space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/40">
              <Swords className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white">陣型剋制與攻防對決棋盤</h2>
              <p className="text-xs sm:text-sm text-slate-400">
                選擇兩支交鋒球隊的陣型，系統將即時模擬球場碰撞與戰術優劣勢
              </p>
            </div>
          </div>
        </div>

        {/* 兩隊陣型選擇控制區 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* 紅隊 (守備方/下方) */}
          <div className="p-4 rounded-xl bg-red-950/30 border border-red-900/50 space-y-3">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-red-400 font-bold text-sm">
                <span className="w-3 h-3 rounded-full bg-red-500 shadow-sm shadow-red-500" />
                紅隊陣型 (主隊 / 下方)
              </span>
              <span className="text-xs text-red-300 font-mono">{redFormation.category}</span>
            </div>
            <select
              value={redFormationId}
              onChange={(e) => setRedFormationId(e.target.value)}
              className="w-full bg-slate-900 border border-red-800 text-white rounded-lg px-4 py-2.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {FORMATIONS_DATA.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.name}
                </option>
              ))}
            </select>
          </div>

          {/* 藍隊 (客隊/上方) */}
          <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-900/50 space-y-3">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                <span className="w-3 h-3 rounded-full bg-blue-500 shadow-sm shadow-blue-500" />
                藍隊陣型 (客隊 / 上方)
              </span>
              <span className="text-xs text-blue-300 font-mono">{blueFormation.category}</span>
            </div>
            <select
              value={blueFormationId}
              onChange={(e) => setBlueFormationId(e.target.value)}
              className="w-full bg-slate-900 border border-blue-800 text-white rounded-lg px-4 py-2.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {FORMATIONS_DATA.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* 雙隊對抗球場 + 戰術剋制分析 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* 左側: 雙隊在同一球場的對撞模擬 */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
            <span className="flex items-center gap-2 font-bold text-red-400">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              {redFormation.name.split(' ')[0]} (紅隊)
            </span>
            <span className="font-extrabold text-slate-400 text-sm">VS</span>
            <span className="flex items-center gap-2 font-bold text-blue-400">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              {blueFormation.name.split(' ')[0]} (藍隊)
            </span>
          </div>

          <Pitch
            isClashMode={true}
            redPlayers={redFormation.phases.normal}
            bluePlayers={blueFormation.phases.normal}
            height="620px"
          />

          <p className="text-xs text-slate-400 px-2 text-center">
            💡 球場直接呈現紅藍兩隊在全場的對位關係。注意中場對抗區域與兩翼邊路的空間分佈。
          </p>
        </div>

        {/* 右側: 對決戰術解讀 */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-2">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
              戰術對抗矩陣
            </span>
            <h3 className="text-lg font-black text-white">{matchup.title}</h3>
          </div>

          {/* 中場絞殺對抗 */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 shadow-lg">
            <h4 className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <Compass className="w-4 h-4 text-amber-400" />
              中場控制權與人數絞殺
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {matchup.midfieldBattle}
            </p>
          </div>

          {/* 邊路走廊爭奪 */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 shadow-lg">
            <h4 className="flex items-center gap-2 text-sky-400 font-bold text-sm">
              <ShieldAlert className="w-4 h-4 text-sky-400" />
              邊路走廊與翼衛/邊衛博弈
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {matchup.wideBattle}
            </p>
          </div>

          {/* 關鍵優勢與隱患 */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 shadow-lg">
            <h4 className="flex items-center gap-2 text-rose-400 font-bold text-sm">
              <Swords className="w-4 h-4 text-rose-400" />
              雙方核心戰術優勢點
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {matchup.keyAdvantage}
            </p>
          </div>

          {/* 主教練破局錦囊 */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-500/40 space-y-2 shadow-lg">
            <h4 className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <Lightbulb className="w-4 h-4 text-emerald-400" />
              主教練破局調整錦囊 (Tactical Master Advice)
            </h4>
            <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
              {matchup.tacticalTip}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
