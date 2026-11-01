import React, { useEffect, useRef, useState } from 'react';
import { TACTICS_DATA } from '../data/tacticsData';
import Pitch from './Pitch';
import { BookOpen, Award, BarChart3, ShieldAlert, Compass, Pause, Play, RotateCcw } from 'lucide-react';

const SIMULATION_DURATION = 3600;

function getMovementPosition(start, destinations, progress) {
  const points = [start, ...destinations];
  const segmentLengths = points.slice(1).map((point, index) =>
    Math.hypot(point.x - points[index].x, point.y - points[index].y)
  );
  const totalLength = segmentLengths.reduce((total, length) => total + length, 0);
  if (totalLength === 0) return start;

  let distance = totalLength * progress;
  for (let index = 0; index < segmentLengths.length; index++) {
    const segmentLength = segmentLengths[index];
    if (distance <= segmentLength || index === segmentLengths.length - 1) {
      const segmentProgress = segmentLength === 0 ? 1 : distance / segmentLength;
      return {
        x: points[index].x + (points[index + 1].x - points[index].x) * segmentProgress,
        y: points[index].y + (points[index + 1].y - points[index].y) * segmentProgress,
      };
    }
    distance -= segmentLength;
  }
  return points[points.length - 1];
}

export default function TacticsView() {
  const [selectedTacticId, setSelectedTacticId] = useState('tiki-taka');
  const [isSimulationPlaying, setIsSimulationPlaying] = useState(false);
  const [simulationProgress, setSimulationProgress] = useState(0);
  const simulationProgressRef = useRef(0);
  const animationFrameRef = useRef(null);
  const tactic = TACTICS_DATA.find((t) => t.id === selectedTacticId) || TACTICS_DATA[0];

  useEffect(() => {
    if (!isSimulationPlaying) return undefined;
    const startedAt = performance.now() - simulationProgressRef.current * SIMULATION_DURATION;
    const animate = (timestamp) => {
      const progress = Math.min((timestamp - startedAt) / SIMULATION_DURATION, 1);
      simulationProgressRef.current = progress;
      setSimulationProgress(progress);
      if (progress >= 1) {
        setIsSimulationPlaying(false);
        animationFrameRef.current = null;
        return;
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isSimulationPlaying]);

  const handleSelectTactic = (id) => {
    setIsSimulationPlaying(false);
    setSimulationProgress(0);
    simulationProgressRef.current = 0;
    setSelectedTacticId(id);
  };

  const handleToggleSimulation = () => {
    if (isSimulationPlaying) {
      setIsSimulationPlaying(false);
      return;
    }
    if (simulationProgressRef.current >= 1) {
      simulationProgressRef.current = 0;
      setSimulationProgress(0);
    }
    setIsSimulationPlaying(true);
  };

  const handleResetSimulation = () => {
    setIsSimulationPlaying(false);
    simulationProgressRef.current = 0;
    setSimulationProgress(0);
  };

  // 根據不同戰術哲學定義動態球場演示數據
  const getTacticalDemo = (id) => {
    switch (id) {
      case 'tiki-taka':
        return {
          players: [
            { id: 'gk', num: 1, name: '出球門將', role: 'GK', x: 50, y: 12 },
            { id: 'lcb', num: 4, name: '出球中衛', role: 'CB', x: 32, y: 28 },
            { id: 'rcb', num: 5, name: '出球中衛', role: 'CB', x: 68, y: 28 },
            { id: 'cdm', num: 6, name: '布斯克茨(後腰)', role: 'CDM', x: 50, y: 46 },
            { id: 'lcm', num: 8, name: '伊涅斯塔(8號)', role: 'CM', x: 34, y: 62 },
            { id: 'rcm', num: 10, name: '哈維(6/8號)', role: 'CM', x: 66, y: 62 },
            { id: 'lw', num: 11, name: '左邊鋒', role: 'LW', x: 18, y: 78 },
            { id: 'f9', num: 9, name: '梅西(偽9號)', role: 'F9', x: 50, y: 72 },
            { id: 'rw', num: 7, name: '右邊鋒', role: 'RW', x: 82, y: 78 },
          ],
          lines: [
            { from: { x: 50, y: 46 }, to: { x: 34, y: 62 }, type: 'pass', color: '#facc15', label: '三角短傳' },
            { from: { x: 34, y: 62 }, to: { x: 50, y: 72 }, type: 'pass', color: '#facc15', label: '回做' },
            { from: { x: 50, y: 72 }, to: { x: 66, y: 62 }, type: 'pass', color: '#facc15', label: '轉移' },
            { from: { x: 66, y: 62 }, to: { x: 50, y: 46 }, type: 'pass', color: '#facc15' },
            { from: { x: 50, y: 72 }, to: { x: 18, y: 84 }, type: 'run', color: '#38bdf8', label: '直塞身後' },
          ],
          movements: [
            { playerId: 'f9', points: [{ x: 50, y: 64 }] },
            { playerId: 'lw', points: [{ x: 24, y: 80 }, { x: 18, y: 86 }] },
            { playerId: 'rw', points: [{ x: 76, y: 80 }] },
          ],
          showZones: true,
        };

      case 'gegenpressing':
        return {
          players: [
            { id: 'gk', num: 1, name: '門將', role: 'GK', x: 50, y: 15 },
            { id: 'lcb', num: 4, name: '高位中衛', role: 'CB', x: 35, y: 45 },
            { id: 'rcb', num: 5, name: '高位中衛', role: 'CB', x: 65, y: 45 },
            { id: 'b2b', num: 8, name: '狂奔中場', role: 'CM', x: 42, y: 68 },
            { id: 'cdm', num: 6, name: '破壞型防中', role: 'CDM', x: 58, y: 65 },
            { id: 'lw', num: 11, name: '馬內(壓迫)', role: 'LW', x: 30, y: 78 },
            { id: 'st', num: 9, name: '菲爾米諾', role: 'ST', x: 48, y: 84 },
            { id: 'rw', num: 7, name: '薩拉赫', role: 'RW', x: 68, y: 80 },
          ],
          lines: [
            // 逼搶箭頭向對方後場持球點合圍
            { from: { x: 30, y: 78 }, to: { x: 45, y: 85 }, type: 'run', color: '#ef4444', label: '切斷邊線' },
            { from: { x: 48, y: 84 }, to: { x: 45, y: 88 }, type: 'run', color: '#ef4444', label: '正面合圍' },
            { from: { x: 42, y: 68 }, to: { x: 46, y: 80 }, type: 'run', color: '#ef4444', label: '包抄接應點' },
            { from: { x: 68, y: 80 }, to: { x: 52, y: 88 }, type: 'run', color: '#ef4444', label: '封鎖回傳' },
          ],
          movements: [
            { playerId: 'lw', points: [{ x: 42, y: 84 }, { x: 45, y: 85 }] },
            { playerId: 'st', points: [{ x: 47, y: 85 }, { x: 45, y: 88 }] },
            { playerId: 'b2b', points: [{ x: 46, y: 75 }, { x: 46, y: 80 }] },
            { playerId: 'rw', points: [{ x: 58, y: 82 }, { x: 52, y: 88 }] },
            { playerId: 'lcb', points: [{ x: 38, y: 52 }] },
            { playerId: 'rcb', points: [{ x: 62, y: 52 }] },
          ],
          showZones: false,
        };

      case 'catenaccio-lowblock':
        return {
          players: [
            { id: 'gk', num: 1, name: '門線守護', role: 'GK', x: 50, y: 8 },
            { id: 'lb', num: 3, name: '左後衛', role: 'LB', x: 18, y: 18 },
            { id: 'lcb', num: 4, name: '中後衛', role: 'CB', x: 38, y: 16 },
            { id: 'rcb', num: 5, name: '清道夫', role: 'CB', x: 62, y: 16 },
            { id: 'rb', num: 2, name: '右後衛', role: 'RB', x: 82, y: 18 },
            { id: 'lm', num: 11, name: '回防邊翼', role: 'LM', x: 20, y: 28 },
            { id: 'cm1', num: 6, name: '防守鐵閘', role: 'CM', x: 40, y: 26 },
            { id: 'cm2', num: 8, name: '防守鐵閘', role: 'CM', x: 60, y: 26 },
            { id: 'rm', num: 7, name: '回防邊翼', role: 'RM', x: 80, y: 28 },
            { id: 'st', num: 9, name: '反擊尖刀', role: 'ST', x: 50, y: 55 },
          ],
          lines: [
            // 防守反擊長傳箭頭
            { from: { x: 60, y: 26 }, to: { x: 50, y: 55 }, type: 'pass', color: '#22c55e', label: '一腳長傳' },
            { from: { x: 50, y: 55 }, to: { x: 50, y: 92 }, type: 'run', color: '#ef4444', label: '高速反擊單刀' },
          ],
          movements: [
            { playerId: 'st', points: [{ x: 50, y: 72 }, { x: 50, y: 92 }] },
            { playerId: 'lm', points: [{ x: 34, y: 34 }, { x: 20, y: 58 }] },
            { playerId: 'rm', points: [{ x: 66, y: 34 }, { x: 80, y: 58 }] },
          ],
          showZones: false,
        };

      case 'total-football':
        return {
          players: [
            { id: 'gk', num: 1, name: '清道夫門將', role: 'GK', x: 50, y: 14 },
            { id: 'd1', num: 4, name: '插上後衛', role: 'CB', x: 30, y: 45 },
            { id: 'd2', num: 5, name: '流動中衛', role: 'CB', x: 70, y: 40 },
            { id: 'm1', num: 8, name: '全能中場', role: 'CM', x: 45, y: 60 },
            { id: 'cruyff', num: 14, name: '克魯伊夫(自由人)', role: 'AM', x: 55, y: 70 },
            { id: 'w1', num: 11, name: '內收邊鋒', role: 'W', x: 22, y: 72 },
            { id: 'w2', num: 7, name: '套邊前插', role: 'W', x: 80, y: 80 },
          ],
          lines: [
            { from: { x: 30, y: 45 }, to: { x: 32, y: 68 }, type: 'run', color: '#38bdf8', label: '後衛壓上' },
            { from: { x: 55, y: 70 }, to: { x: 40, y: 50 }, type: 'run', color: '#facc15', label: '克魯伊夫回撤接應' },
            { from: { x: 45, y: 60 }, to: { x: 50, y: 88 }, type: 'run', color: '#38bdf8', label: '中場前插頂替' },
          ],
          movements: [
            { playerId: 'd1', points: [{ x: 30, y: 58 }, { x: 32, y: 68 }] },
            { playerId: 'cruyff', points: [{ x: 52, y: 62 }, { x: 40, y: 50 }] },
            { playerId: 'm1', points: [{ x: 47, y: 70 }, { x: 50, y: 88 }] },
            { playerId: 'w1', points: [{ x: 30, y: 76 }] },
            { playerId: 'w2', points: [{ x: 80, y: 88 }] },
          ],
          showZones: false,
        };

      case 'half-space':
      default:
        return {
          players: [
            { id: 'gk', num: 1, name: '門將', role: 'GK', x: 50, y: 12 },
            { id: 'cb1', num: 4, name: '中衛', role: 'CB', x: 30, y: 35 },
            { id: 'cb2', num: 5, name: '中衛', role: 'CB', x: 70, y: 35 },
            { id: 'ifb', num: 2, name: '斯通斯(內切邊衛)', role: 'IFB', x: 62, y: 52 },
            { id: 'rodri', num: 6, name: '羅德里(後腰)', role: 'CDM', x: 42, y: 50 },
            { id: 'kdb', num: 17, name: '德布勞內(右半空間)', role: 'AM', x: 70, y: 74 },
            { id: 'gundo', num: 8, name: '京多安(左半空間)', role: 'AM', x: 30, y: 74 },
            { id: 'lw', num: 10, name: '格拉利什(拉邊)', role: 'LW', x: 10, y: 82 },
            { id: 'haaland', num: 9, name: '哈蘭德(壓迫中衛)', role: 'ST', x: 50, y: 92 },
            { id: 'rw', num: 20, name: '席爾瓦(右寬度)', role: 'RW', x: 90, y: 82 },
          ],
          lines: [
            { from: { x: 62, y: 52 }, to: { x: 70, y: 74 }, type: 'pass', color: '#facc15', label: '傳半空間' },
            { from: { x: 70, y: 74 }, to: { x: 50, y: 92 }, type: 'pass', color: '#ef4444', label: '倒三角/穿透' },
          ],
          movements: [
            { playerId: 'ifb', points: [{ x: 55, y: 50 }, { x: 50, y: 48 }] },
            { playerId: 'gundo', points: [{ x: 34, y: 72 }, { x: 40, y: 78 }] },
            { playerId: 'kdb', points: [{ x: 66, y: 78 }, { x: 70, y: 82 }] },
            { playerId: 'haaland', points: [{ x: 48, y: 84 }, { x: 50, y: 92 }] },
            { playerId: 'lw', points: [{ x: 10, y: 88 }] },
            { playerId: 'rw', points: [{ x: 90, y: 88 }] },
          ],
          showZones: true,
        };
    }
  };

  const demo = getTacticalDemo(tactic.id);
  const simulatedPlayers = demo.players.map((player) => {
    const movement = demo.movements.find((item) => item.playerId === player.id);
    if (!movement) return player;
    const position = getMovementPosition(
      { x: player.x, y: player.y },
      movement.points,
      simulationProgress
    );
    return { ...player, ...position };
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 戰術哲學頂部導航按鈕組 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {TACTICS_DATA.map((item) => {
          const isActive = item.id === selectedTacticId;
          return (
            <button
              key={item.id}
              onClick={() => handleSelectTactic(item.id)}
              className={`p-3.5 rounded-xl text-left border transition-all duration-300 flex flex-col justify-between ${
                isActive
                  ? 'bg-gradient-to-br from-indigo-600 to-violet-800 text-white shadow-xl shadow-indigo-600/30 border-indigo-400 scale-102'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border-slate-800'
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <Compass className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-indigo-400'}`} />
                <span className="text-xs font-semibold opacity-80 truncate">{item.origin.split(' ')[0]}</span>
              </div>
              <h4 className="font-bold text-sm tracking-tight">{item.name.split(' ')[0]}</h4>
            </button>
          );
        })}
      </div>

      {/* 內容區: 球場動態演示 + 戰術原理 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* 左側: 戰術球場沙盒視圖 */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-sm font-bold text-emerald-400 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              動態戰術軌跡演示 (Tactical Simulation)
            </span>
            <span className="text-xs text-slate-400">黃虛線：傳球路徑 | 藍/紅實線：跑位/逼搶</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleToggleSimulation}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-sky-600 hover:bg-sky-500 text-white transition-colors"
            >
              {isSimulationPlaying ? (
                <>
                  <Pause className="w-4 h-4" />
                  暫停跑位
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  {simulationProgress >= 1 ? '重播戰術' : simulationProgress > 0 ? '繼續跑位' : '播放戰術跑位'}
                </>
              )}
            </button>
            <button
              onClick={handleResetSimulation}
              disabled={simulationProgress === 0 && !isSimulationPlaying}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-slate-200 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              重置
            </button>
            <span className="text-xs text-slate-400">
              {isSimulationPlaying ? '球員正依戰術路線跑位' : '播放預設戰術跑位'}
            </span>
          </div>

          <Pitch
            players={simulatedPlayers}
            tacticalLines={demo.lines}
            showZones={demo.showZones}
            height="580px"
            interactive={false}
            animatePositions={isSimulationPlaying || simulationProgress > 0}
          />

          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-300 leading-relaxed">
            <strong className="text-amber-400">球場戰術解析：</strong> 觀察球員在 {tactic.name} 體系中的站位幾何形態，箭頭標示了關鍵進攻穿透與奪球圍搶的戰術意圖。
          </div>
        </div>

        {/* 右側: 戰術原則與教練思想 */}
        <div className="lg:col-span-5 space-y-6">
          {/* 主標題卡片 */}
          <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-xl space-y-3">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
              起源與流派：{tactic.origin}
            </span>
            <h2 className="text-2xl font-black text-white">{tactic.name}</h2>
            <p className="text-slate-300 text-sm leading-relaxed">{tactic.subtitle}</p>
          </div>

          {/* 四大核心原則卡片 */}
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              戰術核心運作機制 (Key Mechanisms)
            </h3>
            {tactic.corePrinciples.map((cp, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 shadow-lg space-y-1 hover:border-slate-700 transition-all"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <h4 className="font-bold text-sm text-white">{cp.title}</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-7">{cp.desc}</p>
              </div>
            ))}
          </div>

          {/* 代表名帥 */}
          <div className="bg-slate-900/80 rounded-xl p-5 border border-slate-800 shadow-lg space-y-3">
            <h3 className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <Award className="w-4 h-4 text-amber-400" />
              戰術大師與代表教練 (Masterminds)
            </h3>
            <div className="space-y-2">
              {tactic.famousMasterminds.map((fm, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80">
                  <h5 className="font-bold text-white text-xs">{fm.name}</h5>
                  <p className="text-xs text-slate-400 mt-0.5">{fm.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 戰術數據指標與破解之法 */}
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-slate-900/80 rounded-xl p-4 border border-blue-900/40 shadow-lg space-y-1.5">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold">
                <BarChart3 className="w-4 h-4" />
                關鍵統計數據特徵
              </div>
              <p className="text-xs text-slate-300">{tactic.keyStatsIndicator}</p>
            </div>

            <div className="bg-slate-900/80 rounded-xl p-4 border border-amber-900/40 shadow-lg space-y-1.5">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                <ShieldAlert className="w-4 h-4" />
                如何剋制與破解此戰術 (How to Counter)
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{tactic.howToCounter}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
