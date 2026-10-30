import React, { useState } from 'react';
import { GLOSSARY_DATA } from '../data/glossaryData';
import { Search, BookMarked, Filter, Star, UserCheck } from 'lucide-react';

export default function GlossaryView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const categories = ['全部', '球員角色', '空間戰術', '防守哲學', '進攻戰術', '戰術數據'];

  const filteredData = GLOSSARY_DATA.filter((item) => {
    const matchesCategory =
      selectedCategory === '全部' || item.category === selectedCategory;
    const matchesSearch =
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.representatives.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* 搜索與分類篩選器 */}
      <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="搜尋戰術術語（例如：Regista、偽九號、半空間、德布勞內...）"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* 分類按鈕組 */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                    : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 字典卡片展示網格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((item) => (
          <div
            key={item.term}
            className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-emerald-500/50 shadow-xl transition-all duration-300 flex flex-col justify-between group space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  {item.category}
                </span>
                <span className="text-[11px] text-slate-400 italic">
                  {item.origin}
                </span>
              </div>

              <h3 className="text-lg font-black text-white group-hover:text-emerald-400 transition-colors">
                {item.term}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.definition}
              </p>
            </div>

            <div className="space-y-2 pt-3 border-t border-slate-800/80 text-xs">
              <div className="flex items-start gap-1.5 text-slate-400">
                <UserCheck className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-300">代表球星/實例：</strong>
                  {item.representatives}
                </span>
              </div>

              <div className="flex items-start gap-1.5 text-slate-400">
                <Star className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-300">戰術價值：</strong>
                  {item.tacticalValue}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
          <BookMarked className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h4 className="text-lg font-bold text-white">找不到匹配的戰術術語</h4>
          <p className="text-xs text-slate-400 mt-1">請嘗試更換關鍵字或點擊「全部」分類。</p>
        </div>
      )}
    </div>
  );
}
