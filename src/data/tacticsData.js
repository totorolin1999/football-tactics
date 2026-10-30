// 足球戰術哲學與打法數據庫
export const TACTICS_DATA = [
  {
    id: 'tiki-taka',
    name: '傳控足球 (Tiki-Taka / Juego de Posición)',
    subtitle: '極致的控球率、連續三角短傳與空間輪轉',
    origin: '西班牙 / 巴塞隆納 (克魯伊夫奠基、瓜迪奧拉發揚光大)',
    corePrinciples: [
      {
        title: '幾何三角形原則 (Triangles)',
        desc: '持球球員身邊永遠必須存在至少兩個無球接應點，形成三角形通道，讓防守者永遠無法同時斷掉所有出球路線。'
      },
      {
        title: '6 秒就地反搶 (Six-Second Rule)',
        desc: '一旦在前場丟失球權，全隊不後退，而是就地在 6 秒內進行高壓合圍，趁對方尚未展開陣型時迅速重新搶回球權。'
      },
      {
        title: '位置空間學 (Juego de Posición)',
        desc: '球場被劃分為 20 個戰術網格（Grid），同一條垂直或橫向線上不允許站超過兩名球員，藉此自然拉開對手防線。'
      },
      {
        title: '誘敵深入與致命一擊 (Baiting the Press)',
        desc: '在後場透過短傳調動對手上前逼搶，一旦對手防線壓上留下身後巨大空檔，立刻由中場樞紐送出精準穿透球。'
      }
    ],
    famousMasterminds: [
      { name: '佩普·瓜迪奧拉 (Pep Guardiola)', desc: '帶領巴塞隆納奪得六冠王，並在曼城打造出頂級傳控戰車。' },
      { name: '路易斯·阿拉貢內斯 & 博斯克', desc: '率領西班牙國家隊完成 2008 歐洲盃、2010 世界盃、2012 歐洲盃大滿貫連霸。' }
    ],
    keyStatsIndicator: '控球率常達 65%~75%，單場傳球次數破 700+，短傳比例高於 88%',
    howToCounter: '採用低位鐵桶陣（Low Block）壓縮禁區弧頂空間，搭配具有極高速度的邊鋒實施兩次傳球內的反擊直塞。'
  },
  {
    id: 'gegenpressing',
    name: '高位壓迫 / 逼搶 (Gegenpressing / Heavy Metal)',
    subtitle: '克洛普的「重金屬足球」：逼搶是全世界最好的進攻組織者',
    origin: '德國 (朗尼克體系、克洛普 Dortmund & Liverpool)',
    corePrinciples: [
      {
        title: '逼搶陷阱與觸發器 (Pressing Triggers)',
        desc: '不是盲目狂奔，而是在特定觸發點啟動圍搶：例如對手停球過大、背身接球、邊後衛接到弱側空中球等瞬間。'
      },
      {
        title: '奪球後的黃金 8 秒 (The 8-Second Rule)',
        desc: '奪下球權的 8 到 10 秒內是對手陣型最混亂、防守漏洞最大的時刻，必須以最快速度直線打入禁區形成射門。'
      },
      {
        title: '壓縮空間如漁網 (Compressing the Pitch)',
        desc: '全隊防線大膽壓至中圈甚至更前，讓球場的實質作戰面積壓縮至 30~40 米內，徹底窒息對手的傳球視野。'
      },
      {
        title: '體能與意志的終極燃燒',
        desc: '要求全員不惜體力的瘋狂折返與高強度衝刺，以狂風暴雨般的節奏拖垮對手的心理與身體。'
      }
    ],
    famousMasterminds: [
      { name: '尤爾根·克洛普 (Jürgen Klopp)', desc: '在多特蒙德與利物浦將 Gegenpressing 推向世界巔峰。' },
      { name: '拉爾夫·朗尼克 (Ralf Rangnick)', desc: '德國現代戰術教父，打造紅牛系（萊比錫、薩爾茨堡）逼搶哲學。' }
    ],
    keyStatsIndicator: '前場奪回球權次數（PPDA < 8.5）、高強度衝刺里程數全聯賽頂尖',
    howToCounter: '門將與中衛具備頂級長傳能力，越過壓迫第一線直接長傳打到前場支點中鋒頭頂，或利用個人超強技術擺脫第一下壓迫。'
  },
  {
    id: 'catenaccio-lowblock',
    name: '鏈式防守與極致反擊 (Catenaccio & Low Block)',
    subtitle: '無懈可擊的防守堡壘，一擊斃命的閃電反擊',
    origin: '義大利 (埃雷拉大國際米蘭時代、穆里尼奧、西蒙尼)',
    corePrinciples: [
      {
        title: '放棄無效控球 (Sacrificing Possession)',
        desc: '主動將控球權讓給對手（控球率常僅 30%~40%），誘使對手全軍壓上，為自己創造極其廣闊的半場反擊腹地。'
      },
      {
        title: '密集低位雙層大巴 (Compact Two-Bank)',
        desc: '在自家大禁區前沿排佈四至五名後衛與三至四名中場，兩線間距保持在 8~10 米以內，徹底封死禁區正面任何空檔。'
      },
      {
        title: '垂直推進與速度刀鋒 (Vertical Direct Attack)',
        desc: '一旦搶斷，中後場不拖泥帶水，3 秒內通過 1~2 腳精準縱深長傳越過半場，交給速度極快的邊鋒或前鋒單刀破門。'
      },
      {
        title: '戰術犯規與節奏割裂 (Tactical Fouling)',
        desc: '在對手尚未形成威脅前果斷在中場進行戰術延誤，破壞比賽流暢度，消磨對手進攻耐心。'
      }
    ],
    famousMasterminds: [
      { name: '埃萊尼奧·埃雷拉 (Helenio Herrera)', desc: '60 年代大國際時代，打造傳奇 Catenaccio 鏈式防守兩奪歐冠。' },
      { name: '若澤·穆里尼奧 (José Mourinho)', desc: '防守反擊戰術哲學大師，率波爾圖、國米兩度奇蹟問鼎歐冠。' },
      { name: '迪亞哥·西蒙尼 (Diego Simeone)', desc: '鐵血馬德里競技，建立當代最頑強堅固的 4-4-2 低位防線。' }
    ],
    keyStatsIndicator: '禁區內解圍次數極高、失球數極低、每次反擊轉化射門率（xG per shot）極高',
    howToCounter: '禁區外高質量遠射威脅迫使其防線上提、增加邊路一對一爆破下底倒三角傳球、利用定位球戰術撕裂防線。'
  },
  {
    id: 'total-football',
    name: '全能足球 (Total Football / Totaalvoetbal)',
    subtitle: '任何球員都可以踢任何位置：空間流動與全員換位',
    origin: '荷蘭 (米歇爾斯、克魯伊夫、阿賈克斯 1970s)',
    corePrinciples: [
      {
        title: '動態空間伸縮 (Fluidity & Interchanging)',
        desc: '當球隊控球時，球員拉開將球場變大；失去球權時，全員收縮將球場變小。任何離開位置的球員，其原位置由隊友即時補上。'
      },
      {
        title: '全員進攻與全員防守',
        desc: '沒有固定死板的位置定義。後衛可以插上成為射手，中鋒也可以回防成為禁區清道夫。'
      },
      {
        title: '造越位陷阱 (The High Offside Trap)',
        desc: '全隊防線極度壓上，透過精確的默契統一前踏，讓對手前鋒陷入無休止的越位陷阱。'
      }
    ],
    famousMasterminds: [
      { name: '里努斯·米歇爾斯 (Rinus Michels)', desc: '全能足球之父，帶領荷蘭發明震驚世界的浪漫進攻足球。' },
      { name: '約翰·克魯伊夫 (Johan Cruyff)', desc: '全能足球球場上的大腦與指揮官，現代足球哲學精神圖騰。' }
    ],
    keyStatsIndicator: '球員跑動換位頻率極高、全隊進球點極為分散（後衛與中場進球率高）',
    howToCounter: '精準的反越位斜插跑位，以及針對頻繁換位溝通瞬間的協防混亂進行快速致命打擊。'
  },
  {
    id: 'half-space',
    name: '半空間與內切邊衛 (Half-Spaces & Inverted Fullbacks)',
    subtitle: '現代足球最致命的進攻走廊與 3-2-5 戰術變奏',
    origin: '瓜迪奧拉曼城、阿爾特塔兵工廠、德澤爾比',
    corePrinciples: [
      {
        title: '什麼是半空間 (The Half-Space)?',
        desc: '球場橫向劃分為 5 條垂直通道：左邊路、左半空間、中路、右半空間、右邊路。半空間是中後衛與邊後衛之間的模糊地帶。'
      },
      {
        title: '為什麼半空間最致命？',
        desc: '在半空間拿球具有朝向球門的完美斜對角視野，傳中容易造成對方後衛自擺烏龍，且防守者無法同時兼顧持球人與外側套邊隊員。'
      },
      {
        title: '邊後衛內收 (Inverted Fullback)',
        desc: '邊後衛不再只在邊路上下狂奔，而是在進攻時內收到後腰位置，形成雙後腰甚至三後腰，在中場阻斷反擊並增加出球點。'
      },
      {
        title: '形成前場 5 人攻線 (The 3-2-5 Structure)',
        desc: '邊鋒拉開球場極致寬度，兩名中場前插佔據雙半空間，中鋒壓制雙中衛，形成 5 對 4 的壓倒性進攻人數。'
      }
    ],
    famousMasterminds: [
      { name: '佩普·瓜迪奧拉', desc: '開創坎塞洛、斯通斯、阿克內收後腰的現代變形防線。' },
      { name: '米克爾·阿爾特塔 (Mikel Arteta)', desc: '在兵工廠運用津琴科、廷貝爾內收構建控球巨網。' }
    ],
    keyStatsIndicator: '半空間直塞球次數、禁區兩側倒三角（Cut-back）進球比例顯著提升',
    howToCounter: '防守時落位 5 後衛（5-Back），利用 3 名中後衛中的邊中衛直接頂出貼身看防半空間接球者。'
  }
];
