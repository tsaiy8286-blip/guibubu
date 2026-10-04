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
        },
        {
          id: "03-throw",
          title: "03 擲卦區",
          items: [
            {
              id: "v1/03-throw/look-and-feel",
              text: "用電腦雙擊 `index.html`，填好起卦資訊按「開始擲卦」，隨意點幾下擲卦按鈕（記得點到 3正面 和 3背面）。\n\n預期：\n- 頁首網站名稱是「龜卜卜線上求卦」\n- 四顆按鈕是「3正面、2正面、1正面、3背面」，下方小錢幣先畫寫「字」的空心圓、再畫黑色實心圓（背），你看得懂、覺得順眼\n- 按鈕下方有「錢幣正面與反面判別方式」備註，文字正確、大小好讀\n- 長出來的爻：陽爻一長條、陰爻兩短條，粗細長短像你熟悉的卦象\n- 動爻是朱紅色並標 ○ 或 ✕，靜爻是墨黑色，一眼分得出來\n- 每一爻右邊的解答文字好讀",
              spec: { ref: "docs/cards/v1/03-throw.md", quote: "每個按鈕下方畫三枚小錢幣（背＝實心圓、字＝空心圓中間寫「寶」）" },
              risk: "high",
              riskReason: "錢幣和卦象的樣子好不好看、好不好認，只有你能判斷",
              coverage: { auto: { covered: false, ref: "" }, agent: { covered: false, how: "" } },
              manualOnly: true,
              manualOnlyReason: "外觀感受 AI 無法判斷",
              crossEnv: false
            },
            {
              id: "v1/03-throw/own-phone",
              text: "**這項要等存檔並推上去之後才能驗。**\n\n用你自己的手機打開 https://tsaiy8286-blip.github.io/guibubu/ ，填好起卦資訊，照桌上錢幣擲六次。\n\n預期：\n- 四顆按鈕一排放得下，手指好點、不會點錯\n- 卦象和解答文字清楚，畫面不會左右滑動",
              spec: { ref: "docs/cards/v1/03-throw.md", quote: "手機尺寸下看起來正常，四個按鈕好點" },
              risk: "medium",
              riskReason: "電腦模擬過手機寬度，但實機手指點起來的感覺只有你知道",
              coverage: { auto: { covered: false, ref: "" }, agent: { covered: false, how: "" } },
              manualOnly: true,
              manualOnlyReason: "AI 沒有你的手機",
              crossEnv: true
            },
            {
              id: "v1/03-throw/throw-undo-edit",
              text: "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n用電腦打開 `index.html`，填好起卦資訊按「開始擲卦」，依序點：3背面、3正面、1正面、2正面、2正面、1正面。然後按「退回上一步」一次、再點 3背面；最後按「修改」改問事再按「完成修改」。\n\n預期：\n- 按鈕上只寫 3正面～3背面，沒有老陰、少陽等答案\n- 標題依序「第 1 擲（初爻）」…「第 6 擲（上爻）」，第一擲畫在最下面\n- 解答：3背0字＝老陽動爻 ○、0背3字＝老陰動爻 ✕、2背1字＝少陰靜爻、1背2字＝少陽靜爻\n- 六擲後標題變「六擲完成」、擲卦按鈕收起、出現「結果區施工中」；退回一步按鈕回來，可重擲第六擲\n- 修改問事後，六爻都還在\n- 一直按「退回上一步」可退回到第一擲",
              spec: { ref: "docs/cards/v1/03-throw.md", quote: "「退回上一步」可一路退回第一擲。六擲完成後擲卦按鈕收起" },
              risk: "low",
              riskReason: "AI 已實際點過整條流程，結果都對",
              coverage: { auto: { covered: false, ref: "" }, agent: { covered: true, how: "Claude in Chrome 打開本機預覽：改名後按鈕為 3正面／2正面／1正面／3背面、錢幣依序 字字字／字字●／字●●／●●●；實際點 3背/0背/2背 看到由下往上長爻、動爻朱紅 ○ ✕、解答文字正確；續擲到六爻後標題「六擲完成」、按鈕收起、結果區占位出現；退回後按鈕回來並可重擲；修改問事後六爻保留；退回六次回到第 1 擲；375px 寬無水平捲動、按鈕 70×72px；console 無錯誤" } },
              manualOnly: false,
              manualOnlyReason: "",
              crossEnv: false
            }
          ]
        },
        {
          id: "04-result",
          title: "04 結果區",
          items: [
            {
              id: "v1/04-result/judgment-check",
              text: "用電腦雙擊 `index.html`，填好起卦資訊按「開始擲卦」，隨意擲幾卦（每擲完一卦，按「退回上一步」幾次再換別的按鈕，就能看到不同的卦）。\n\n預期：\n- 挑 2～3 卦，對照王思迅老師教材或《周易》原文，卦名、卦序、上下卦、卦辭都正確",
              spec: { ref: "docs/cards/v1/04-result.md", quote: "抽查幾卦卦辭，對照王思迅老師教材或《周易》原文" },
              risk: "high",
              riskReason: "卦辭是手打輸入的，只有你手上有老師的教材可以對照",
              coverage: { auto: { covered: false, ref: "" }, agent: { covered: false, how: "" } },
              manualOnly: true,
              manualOnlyReason: "AI 沒有老師的教材，無法替你對照",
              crossEnv: false
            },
            {
              id: "v1/04-result/look-and-feel",
              text: "接著上一項，擲出一卦有動爻的（例如依序點：1正面、3背面、1正面、2正面、3背面、2正面），往下捲到「卦象結果」。\n\n預期：\n- 像你給的參考圖：兩個卦象上方各有卦名（訟、晉），中間「→」，兩邊的爻一行一行對齊\n- 本卦動爻朱紅並標 ○ 或 ✕；變卦裡變出來的爻也是朱紅\n- 卦象下方朱紅大字「占得：訟　之　晉」\n- 下方的卦名、卦辭、動爻那一行的大小與排版你覺得順眼",
              spec: { ref: "SPEC.md 結果區", quote: "本卦與變卦左右並排，中間一個箭頭「→」。" },
              risk: "high",
              riskReason: "好不好看、好不好讀只有你能判斷",
              coverage: { auto: { covered: false, ref: "" }, agent: { covered: false, how: "" } },
              manualOnly: true,
              manualOnlyReason: "外觀感受 AI 無法判斷",
              crossEnv: false
            },
            {
              id: "v1/04-result/own-phone",
              text: "**這項要等存檔並推上去之後才能驗。**\n\n用你自己的手機打開 https://tsaiy8286-blip.github.io/guibubu/ ，擲一卦有動爻的。\n\n預期：\n- 本卦、變卦並排放得下，不擠、不跑版，畫面不會左右滑動\n- 卦名和卦辭的字不會太小",
              spec: { ref: "docs/cards/v1/04-result.md", quote: "手機尺寸下本卦、變卦並排不擠、不跑版" },
              risk: "medium",
              riskReason: "電腦模擬過 320px 與 375px 寬，但實機字體大小可能不同",
              coverage: { auto: { covered: false, ref: "" }, agent: { covered: false, how: "" } },
              manualOnly: true,
              manualOnlyReason: "AI 沒有你的手機",
              crossEnv: true
            },
            {
              id: "v1/04-result/known-cases",
              text: "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n用電腦打開 `index.html`，填好起卦資訊按「開始擲卦」，分別擲下面三組（每組擲完按「退回上一步」退到第一擲再擲下一組）：\n\n1. 1正面、3背面、1正面、2正面、3背面、2正面\n2. 六次都點 2正面\n3. 六次都點 3背面\n\n預期：\n- 第 1 組：本卦「第6卦　天水訟（上乾下坎）」、變卦「第35卦　火地晉（上離下坤）」、動爻：二爻、五爻；「占得：訟　之　晉」；訟卦辭「訟：有孚，窒惕，中吉，終凶。利見大人，不利涉大川。」\n- 第 2 組：「第1卦　乾為天」，只有本卦置中，寫「占得：乾」與「六爻安靜，無變卦」\n- 第 3 組：乾為天 → 坤為地，六爻全部朱紅\n- 按「退回上一步」時結果區會收起",
              spec: { ref: "docs/cards/v1/04-result.md", quote: "依序點 2背、3背、2背、1背、3背、1背 → 本卦「第6卦　天水訟（上乾下坎）」、變卦「第35卦　火地晉（上離下坤）」" },
              risk: "low",
              riskReason: "AI 已實際擲過這三組，結果都對",
              coverage: { auto: { covered: false, ref: "" }, agent: { covered: true, how: "Claude in Chrome 打開本機預覽：擲 2背3背2背1背3背1背 得天水訟→火地晉、動爻二爻五爻、卦辭正確、本卦變卦六爻對齊；改版後另擲節之升：卦名節／升、占得：節　之　升、變卦的變爻朱紅、無爻位爻題、下方文字與使用者提供一致；六次 1背 得乾為天、只顯示本卦與「六爻安靜，無變卦」；六次 3背 得乾為天→坤為地、六爻朱紅；退回一步結果區收起；320px、375px 寬皆無左右捲動；node test.js 通過；console 無錯誤" } },
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
