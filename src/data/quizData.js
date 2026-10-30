// 戰術大師測驗題目庫
export const QUIZ_DATA = [
  {
    id: 1,
    question: '在傳控足球（Tiki-Taka）哲學中，瓜迪奧拉著名的「6 秒反搶法則（Six-Second Rule）」具體是指？',
    options: [
      { text: '在前場丟失球權後的 6 秒內就地高強度合圍搶回球權，搶不回則轉為退守', isCorrect: true },
      { text: '每次傳球控球時間不得超過 6 秒，必須迅速傳給下一名隊友', isCorrect: false },
      { text: '門將開球在 6 秒內必須手拋或短傳給邊後衛', isCorrect: false },
      { text: '防守球員在禁區內對持球人貼身防守不得超過 6 秒以免被吹犯規', isCorrect: false }
    ],
    explanation: '6 秒反搶法則是瓜式傳控的核心防守基石：當在前場丟失球權時，對手陣型通常尚未展開且注意力集中在剛拿下的球上，這 6 秒是反搶的最佳時機。若 6 秒內未能奪回，全隊則轉入組織性站位防守。'
  },
  {
    id: 2,
    question: '「偽九號（False 9）」角色在戰術上的最核心作用是什麼？',
    options: [
      { text: '在禁區內利用強大身體素質扛住中衛爭搶頭球', isCorrect: false },
      { text: '大幅回撤到中場接球，引誘對方中後衛跟出失位，為兩側插上的邊鋒騰出衝刺空間', isCorrect: true },
      { text: '專門在邊路負責下底傳中的前鋒', isCorrect: false },
      { text: '只在防守端進行全場人盯人防守的藍領球員', isCorrect: false }
    ],
    explanation: '偽九號不固定在禁區，而是回撤到中場拿球。若對方中後衛跟出來，其身後就會留出巨大的開闊地；若中後衛不跟，偽九號就能從容在中場獲得轉身傳球空間，徹底打亂對手防守默契。'
  },
  {
    id: 3,
    question: '面對對手 5-4-1 或 4-4-2 的「低位鐵桶陣（Low Block）」，以下哪一種進攻戰術通常「最難」取得成效？',
    options: [
      { text: '透過強側連續短傳超載（Overload），隨後大範圍快速轉移至弱側單挑', isCorrect: false },
      { text: '在禁區弧頂利用具備遠射能力的球員起腳，迫使對方防線上提', isCorrect: false },
      { text: '盲目在中場起大腳高球傳中，與對方禁區內多名高大中後衛直接硬碰硬爭頂', isCorrect: true },
      { text: '利用邊鋒或前腰滲透進對手「半空間（Half-space）」送出倒三角回傳', isCorrect: false }
    ],
    explanation: '低位鐵桶陣在禁區內屯重兵，高空爭頂防守是其最大強項。若盲目從邊路起高球衝吊，通常正中對方下懷。正確破解方式是利用半空間倒三角、弱側快速轉移或禁區外遠射迫使其防線上提。'
  },
  {
    id: 4,
    question: '在 4-4-2 陣型對抗 4-3-3 陣型時，4-4-2 在常規情況下最容易在球場哪一區域出現「人數劣勢」？',
    options: [
      { text: '中場中路（4-4-2 的雙中場 對 4-3-3 的三中場，2打3）', isCorrect: true },
      { text: '兩翼邊路（4-4-2 邊路人數少於 4-3-3）', isCorrect: false },
      { text: '中衛防線（4-4-2 兩名中衛防守單中鋒）', isCorrect: false },
      { text: '門將位置', isCorrect: false }
    ],
    explanation: '4-4-2 只有兩名中前衛（CM），而 4-3-3 擁有單後腰（CDM）加兩名正中場（CM），在中場中路天然形成 3 對 2 的人數優勢，容易讓 4-4-2 的雙中前衛疲於奔命。'
  },
  {
    id: 5,
    question: '現代足球中，瓜迪奧拉與阿爾特塔廣泛使用的「內切邊後衛（Inverted Fullback）」在進攻時的主要站位是？',
    options: [
      { text: '狂奔到底線進行傳中', isCorrect: false },
      { text: '橫向內收到後腰（Pivot）位置，與防守中場組成雙後腰出球體系', isCorrect: true },
      { text: '頂到最前線擔任雙前鋒之一', isCorrect: false },
      { text: '站在對方大禁區內爭搶第二落點', isCorrect: false }
    ],
    explanation: '內切邊後衛不套邊，而是進攻時移到中場後腰位置（形成 3-2-5 結構）。這樣既能在中場增加傳球接應點，又能在球隊進攻時鞏固「留守防守（Rest Defense）」，防止對手反擊直塞。'
  },
  {
    id: 6,
    question: '「Regista」在義大利足球術語中指的是哪一種球員角色？',
    options: [
      { text: '拖後組織核心（如皮爾洛），在後防線前發牌調度比賽節奏', isCorrect: true },
      { text: '專門盯防對方頭號球星的兇悍後衛', isCorrect: false },
      { text: '擅長頭球搶點的傳統站樁式高中鋒', isCorrect: false },
      { text: '負責罰點球的門將', isCorrect: false }
    ],
    explanation: 'Regista 源自義大利語「導演」，特指站位拖後但擁有大師級傳球視野與節奏掌控力的組織後腰（如皮爾洛、哈維·阿隆索）。'
  },
  {
    id: 7,
    question: '克洛普的「高位逼搶（Gegenpressing）」中，所謂的「逼搶觸發點（Pressing Trigger）」通常指的是什麼？',
    options: [
      { text: '教練在場邊大聲吹口哨或揮舞戰術板', isCorrect: false },
      { text: '對手出現特定薄弱狀況（如停球失誤過大、背身接球、邊後衛接到空中來球等），全隊瞬間啟動圍搶', isCorrect: true },
      { text: '比賽進行到第 45 分鐘時的全場衝刺', isCorrect: false },
      { text: '對方門將準備開大腳的瞬間', isCorrect: false }
    ],
    explanation: '高位逼搶並非無腦盲目奔跑，而是一套高度精密的陷阱體系。當對手球員背身拿球（看不見身後）、停球稍大或接到高難度傳球時，就是全隊同步圍搶的「Trigger」。'
  },
  {
    id: 8,
    question: '現代戰術分析中常提到的「半空間（Half-space）」，是指球場上的哪一塊區域？',
    options: [
      { text: '大禁區外的半圓形弧頂區域', isCorrect: false },
      { text: '球場中線前後 10 米的區域', isCorrect: false },
      { text: '縱向劃分中，位於中央中路與邊線外側走廊之間的肋部通道', isCorrect: true },
      { text: '兩隊角旗區周圍的扇形區域', isCorrect: false }
    ],
    explanation: '球場在現代戰術分析中被縱向分成 5 個通道：左邊路、左半空間、中路、右半空間、右邊路。半空間是防守方中衛與邊衛交界處的模糊地帶，進攻威脅極大。'
  }
];
