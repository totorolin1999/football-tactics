import React from 'react';

/**
 * 足球場組件 (Pitch)
 * 支持真實球場比例、草皮條紋、戰術五通道 (Half-spaces) 遮罩、
 * 球員站位顯示、球員點擊互動與自定義戰術路線
 */
export default function Pitch({
  players = [],
  selectedPlayerId = null,
  onSelectPlayer = null,
  showZones = false,
  tacticalLines = [], // [{ from: {x,y}, to: {x,y}, type: 'pass'|'run'|'press', label: '' }]
  isClashMode = false,
  redPlayers = [],
  bluePlayers = [],
  height = '620px',
  interactive = true,
  animatePositions = false,
}) {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700 bg-emerald-800 select-none"
      style={{ height, minHeight: '520px' }}
    >
      {/* 草皮條紋背景 */}
      <div className="absolute inset-0 flex flex-col pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`flex-1 w-full ${
              i % 2 === 0 ? 'bg-emerald-700/80' : 'bg-emerald-800/80'
            }`}
          />
        ))}
      </div>

      {/* SVG 球場標線與五通道劃分 */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        {/* 外邊框 */}
        <rect
          x="3"
          y="3"
          width="94"
          height="94"
          fill="none"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="0.8"
        />

        {/* 中線 */}
        <line
          x1="3"
          y1="50"
          x2="97"
          y2="50"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="0.8"
        />

        {/* 中圈 */}
        <circle
          cx="50"
          cy="50"
          r="10"
          fill="none"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="0.8"
        />
        <circle cx="50" cy="50" r="0.8" fill="rgba(255,255,255,0.9)" />

        {/* 下半場禁區 (主隊 / 守方) */}
        <rect
          x="22"
          y="3"
          width="56"
          height="16"
          fill="none"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="0.8"
        />
        {/* 小禁區 */}
        <rect
          x="36"
          y="3"
          width="28"
          height="6"
          fill="none"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="0.8"
        />
        {/* 點球點 */}
        <circle cx="50" cy="12" r="0.8" fill="rgba(255,255,255,0.9)" />
        {/* 禁區弧 */}
        <path
          d="M 40,19 A 10,10 0 0,0 60,19"
          fill="none"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="0.8"
        />
        {/* 球門 */}
        <rect
          x="44"
          y="0.5"
          width="12"
          height="2.5"
          fill="rgba(255,255,255,0.3)"
          stroke="white"
          strokeWidth="0.6"
        />

        {/* 上半場禁區 (客隊 / 攻方) */}
        <rect
          x="22"
          y="81"
          width="56"
          height="16"
          fill="none"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="0.8"
        />
        {/* 小禁區 */}
        <rect
          x="36"
          y="91"
          width="28"
          height="6"
          fill="none"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="0.8"
        />
        {/* 點球點 */}
        <circle cx="50" cy="88" r="0.8" fill="rgba(255,255,255,0.9)" />
        {/* 禁區弧 */}
        <path
          d="M 40,81 A 10,10 0 0,1 60,81"
          fill="none"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="0.8"
        />
        {/* 球門 */}
        <rect
          x="44"
          y="97"
          width="12"
          height="2.5"
          fill="rgba(255,255,255,0.3)"
          stroke="white"
          strokeWidth="0.6"
        />

        {/* 四個角球弧 */}
        <path
          d="M 3,5 A 2,2 0 0,0 5,3"
          fill="none"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="0.8"
        />
        <path
          d="M 95,3 A 2,2 0 0,0 97,5"
          fill="none"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="0.8"
        />
        <path
          d="M 3,95 A 2,2 0 0,1 5,97"
          fill="none"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="0.8"
        />
        <path
          d="M 97,95 A 2,2 0 0,0 95,97"
          fill="none"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="0.8"
        />

        {/* 五通道劃分遮罩（半空間 Half-Spaces） */}
        {showZones && (
          <g className="transition-opacity duration-300">
            {/* 縱向分割虛線 (5 等分: 20%, 40%, 60%, 80%) */}
            <line
              x1="20"
              y1="3"
              x2="20"
              y2="97"
              stroke="#fbbf24"
              strokeWidth="0.6"
              strokeDasharray="2,2"
            />
            <line
              x1="40"
              y1="3"
              x2="40"
              y2="97"
              stroke="#fbbf24"
              strokeWidth="0.6"
              strokeDasharray="2,2"
            />
            <line
              x1="60"
              y1="3"
              x2="60"
              y2="97"
              stroke="#fbbf24"
              strokeWidth="0.6"
              strokeDasharray="2,2"
            />
            <line
              x1="80"
              y1="3"
              x2="80"
              y2="97"
              stroke="#fbbf24"
              strokeWidth="0.6"
              strokeDasharray="2,2"
            />

            {/* 左半空間高亮 (20% - 40%) */}
            <rect
              x="20"
              y="3"
              width="20"
              height="94"
              fill="rgba(251, 191, 36, 0.12)"
            />
            {/* 右半空間高亮 (60% - 80%) */}
            <rect
              x="60"
              y="3"
              width="20"
              height="94"
              fill="rgba(251, 191, 36, 0.12)"
            />

            {/* 通道標籤文字 */}
            <text
              x="10"
              y="50"
              fill="#fbbf24"
              fontSize="2.8"
              fontWeight="bold"
              textAnchor="middle"
              opacity="0.8"
            >
              左邊路
            </text>
            <text
              x="30"
              y="50"
              fill="#fbbf24"
              fontSize="2.8"
              fontWeight="bold"
              textAnchor="middle"
              opacity="0.9"
            >
              左半空間 (Half-Space)
            </text>
            <text
              x="50"
              y="50"
              fill="#fbbf24"
              fontSize="2.8"
              fontWeight="bold"
              textAnchor="middle"
              opacity="0.8"
            >
              中路走廊
            </text>
            <text
              x="70"
              y="50"
              fill="#fbbf24"
              fontSize="2.8"
              fontWeight="bold"
              textAnchor="middle"
              opacity="0.9"
            >
              右半空間 (Half-Space)
            </text>
            <text
              x="90"
              y="50"
              fill="#fbbf24"
              fontSize="2.8"
              fontWeight="bold"
              textAnchor="middle"
              opacity="0.8"
            >
              右邊路
            </text>
          </g>
        )}

        {/* 戰術路線繪製 (傳球箭頭、跑位箭頭) */}
        {tacticalLines.map((line, idx) => (
          <g key={idx}>
            <defs>
              <marker
                id={`arrow-${idx}`}
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth="4"
                markerHeight="4"
                orient="auto-start-reverse"
              >
                <path
                  d="M 0 1 L 10 5 L 0 9 z"
                  fill={line.color || '#38bdf8'}
                />
              </marker>
            </defs>
            <line
              x1={line.from.x}
              y1={line.from.y}
              x2={line.to.x}
              y2={line.to.y}
              stroke={line.color || '#38bdf8'}
              strokeWidth={line.width || '1'}
              strokeDasharray={line.type === 'pass' ? '2,2' : undefined}
              markerEnd={`url(#arrow-${idx})`}
            />
            {line.label && (
              <text
                x={(line.from.x + line.to.x) / 2}
                y={(line.from.y + line.to.y) / 2 - 1.5}
                fill="white"
                fontSize="2.2"
                fontWeight="bold"
                textAnchor="middle"
                className="bg-black/60"
              >
                {line.label}
              </text>
            )}
          </g>
        ))}
      </svg>

      {/* 單隊球員標記渲染 */}
      {!isClashMode &&
        players.map((p) => {
          const isSelected = selectedPlayerId === p.id;
          return (
            <div
              key={p.id}
              onClick={() => interactive && onSelectPlayer && onSelectPlayer(p)}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center ${
                animatePositions ? '' : 'transition-all duration-700 ease-out'
              } ${
                interactive ? 'cursor-pointer hover:scale-110 z-10' : 'z-0'
              } ${isSelected ? 'scale-125 z-20' : ''}`}
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
            >
              {/* 球員圓圈徽章 */}
              <div
                className={`relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full shadow-lg font-bold text-xs sm:text-sm border-2 transition-colors ${
                  isSelected
                    ? 'bg-amber-400 text-slate-900 border-white ring-4 ring-amber-300/60'
                    : p.role === 'GK'
                    ? 'bg-amber-600 text-white border-amber-300'
                    : 'bg-blue-600 text-white border-blue-200 hover:bg-blue-500'
                }`}
              >
                {p.num}
                {/* 角色小標 */}
                <span
                  className="absolute -top-3.5 px-1 py-0.2 rounded text-[9px] font-extrabold shadow"
                  style={{
                    backgroundColor:
                      p.role === 'GK'
                        ? '#d97706'
                        : isSelected
                        ? '#1e293b'
                        : '#0284c7',
                    color: '#ffffff',
                  }}
                >
                  {p.role}
                </span>
              </div>

              {/* 球員名字 */}
              <span
                className={`mt-1 px-1.5 py-0.5 rounded text-[10px] sm:text-xs font-semibold whitespace-nowrap shadow backdrop-blur-sm transition-all ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 font-bold scale-105'
                    : 'bg-slate-900/80 text-white'
                }`}
              >
                {p.name}
              </span>
            </div>
          );
        })}

      {/* 陣型對抗模式渲染 (紅隊 vs 藍隊) */}
      {isClashMode && (
        <>
          {/* 紅隊 (下方守備方/主隊) */}
          {redPlayers.map((p) => (
            <div
              key={`red-${p.id}`}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center transition-all duration-500"
              style={{ left: `${p.x}%`, top: `${p.y * 0.46 + 4}%` }}
            >
              <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full shadow-lg font-bold text-xs text-white bg-red-600 border-2 border-red-200">
                {p.num}
              </div>
              <span className="mt-0.5 px-1 rounded text-[9px] bg-red-950/80 text-red-200 font-medium">
                {p.role}
              </span>
            </div>
          ))}

          {/* 藍隊 (上方進攻方/客隊，Y 軸反轉鏡像) */}
          {bluePlayers.map((p) => (
            <div
              key={`blue-${p.id}`}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center transition-all duration-500"
              style={{
                left: `${100 - p.x}%`,
                top: `${(100 - p.y) * 0.46 + 50}%`,
              }}
            >
              <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full shadow-lg font-bold text-xs text-white bg-blue-600 border-2 border-blue-200">
                {p.num}
              </div>
              <span className="mt-0.5 px-1 rounded text-[9px] bg-blue-950/80 text-blue-200 font-medium">
                {p.role}
              </span>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
