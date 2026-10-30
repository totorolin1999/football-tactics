import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  RotateCcw,
  Download,
  Trash2,
  Pencil,
  ArrowRight,
  CircleDot,
  Play,
} from 'lucide-react';

// 初始球員與足球位置（提取為常數，避免 useState 和 reset 重複定義）
const INITIAL_TOKENS = [
  // 藍隊 (主攻)
  { id: 'b-gk', team: 'blue', label: '1', name: 'GK', x: 50, y: 10 },
  { id: 'b-cb1', team: 'blue', label: '4', name: 'CB', x: 35, y: 24 },
  { id: 'b-cb2', team: 'blue', label: '5', name: 'CB', x: 65, y: 24 },
  { id: 'b-lb', team: 'blue', label: '3', name: 'LB', x: 15, y: 32 },
  { id: 'b-rb', team: 'blue', label: '2', name: 'RB', x: 85, y: 32 },
  { id: 'b-dm', team: 'blue', label: '6', name: 'CDM', x: 50, y: 44 },
  { id: 'b-cm1', team: 'blue', label: '8', name: 'CM', x: 35, y: 56 },
  { id: 'b-cm2', team: 'blue', label: '10', name: 'CAM', x: 65, y: 56 },
  { id: 'b-lw', team: 'blue', label: '11', name: 'LW', x: 18, y: 76 },
  { id: 'b-st', team: 'blue', label: '9', name: 'ST', x: 50, y: 84 },
  { id: 'b-rw', team: 'blue', label: '7', name: 'RW', x: 82, y: 76 },

  // 紅隊 (防守方 5 人防線模擬)
  { id: 'r-cb1', team: 'red', label: 'R4', name: 'CB', x: 40, y: 74 },
  { id: 'r-cb2', team: 'red', label: 'R5', name: 'CB', x: 60, y: 74 },
  { id: 'r-lb', team: 'red', label: 'R3', name: 'LB', x: 25, y: 72 },
  { id: 'r-rb', team: 'red', label: 'R2', name: 'RB', x: 75, y: 72 },
  { id: 'r-gk', team: 'red', label: 'R1', name: 'GK', x: 50, y: 92 },

  // 足球
  { id: 'ball', team: 'ball', label: '⚽', name: 'Ball', x: 50, y: 48 },
];

export default function TacticsBoard() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // 戰術板上可拖曳的球員與足球
  const [tokens, setTokens] = useState(INITIAL_TOKENS);

  // 繪圖模式: 'none' | 'pass' (傳球箭頭) | 'run' (跑位箭頭) | 'free' (自由畫筆)
  const [drawMode, setDrawMode] = useState('none');
  const [lines, setLines] = useState([]); // [{ type, points: [{x, y}] }]
  const [isDrawing, setIsDrawing] = useState(false);
  const currentLineRef = useRef([]);

  // 拖曳狀態
  const [draggingId, setDraggingId] = useState(null);

  // 初始化與重繪 Canvas
  const redrawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    lines.forEach((line) => {
      if (line.points.length < 2) return;
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.strokeStyle =
        line.type === 'pass'
          ? '#facc15'
          : line.type === 'run'
          ? '#38bdf8'
          : '#ef4444';

      if (line.type === 'pass') {
        ctx.setLineDash([8, 8]);
      } else {
        ctx.setLineDash([]);
      }

      ctx.moveTo(line.points[0].x, line.points[0].y);
      for (let i = 1; i < line.points.length; i++) {
        ctx.lineTo(line.points[i].x, line.points[i].y);
      }
      ctx.stroke();

      // 畫箭頭
      const lastPoint = line.points[line.points.length - 1];
      const prevPoint = line.points[Math.max(0, line.points.length - 3)] || line.points[0];
      const angle = Math.atan2(lastPoint.y - prevPoint.y, lastPoint.x - prevPoint.x);

      ctx.save();
      ctx.fillStyle = ctx.strokeStyle;
      ctx.setLineDash([]);
      ctx.translate(lastPoint.x, lastPoint.y);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(-12, -7);
      ctx.lineTo(-12, 7);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    });
  }, [lines]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && containerRef.current) {
      canvas.width = containerRef.current.clientWidth;
      canvas.height = containerRef.current.clientHeight;
      redrawCanvas();
    }
  }, [redrawCanvas]);

  // 監聽視窗縮放
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas && containerRef.current) {
        canvas.width = containerRef.current.clientWidth;
        canvas.height = containerRef.current.clientHeight;
        redrawCanvas();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [redrawCanvas]);

  // 取得滑鼠或觸控事件座標輔助函數
  const getCoords = (e, element) => {
    const touch = e.touches && e.touches.length > 0 ? e.touches[0] : (e.changedTouches ? e.changedTouches[0] : e);
    const rect = element.getBoundingClientRect();
    return {
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    };
  };

  // 繪畫事件 (滑鼠與觸控)
  const handleDrawStart = (e) => {
    if (drawMode === 'none') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { x, y } = getCoords(e, canvas);

    setIsDrawing(true);
    currentLineRef.current = [{ x, y }];
  };

  const handleDrawMove = (e) => {
    if (!isDrawing || drawMode === 'none') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { x, y } = getCoords(e, canvas);

    currentLineRef.current.push({ x, y });

    // 即時繪製當前正在畫的線
    const ctx = canvas.getContext('2d');
    redrawCanvas();

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle =
      drawMode === 'pass'
        ? '#facc15'
        : drawMode === 'run'
        ? '#38bdf8'
        : '#ef4444';
    if (drawMode === 'pass') ctx.setLineDash([8, 8]);
    else ctx.setLineDash([]);

    ctx.moveTo(currentLineRef.current[0].x, currentLineRef.current[0].y);
    for (let i = 1; i < currentLineRef.current.length; i++) {
      ctx.lineTo(currentLineRef.current[i].x, currentLineRef.current[i].y);
    }
    ctx.stroke();
  };

  const handleDrawEnd = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    if (currentLineRef.current.length > 1) {
      setLines((prev) => [
        ...prev,
        { type: drawMode, points: [...currentLineRef.current] },
      ]);
    }
    currentLineRef.current = [];
  };

  // 拖曳球員事件 (滑鼠與觸控)
  const handleTokenDragStart = (id, e) => {
    if (drawMode !== 'none') return;
    if (e.stopPropagation) e.stopPropagation();
    setDraggingId(id);
  };

  const handleContainerDragMove = (e) => {
    if (!draggingId || !containerRef.current) return;
    const touch = e.touches && e.touches.length > 0 ? e.touches[0] : e;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(3, Math.min(97, ((touch.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(3, Math.min(97, ((touch.clientY - rect.top) / rect.height) * 100));

    setTokens((prev) =>
      prev.map((t) => (t.id === draggingId ? { ...t, x, y } : t))
    );
  };

  const handleContainerDragEnd = () => {
    setDraggingId(null);
  };

  // 導出戰術板為圖片
  const handleExport = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 建立臨時 Canvas 將球場草皮標線 + 球員 + 戰術箭頭合成
    const exportCanvas = document.createElement('canvas');
    exportCanvas.width = canvas.width;
    exportCanvas.height = canvas.height;
    const ctx = exportCanvas.getContext('2d');

    // 填入綠色球場背景
    ctx.fillStyle = '#15803d';
    ctx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);

    // 繪製標線
    ctx.strokeStyle = 'rgba(255,255,255,0.7)';
    ctx.lineWidth = 3;
    ctx.strokeRect(20, 20, exportCanvas.width - 40, exportCanvas.height - 40);

    // 中線
    ctx.beginPath();
    ctx.moveTo(20, exportCanvas.height / 2);
    ctx.lineTo(exportCanvas.width - 20, exportCanvas.height / 2);
    ctx.stroke();

    // 戰術線條
    ctx.drawImage(canvas, 0, 0);

    // 繪製球員
    tokens.forEach((t) => {
      const px = (t.x / 100) * exportCanvas.width;
      const py = (t.y / 100) * exportCanvas.height;

      ctx.beginPath();
      ctx.arc(px, py, 16, 0, Math.PI * 2);
      ctx.fillStyle =
        t.team === 'blue'
          ? '#2563eb'
          : t.team === 'red'
          ? '#dc2626'
          : '#ffffff';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      ctx.fillStyle = t.team === 'ball' ? '#000000' : '#ffffff';
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(t.label, px, py);
    });

    const link = document.createElement('a');
    link.download = `TactixMaster-Tactics-${Date.now()}.png`;
    link.href = exportCanvas.toDataURL('image/png');
    link.click();
  };

  // 重置球員位置
  const handleResetPositions = () => {
    setTokens(INITIAL_TOKENS);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* 戰術板功能工具條 */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl">
        <div className="flex flex-wrap items-center gap-2">
          {/* 模式切換 */}
          <button
            onClick={() => setDrawMode('none')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              drawMode === 'none'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <CircleDot className="w-4 h-4" />
            拖曳移動模式
          </button>

          <button
            onClick={() => setDrawMode('pass')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              drawMode === 'pass'
                ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <ArrowRight className="w-4 h-4 text-amber-400" />
            繪製傳球 (黃虛線)
          </button>

          <button
            onClick={() => setDrawMode('run')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              drawMode === 'run'
                ? 'bg-sky-500 text-slate-950 shadow-md font-bold'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Play className="w-4 h-4 text-sky-400" />
            繪製跑位 (藍實線)
          </button>

          <button
            onClick={() => setDrawMode('free')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              drawMode === 'free'
                ? 'bg-rose-500 text-white shadow-md font-bold'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Pencil className="w-4 h-4 text-rose-400" />
            壓迫標記 (紅自由筆)
          </button>
        </div>

        {/* 控制按鈕 */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLines([])}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium bg-slate-800 hover:bg-rose-950/50 hover:text-rose-300 text-slate-300 border border-slate-700 transition-all"
            title="清除所有箭頭與筆跡"
          >
            <Trash2 className="w-4 h-4" />
            清除軌跡
          </button>

          <button
            onClick={handleResetPositions}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-all"
            title="重置球員到預設陣型位置"
          >
            <RotateCcw className="w-4 h-4" />
            重置站位
          </button>

          <button
            onClick={handleExport}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 transition-all"
          >
            <Download className="w-4 h-4" />
            匯出戰術圖
          </button>
        </div>
      </div>

      {/* 互動式足球戰術畫板 */}
      <div
        ref={containerRef}
        onMouseMove={handleContainerDragMove}
        onMouseUp={handleContainerDragEnd}
        onTouchMove={handleContainerDragMove}
        onTouchEnd={handleContainerDragEnd}
        className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700 bg-emerald-800 select-none touch-none"
        style={{ height: '680px' }}
      >
        {/* 草皮紋理背景 */}
        <div className="absolute inset-0 flex flex-col pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`flex-1 w-full ${
                i % 2 === 0 ? 'bg-emerald-700/85' : 'bg-emerald-800/85'
              }`}
            />
          ))}
        </div>

        {/* 球場標線 SVG */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <rect x="3" y="3" width="94" height="94" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="0.8" />
          <line x1="3" y1="50" x2="97" y2="50" stroke="rgba(255,255,255,0.7)" strokeWidth="0.8" />
          <circle cx="50" cy="50" r="10" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="0.8" />
          <circle cx="50" cy="50" r="0.8" fill="rgba(255,255,255,0.9)" />
          {/* 下禁區 */}
          <rect x="22" y="3" width="56" height="16" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="0.8" />
          <rect x="36" y="3" width="28" height="6" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="0.8" />
          <circle cx="50" cy="12" r="0.8" fill="rgba(255,255,255,0.9)" />
          {/* 上禁區 */}
          <rect x="22" y="81" width="56" height="16" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="0.8" />
          <rect x="36" y="91" width="28" height="6" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="0.8" />
          <circle cx="50" cy="88" r="0.8" fill="rgba(255,255,255,0.9)" />
        </svg>

        {/* 繪圖 Canvas 畫布 */}
        <canvas
          ref={canvasRef}
          onMouseDown={handleDrawStart}
          onMouseMove={handleDrawMove}
          onMouseUp={handleDrawEnd}
          onTouchStart={handleDrawStart}
          onTouchMove={handleDrawMove}
          onTouchEnd={handleDrawEnd}
          className={`absolute inset-0 w-full h-full z-10 touch-none ${
            drawMode !== 'none' ? 'cursor-crosshair' : 'pointer-events-none'
          }`}
        />

        {/* 可拖曳球員與足球標記 */}
        {tokens.map((token) => (
          <div
            key={token.id}
            onMouseDown={(e) => handleTokenDragStart(token.id, e)}
            onTouchStart={(e) => handleTokenDragStart(token.id, e)}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center select-none ${
              drawMode === 'none' ? 'cursor-grab active:cursor-grabbing hover:scale-110' : ''
            }`}
            style={{ left: `${token.x}%`, top: `${token.y}%` }}
          >
            {token.team === 'ball' ? (
              <div className="w-8 h-8 rounded-full bg-white shadow-xl flex items-center justify-center text-lg border-2 border-slate-800 animate-bounce">
                ⚽
              </div>
            ) : (
              <div
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold text-xs shadow-xl border-2 text-white ${
                  token.team === 'blue'
                    ? 'bg-blue-600 border-blue-200'
                    : 'bg-red-600 border-red-200'
                }`}
              >
                {token.label}
              </div>
            )}
            <span className="mt-0.5 px-1 py-0.2 rounded text-[10px] font-bold bg-slate-950/80 text-white shadow">
              {token.name}
            </span>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
        <span>💡 操作提示：點擊「繪製傳球/跑位」按鈕可直接在戰術板上拖曳滑鼠拉出箭頭；切換回「拖曳移動模式」即可隨意拖動球員和足球位置！</span>
      </div>
    </div>
  );
}
