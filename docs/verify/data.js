/* docs/verify/data.js —— 驗收資料（由 Claude 追加，使用者不需要手改）
 * item.id 格式固定為 {功能名}/{卡號}/{語意鍵}，不可改動已存在的 id。
 */
window.VERIFY_DATA = {
  project: "龜卜卜六爻小幫手",
  generatedAt: "2026-10-04",

  environments: [
    { id: "desktop", label: "電腦瀏覽器" },
    { id: "phone",   label: "自己的手機" }
  ],

  changes: [
    {
      id: "v1",
      name: "第一版：起卦小工具",
      status: "verifying",
      closedAt: null,
      specRef: "docs/SPEC.md",
      allTicketsLoaded: false,

      tickets: [
        {
          id: "01-page-foundation",
          title: "01 頁面地基",
          items: [
            {
              id: "v1/01-page-foundation/look-and-feel",
              text: "用電腦到 `D:\Projects\龜卜卜` 雙擊 `index.html`，看一下整體畫面。\n\n預期：\n- 米色紙張底、墨黑明體字，有古樸書卷的感覺\n- 頁首的「龜卜卜六爻小幫手」與朱紅「易」字印章，大小和位置你覺得順眼\n- 是你在參考圖 A 款想要的方向（這一版還沒有卦象，只看底色、字體、印章）",
              spec: { ref: "SPEC.md 全站共通", quote: "古樸書卷風……米色紙張底、墨黑文字、朱紅點綴……字體用襯線體（明體／宋體感）。" },
              risk: "high",
              riskReason: "整體風格是後面每張卡的基礎，只有你能判斷對不對",
              coverage: { auto: { covered: false, ref: "" }, agent: { covered: false, how: "" } },
              manualOnly: true,
              manualOnlyReason: "好不好看、是不是你要的感覺，AI 無法判斷",
              crossEnv: false
            },
            {
              id: "v1/01-page-foundation/own-phone-live",
              text: "**這項要等存檔並推上去之後才能驗。**\n\n用你自己的手機打開 https://tsaiy8286-blip.github.io/guibubu/ 。\n\n預期：\n- 看到和電腦一樣的米色頁面、頁首名稱與「易」字印章、中間「起卦區施工中」\n- 頁尾小字分成兩行：「卦辭依《周易》經文｜」與「錢幣：寶字面為字（2），另一面為背（3）」\n- 字不會太小，畫面不會左右滑動",
              spec: { ref: "docs/cards/v1/01-page-foundation.md", quote: "上線網址 https://tsaiy8286-blip.github.io/guibubu/ 打開看到一樣的畫面" },
              risk: "medium",
              riskReason: "實機手機和電腦模擬的寬度可能不同，上線網址也還沒更新",
              coverage: { auto: { covered: false, ref: "" }, agent: { covered: false, how: "" } },
              manualOnly: true,
              manualOnlyReason: "AI 沒有你的手機，上線版本也要推上去後才存在",
              crossEnv: true
            },
            {
              id: "v1/01-page-foundation/layout",
              text: "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n用電腦打開 `index.html`，再把瀏覽器視窗拉窄到像手機一樣。\n\n預期：\n- 視窗寬時，內容是中間一條窄欄，左右露出米色底\n- 頁首有名稱與印章、中間「起卦區施工中」、最下方頁尾小字\n- 視窗拉窄時不會出現左右捲動",
              spec: { ref: "SPEC.md 全站共通", quote: "電腦上內容維持手機寬度、置中，左右留米色紙張底。" },
              risk: "low",
              riskReason: "AI 已在電腦與手機寬度實際打開截圖檢查",
              coverage: { auto: { covered: false, ref: "" }, agent: { covered: true, how: "Edge 無畫面模式以 1280px 與 375px 寬度打開 index.html 截圖：窄欄置中、頁首頁尾文字正確、375px 下 scrollWidth=375 無水平捲動；64 卦資料載入、試算天水訟正確" } },
              manualOnly: false,
              manualOnlyReason: "",
              crossEnv: false
            }
          ]
        }
      ]
    }
  ]
};
