// 足球陣型資料庫
export const FORMATIONS_DATA = [
  {
    id: '4-3-3',
    name: '4-3-3 攻擊陣型',
    category: '四後衛體系',
    popularity: '現代主流（最高）',
    shortDesc: '當代傳控與高位逼搶的基石，攻守兼備且兼顧球場寬度。',
    philosophy: '強調邊路推進、前場高位壓迫與中場三角傳導控球。',
    famousTeams: [
      { name: '巴塞隆納 (2008-2012)', coach: '瓜迪奧拉', feat: '六冠王偉業、Tiki-Taka 傳控巔峰' },
      { name: '皇家馬德里 (2016-2018)', coach: '席丹', feat: '歐冠三連冠、典禮中場 (KCM) 掌控節奏' },
      { name: '利物浦 (2018-2020)', coach: '克洛普', feat: '歐冠與英超冠軍、重金屬逼搶與極速三叉戟' },
      { name: '曼城 (2022-2023)', coach: '瓜迪奧拉', feat: '三冠王、邊後衛內收與哈蘭德終結' }
    ],
    strengths: [
      '天然形成多個傳球三角形，極佳的短傳出球幾何結構',
      '兩翼邊鋒（Winger）能最大化拉開對手防線寬度',
      '前場三人組具備極佳的就地反搶（Counter-pressing）覆蓋面積',
      '陣型可塑性極高，進攻時可流暢變換為 3-2-5 或 2-3-5'
    ],
    weaknesses: [
      '單後腰（Single Pivot）負擔極重，容易被對手雙前腰前後夾擊',
      '邊後衛大幅壓上助攻時，身後兩翼肋部空檔容易被反擊打穿',
      '對中場球員的體能、技術與大局觀要求極其嚴苛'
    ],
    keyRoles: [
      { role: '單後腰 (Regista/CDM)', desc: '防守樞紐與出球節拍器，需兼具防守攔截與受迫傳球能力（如布斯克茨、羅德里）。' },
      { role: '內鋒/邊鋒 (IW/IF)', desc: '在邊路牽制後切入半空間（Half-space）直接攻門或傳威脅球（如梅西、薩拉赫）。' },
      { role: '進攻型邊後衛 (FB)', desc: '需提供高速套邊（Overlap）或內收（Invert）支援，體能消耗巨大。' }
    ],
    // 球場座標 (百分比: x=橫向 0-100, y=縱向 0-100, 0=自方門線, 100=對方門線)
    phases: {
      normal: [
        { id: 'gk', num: 1, name: '門將', role: 'GK', x: 50, y: 8, tip: '門線守護與短傳出球起點' },
        { id: 'lb', num: 3, name: '左邊後衛', role: 'LB', x: 15, y: 28, tip: '左路防守與套邊進攻' },
        { id: 'lcb', num: 4, name: '左中後衛', role: 'CB', x: 38, y: 24, tip: '後防制空與向前穿透傳球' },
        { id: 'rcb', num: 5, name: '右中後衛', role: 'CB', x: 62, y: 24, tip: '防守補位與一對一防守' },
        { id: 'rb', num: 2, name: '右邊後衛', role: 'RB', x: 85, y: 28, tip: '右翼長距離奔馳與傳中' },
        { id: 'cdm', num: 6, name: '防守中場', role: 'CDM', x: 50, y: 45, tip: '單後腰，梳理攻守轉換與掃蕩' },
        { id: 'lcm', num: 8, name: '左正中場', role: 'CM', x: 32, y: 58, tip: '8號位，兼顧回撤與前插半空間' },
        { id: 'rcm', num: 10, name: '右正中場', role: 'CM', x: 68, y: 58, tip: '組織核心，威脅直塞球與組織調度' },
        { id: 'lw', num: 11, name: '左邊鋒', role: 'LW', x: 16, y: 78, tip: '內切突破或下底倒三角傳球' },
        { id: 'st', num: 9, name: '中鋒', role: 'ST', x: 50, y: 85, tip: '禁區終結者或偽9號回撤牽引' },
        { id: 'rw', num: 7, name: '右邊鋒', role: 'RW', x: 84, y: 78, tip: '弱側無球內切與門前搶點' },
      ],
      defense: [
        { id: 'gk', num: 1, name: '門將', role: 'GK', x: 50, y: 7, tip: '站位沉退保衛球門' },
        { id: 'lb', num: 3, name: '左邊後衛', role: 'LB', x: 20, y: 20, tip: '收縮內線封鎖肋部' },
        { id: 'lcb', num: 4, name: '左中後衛', role: 'CB', x: 40, y: 18, tip: '禁區前沿盯人與爭頂' },
        { id: 'rcb', num: 5, name: '右中後衛', role: 'CB', x: 60, y: 18, tip: '保護身後空檔' },
        { id: 'rb', num: 2, name: '右邊後衛', role: 'RB', x: 80, y: 20, tip: '限制對方邊鋒起腳' },
        { id: 'cdm', num: 6, name: '防守中場', role: 'CDM', x: 50, y: 28, tip: '落位弧頂保護弧頂真空區' },
        { id: 'lcm', num: 8, name: '左正中場', role: 'CM', x: 30, y: 35, tip: '協防邊後衛與雙人包夾' },
        { id: 'rcm', num: 10, name: '右正中場', role: 'CM', x: 70, y: 35, tip: '切斷對手中路滲透線' },
        { id: 'lw', num: 11, name: '左邊鋒', role: 'LW', x: 22, y: 48, tip: '回防至半場組成 4-5-1 防守扁平線' },
        { id: 'st', num: 9, name: '中鋒', role: 'ST', x: 50, y: 55, tip: '單前鋒遊弋封堵對方回傳線' },
        { id: 'rw', num: 7, name: '右邊鋒', role: 'RW', x: 78, y: 48, tip: '回縮邊路干擾對方邊後衛出球' },
      ],
      attack: [
        { id: 'gk', num: 1, name: '門將', role: 'GK', x: 50, y: 14, tip: '大幅前提至大禁區外作為清道夫門將' },
        { id: 'lb', num: 3, name: '左邊後衛', role: 'LB', x: 12, y: 65, tip: '高位插上提供左路寬度' },
        { id: 'lcb', num: 4, name: '左中後衛', role: 'CB', x: 32, y: 38, tip: '前壓至中圈控制二點球' },
        { id: 'rcb', num: 5, name: '右中後衛', role: 'CB', x: 68, y: 38, tip: '拉開兩側預防反擊' },
        { id: 'rb', num: 2, name: '右邊後衛', role: 'RB', x: 72, y: 52, tip: '內收到後腰位置形成 3-2 出球架構' },
        { id: 'cdm', num: 6, name: '防守中場', role: 'CDM', x: 48, y: 50, tip: '中場發牌機與控球樞紐' },
        { id: 'lcm', num: 8, name: '左正中場', role: 'CM', x: 30, y: 72, tip: '佔據左側半空間創造直塞機會' },
        { id: 'rcm', num: 10, name: '右正中場', role: 'CM', x: 62, y: 74, tip: '前插對方肋部與邊鋒做踢牆配合' },
        { id: 'lw', num: 11, name: '左邊鋒', role: 'LW', x: 18, y: 88, tip: '在禁區左角一對一單挑突破' },
        { id: 'st', num: 9, name: '中鋒', role: 'ST', x: 50, y: 92, tip: '壓制兩名中後衛搶點' },
        { id: 'rw', num: 7, name: '右邊鋒', role: 'RW', x: 88, y: 84, tip: '拉邊牽扯創造右半空間通道' },
      ]
    }
  },
  {
    id: '4-2-3-1',
    name: '4-2-3-1 雙後腰平衡陣',
    category: '四後衛體系',
    popularity: '大賽首選（最穩健）',
    shortDesc: '當代足球結構最穩定的陣型之一，兼具雙後腰保護與強大前場進攻群。',
    philosophy: '以雙後腰構築中場屏障，解放前腰 10 號位創造力與邊鋒突擊。',
    famousTeams: [
      { name: '拜仁慕尼黑 (2019-2020)', coach: '弗里克', feat: '六冠王偉業、狂風暴雨般高位逼搶與邊路狂飆' },
      { name: '法國國家隊 (2018)', coach: '德尚', feat: '世界盃冠軍、坎特+博格巴雙後腰與姆巴佩反擊速度' },
      { name: '皇家馬德里 (2011-2012)', coach: '穆里尼奧', feat: '西甲百分奪冠、打破單季 121 球紀錄的閃電反擊' }
    ],
    strengths: [
      '雙後腰（Double Pivot）極大減輕防線壓力，防守縱深保護極強',
      '前腰（CAM）身後有雙層保護，可以完全專注於最後一傳與組織',
      '由守轉攻節奏切換極快，非常適合快速反擊（Counter-attack）',
      '攻守平衡度極佳，對抗各類陣型都不易落入下風'
    ],
    weaknesses: [
      '單前鋒容易陷入孤立無援，需具備背身拿球支點能力',
      '前腰若被對手人盯人防守鎖死，進攻容易陷入停滯',
      '雙後腰之間如果缺乏默契，橫向轉移防守容易出現間隙'
    ],
    keyRoles: [
      { role: '古典前腰 (CAM / 10號位)', desc: '球隊進攻心臟，需具備致命一傳、禁區前沿遠射與擺脫能力（如厄齊爾、德布勞內）。' },
      { role: '雙後腰 (一攻一守組合)', desc: '通常配置一名掃蕩型防中（B2B/毀滅者）搭檔一名出球型組織者（如坎特+博格巴）。' },
      { role: '支點前鋒 (Target Man / Complete Forward)', desc: '能頂住中衛護球，為前插的邊鋒和前腰做球。' }
    ],
    phases: {
      normal: [
        { id: 'gk', num: 1, name: '門將', role: 'GK', x: 50, y: 8, tip: '常規門將站位' },
        { id: 'lb', num: 3, name: '左邊後衛', role: 'LB', x: 16, y: 26, tip: '左側邊路防線' },
        { id: 'lcb', num: 4, name: '左中後衛', role: 'CB', x: 38, y: 22, tip: '中央防空柱石' },
        { id: 'rcb', num: 5, name: '右中後衛', role: 'CB', x: 62, y: 22, tip: '後防指揮官' },
        { id: 'rb', num: 2, name: '右邊後衛', role: 'RB', x: 84, y: 26, tip: '右翼往返走廊' },
        { id: 'ldm', num: 6, name: '左防守中場', role: 'CDM', x: 38, y: 44, tip: '拖後組織，掌控出球節奏' },
        { id: 'rdm', num: 8, name: '右防守中場', role: 'CDM', x: 62, y: 44, tip: '奔跑掃蕩與攔截對方推進' },
        { id: 'lam', num: 11, name: '左進攻中場', role: 'LM/LW', x: 20, y: 66, tip: '邊路內切與後點包抄' },
        { id: 'cam', num: 10, name: '進攻核心前腰', role: 'CAM', x: 50, y: 66, tip: '關鍵傳球發起點與二點遠射' },
        { id: 'ram', num: 7, name: '右進攻中場', role: 'RM/RW', x: 80, y: 66, tip: '下底傳中與高速突破' },
        { id: 'st', num: 9, name: '單前鋒', role: 'ST', x: 50, y: 86, tip: '頂在最前端撕扯防線與終結' },
      ],
      defense: [
        { id: 'gk', num: 1, name: '門將', role: 'GK', x: 50, y: 7, tip: '收縮在門前' },
        { id: 'lb', num: 3, name: '左邊後衛', role: 'LB', x: 20, y: 18, tip: '緊扣左側肋部' },
        { id: 'lcb', num: 4, name: '左中後衛', role: 'CB', x: 40, y: 16, tip: '看防對方中鋒' },
        { id: 'rcb', num: 5, name: '右中後衛', role: 'CB', x: 60, y: 16, tip: '補位與清道' },
        { id: 'rb', num: 2, name: '右邊後衛', role: 'RB', x: 80, y: 18, tip: '緊扣右側肋部' },
        { id: 'ldm', num: 6, name: '左防守中場', role: 'CDM', x: 38, y: 27, tip: '在防線身前形成鐵壁' },
        { id: 'rdm', num: 8, name: '右防守中場', role: 'CDM', x: 62, y: 27, tip: '封鎖禁區頂部射門路線' },
        { id: 'lam', num: 11, name: '左進攻中場', role: 'LM', x: 20, y: 38, tip: '回縮落位形成 4-4-1-1 緊湊雙層防線' },
        { id: 'cam', num: 10, name: '進攻前腰', role: 'CAM', x: 50, y: 46, tip: '在前沿阻擋對方中場轉移' },
        { id: 'ram', num: 7, name: '右進攻中場', role: 'RM', x: 80, y: 38, tip: '回防保護右邊後衛' },
        { id: 'st', num: 9, name: '單前鋒', role: 'ST', x: 50, y: 56, tip: '逼迫對方中衛出球' },
      ],
      attack: [
        { id: 'gk', num: 1, name: '門將', role: 'GK', x: 50, y: 15, tip: '大禁區邊緣充當出球後衛' },
        { id: 'lb', num: 3, name: '左邊後衛', role: 'LB', x: 12, y: 70, tip: '狂飆插上在左路傳中' },
        { id: 'lcb', num: 4, name: '左中後衛', role: 'CB', x: 36, y: 35, tip: '半場防守樞紐' },
        { id: 'rcb', num: 5, name: '右中後衛', role: 'CB', x: 64, y: 35, tip: '半場防守樞紐' },
        { id: 'rb', num: 2, name: '右邊後衛', role: 'RB', x: 88, y: 70, tip: '右翼高速壓上' },
        { id: 'ldm', num: 6, name: '左防守中場', role: 'CDM', x: 35, y: 50, tip: '拖後保障轉換球權安全' },
        { id: 'rdm', num: 8, name: '右防守中場', role: 'CDM', x: 60, y: 58, tip: '前插至禁區外二點搶射' },
        { id: 'lam', num: 11, name: '左進攻中場', role: 'LW', x: 28, y: 82, tip: '內切進入大禁區肋部攻門' },
        { id: 'cam', num: 10, name: '進攻前腰', role: 'CAM', x: 50, y: 78, tip: '在禁區弧頂傳威脅球' },
        { id: 'ram', num: 7, name: '右進攻中場', role: 'RW', x: 74, y: 82, tip: '切入禁區吸引防守注意力' },
        { id: 'st', num: 9, name: '單前鋒', role: 'ST', x: 50, y: 92, tip: '在點球點近距離卡位搶點' },
      ]
    }
  },
  {
    id: '4-4-2',
    name: '4-4-2 經典平行陣',
    category: '四後衛體系',
    popularity: '古典永恆與實用主義',
    shortDesc: '足球歷史上最具代表性的經典陣型，兩道四人平行線構成天然的緊湊防守結構。',
    philosophy: '雙前鋒互補連線，雙翼齊飛傳中，中場兩道平行防線極度壓縮空間。',
    famousTeams: [
      { name: '曼聯 (1998-1999)', coach: '佛格森爵士', feat: '三冠王神話、黑風雙煞 (約克+科爾) 與貝克漢傳中' },
      { name: 'AC 米蘭 (1987-1991)', coach: '薩基', feat: '薩基主義奠基、高位造越位與區域防守典範' },
      { name: '馬德里競技 (2013-2016)', coach: '西蒙尼', feat: '西甲冠軍、極致鐵血防守低位大巴與致命反擊' },
      { name: '萊斯特城 (2015-2016)', coach: '拉涅利', feat: '英超奇蹟奪冠、坎特搶斷與瓦爾迪絕殺' }
    ],
    strengths: [
      '前後兩道四人平行線（4-4），能完美覆蓋球場橫向寬度',
      '雙前鋒（Dual Strikers）能對兩名中後衛形成一對一全面施壓',
      '反擊時前場有兩個接應點，長傳反擊成功率高',
      '球員職責分明，戰術執行門檻相較複雜輪轉體系更易落實'
    ],
    weaknesses: [
      '面對三中場（如 4-3-3）時，中路容易陷入「二打三」的人數劣勢',
      '中前衛若缺乏回撤，前後場線與線之間（Between the lines）易有脫節空檔',
      '現代足球中對純邊前衛的往返攻防體能消耗極其恐怖'
    ],
    keyRoles: [
      { role: '雙前鋒搭檔 (一快一高 / 一高一影)', desc: '經典的一高一快（支點中鋒爭頂+速度型前鋒偷身後）或一人回撤做接應。' },
      { role: '全能中場 (Box-to-Box)', desc: '在兩個禁區之間狂奔，兼顧防守搶斷與禁區前沿二點插上（如羅伊·基恩、傑拉德）。' },
      { role: '傳統邊前衛 (RM/LM)', desc: '擅長精準傳中與沿邊線折返防守（如貝克漢、吉格斯）。' }
    ],
    phases: {
      normal: [
        { id: 'gk', num: 1, name: '門將', role: 'GK', x: 50, y: 8, tip: '門線守護' },
        { id: 'lb', num: 3, name: '左邊後衛', role: 'LB', x: 16, y: 26, tip: '左側後衛線' },
        { id: 'lcb', num: 4, name: '左中後衛', role: 'CB', x: 38, y: 22, tip: '中路盯防與防空' },
        { id: 'rcb', num: 5, name: '右中後衛', role: 'CB', x: 62, y: 22, tip: '中路防守阻擊' },
        { id: 'rb', num: 2, name: '右邊後衛', role: 'RB', x: 84, y: 26, tip: '右側後衛線' },
        { id: 'lm', num: 11, name: '左邊前衛', role: 'LM', x: 16, y: 54, tip: '左路寬度與傳中' },
        { id: 'lcm', num: 6, name: '左中前衛', role: 'CM', x: 38, y: 52, tip: '攔截與中路出球' },
        { id: 'rcm', num: 8, name: '右中前衛', role: 'CM', x: 62, y: 52, tip: 'B2B 前插與組織' },
        { id: 'rm', num: 7, name: '右邊前衛', role: 'RM', x: 84, y: 54, tip: '右翼高速推進與起球' },
        { id: 'ls', num: 9, name: '左前鋒', role: 'ST', x: 38, y: 82, tip: '支點牽制與頭球攻門' },
        { id: 'rs', num: 10, name: '右前鋒/影鋒', role: 'SS/ST', x: 62, y: 82, tip: '穿插跑位與身後衝刺' },
      ],
      defense: [
        { id: 'gk', num: 1, name: '門將', role: 'GK', x: 50, y: 7, tip: '守門' },
        { id: 'lb', num: 3, name: '左邊後衛', role: 'LB', x: 20, y: 18, tip: '收緊防線' },
        { id: 'lcb', num: 4, name: '左中後衛', role: 'CB', x: 40, y: 16, tip: '禁區防線' },
        { id: 'rcb', num: 5, name: '右中後衛', role: 'CB', x: 60, y: 16, tip: '禁區防線' },
        { id: 'rb', num: 2, name: '右邊後衛', role: 'RB', x: 80, y: 18, tip: '收緊防線' },
        { id: 'lm', num: 11, name: '左邊前衛', role: 'LM', x: 22, y: 32, tip: '落位中場平行防線' },
        { id: 'lcm', num: 6, name: '左中前衛', role: 'CM', x: 41, y: 30, tip: '封鎖中路直傳' },
        { id: 'rcm', num: 8, name: '右中前衛', role: 'CM', x: 59, y: 30, tip: '封鎖中路直傳' },
        { id: 'rm', num: 7, name: '右邊前衛', role: 'RM', x: 78, y: 32, tip: '落位中場平行防線' },
        { id: 'ls', num: 9, name: '左前鋒', role: 'ST', x: 42, y: 48, tip: '第一道壓迫阻截' },
        { id: 'rs', num: 10, name: '右前鋒', role: 'ST', x: 58, y: 48, tip: '封死對方回傳線' },
      ],
      attack: [
        { id: 'gk', num: 1, name: '門將', role: 'GK', x: 50, y: 12, tip: '大禁區站位' },
        { id: 'lb', num: 3, name: '左邊後衛', role: 'LB', x: 12, y: 55, tip: '支援左翼傳中' },
        { id: 'lcb', num: 4, name: '左中後衛', role: 'CB', x: 35, y: 32, tip: '拖後中衛' },
        { id: 'rcb', num: 5, name: '右中後衛', role: 'CB', x: 65, y: 32, tip: '拖後中衛' },
        { id: 'rb', num: 2, name: '右邊後衛', role: 'RB', x: 88, y: 55, tip: '支援右翼傳中' },
        { id: 'lm', num: 11, name: '左邊前衛', role: 'LM', x: 10, y: 82, tip: '底線精準起高球傳中' },
        { id: 'lcm', num: 6, name: '左中前衛', role: 'CM', x: 40, y: 56, tip: '中圈調度與二點控制' },
        { id: 'rcm', num: 8, name: '右中前衛', role: 'CM', x: 60, y: 68, tip: '前插至禁區外二點射門' },
        { id: 'rm', num: 7, name: '右邊前衛', role: 'RM', x: 90, y: 82, tip: '右路下底起球' },
        { id: 'ls', num: 9, name: '左前鋒', role: 'ST', x: 38, y: 92, tip: '禁區前點頭球搶射' },
        { id: 'rs', num: 10, name: '右前鋒', role: 'ST', x: 62, y: 90, tip: '禁區後點包抄' },
      ]
    }
  },
  {
    id: '3-5-2',
    name: '3-5-2 / 5-3-2 彈性翼衛陣',
    category: '三中衛體系',
    popularity: '義大利傳統與戰術大師最愛',
    shortDesc: '具備極大戰術彈性的三中衛架構，進攻時兩翼壓上成 3-5-2，防守時翼衛回縮成五後衛 5-3-2。',
    philosophy: '中路極度密集、雙前鋒牽制、左右翼衛包攬整條邊路走廊。',
    famousTeams: [
      { name: '尤文圖斯 (2011-2017)', coach: '孔蒂 / 阿萊格里', feat: '義甲連霸王朝、BBC (博努奇+基耶利尼+巴爾扎利) 傳奇三中衛' },
      { name: '國際米蘭 (2020-2024)', coach: '孔蒂 / 小因扎吉', feat: '義甲冠軍、歐冠亞軍、極速雙中鋒與翼衛連線' },
      { name: '荷蘭國家隊 (2014)', coach: '范加爾', feat: '世界盃季軍、5-1 狂勝西班牙、極致防反經典' }
    ],
    strengths: [
      '防守時 5 後衛 + 3 中場，中路與禁區如鋼鐵堡壘般難以撼動',
      '三名中衛能從容應對對手雙前鋒或單前鋒突擊，防空極強',
      '雙前鋒連線具備超高反擊威脅，容易直接打對方邊衛身後',
      '三中場在中路擁有天然人數優勢，能有效搶下球權'
    ],
    weaknesses: [
      '對兩側翼衛（Wing-back）體能與能力要求近乎非人，需往返奔跑 90 分鐘',
      '若兩翼衛被壓制無法壓上，陣型將退化為極度被動的 5-3-2',
      '三名中衛若橫向移動補位速度慢，邊肋部容易被對手打穿'
    ],
    keyRoles: [
      { role: '出球中衛 (Libero / Ball-Playing CB)', desc: '三中衛居中者，常擔任進攻發起點與後場清道夫（如博努奇、巴斯托尼）。' },
      { role: '全能翼衛 (Wing-Back / RWB & LWB)', desc: '掌控整條邊路，既是邊鋒也是邊後衛（如哈基米、迪馬爾科）。' },
      { role: '互補雙前鋒 (LuLa 連線型)', desc: '一人具備衝擊力強硬背身，另一人具備靈巧技術（如盧卡庫+勞塔羅）。' }
    ],
    phases: {
      normal: [
        { id: 'gk', num: 1, name: '門將', role: 'GK', x: 50, y: 8, tip: '門線守護' },
        { id: 'lcb', num: 3, name: '左中後衛', role: 'CB', x: 28, y: 22, tip: '保護左側肋部' },
        { id: 'cb', num: 4, name: '居中中後衛', role: 'CB', x: 50, y: 20, tip: '後防統帥與出球指揮' },
        { id: 'rcb', num: 5, name: '右中後衛', role: 'CB', x: 72, y: 22, tip: '保護右側肋部' },
        { id: 'lwb', num: 11, name: '左翼衛', role: 'LWB', x: 12, y: 48, tip: '左側全攻全守' },
        { id: 'dm', num: 6, name: '防守拖後中場', role: 'CDM', x: 50, y: 42, tip: '皮爾洛式節拍器' },
        { id: 'lcm', num: 8, name: '左中前衛', role: 'CM', x: 34, y: 56, tip: 'Mezzala 邊肋部前插' },
        { id: 'rcm', num: 10, name: '右中前衛', role: 'CM', x: 66, y: 56, tip: '進攻組織與直塞' },
        { id: 'rwb', num: 2, name: '右翼衛', role: 'RWB', x: 88, y: 48, tip: '右側全攻全守' },
        { id: 'ls', num: 9, name: '左前鋒', role: 'ST', x: 40, y: 82, tip: '支點衝擊與背身' },
        { id: 'rs', num: 7, name: '右前鋒', role: 'ST', x: 60, y: 82, tip: '靈動穿插與門前搶點' },
      ],
      defense: [
        { id: 'gk', num: 1, name: '門將', role: 'GK', x: 50, y: 7, tip: '門前' },
        { id: 'lwb', num: 11, name: '左翼衛', role: 'LWB', x: 12, y: 16, tip: '回落至後防線組成五後衛' },
        { id: 'lcb', num: 3, name: '左中後衛', role: 'CB', x: 30, y: 16, tip: '禁區防守' },
        { id: 'cb', num: 4, name: '居中中後衛', role: 'CB', x: 50, y: 14, tip: '最後防線' },
        { id: 'rcb', num: 5, name: '右中後衛', role: 'CB', x: 70, y: 16, tip: '禁區防守' },
        { id: 'rwb', num: 2, name: '右翼衛', role: 'RWB', x: 88, y: 16, tip: '回落至後防線組成五後衛' },
        { id: 'lcm', num: 8, name: '左中前衛', role: 'CM', x: 30, y: 30, tip: '三中場鏈條左側' },
        { id: 'dm', num: 6, name: '防守中場', role: 'CDM', x: 50, y: 28, tip: '三中場鏈條中心' },
        { id: 'rcm', num: 10, name: '右中前衛', role: 'CM', x: 70, y: 30, tip: '三中場鏈條右側' },
        { id: 'ls', num: 9, name: '左前鋒', role: 'ST', x: 40, y: 50, tip: '準備反擊接應' },
        { id: 'rs', num: 7, name: '右前鋒', role: 'ST', x: 60, y: 50, tip: '拉邊準備反擊衝刺' },
      ],
      attack: [
        { id: 'gk', num: 1, name: '門將', role: 'GK', x: 50, y: 14, tip: '出球守門員' },
        { id: 'lcb', num: 3, name: '左中後衛', role: 'CB', x: 26, y: 35, tip: '拉開出球線' },
        { id: 'cb', num: 4, name: '居中中後衛', role: 'CB', x: 50, y: 32, tip: '中圈指揮官' },
        { id: 'rcb', num: 5, name: '右中後衛', role: 'CB', x: 74, y: 35, tip: '前壓支援' },
        { id: 'lwb', num: 11, name: '左翼衛', role: 'LWB', x: 8, y: 78, tip: '高位壓上如左邊鋒' },
        { id: 'dm', num: 6, name: '防守中場', role: 'CDM', x: 50, y: 50, tip: '發牌指揮' },
        { id: 'lcm', num: 8, name: '左中前衛', role: 'CM', x: 32, y: 72, tip: '前插半空間威脅禁區' },
        { id: 'rcm', num: 10, name: '右中前衛', role: 'CM', x: 68, y: 72, tip: '送出精準過頂球' },
        { id: 'rwb', num: 2, name: '右翼衛', role: 'RWB', x: 92, y: 78, tip: '高位壓上傳中' },
        { id: 'ls', num: 9, name: '左前鋒', role: 'ST', x: 38, y: 90, tip: '吸引雙中衛' },
        { id: 'rs', num: 7, name: '右前鋒', role: 'ST', x: 62, y: 90, tip: '搶點終結' },
      ]
    }
  },
  {
    id: '3-4-3',
    name: '3-4-3 / 3-4-2-1 現代狂攻陣',
    category: '三中衛體系',
    popularity: '壓迫與壓制力極強',
    shortDesc: '前場三叉戟與雙翼衛組成的超強壓制網絡，五通道進攻的極致展現。',
    philosophy: '雙翼衛拉開寬度，雙前腰/內鋒進佔半空間，五人同時進攻前線。',
    famousTeams: [
      { name: '切爾西 (2016-2017 / 2020-2021)', coach: '孔蒂 / 圖赫爾', feat: '英超冠軍 13 連勝、2021 歐冠冠軍擊敗曼城' },
      { name: '勒沃庫森 (2023-2024)', coach: '哈維·阿隆索', feat: '德甲不敗神話奪冠、華麗短傳流暢輪轉 3-4-2-1' },
      { name: '亞特蘭大 (2019-2022)', coach: '加斯佩里尼', feat: '義甲真藍黑神話、全場人盯人瘋狂進攻' }
    ],
    strengths: [
      '進攻時 5 個人橫向覆蓋五個垂直通道（雙邊路 + 雙半空間 + 中路）',
      '前場雙內鋒（Double 10s）在對方後腰與中衛間遊弋，極難盯防',
      '丟球後能立即在對方半場形成多人圍搶陷阱',
      '對陣四後衛球隊時，能在邊路製造「翼衛+內鋒」的局部二打一優勢'
    ],
    weaknesses: [
      '雙中前衛負擔極重，容易被對手三中場夾擊包圍',
      '若翼衛壓上失誤，三名中衛必須單獨面對大片邊路空檔',
      '戰術體系極其複雜，對球員站位意識與戰術素養要求極高'
    ],
    keyRoles: [
      { role: '雙前腰 / 內鋒 (10號位雙星)', desc: '在半空間接球轉身，與單箭頭互相配合突擊（如阿扎爾、佩德羅、維爾茨）。' },
      { role: '邊中衛 (Wide CB / Overlapping CB)', desc: '現代邊中衛常會大膽前插支援翼衛，形成局部超載（如阿斯皮利奎塔、巴斯托尼）。' },
      { role: '雙中場發動機', desc: '需有極強跑動掃蕩與長傳調度能力（如坎特、扎卡）。' }
    ],
    phases: {
      normal: [
        { id: 'gk', num: 1, name: '門將', role: 'GK', x: 50, y: 8, tip: '清道夫門將' },
        { id: 'lcb', num: 3, name: '左中後衛', role: 'CB', x: 26, y: 22, tip: '後防左側' },
        { id: 'cb', num: 4, name: '居中中後衛', role: 'CB', x: 50, y: 20, tip: '中央支柱' },
        { id: 'rcb', num: 5, name: '右中後衛', role: 'CB', x: 74, y: 22, tip: '後防右側' },
        { id: 'lwb', num: 11, name: '左翼衛', role: 'LWB', x: 12, y: 50, tip: '左路走廊' },
        { id: 'lcm', num: 6, name: '左中場', role: 'CM', x: 38, y: 48, tip: '中路攔截' },
        { id: 'rcm', num: 8, name: '右中場', role: 'CM', x: 62, y: 48, tip: '出球節拍' },
        { id: 'rwb', num: 2, name: '右翼衛', role: 'RWB', x: 88, y: 50, tip: '右路走廊' },
        { id: 'lf', num: 10, name: '左前腰/內鋒', role: 'AM/LW', x: 30, y: 72, tip: '左半空間核心' },
        { id: 'st', num: 9, name: '中鋒', role: 'ST', x: 50, y: 84, tip: '終結與前線壓制' },
        { id: 'rf', num: 7, name: '右前腰/內鋒', role: 'AM/RW', x: 70, y: 72, tip: '右半空間核心' },
      ],
      defense: [
        { id: 'gk', num: 1, name: '門將', role: 'GK', x: 50, y: 7, tip: '門線守護' },
        { id: 'lwb', num: 11, name: '左翼衛', role: 'LWB', x: 12, y: 16, tip: '落位成五後衛左側' },
        { id: 'lcb', num: 3, name: '左中後衛', role: 'CB', x: 30, y: 16, tip: '禁區防禦' },
        { id: 'cb', num: 4, name: '居中中後衛', role: 'CB', x: 50, y: 14, tip: '中央統帥' },
        { id: 'rcb', num: 5, name: '右中後衛', role: 'CB', x: 70, y: 16, tip: '禁區防禦' },
        { id: 'rwb', num: 2, name: '右翼衛', role: 'RWB', x: 88, y: 16, tip: '落位成五後衛右側' },
        { id: 'lcm', num: 6, name: '左中場', role: 'CM', x: 38, y: 30, tip: '中路封阻' },
        { id: 'rcm', num: 8, name: '右中場', role: 'CM', x: 62, y: 30, tip: '中路封阻' },
        { id: 'lf', num: 10, name: '左內鋒', role: 'AM', x: 28, y: 44, tip: '回落至中場肋部協助' },
        { id: 'st', num: 9, name: '中鋒', role: 'ST', x: 50, y: 56, tip: '壓制對方中衛' },
        { id: 'rf', num: 7, name: '右內鋒', role: 'AM', x: 72, y: 44, tip: '回落至中場肋部協助' },
      ],
      attack: [
        { id: 'gk', num: 1, name: '門將', role: 'GK', x: 50, y: 14, tip: '出球守門' },
        { id: 'lcb', num: 3, name: '左中後衛', role: 'CB', x: 26, y: 38, tip: '推進傳球' },
        { id: 'cb', num: 4, name: '居中中後衛', role: 'CB', x: 50, y: 34, tip: '後防樞紐' },
        { id: 'rcb', num: 5, name: '右中後衛', role: 'CB', x: 74, y: 38, tip: '推進傳球' },
        { id: 'lwb', num: 11, name: '左翼衛', role: 'LWB', x: 8, y: 82, tip: '佔據左翼通道寬度' },
        { id: 'lcm', num: 6, name: '左中場', role: 'CM', x: 38, y: 54, tip: '二點球搶截與轉移' },
        { id: 'rcm', num: 8, name: '右中場', role: 'CM', x: 62, y: 54, tip: '二點球搶截與轉移' },
        { id: 'rwb', num: 2, name: '右翼衛', role: 'RWB', x: 92, y: 82, tip: '佔據右翼通道寬度' },
        { id: 'lf', num: 10, name: '左內鋒', role: 'AM', x: 30, y: 84, tip: '衝擊禁區左肋部' },
        { id: 'st', num: 9, name: '中鋒', role: 'ST', x: 50, y: 92, tip: '門前致命一擊' },
        { id: 'rf', num: 7, name: '右內鋒', role: 'AM', x: 70, y: 84, tip: '衝擊禁區右肋部' },
      ]
    }
  },
  {
    id: '4-3-1-2',
    name: '4-3-1-2 鑽石中場陣',
    category: '四後衛體系',
    popularity: '中場技術流極致',
    shortDesc: '摒棄傳統邊鋒，將全部重兵集中在中路的鑽石型（Diamond）架構。',
    philosophy: '中場四人組成菱形傳控網，完全掌控中路球權，靠邊後衛提供全場寬度。',
    famousTeams: [
      { name: 'AC 米蘭 (2002-2007)', coach: '安切洛蒂', feat: '歐冠兩度奪冠、皮爾洛+加圖索+西多夫+卡卡夢幻中場' },
      { name: '皇家馬德里 (2016-2017)', coach: '席丹', feat: '歐冠決賽大勝尤文、伊斯科前腰自由人' },
      { name: '皇家馬德里 (2023-2024)', coach: '安切洛蒂', feat: '歐冠與西甲雙冠、貝林厄姆前腰大爆發' }
    ],
    strengths: [
      '中路 4 打 3 或 4 打 2，擁有壓倒性的中場人數與控球優勢',
      '菱形結構創造無限的短傳配合角度，對手極難斷球',
      '前腰（10號）具備絕對自由度，能在禁區弧頂肆意威脅球門',
      '雙前鋒可靈活扯動至兩翼，為後插上的中場騰出通道'
    ],
    weaknesses: [
      '天然缺乏邊鋒，邊路完全仰賴兩名邊後衛，極易被對手邊路針對',
      '若邊後衛體能下滑無法壓上，進攻寬度嚴重受限，容易陷入泥潭',
      '面對邊路進攻強大的球隊時，後防兩翼壓力空前巨大'
    ],
    keyRoles: [
      { role: '組織後腰 (Deep-lying Playmaker / Pirlo Role)', desc: '在防線前從容調度，具備雷達般的長傳視野。' },
      { role: '全能前腰 (Trequartista / Bellingham Role)', desc: '既能組織也是射手，具備強大後插上入球能力。' },
      { role: '體能怪獸邊後衛', desc: '必須具備 90 分鐘瘋狂上下折返的魔鬼體能（如卡洛斯、卡福）。' }
    ],
    phases: {
      normal: [
        { id: 'gk', num: 1, name: '門將', role: 'GK', x: 50, y: 8, tip: '常規門將' },
        { id: 'lb', num: 3, name: '左邊後衛', role: 'LB', x: 15, y: 30, tip: '包攬左翼攻防' },
        { id: 'lcb', num: 4, name: '左中後衛', role: 'CB', x: 38, y: 22, tip: '中路防守' },
        { id: 'rcb', num: 5, name: '右中後衛', role: 'CB', x: 62, y: 22, tip: '中路防守' },
        { id: 'rb', num: 2, name: '右邊後衛', role: 'RB', x: 85, y: 30, tip: '包攬右翼攻防' },
        { id: 'cdm', num: 6, name: '拖後中場 (菱形底)', role: 'CDM', x: 50, y: 40, tip: '皮爾洛位置，掌控方向' },
        { id: 'lcm', num: 8, name: '左中場 (菱形左)', role: 'CM', x: 32, y: 54, tip: '左側跑動掃蕩' },
        { id: 'rcm', num: 12, name: '右中場 (菱形右)', role: 'CM', x: 68, y: 54, tip: '右側護航與壓迫' },
        { id: 'cam', num: 10, name: '前腰 (菱形頂)', role: 'CAM', x: 50, y: 68, tip: '卡卡位置，絕殺穿透球' },
        { id: 'ls', num: 9, name: '左前鋒', role: 'ST', x: 38, y: 84, tip: '跑位扯動拉開防線' },
        { id: 'rs', num: 7, name: '右前鋒', role: 'ST', x: 62, y: 84, tip: '拉邊接應或門前推射' },
      ],
      defense: [
        { id: 'gk', num: 1, name: '門將', role: 'GK', x: 50, y: 7, tip: '門前' },
        { id: 'lb', num: 3, name: '左邊後衛', role: 'LB', x: 20, y: 18, tip: '緊守邊路' },
        { id: 'lcb', num: 4, name: '左中後衛', role: 'CB', x: 40, y: 16, tip: '禁區防線' },
        { id: 'rcb', num: 5, name: '右中後衛', role: 'CB', x: 60, y: 16, tip: '禁區防線' },
        { id: 'rb', num: 2, name: '右邊後衛', role: 'RB', x: 80, y: 18, tip: '緊守邊路' },
        { id: 'cdm', num: 6, name: '拖後中場', role: 'CDM', x: 50, y: 26, tip: '禁區弧頂掃蕩' },
        { id: 'lcm', num: 8, name: '左中場', role: 'CM', x: 32, y: 34, tip: '協防左邊路' },
        { id: 'rcm', num: 12, name: '右中場', role: 'CM', x: 68, y: 34, tip: '協防右邊路' },
        { id: 'cam', num: 10, name: '前腰', role: 'CAM', x: 50, y: 44, tip: '干擾對方後腰出球' },
        { id: 'ls', num: 9, name: '左前鋒', role: 'ST', x: 38, y: 56, tip: '伺機快速前插' },
        { id: 'rs', num: 7, name: '右前鋒', role: 'ST', x: 62, y: 56, tip: '伺機拉邊接應' },
      ],
      attack: [
        { id: 'gk', num: 1, name: '門將', role: 'GK', x: 50, y: 14, tip: '出球保護' },
        { id: 'lb', num: 3, name: '左邊後衛', role: 'LB', x: 10, y: 74, tip: '極速套邊提供左路寬度' },
        { id: 'lcb', num: 4, name: '左中後衛', role: 'CB', x: 36, y: 34, tip: '保護半場' },
        { id: 'rcb', num: 5, name: '右中後衛', role: 'CB', x: 64, y: 34, tip: '保護半場' },
        { id: 'rb', num: 2, name: '右邊後衛', role: 'RB', x: 90, y: 74, tip: '極速套邊提供右路寬度' },
        { id: 'cdm', num: 6, name: '拖後中場', role: 'CDM', x: 50, y: 48, tip: '大腦中樞調度' },
        { id: 'lcm', num: 8, name: '左中場', role: 'CM', x: 30, y: 64, tip: '策應左邊後衛' },
        { id: 'rcm', num: 12, name: '右中場', role: 'CM', x: 70, y: 64, tip: '策應右邊後衛' },
        { id: 'cam', num: 10, name: '前腰', role: 'CAM', x: 50, y: 80, tip: '禁區弧頂致命射門/直塞' },
        { id: 'ls', num: 9, name: '左前鋒', role: 'ST', x: 38, y: 92, tip: '拉扯中衛近門推射' },
        { id: 'rs', num: 7, name: '右前鋒', role: 'ST', x: 62, y: 92, tip: '後點包抄' },
      ]
    }
  }
];
