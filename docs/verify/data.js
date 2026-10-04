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
        },
        {
          id: "02-cast-info",
          title: "02 起卦資訊與摘要列",
          items: [
            {
              id: "v1/02-cast-info/look-and-feel",
              text: "用電腦雙擊 `index.html`，看「起卦資訊」區；隨便填好三欄按「開始擲卦」，再看縮起來的摘要列。\n\n預期：\n- 朱紅「起卦資訊」小標題、欄位與按鈕的樣子，和書卷風搭得起來\n- 沒填完時「開始擲卦」是淡淡的灰色，填完變朱紅色，一眼看得出差別\n- 摘要列（時間、類別小框、問事）一行看起來清楚，你覺得順眼",
              spec: { ref: "docs/cards/v1/02-cast-info.md", quote: "按下後起卦資訊縮成一行摘要列（時間、類別、問事），旁邊有「修改」按鈕" },
              risk: "high",
              riskReason: "好不好看只有你能判斷",
              coverage: { auto: { covered: false, ref: "" }, agent: { covered: false, how: "" } },
              manualOnly: true,
              manualOnlyReason: "外觀感受 AI 無法判斷",
              crossEnv: false
            },
            {
              id: "v1/02-cast-info/own-phone",
              text: "**這項要等存檔並推上去之後才能驗。**\n\n用你自己的手機打開 https://tsaiy8286-blip.github.io/guibubu/ ，點「時間」欄。\n\n預期：\n- 跳出手機內建的日期時間選擇器（滾輪或月曆），選完時間會填進去\n- 「填入現在時間」也能用；三欄填好按「開始擲卦」縮成摘要列，再按「修改」能展開\n- 按鈕大小手指好點，畫面不會左右滑動、時間沒有被切掉",
              spec: { ref: "SPEC.md 起卦資訊", quote: "手機上用手機內建的日期時間選擇器。" },
              risk: "high",
              riskReason: "手機的時間選擇器每台長得不一樣，電腦完全模擬不了",
              coverage: { auto: { covered: false, ref: "" }, agent: { covered: false, how: "" } },
              manualOnly: true,
              manualOnlyReason: "AI 沒有你的手機",
              crossEnv: true
            },
            {
              id: "v1/02-cast-info/fill-start-edit",
              text: "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n用電腦打開 `index.html`：\n1. 先看時間欄是空白的，點類別下拉選單看選項\n2. 按「填入現在時間」，再選一個類別，最後才填問事\n3. 按「開始擲卦」，再按「修改」，把類別和問事改掉，按「完成修改」\n\n預期：\n- 類別預設「請選擇」，選項依序：工作、財運、經商、感情、家庭、健康、學業、官司、交友、尋人(物)、其他\n- 按「填入現在時間」填入現在的日期時分，之後還能自己改\n- 三欄沒填完前「開始擲卦」按不下去；填完才能按\n- 按下後縮成摘要列，下方出現「擲卦區施工中」；修改後摘要列換成新內容",
              spec: { ref: "docs/cards/v1/02-cast-info.md", quote: "三欄都填好按鈕才會亮……點了展開回來可以改，改完再收回。" },
              risk: "low",
              riskReason: "AI 已實際點過整條流程，結果都對",
              coverage: { auto: { covered: false, ref: "" }, agent: { covered: true, how: "Claude in Chrome 打開本機預覽：時間欄空白、11 個選項順序正確、預設請選擇；點填入現在時間得 2026-10-04 15:08；只填兩欄時按鈕 disabled，輸入問事後可按；按下顯示摘要列與擲卦區占位；按修改後內容保留，改成尋人(物)／鑰匙掉在哪裡？後摘要列更新；375px 寬無水平捲動、按鈕高 48px、長問事自動換行；console 無錯誤" } },
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
