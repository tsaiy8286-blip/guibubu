/* docs/verify/data.js —— 驗收資料範例
 *
 * 這支檔案由 Claude 在 dev-verify-card 步驟二生成／追加，使用者不需要手改。
 * 用 <script src> 載入而不是 JSON + fetch，因為直接雙擊開檔（file://）時 fetch 會被瀏覽器擋掉。
 *
 * 【最重要的紀律】item.id 必須穩定。
 * 使用者可能填到一半，Claude 才追加新卡；id 一變，已填的結果就全部對不上。
 * id 格式固定為：{功能名}/{卡號}/{語意鍵}，不要用流水號。
 *
 * 【名詞對照】這份資料沿用驗收頁面的欄位名稱：
 *   changes  ＝ 功能（docs/cards/ 底下的一個資料夾）
 *   tickets  ＝ 任務卡
 *   items    ＝ 驗收項
 */
window.VERIFY_DATA = {
  project: "小美的作品集網站",
  generatedAt: "2026-10-04",

  /* 只有 crossEnv:true 的項目會展開這些環境欄位；使用者也可在頁面上自行新增。 */
  environments: [
    { id: "desktop", label: "電腦瀏覽器" },
    { id: "phone",   label: "自己的手機" }
  ],

  changes: [
    {
      id: "v1",                          // 對應 docs/cards/v1/
      name: "網站第一版",
      status: "verifying",               // verifying | closed
      closedAt: null,                    // 結案時由 Claude 填入日期
      specRef: "docs/SPEC.md",

      /* 這個功能的卡是否都已進驗收頁面。還有卡沒進來時必須是 false，
         否則驗完第一張卡，結案鈕就會誤亮。最後一張卡追加時才改成 true。 */
      allTicketsLoaded: false,

      tickets: [
        {
          id: "01-layout",
          title: "共用頁首、頁尾與配色",
          items: [
            {
              id: "v1/01-layout/look-and-feel",
              text: "用電腦打開 `index.html`，看一下整體畫面。\n\n預期：\n- 上方有網站名稱和導覽列（首頁、作品集、關於我）\n- 下方頁尾有版權文字\n- 顏色和字體是你想要的感覺",
              spec: { ref: "SPEC.md 全站共通", quote: "主色調為霧藍色，整體簡潔。" },

              risk: "medium",
              riskReason: "整體風格只有你能判斷對不對",

              coverage: {
                auto:  { covered: false, ref: "" },
                agent: { covered: false, how: "" }
              },

              manualOnly: true,
              manualOnlyReason: "好不好看、是不是你要的感覺，AI 無法判斷",
              crossEnv: false
            },
            {
              id: "v1/01-layout/mobile-menu",
              text: "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n用手機打開網站，點右上角的選單按鈕。\n\n預期：\n- 展開導覽列，三個連結都看得到\n- 畫面不會左右滑動",
              spec: { ref: "SPEC.md 全站共通", quote: "手機版導覽列收成選單按鈕。" },

              risk: "low",
              riskReason: "AI 已在手機寬度實際點過",

              coverage: {
                auto:  { covered: false, ref: "" },
                agent: { covered: true,  how: "以 375px 寬度開啟 index.html，點選單按鈕後三個連結皆出現，頁面無水平捲軸" }
              },

              manualOnly: false,
              manualOnlyReason: "",
              crossEnv: true            // 手機實機可能和模擬寬度不同
            }
          ]
        }
      ]
    }
  ]
};
