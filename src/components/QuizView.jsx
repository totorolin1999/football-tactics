import React, { useState } from 'react';
import { QUIZ_DATA } from '../data/quizData';
import confetti from 'canvas-confetti';
import { Award, CheckCircle2, XCircle, RotateCcw, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';

export default function QuizView() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = QUIZ_DATA[currentIndex];

  const handleSelectOption = (idx) => {
    if (selectedOption !== null) return; // 已選過，不能再選
    setSelectedOption(idx);
    setShowExplanation(true);

    if (currentQ.options[idx].isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < QUIZ_DATA.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
      // 發射慶祝紙花
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setIsFinished(false);
  };

  // 取得教練段位等級
  const getCoachRank = (s) => {
    const total = QUIZ_DATA.length;
    const ratio = s / total;
    if (ratio >= 0.88) {
      return {
        badge: '🏆 歐足聯 Pro 級神級教頭',
        desc: '天賦異稟！你對足球幾何空間、高位逼搶觸發點及戰術剋制了如指掌，完全具備執掌豪門的戰術大腦！',
        color: 'from-amber-400 to-yellow-600',
      };
    } else if (ratio >= 0.62) {
      return {
        badge: '🎖️ 頂級職業戰術分析師',
        desc: '實力非凡！你深刻理解主流陣型的優缺點與半空間打法，是球隊不可或缺的智囊分析官。',
        color: 'from-emerald-400 to-teal-600',
      };
    } else if (ratio >= 0.4) {
      return {
        badge: '⚽ 資深懂球帝球迷',
        desc: '相當不錯！你對主流戰術有紮實的認知，稍加研習就能洞悉綠茵場上的每一次攻防輪轉。',
        color: 'from-blue-400 to-indigo-600',
      };
    } else {
      return {
        badge: '🌱 潛力新秀熱血球迷',
        desc: '足球的世界廣袤而深奧！透過本系統的陣型與戰術百科多加複習，你很快也能成為戰術大師！',
        color: 'from-slate-400 to-slate-600',
      };
    }
  };

  if (isFinished) {
    const rank = getCoachRank(score);
    return (
      <div className="max-w-2xl mx-auto p-8 bg-slate-900/90 rounded-3xl border border-slate-800 shadow-2xl text-center space-y-6 animate-fadeIn">
        <div className="relative inline-block">
          <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center text-5xl shadow-xl shadow-amber-500/20">
            🏆
          </div>
          <Sparkles className="w-8 h-8 text-yellow-300 absolute -top-2 -right-2 animate-bounce" />
        </div>

        <div className="space-y-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-slate-300 border border-slate-700">
            戰術考核結算
          </span>
          <h2 className="text-3xl font-black text-white">測驗完成！</h2>
          <p className="text-slate-400 text-sm">
            你在 {QUIZ_DATA.length} 道高階戰術考題中答對了{' '}
            <span className="text-emerald-400 font-extrabold text-2xl">{score}</span> 題
          </p>
        </div>

        {/* 評級卡片 */}
        <div
          className={`p-6 rounded-2xl bg-gradient-to-r ${rank.color} text-slate-950 shadow-xl space-y-2 text-center`}
        >
          <h3 className="text-xl sm:text-2xl font-black">{rank.badge}</h3>
          <p className="text-sm font-medium opacity-90">{rank.desc}</p>
        </div>

        <button
          onClick={handleRestart}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30 transition-all text-sm"
        >
          <RotateCcw className="w-4 h-4" />
          重新挑戰測驗
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fadeIn">
      {/* 測驗頂部進度條 */}
      <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-xl space-y-4">
        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-400">
          <span className="flex items-center gap-2 text-indigo-400 font-bold">
            <HelpCircle className="w-4 h-4" />
            題目 {currentIndex + 1} / {QUIZ_DATA.length}
          </span>
          <span>當前得分：<strong className="text-emerald-400">{score}</strong> 分</span>
        </div>

        {/* 漸變進度條 */}
        <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full transition-all duration-300 rounded-full"
            style={{ width: `${((currentIndex + 1) / QUIZ_DATA.length) * 100}%` }}
          />
        </div>

        {/* 題目主幹 */}
        <div className="pt-2 space-y-2">
          <h3 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
            {currentQ.question}
          </h3>
        </div>

        {/* 四個選項 */}
        <div className="space-y-3 pt-2">
          {currentQ.options.map((opt, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrect = opt.isCorrect;

            let btnStyle =
              'bg-slate-800/80 hover:bg-slate-800 text-slate-200 border-slate-700/80';

            if (selectedOption !== null) {
              if (isCorrect) {
                btnStyle =
                  'bg-emerald-600/30 border-emerald-500 text-emerald-200 font-bold ring-2 ring-emerald-500/50';
              } else if (isSelected && !isCorrect) {
                btnStyle =
                  'bg-rose-600/30 border-rose-500 text-rose-200 font-bold ring-2 ring-rose-500/50';
              } else {
                btnStyle = 'opacity-40 bg-slate-900 border-slate-800 text-slate-500';
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                disabled={selectedOption !== null}
                className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition-all duration-200 flex items-center justify-between gap-3 ${btnStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-lg bg-slate-900 border border-slate-700 text-xs font-bold flex items-center justify-center shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{opt.text}</span>
                </div>

                {selectedOption !== null && (
                  <span>
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    ) : isSelected ? (
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                    ) : null}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* 答題後戰術詳解彈出卡片 */}
        {showExplanation && (
          <div className="p-4 rounded-xl bg-slate-950/90 border border-indigo-500/40 shadow-xl space-y-3 animate-fadeIn mt-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                戰術深度解析 (Tactical Review)
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {currentQ.explanation}
            </p>
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNext}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm shadow-md shadow-indigo-600/30 transition-all"
              >
                {currentIndex < QUIZ_DATA.length - 1 ? '下一題' : '查看總評分'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
