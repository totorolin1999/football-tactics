// 足球戰術術語與特殊球員角色全書
export const GLOSSARY_DATA = [
  {
    term: 'Regista (拖後組織核心)',
    category: '球員角色',
    origin: '義大利語，意為「導演 / 總策劃」',
    definition: '站位在防線前沿的防守中場位置，但職責並非純粹兇狠攔截，而是以非凡的大局觀、閱讀比賽能力與致命長傳主導整隊的攻防節奏。',
    representatives: '安德烈亞·皮爾洛 (Andrea Pirlo)、哈維·阿隆索 (Xabi Alonso)、若日尼奧 (Jorginho)',
    tacticalValue: '避開前場密集的肉搏防守，在後場相對寬鬆的空間從容發牌調度。'
  },
  {
    term: 'False 9 (偽九號 / 假前鋒)',
    category: '球員角色',
    origin: '現代傳控體系核心發明',
    definition: '身背 9 號中鋒號碼，卻不在禁區內與對方中衛硬碰硬爭頂，而是頻繁大幅度回撤到中場接球，引誘對方中衛失位跟防，同時為身後高速插上的邊鋒騰出致命衝刺通道。',
    representatives: '萊昂內爾·梅西 (2009-2012 巴薩時期)、菲爾米諾 (利物浦時期)、托蒂 (羅馬時期)',
    tacticalValue: '讓對方兩名中衛陷入「跟防還是留守」的兩難絕境，破壞對手防守結構。'
  },
  {
    term: 'Mezzala (半邊中場 / 肋部突擊者)',
    category: '球員角色',
    origin: '義大利語，意為「半個邊鋒 (Half-winger)」',
    definition: '三中場體系中站位偏向左右兩側的 8 號位中場。兼具中場防守對抗與前插對方邊後衛與中後衛之間「半空間」的進攻能力。',
    representatives: '德布勞內 (Kevin De Bruyne)、巴雷拉 (Nicolò Barella)、保羅·博格巴 (尤文一期)',
    tacticalValue: '在對手邊路與中路結合部製造人數優勢，送出精準斜塞或直接後插上攻門。'
  },
  {
    term: 'Inverted Fullback (內切邊衛 / 倒腰邊衛)',
    category: '球員角色',
    origin: '瓜迪奧拉戰術體系標誌',
    definition: '進攻時不沿著邊線前插套邊，而是橫向內收到後腰（Pivot）位置，與單後腰組成雙後腰出球體系。',
    representatives: '約翰·斯通斯 (John Stones)、津琴科 (Zinchenko)、阿諾德 (後期利物浦)',
    tacticalValue: '中場多出一人控球出球，同時在丟球瞬間能立即在球場中路形成高位屏障，防範對手直接反擊。'
  },
  {
    term: 'Raumdeuter (空間尋覓者 / 空間解讀者)',
    category: '球員角色',
    origin: '德語，托馬斯·穆勒自創詞彙',
    definition: '不依靠爆炸性的過人速度或花哨盤帶，而是憑藉對防守者視線盲區和球場空檔的極致嗅覺，在最合適的秒數出現在防線身後完成致命一擊。',
    representatives: '托馬斯·穆勒 (Thomas Müller)',
    tacticalValue: '無法用傳統盯人戰術限制，是所有嚴密防守體系的無形夢魘。'
  },
  {
    term: 'Trequartista (前腰自由人 / 3/4 區域大師)',
    category: '球員角色',
    origin: '義大利語，指活動在球場前 3/4 區域（禁區前沿與中場之間）的核心',
    definition: '傳統 10 號位天才。不承擔過多防守負擔，擁有至高無上的進攻自由度，以精妙傳球、盤帶突破與直接任意球撕裂防線。',
    representatives: '齊達內 (Zidane)、卡卡 (Kaká)、里克爾梅 (Riquelme)、厄齊爾 (Özil)',
    tacticalValue: '進攻的終極催化劑，擁有瞬息改變比賽戰局的個人天賦。'
  },
  {
    term: 'Sweeper Keeper (清道夫門將 / 門衛)',
    category: '球員角色',
    origin: '現代高位防守必備',
    definition: '不只守在球門線門框內，而是大幅前提站位至大禁區外，負責用腳法出球破壞對手的過頂長傳反擊，實質充當最後一名中後衛。',
    representatives: '曼努埃爾·諾伊爾 (Manuel Neuer)、阿利松 (Alisson)、埃德森 (Ederson)',
    tacticalValue: '允許整支球隊防線大膽壓上到中圈，壓縮對手傳球空間而不怕被輕易打身後。'
  },
  {
    term: 'Half-Space (半空間 / 肋部走廊)',
    category: '空間戰術',
    origin: '德國與西班牙現代戰術理論',
    definition: '將球場縱向劃分為 5 等分：左邊路、左半空間、中路、右半空間、右邊路。半空間是球場上進攻價值最高的黃金地帶。',
    representatives: '瓜迪奧拉體系、現代五通道推進',
    tacticalValue: '在半空間拿球具備對角線視野，既可傳中、可挑傳身後，亦可內切直接起腳遠射，防守者極難選擇防守重心。'
  },
  {
    term: 'Rest Defense (留守防守 / 預防性防守)',
    category: '防守哲學',
    origin: '現代控球攻防一體理論',
    definition: '當球隊正在前場壓上進攻時，後場留守的 3~4 名球員（通常是中衛+內收邊衛或後腰）維持的站位結構與防反擊預案。',
    representatives: '曼城 3-2 留守架構、阿森納 3-1 留守結構',
    tacticalValue: '確保進攻一旦被斷，後場立刻有穩固的人數三角覆蓋關鍵反擊路線，杜絕被一腳打穿。'
  },
  {
    term: 'Overload to Isolate (強側超載，弱側孤立單挑)',
    category: '進攻戰術',
    origin: '當代進攻核心原則',
    definition: '將大量球員（如邊衛、中前衛、邊鋒、前鋒）集中在球場一側（強側），進行密集的短傳吸引對手整條防線橫向傾斜；隨後突然一腳大範圍對角線長傳轉移到空曠的弱側，讓弱側頂級邊鋒獲得 1 對 1 絕對單挑優勢。',
    representatives: '曼城找多庫/格拉利什、皇馬找維尼修斯',
    tacticalValue: '迫使防守方防守重心失衡，創造絕佳突破或傳中空間。'
  },
  {
    term: 'Low Block (低位鐵桶防守)',
    category: '防守哲學',
    origin: '防守反擊戰術基石',
    definition: '球隊防線極度靠近自家禁區（防線距離門線通常小於 20 米），主動放棄前場逼搶，全員回縮極度壓縮禁區前空間。',
    representatives: '穆里尼奧大巴、西蒙尼馬德里競技',
    tacticalValue: '完全封死身後衝刺空間與禁區中路直傳，迫使對手只能在邊路起無效高球。'
  },
  {
    term: 'PPDA (每次防守動作對手傳球數)',
    category: '戰術數據',
    origin: 'Passes Allowed Per Defensive Action',
    definition: '用以衡量球隊高位逼搶強度的核心數據指標。數字越低，代表球隊在對手傳球極少次數內就上前實施搶斷/攔截/犯規，逼搶強度越高（如 PPDA < 8 代表極限高位壓迫）。',
    representatives: '克洛普利物浦、貝爾薩利茲聯',
    tacticalValue: '量化評估球隊高位逼搶的激進程度與侵略性。'
  }
];
