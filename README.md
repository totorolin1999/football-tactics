# ⚽ TactixMaster - 足球陣型與戰術解析系統

[![Deploy to GitHub Pages](https://github.com/totorolin1999/football-tactics/actions/workflows/deploy.yml/badge.svg)](https://github.com/totorolin1999/football-tactics/actions/workflows/deploy.yml)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF.svg)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**TactixMaster** 是一個專為球迷、教練與戰術分析愛好者設計的現代化互動式足球陣型與戰術介紹系統。透過高擬真 2D 球場模擬、三階段攻守站位切換、半空間（Half-Space）通道分析、動態戰術路線以及自定義教練畫板，深入剖析當代綠茵場上的戰術奧秘。

👉 **[🌐 點此前往線上即時體驗 Demo](https://totorolin1999.github.io/football-tactics/)**

---

## 🌟 核心功能特色

### 1. 🏟️ 陣型百科 (Formations Guide)
- **主流陣型深度收錄**：4-3-3、4-2-3-1、4-4-2、3-5-2、3-4-3 (3-4-2-1)、4-3-1-2 (鑽石中場) 等。
- **三階段攻守動態切換**：
  - 🛡️ **防守落位 (Defense Phase)**：低位防守與邊路收縮結構。
  - ⚖️ **常規轉換 (Transition / Normal)**：基準站位與出球網絡。
  - ⚡ **全線壓上 (Attack Phase)**：翼衛狂飆、邊衛內收、前場 5 人攻線。
- **五通道與半空間切換**：可一鍵開關視覺化展示現代「半空間 (Half-Space)」與邊路走廊。
- **球員戰術職責盤點**：點擊球場上的任一球員，即時查看該角色在該陣型中的核心任務與跑動要領。
- **歷史傳奇名隊案例**：瓜迪奧拉六冠王巴薩、克洛普重金屬利物浦、弗里克拜仁、席丹皇馬三連冠等實戰紀錄。

### 2. 🧠 戰術哲學與打法 (Tactical Philosophies)
- **五大世界級戰術流派動態演示**：
  - **Tiki-Taka (傳控足球)**：幾何三角形傳導、6秒就地反搶法則、位置空間學 (Juego de Posición)。
  - **Gegenpressing (高位逼搶)**：克洛普重金屬壓迫、逼搶觸發點 (Pressing Triggers)、奪球黃金 8 秒。
  - **Catenaccio & Low Block (鏈式防守與極致防反)**：雙層大巴、禁區封鎖、垂直縱深長傳。
  - **Total Football (全能足球)**：米歇爾斯與克魯伊夫哲學、全員流動換位、高位造越位。
  - **Half-Space & Inverted Fullbacks (半空間突破與內切邊衛)**：3-2-5 現代變形結構、肋部倒三角傳球。
- **動態戰術路徑模擬**：球場實時呈現傳球三角形、高位圍搶陷阱與防反衝刺軌跡。
- **破解之道**：為每一種戰術流派提供具體的主教練剋制手段。

### 3. ⚔️ 陣型剋制與攻防對決 (Matchup Matrix)
- **雙隊同場即時對撞**：自由選擇紅隊（守備方）與藍隊（進攻方）陣型，在同一塊球場上即時呈現 22 人的對位與空間衝突。
- **深度對戰分析**：中場人數絞殺對比、兩翼過載 (Overload) 研判、主教練破局錦囊。

### 4. 📋 戰術畫板與教練沙盒 (Tactics Board)
- **全自由拖曳移動**：可隨意拖動 11 名藍隊球員、紅隊防守陣線及足球位置。
- **多功能戰術繪圖筆**：
  - 繪製傳球（黃色虛線箭頭）
  - 繪製跑位（天藍色實線箭頭）
  - 壓迫標記（紅色自由曲線）
- **一鍵匯出戰術圖**：支援將自定義設計的戰術球場直接導出為高清 PNG 圖片。

### 5. 📖 足球戰術術語全書 (Tactics Glossary)
- **專業特殊角色精解**：Regista、False 9 (偽九號)、Mezzala、Raumdeuter、Trequartista、Sweeper Keeper、Inverted Fullback 等。
- **現代戰術名詞庫**：Half-Space、PPDA、Rest Defense (留守防守)、Overload to Isolate 等。
- **支援即時搜索與分類篩選**。

### 6. 🎯 戰術大師測驗 (Tactical IQ Quiz)
- 涵蓋實戰情境、高階戰術考題的 8 題測驗。
- 即時解析答題原因，完成後生成「歐足聯 Pro 級神級教頭」等榮譽評級並發射慶祝紙花。

---

## 🚀 本地開發與啟動

### 環境需求
- **Node.js**: v18.0.0 以上 (建議 v20 或 v22)
- **npm** / **pnpm** / **yarn**

### 安裝與啟動
```bash
# 1. 複製專案
git clone https://github.com/totorolin1999/football-tactics.git
cd football-tactics

# 2. 安裝依賴套件
npm install

# 3. 啟動本地開發伺服器
npm run dev
```

啟動後，瀏覽器打開終端機顯示的本地網址（通常為 `http://localhost:5173/`）即可使用！

### 建立生產環境打包版本
```bash
npm run build
npm run preview
```

---

## 🌐 部署方式 (GitHub Pages)

本專案已配置 **GitHub Actions** 自動化工作流（位於 `.github/workflows/deploy.yml`）。

1. 將程式碼推送到 GitHub 的 `main` 分支。
2. 進入 GitHub Repository 的 **Settings -> Pages**。
3. 在 **Build and deployment** > **Source** 選擇 **GitHub Actions**。
4. Actions 構建完成後，即可在 `https://totorolin1999.github.io/football-tactics/` 訪問線上網站。

---

## 📁 專案架構目錄

```text
football-tactics/
├── index.html                   # HTML 入口
├── package.json                 # 依賴套件配置
├── vite.config.js               # Vite 與 TailwindCSS 配置
├── src/
│   ├── main.jsx                 # React 掛載入口
│   ├── App.jsx                  # 系統主框架與導航切換
│   ├── index.css                # TailwindCSS 與全域樣式
│   ├── components/
│   │   ├── Navbar.jsx           # 頂部導航欄
│   │   ├── Pitch.jsx            # 2D 足球場核心渲染組件 (支援五通道與標線)
│   │   ├── FormationsView.jsx   # 陣型百科與三階段攻守解析
│   │   ├── TacticsView.jsx      # 戰術哲學與動態軌跡模擬
│   │   ├── MatchupView.jsx      # 陣型相剋與雙隊對撞棋盤
│   │   ├── TacticsBoard.jsx     # 互動式戰術畫板與導出
│   │   ├── GlossaryView.jsx     # 戰術術語與特殊角色字典
│   │   └── QuizView.jsx         # 戰術大師隨堂測驗
│   └── data/
│       ├── formationsData.js    # 陣型數據與 11 人座標庫
│       ├── tacticsData.js       # 戰術哲學與原則數據
│       ├── matchupData.js       # 陣型剋制矩陣分析
│       ├── glossaryData.js      # 術語字典詞庫
│       └── quizData.js          # 測驗試題庫
```

---

## 🛠️ 技術架構與使用工具

| 類別 | 技術 / 工具 | 說明 |
| :--- | :--- | :--- |
| **前端框架** | **React 19** | 採用最新 React 函數式組件與 Hooks 狀態管理 |
| **建置工具** | **Vite 8** | 極速 HMR 熱更新與 Rollup / Rolldown 打包 |
| **樣式與 UI** | **Tailwind CSS v4** | 最新版原子化 CSS 框架與動態深色主題 |
| **圖標庫** | **Lucide React** | 高品質簡約現代圖標 |
| **視覺特效** | **Canvas-Confetti** | 測驗通關紙花灑落慶祝效果 |
| **CI / CD** | **GitHub Actions** | 推送 `main` 分支自動打包部署至 GitHub Pages |

---

## 📄 開源授權 (License)

本專案基於 [MIT License](LICENSE) 授權開源，歡迎個人學習、教學與非商業自由使用。

---

## 🤝 貢獻與意見反饋

如果您有新的陣型想法、戰術分析建議或發現任何問題：
1. 歡迎提交 **Issue** 或發起 **Pull Request**。
2. 如果這個專案對您理解足球戰術有所幫助，歡迎點擊右上角給個 ⭐️ **Star** 支持！
