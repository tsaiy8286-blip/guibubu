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
      status: "closed",
      closedAt: "2026-10-04",
      specRef: "docs/SPEC.md",
      allTicketsLoaded: true,

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
        },
        {
          id: "05-copy-obsidian",
          title: "05 複製到 Obsidian",
          items: [
            {
              id: "v1/05-copy-obsidian/obsidian-paste",
              text: "用電腦雙擊 `index.html`，填好起卦資訊（問事內容試著打兩行），按「開始擲卦」，依序點：1正面、3背面、1正面、2正面、3背面、2正面。往下捲到「複製到 Obsidian」，按下去。\n\n打開電腦上的 Obsidian，新增一篇空白筆記，按 `Ctrl + V` 貼上。\n\n預期：\n- 按鈕變成「✓ 已複製」\n- 筆記最上方出現「屬性」（Properties）方塊，有日期、類別、問事、本卦（天水訟）、變卦（火地晉）、動爻（二爻、五爻）、擲出、驗證、tags 九項；問事的兩行在這裡變成一行\n- 下面標題「天水訟 → 火地晉」，接著是問事（保留兩行）、類別、時間\n- 六爻表格顯示成整齊的表格，五爻、二爻有 ○\n- 本卦、變卦卦辭以引言樣式顯示，最下面有「我的解讀」「實際結果」兩個空白段落",
              spec: { ref: "docs/cards/v1/05-copy-obsidian.md", quote: "貼進 Obsidian 新筆記：上方屬性（Properties）正確顯示日期、類別、問事、本卦、變卦、動爻、擲出、驗證、tags" },
              risk: "high",
              riskReason: "AI 只確認過複製出去的文字，沒有 Obsidian 可以看貼上後的實際顯示",
              coverage: { auto: { covered: false, ref: "" }, agent: { covered: false, how: "" } },
              manualOnly: true,
              manualOnlyReason: "AI 沒有你的 Obsidian",
              crossEnv: false
            },
            {
              id: "v1/05-copy-obsidian/look-and-feel",
              text: "接著上一項，看結果區下方的複製區。\n\n預期：\n- 朱紅色「複製到 Obsidian」、灰色小字「▶ 預覽筆記內容」、外框按鈕「再起一卦」，排列順眼\n- 點開預覽，筆記文字大小好讀",
              spec: { ref: "SPEC.md 複製區", quote: "一顆朱紅色主要按鈕「複製到 Obsidian」。按下後按鈕顯示「✓ 已複製」。" },
              risk: "medium",
              riskReason: "好不好看只有你能判斷",
              coverage: { auto: { covered: false, ref: "" }, agent: { covered: false, how: "" } },
              manualOnly: true,
              manualOnlyReason: "外觀感受 AI 無法判斷",
              crossEnv: false
            },
            {
              id: "v1/05-copy-obsidian/own-phone",
              text: "**這項要等存檔並推上去之後才能驗。**\n\n用你自己的手機打開 https://tsaiy8286-blip.github.io/guibubu/ （畫面怪怪的就重新整理），擲一卦，按「複製到 Obsidian」，再打開手機的 Obsidian 新增筆記、長按貼上。\n\n預期：\n- 按鈕變「✓ 已複製」（若出現「無法自動複製…」提示，就展開預覽、長按選取文字複製，也要能成功）\n- 貼進手機 Obsidian 後，屬性與表格顯示正常",
              spec: { ref: "docs/cards/v1/05-copy-obsidian.md", quote: "在手機上複製、貼到手機的 Obsidian 也正常" },
              risk: "high",
              riskReason: "手機瀏覽器對「自動複製」的限制各家不同，AI 只在電腦 Chrome 測過",
              coverage: { auto: { covered: false, ref: "" }, agent: { covered: false, how: "" } },
              manualOnly: true,
              manualOnlyReason: "AI 沒有你的手機和手機 Obsidian",
              crossEnv: true
            },
            {
              id: "v1/05-copy-obsidian/preview-and-reset",
              text: "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n用電腦打開 `index.html`：\n\n1. 擲完一卦（**先不要複製**），點「預覽筆記內容」展開、再點收合\n2. 按「再起一卦」→ 跳出「這一卦還沒複製，確定要清除嗎？」→ 按**取消**\n3. 按「複製到 Obsidian」，再按「再起一卦」\n4. 重新填資料，六次都點 2正面，展開預覽\n\n預期：\n- 1：預覽可以展開、收合\n- 2：按取消後畫面什麼都沒變\n- 3：不會跳確認，直接清空所有欄位、回到頁面最上方\n- 4：預覽裡寫「變卦: 無」「動爻: []」，標題「乾為天（六爻安靜）」",
              spec: { ref: "docs/cards/v1/05-copy-obsidian.md", quote: "沒複製就按「再起一卦」會跳出確認；按取消什麼都不變" },
              risk: "low",
              riskReason: "AI 已實際操作過這幾個步驟，結果都對",
              coverage: { auto: { covered: false, ref: "" }, agent: { covered: true, how: "Claude in Chrome 打開本機預覽：擲天水訟之火地晉後用滑鼠點「複製到 Obsidian」，按鈕變「✓ 已複製」，用 PowerShell 讀系統剪貼簿與預覽內容一字不差、問事換行在屬性變空格；預覽可展開收合；已複製時按「再起一卦」不確認、全部清空並捲回最上方；乾卦未複製時按「再起一卦」跳出確認（以替身攔截），取消不變、確定清空；乾卦筆記為變卦: 無、動爻: []、標題乾為天（六爻安靜）；375px、320px 寬無左右捲動；console 無錯誤" } },
              manualOnly: false,
              manualOnlyReason: "",
              crossEnv: false
            }
          ]
        },
        {
          id: "06-resume",
          title: "06 中途中斷接續",
          items: [
            {
              id: "v1/06-resume/own-phone",
              text: "**這項要等存檔並推上去之後才能驗。**\n\n用你自己的手機打開 https://tsaiy8286-blip.github.io/guibubu/ ，填好起卦資訊、擲到第三爻，然後：\n\n1. 切到別的 App（例如 LINE）用個幾分鐘，再切回瀏覽器\n2. 把瀏覽器分頁整個關掉，再重新打開網址\n3. 用電腦打開同一個網址\n\n預期：\n- 1、2：起卦資訊和三個爻都還在，可以接著擲\n- 3：電腦上是空白頁（手機和電腦各自記，不會互相看到）",
              spec: { ref: "docs/cards/v1/06-resume.md", quote: "手機上擲到一半，切到別的 App 一陣子再回來 → 內容還在" },
              risk: "high",
              riskReason: "手機瀏覽器在背景會被系統關掉，AI 只在電腦 Chrome 測過重新整理",
              coverage: { auto: { covered: false, ref: "" }, agent: { covered: false, how: "" } },
              manualOnly: true,
              manualOnlyReason: "AI 沒有你的手機",
              crossEnv: true
            },
            {
              id: "v1/06-resume/reload-cases",
              text: "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n用電腦打開 `index.html`，每一步做完都按一次 `F5` 重新整理：\n\n1. 只填好起卦資訊，不按開始擲卦\n2. 按開始擲卦，擲三爻\n3. 擲完六爻\n4. 按「複製到 Obsidian」，再按「再起一卦」\n\n預期：\n- 1：填的內容還在\n- 2：摘要列和三個爻都在，標題是「第 4 擲（四爻）」\n- 3：結果區、複製區都在\n- 4：重新整理後是全新空白頁",
              spec: { ref: "docs/cards/v1/06-resume.md", quote: "擲到第三爻重新整理 → 摘要列與三爻都在，可接著擲第四擲" },
              risk: "low",
              riskReason: "AI 已實際每一步都重新整理過，結果都對",
              coverage: { auto: { covered: false, ref: "" }, agent: { covered: true, how: "Claude in Chrome 打開本機預覽，每步真的重新整理：只填起卦資訊→內容都在；擲三爻→摘要列與三爻都在、標題第 4 擲；擲完六爻→結果區（履之益）與複製區都在；點複製後重新整理仍是「✓ 已複製」，按再起一卦不跳確認、重新整理為空白頁；按修改後重新整理停在修改狀態；暫存資料弄壞時當成空白頁不報錯；console 無錯誤" } },
              manualOnly: false,
              manualOnlyReason: "",
              crossEnv: false
            }
          ]
        },
        {
          id: "integration",
          title: "整體走一遍",
          items: [
            {
              id: "v1/integration/full-flow",
              text: "**這項要等存檔並推上去之後才能驗。** 用你平常會用的裝置打開 https://tsaiy8286-blip.github.io/guibubu/ ，照真的要問一件事那樣完整走一次：\n\n1. 按「填入現在時間」，選類別，寫下真正想問的事，按「開始擲卦」\n2. 拿三枚錢幣真的擲六次，每次照桌上的結果點按鈕；中途故意重新整理一次\n3. 看結果區的卦象、卦名、卦辭、動爻\n4. 按「複製到 Obsidian」，貼進 Obsidian 存好\n5. 按「複製 AI 解卦提示詞」，貼給 AI 看看它怎麼解\n6. 按「再起一卦」回到空白頁\n\n預期：\n- 整個流程順手，沒有卡住或看不懂的地方\n- 重新整理後接著擲沒有問題\n- Obsidian 筆記和 AI 提示詞內容都對得上這一卦",
              spec: { ref: "SPEC.md 頁面：起卦（首頁）", quote: "填好要問的事 → 照桌上錢幣點六次 → 看到本卦、變卦、動爻與卦辭 → 複製成 Obsidian 筆記。" },
              risk: "medium",
              riskReason: "各張卡分開驗過，但整個流程順不順手只有你實際用才知道",
              coverage: { auto: { covered: false, ref: "" }, agent: { covered: false, how: "" } },
              manualOnly: true,
              manualOnlyReason: "實際使用的感受 AI 無法判斷",
              crossEnv: true
            }
          ]
        }
      ]
    },
    {
      id: "ai-prompt",
      name: "AI 解卦提示詞",
      status: "closed",
      closedAt: "2026-10-04",
      specRef: "docs/SPEC.md",
      allTicketsLoaded: true,

      tickets: [
        {
          id: "01-copy-ai-prompt",
          title: "01 複製 AI 解卦提示詞",
          items: [
            {
              id: "ai-prompt/01-copy-ai-prompt/paste-to-ai",
              text: "用電腦雙擊 `index.html`，填好起卦資訊，擲一卦有動爻的（例如：1正面、3背面、1正面、2正面、3背面、2正面）。往下捲到複製區，按「複製 AI 解卦提示詞」。\n\n打開你常用的 AI（Claude、ChatGPT 都可以），在對話框貼上，把「事情背景」「最在意／最害怕的事情」底下的空白線換成你自己的話，送出。\n\n預期：\n- 「複製到 Obsidian」下方多一顆外框按鈕「複製 AI 解卦提示詞」，按下後變「✓ 已複製」，兩顆按鈕排列順眼\n- 貼上的內容是你的整份提示詞，最後「我的問卦資料」已填好問卦問題（前面有類別）、本卦、動爻（例如 二爻（九二））、變卦\n- AI 依提示詞的 ①～⑪ 格式解卦",
              spec: { ref: "docs/cards/ai-prompt/01-copy-ai-prompt.md", quote: "貼到自己常用的 AI（例如 Claude、ChatGPT），補上背景後送出，AI 能照提示詞格式解卦" },
              risk: "high",
              riskReason: "AI 只確認過複製出去的文字，沒有實際貼給 AI 解卦，也判斷不了按鈕好不好看",
              coverage: { auto: { covered: false, ref: "" }, agent: { covered: false, how: "" } },
              manualOnly: true,
              manualOnlyReason: "要用你自己的 AI 帳號實際送出，外觀也只有你能判斷",
              crossEnv: false
            },
            {
              id: "ai-prompt/01-copy-ai-prompt/own-phone",
              text: "**這項要等存檔並推上去之後才能驗。**\n\n用你自己的手機打開 https://tsaiy8286-blip.github.io/guibubu/ （畫面怪怪的就關掉重開），擲一卦，按「複製 AI 解卦提示詞」，貼到手機上的 AI App。\n\n預期：\n- 兩顆複製按鈕上下排列，好按\n- 按鈕變「✓ 已複製」，貼上的內容完整",
              spec: { ref: "docs/cards/ai-prompt/01-copy-ai-prompt.md", quote: "手機尺寸下兩顆複製按鈕排列正常、好按" },
              risk: "medium",
              riskReason: "電腦模擬過 375px、320px 寬都正常，但實機上手指好不好按要你試",
              coverage: { auto: { covered: false, ref: "" }, agent: { covered: false, how: "" } },
              manualOnly: true,
              manualOnlyReason: "AI 沒有你的手機",
              crossEnv: true
            },
            {
              id: "ai-prompt/01-copy-ai-prompt/filled-content",
              text: "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n用電腦打開 `index.html`，擲兩組，各按一次「複製 AI 解卦提示詞」貼到記事本看最後一段：\n\n1. 1正面、3背面、1正面、2正面、3背面、2正面\n2. 六次都點 2正面\n\n預期：\n- 第 1 組：【本卦】第6卦 天水訟（上乾下坎）——訟卦辭；【動爻】二爻（九二）、五爻（九五）；【變卦】第35卦 火地晉（上離下坤）——晉卦辭\n- 第 2 組：【本卦】第1卦 乾為天（上乾下乾）——乾卦辭；【動爻】無（六爻安靜）；【變卦】無",
              spec: { ref: "docs/cards/ai-prompt/01-copy-ai-prompt.md", quote: "六次都點 2正面（乾，六爻安靜）：【動爻】無（六爻安靜）、【變卦】無" },
              risk: "low",
              riskReason: "AI 已實際複製並從剪貼簿讀出比對過",
              coverage: { auto: { covered: false, ref: "" }, agent: { covered: true, how: "Claude in Chrome 打開本機預覽：擲天水訟之火地晉後用滑鼠點「複製 AI 解卦提示詞」，按鈕變「✓ 已複製」；用 PowerShell 讀系統剪貼簿，「我的問卦資料」之前與原檔一字不差，資料區問卦問題、本卦、動爻二爻（九二）五爻（九五）、變卦皆正確；乾卦為動爻無（六爻安靜）、變卦無；重擲成不同卦時按鈕變回；375px、320px 寬無左右捲動；node 驗 12 個爻題正確；console 無錯誤" } },
              manualOnly: false,
              manualOnlyReason: "",
              crossEnv: false
            }
          ]
        }
      ]
    },
    {
      "id": "starry-cards",
      "name": "星夜改版＋卦象牌卡",
      "status": "closed",
      "closedAt": "2026-10-10",
      "specRef": "docs/SPEC.md",
      "allTicketsLoaded": true,
      "tickets": [
        {
          "id": "01-starry-look",
          "title": "01 星夜外觀",
          "items": [
            {
              "id": "starry-cards/01-starry-look/look-and-feel",
              "text": "用電腦到 `D:\\Projects\\龜卜卜(程式碼)` 雙擊 `index.html`，從上到下看一遍（可以先照第 3 項擲一卦，才看得到全部區塊）。\n\n預期：\n- 深藍夜空底、米白字、古金色細線與角飾，有「星夜書齋」的專業感，是你在試作頁選的 A 款方向\n- 頁首網站名稱、易印、標語「觀象・知時・自省」大小位置順眼\n- 字在深色底上讀起來不吃力\n- （背景星空動畫是下一張卡，這張只有靜止的深藍）",
              "spec": {
                "ref": "SPEC.md 全站共通",
                "quote": "星夜書齋……深藍夜空底、米白文字、古金色細線與點綴、朱紅點綴"
              },
              "risk": "high",
              "riskReason": "整體風格好不好看只有你能判斷",
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": false,
                  "how": ""
                }
              },
              "manualOnly": true,
              "manualOnlyReason": "好不好看、讀起來舒不舒服是主觀感受",
              "crossEnv": false
            },
            {
              "id": "starry-cards/01-starry-look/panels-and-buttons",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n打開首頁，看起卦資訊區。\n\n預期：\n- 區塊是深藍半透明底＋金色細框，左上、右下各一個金色角飾，標題前有「一」圓圈\n- 三欄沒填時「開始擲卦」是灰色；點進輸入框時框線變金色\n- 填好後「開始擲卦」變朱紅漸層；「填入現在時間」是金框按鈕",
              "spec": {
                "ref": "docs/cards/starry-cards/01-starry-look.md",
                "quote": "四個區塊都是深藍半透明底、金色細框、左上右下金色角飾，標題前有一～四圓圈編號"
              },
              "risk": "low",
              "riskReason": "AI 已實際打開截圖確認",
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "Claude in Chrome 打開本機預覽截圖：起卦資訊區金框、角飾、「一」編號；空白時開始擲卦灰色停用，填好後變朱紅漸層；填入現在時間為金框"
                }
              },
              "manualOnly": false,
              "manualOnlyReason": "",
              "crossEnv": false
            },
            {
              "id": "starry-cards/01-starry-look/full-flow",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n填好起卦資訊按「開始擲卦」，依序點：**1正面、3正面、2正面、3正面、3背面、1正面**。\n\n預期：\n- 擲卦區標題「二 第 1 擲（初爻）」一路變到「六擲完成」，前面的「二」一直都在\n- 結果區「三 卦象」：爻象線條米白、動爻朱紅並標 ○ ✕；「占得：蹇　之　恆」、「動爻：二爻、四爻、五爻」\n- 「四 保存」區：「複製到 Obsidian」朱紅、其他按鈕金框，複製功能照常\n- 按「退回上一步」結果區收起；重新整理網頁，這一卦會接續",
              "spec": {
                "ref": "docs/cards/starry-cards/01-starry-look.md",
                "quote": "整套流程（起卦→擲六次→結果→複製到 Obsidian→再起一卦、中途重新整理接續）都和改版前一樣正常"
              },
              "risk": "medium",
              "riskReason": "改了整頁樣式與標題結構，要確認原功能沒壞；AI 已實際走過",
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "Claude in Chrome 實際擲蹇之恆：擲卦標題由程式更新時「二」編號仍在；爻象米白、動爻朱紅並標○✕；占得蹇之恆、動爻二四五；退回上一步結果收起、再擲恢復；重新整理後完整接續；筆記預覽正確；console 無錯誤"
                }
              },
              "manualOnly": false,
              "manualOnlyReason": "",
              "crossEnv": false
            },
            {
              "id": "starry-cards/01-starry-look/phone",
              "text": "用自己的手機看（推上網站後；或先在電腦把瀏覽器視窗拉窄看看）。\n\n預期：\n- 沒有左右捲動，區塊與按鈕不擠出畫面\n- 日期選擇器、問事類別下拉選單在深色畫面下看得清楚、好操作\n- 整體在手機上看起來舒服",
              "spec": {
                "ref": "SPEC.md 全站共通",
                "quote": "手機優先設計……按鈕要大到手指好點。"
              },
              "risk": "medium",
              "riskReason": "AI 只用 375px、320px 寬模擬過，實機的日期與下拉選單外觀因手機而異",
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": false,
                  "how": "僅模擬：375px、320px 寬 iframe 無左右捲動、按鈕高 48px（非實機）"
                }
              },
              "manualOnly": true,
              "manualOnlyReason": "實機的原生日期、下拉選單外觀只能在自己手機上確認",
              "crossEnv": true
            }
          ]
        },
        {
          "id": "02-starry-sky",
          "title": "02 流金星空背景",
          "items": [
            {
              "id": "starry-cards/02-starry-sky/look",
              "text": "雙擊 `D:\\Projects\\龜卜卜(程式碼)\\index.html`，放著看一分鐘。\n\n預期：\n- 背景是流金星空：星星輕輕閃爍、金色微塵慢慢往上飄、北斗七星金線描出又淡去（電腦在左側，手機在畫面下方）\n- 一分鐘內至少看到一道金色流星\n- 好看、有「看星象」的感覺，但不會讓你分心、讀字不受影響",
              "spec": {
                "ref": "SPEC.md 全站共通",
                "quote": "會動的「流金星空」，像在看星象"
              },
              "risk": "high",
              "riskReason": "動態效果好不好看、會不會干擾閱讀只有你能判斷",
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": false,
                  "how": ""
                }
              },
              "manualOnly": true,
              "manualOnlyReason": "美感與是否分心是主觀感受",
              "crossEnv": false
            },
            {
              "id": "starry-cards/02-starry-sky/motion",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n打開網站後往下捲動頁面、擲一卦。\n\n預期：\n- 星空固定在背景不跟著捲，內容正常捲動\n- 所有按鈕照常可以點（星空沒有擋住）",
              "spec": {
                "ref": "docs/cards/starry-cards/02-starry-sky.md",
                "quote": "捲動頁面：星空固定在背景，內容正常捲動、字看得清楚"
              },
              "risk": "low",
              "riskReason": "AI 已在手機與電腦尺寸實際量測與操作",
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "無視窗 Chrome＋遠端除錯協定：手機 390×844 跑 70 秒每秒約 59 格、畫面持續變化、3 道流星（第一道第 13 秒）；電腦 1280×800 每秒 60 格；星空 position fixed；兩種尺寸完整擲蹇之恆，按鈕點得到、無左右捲動、console 無錯誤"
                }
              },
              "manualOnly": false,
              "manualOnlyReason": "",
              "crossEnv": false
            },
            {
              "id": "starry-cards/02-starry-sky/reduced-motion",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n（選做）Windows：設定 → 協助工具 → 視覺效果 → 關閉「動畫效果」，重新整理網站。\n\n預期：\n- 星空完全不動，但星星、銀河、北斗七星都還在\n- 看完記得把「動畫效果」打開回來",
              "spec": {
                "ref": "SPEC.md 全站共通",
                "quote": "設定「減少動態效果」時，只顯示靜止的星空"
              },
              "risk": "low",
              "riskReason": "AI 已用模擬設定驗過",
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "模擬「減少動態效果」載入頁面：間隔 2.5 秒兩次畫面完全相同，且有金色星點與北斗"
                }
              },
              "manualOnly": false,
              "manualOnlyReason": "",
              "crossEnv": false
            },
            {
              "id": "starry-cards/02-starry-sky/phone",
              "text": "用自己的手機打開網站（推上網站後），滑動、點按、擲一卦。\n\n預期：\n- 滑動和點按不卡、不延遲\n- 星空在手機上也好看，頁首文字沒有被星星干擾\n- 用一陣子手機不會明顯發燙或耗電",
              "spec": {
                "ref": "docs/cards/starry-cards/02-starry-sky.md",
                "quote": "手機上滑動、點按不卡頓"
              },
              "risk": "medium",
              "riskReason": "動畫在不同手機上的順暢度不一樣，AI 只在電腦模擬過",
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": false,
                  "how": "僅模擬：電腦上的無視窗 Chrome 以手機尺寸量測每秒約 59 格（非實機）"
                }
              },
              "manualOnly": true,
              "manualOnlyReason": "實機順暢度與耗電只能在自己手機上確認",
              "crossEnv": true
            }
          ]
        },
        {
          "id": "03-hexagram-cards",
          "title": "03 卦象牌卡",
          "items": [
            {
              "id": "starry-cards/03-hexagram-cards/look",
              "text": "打開網站，起卦後依序點：**1正面、3正面、2正面、3正面、3背面、1正面**（蹇之恆）。\n\n預期：\n- 爻象線條圖比以前小一號，下方出現兩張牌卡：左「第三十九卦 水山蹇」、右「第三十二卦 雷風恆」，中間金色箭頭，下方小字「本卦」「變卦」\n- 變卦的人物轉向左邊、和本卦人物面對面；卡上的卦名、卦畫、下方那句話都是正的（沒有反字）\n- 整體大小、金框、陰影看起來順眼",
              "spec": {
                "ref": "docs/cards/starry-cards/03-hexagram-cards.md",
                "quote": "爻象線條圖下方出現兩張形象牌卡：左本卦、右變卦，中間金色箭頭"
              },
              "risk": "medium",
              "riskReason": "好不好看只能人判斷",
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": false,
                  "how": "AI 已截圖確認牌卡對應正確、鏡向正確、字沒有反，但美感需本人判斷"
                }
              },
              "manualOnly": true,
              "manualOnlyReason": "大小與美感只能由使用者判斷",
              "crossEnv": false
            },
            {
              "id": "starry-cards/03-hexagram-cards/zoom",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n接著點任一張牌卡，再點一下。\n\n預期：\n- 牌卡全畫面放大（變卦放大後一樣是翻轉的）\n- 再點一下就關閉，回到原來位置",
              "spec": {
                "ref": "docs/cards/starry-cards/03-hexagram-cards.md",
                "quote": "點牌卡全畫面放大，再點關閉"
              },
              "risk": "low",
              "riskReason": "AI 已在電腦與手機尺寸實際點過",
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "無視窗 Chrome：電腦 1280×800 與手機 375×740 點變卦牌卡→放大層出現且鏡向、不超出畫面；點一下關閉；本卦放大不鏡向；Esc 也可關閉"
                }
              },
              "manualOnly": false,
              "manualOnlyReason": "",
              "crossEnv": false
            },
            {
              "id": "starry-cards/03-hexagram-cards/quiet-and-random",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n按「退回上一步」退到第一擲，改成六次都點 **2正面**；之後再隨意擲幾卦。\n\n預期：\n- 退回時牌卡跟著結果區收起\n- 六次 2正面：只有一張「第一卦 乾為天」牌卡，置中\n- 隨意擲的幾卦：卡上的卦名都和結果區的卦名一致\n- 按「再起一卦」後牌卡清除",
              "spec": {
                "ref": "docs/cards/starry-cards/03-hexagram-cards.md",
                "quote": "沒有動爻時只顯示本卦一張，置中"
              },
              "risk": "low",
              "riskReason": "AI 已實際操作並隨機擲 300 次比對",
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "乾卦只有 card-01 一張、置中（偏差 0px）；隨機擲 300 次本卦／變卦牌卡全部對應正確；64 張圖都讀得到；退回上一步、再起一卦都會收起結果區；無錯誤、無左右捲動"
                }
              },
              "manualOnly": false,
              "manualOnlyReason": "",
              "crossEnv": false
            },
            {
              "id": "starry-cards/03-hexagram-cards/phone",
              "text": "（推上網站後）用自己的手機打開網站擲一卦。\n\n預期：\n- 兩張牌卡並排不會擠出畫面\n- 點牌卡放大、再點關閉都順手",
              "spec": {
                "ref": "docs/cards/starry-cards/03-hexagram-cards.md",
                "quote": "手機尺寸下兩張牌卡並排不擠出畫面，點擊放大正常"
              },
              "risk": "medium",
              "riskReason": "AI 只能模擬手機寬度，實機手感要本人確認",
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": false,
                  "how": "僅模擬：無視窗 Chrome 375×740 兩張牌卡並排寬 309px、無左右捲動、放大 343×514（非實機）"
                }
              },
              "manualOnly": true,
              "manualOnlyReason": "實機手感只能在自己手機上確認",
              "crossEnv": true
            }
          ]
        },
        {
          "id": "04-insight",
          "title": "04 我的啟發",
          "items": [
            {
              "id": "starry-cards/04-insight/type-and-copy",
              "text": "打開網站擲完一卦，在牌卡下方「我的啟發」**用注音輸入法**打一段話，例如「腳步被卡住，先停下來看清楚」。接著按「複製到 Obsidian」，貼到記事本。\n\n預期：\n- 打字時右下角字數即時變化\n- 繼續打到 60 字：數字變紅，再也打不進去\n- 貼上的筆記裡，「## 我的解讀」底下就是剛寫的那段話\n- 框的大小、字的顏色看起來順眼",
              "spec": {
                "ref": "docs/cards/starry-cards/04-insight.md",
                "quote": "按「複製到 Obsidian」，筆記「## 我的解讀」底下自動填入這段文字"
              },
              "risk": "high",
              "riskReason": "注音選字與真實剪貼簿 AI 模擬不到",
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": false,
                  "how": "AI 用模擬鍵盤輸入（未經注音選字）驗過字數、60 字上限與筆記預覽內容；真實注音輸入與貼上結果未驗"
                }
              },
              "manualOnly": true,
              "manualOnlyReason": "注音選字與實際貼上的結果要本人操作",
              "crossEnv": false
            },
            {
              "id": "starry-cards/04-insight/reload-and-clear",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n寫一半按重新整理（F5），再按「再起一卦」。\n\n預期：\n- 重新整理後：起卦資訊、已擲的爻、我的啟發都還在\n- 按「再起一卦」後：我的啟發清空，字數回到 0 / 60\n- 沒寫啟發時，複製的筆記「## 我的解讀」底下留白",
              "spec": {
                "ref": "docs/cards/starry-cards/04-insight.md",
                "quote": "寫一半重新整理網頁，文字還在；按「再起一卦」清除"
              },
              "risk": "low",
              "riskReason": "AI 已在手機與電腦尺寸實際操作",
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "無視窗 Chrome 兩種寬度：重新整理後 6 爻、問事、60 字啟發都在；清空啟發後筆記該段留白；再起一卦後啟發清空、字數 0 / 60、暫存刪除；node test.js 通過"
                }
              },
              "manualOnly": false,
              "manualOnlyReason": "",
              "crossEnv": false
            },
            {
              "id": "starry-cards/04-insight/phone",
              "text": "（推上網站後）用自己的手機擲一卦，點「我的啟發」打幾個字。\n\n預期：\n- 鍵盤跳出來時看得到正在打的字，框沒有被鍵盤擋住\n- 打多了框會長高，不用在小框裡捲動",
              "spec": {
                "ref": "docs/cards/starry-cards/04-insight.md",
                "quote": "手機尺寸下填寫框好打字、不被鍵盤擋住"
              },
              "risk": "medium",
              "riskReason": "手機鍵盤只能在實機上看",
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": false,
                  "how": "僅模擬：375×740 寬度下框字級 16px、60 字時框長高為 4 行無捲軸、無左右捲動（非實機、沒有鍵盤）"
                }
              },
              "manualOnly": true,
              "manualOnlyReason": "手機鍵盤行為只能在自己手機上確認",
              "crossEnv": true
            }
          ]
        },
        {
          "id": "05-keepsake",
          "title": "05 下載紀念圖",
          "items": [
            {
              "id": "starry-cards/05-keepsake/download-look",
              "text": "用瀏覽器打開 **http://localhost:8765/**（不要直接雙擊 index.html，那樣瀏覽器不允許下載）。擲出蹇之恆（1正面、3正面、2正面、3正面、3背面、1正面），在「我的啟發」寫一段話，按「⬇ 下載紀念圖」，打開下載資料夾裡的圖。\n\n預期：\n- 按鈕顯示「製作中…」→「✓ 已下載」，檔名「龜卜卜_蹇之恆_日期.jpg」\n- 圖上：「占得 蹇 之 恆」、左蹇右恆（恆的人物翻轉、字是正的）、啟發方框文字完整、日期是起卦那天\n- **圖上沒有問事內容**\n- 整體好看、適合留念",
              "spec": {
                "ref": "docs/cards/starry-cards/05-keepsake.md",
                "quote": "按下顯示「製作中…」，接著下載一張 JPG"
              },
              "risk": "high",
              "riskReason": "下載與成品美感只能本人確認",
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": false,
                  "how": "AI 已在無視窗 Chrome 實際下載並打開圖檔核對內容（見任務卡驗證證據），但美感與在你電腦上的下載行為需本人確認"
                }
              },
              "manualOnly": true,
              "manualOnlyReason": "成品好不好看、實際下載到自己電腦只能本人確認",
              "crossEnv": false
            },
            {
              "id": "starry-cards/05-keepsake/no-insight-and-quiet",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n清空「我的啟發」再下載一次；接著退回重擲，六次都點 **2正面**（乾）再下載。\n\n預期：\n- 沒寫啟發：圖上沒有啟發方框\n- 乾：只有一張乾卦牌卡，標題「乾」，檔名「龜卜卜_乾_日期.jpg」",
              "spec": {
                "ref": "docs/cards/starry-cards/05-keepsake.md",
                "quote": "沒有動爻時只有一張牌卡、標題只寫本卦名"
              },
              "risk": "low",
              "riskReason": "AI 已實際下載並打開圖檔核對",
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "清空啟發下載 → 無方框；六次 2正面下載 → 龜卜卜_乾_20261009.jpg，單張乾卦、標題「乾」"
                }
              },
              "manualOnly": false,
              "manualOnlyReason": "",
              "crossEnv": false
            },
            {
              "id": "starry-cards/05-keepsake/phone",
              "text": "（推上網站後）用自己的手機擲一卦，按「⬇ 下載紀念圖」。\n\n預期：\n- 圖能存到手機（iPhone 可能是開新頁顯示圖片，長按「儲存影像」）",
              "spec": {
                "ref": "docs/cards/starry-cards/05-keepsake.md",
                "quote": "在自己手機上下載：能存到手機"
              },
              "risk": "medium",
              "riskReason": "各家手機下載方式不同，只能實機確認",
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": false,
                  "how": "無（手機下載行為無法模擬）"
                }
              },
              "manualOnly": true,
              "manualOnlyReason": "手機下載只能在自己手機上確認",
              "crossEnv": true
            }
          ]
        },
        {
          "id": "integration",
          "title": "整體走一遍",
          "items": [
            {
              "id": "starry-cards/integration/full-flow",
              "text": "用電腦打開 **http://localhost:8765/**，從頭走一次：\n\n1. 填起卦資訊 → 開始擲卦，背景是流金星空\n2. 擲完六爻 → 看到線條圖、兩張牌卡（變卦翻轉），點牌卡放大再關閉\n3. 寫「我的啟發」→ 下載紀念圖 → 複製到 Obsidian\n4. 按「再起一卦」\n\n預期：\n- 每一步都順，畫面風格一致、看起來專業\n- 紀念圖與筆記裡的啟發一致\n- 再起一卦後一切清空，回到起卦資訊",
              "spec": {
                "ref": "docs/SPEC.md",
                "quote": "全站改為「星夜書齋」風格；結果區加 64 卦形象牌卡；新增「我的啟發」與下載紀念圖"
              },
              "risk": "medium",
              "riskReason": "整體體驗只能本人判斷",
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": false,
                  "how": "各卡已分別由 AI 實際操作驗過；整體一起走的感受需本人確認"
                }
              },
              "manualOnly": true,
              "manualOnlyReason": "整體感受只能本人判斷",
              "crossEnv": false
            }
          ]
        }
      ]
    },
    {
      "id": "gua-book",
      "name": "六十四卦卦典",
      "status": "closed",
      "closedAt": "2026-10-10",
      "specRef": "docs/SPEC.md",
      "allTicketsLoaded": true,
      "tickets": [
        {
          "id": "01-gua-page",
          "title": "01-卦典頁地基",
          "items": [
            {
              "id": "gua-book/01-gua-page/look-and-words",
              "text": "打開專案資料夾 `龜卜卜(程式碼)`，雙擊 **gua.html**，在瀏覽器網址列最後面加上 **#22** 按 Enter。\n\n點一下牌卡放大，對照牌卡最下面那行字。\n\n預期：\n- 牌卡下方金色引文「好好打扮自己，美也是力量。」和**牌卡圖上的字一模一樣**\n- 整頁好看：朱紅卦名、右邊的卦畫、引文上下的金線、「原文」「解說」兩個框、最下面的上一卦／回首頁／下一卦\n- 有沒有哪裡覺得擠、太空、或字太小",
              "spec": {
                "ref": "docs/cards/gua-book/01-gua-page.md",
                "quote": "牌卡下方的引文和牌卡圖上的字一模一樣"
              },
              "risk": "high",
              "riskReason": "圖上的字和版面好不好看，只能人眼判斷",
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": false,
                  "how": "AI 只比對了程式裡的字和提示詞檔一致（node test.js），圖上實際畫出來的字要人眼看"
                }
              },
              "manualOnly": true,
              "manualOnlyReason": "牌卡圖上的字與整體美感只能本人判斷",
              "crossEnv": false
            },
            {
              "id": "gua-book/01-gua-page/header-card-text",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n打開專案資料夾 `龜卜卜(程式碼)`，雙擊 **gua.html**，在瀏覽器網址列最後面加上 **#22** 按 Enter。\n\n預期：\n- 標頭「第22卦　山火賁」，下一行「上艮下離」，右邊卦畫由上往下：陽、陰、陰、陽、陰、陽\n- 牌卡是賁卦、沒有左右翻轉；點牌卡全畫面放大，再點一下關閉\n- 「原文」框裡是「賁：亨。小利有攸往。」；「解說」框寫「解說撰寫中」",
              "spec": {
                "ref": "docs/cards/gua-book/01-gua-page.md",
                "quote": "打開 gua.html#22：標頭、牌卡、原文、解說"
              },
              "risk": "medium",
              "riskReason": "新頁面的基本內容",
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "Chrome 開 gua.html#22：標頭文字、上艮下離、卦畫截圖確認；牌卡 card-22.jpg 不鏡向，點擊放大、再點關閉；原文與解說文字正確"
                }
              },
              "manualOnly": false,
              "crossEnv": false
            },
            {
              "id": "gua-book/01-gua-page/navigation",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n接著上一項（停在賁卦），捲到最下面。\n\n1. 按「下一卦 ›」\n2. 按瀏覽器的「上一頁」\n3. 把網址最後的數字改成 **1**、**64**、**99** 各看一次\n4. 按網站名稱「龜卜卜線上求卦」\n\n預期：\n1. 變成第23卦　山地剝、畫面回到最上面、網址變 #23\n2. 回到賁卦\n3. #1 乾卦沒有「上一卦」；#64 未濟沒有「下一卦」；#99 顯示第1卦乾\n4. 回到首頁（「回首頁」按鈕也一樣）",
              "spec": {
                "ref": "docs/cards/gua-book/01-gua-page.md",
                "quote": "上一卦／下一卦、瀏覽器上一頁、#1／#64／#99、回首頁"
              },
              "risk": "medium",
              "riskReason": "跨頁連結與換卦",
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "Chrome 實測：下一卦→#23 剝、捲回頂端；上一頁→#22；#1 無上一卦、#64 無下一卦、沒有#／#99／#abc 顯示第1卦、手改 #36 換成明夷；點網站名稱到 index.html；首頁牌卡放大仍正常、console 無錯誤"
                }
              },
              "manualOnly": false,
              "crossEnv": false
            },
            {
              "id": "gua-book/01-gua-page/phone-width",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n用手機寬度看（電腦上可把瀏覽器視窗拉到最窄）。\n\n預期：\n- 版面不擠、不需要左右捲動\n- 卦名和卦畫並排、牌卡完整\n\n（自己手機實機看要等推上網站後）",
              "spec": {
                "ref": "docs/cards/gua-book/01-gua-page.md",
                "quote": "手機寬度看：版面不擠、不需左右捲動"
              },
              "risk": "low",
              "riskReason": "AI 已量過 375、320 寬",
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "把頁面放進 375px、320px 寬的框量版面：沒有元素超出右邊；Edge 無畫面模式截圖看過兩種寬度（320 時乾卦的牌卡的話折成兩行）"
                }
              },
              "manualOnly": false,
              "crossEnv": true
            }
          ]
        },
        {
          "id": "02-index-grid",
          "title": "02-首頁六十四卦區與卦名連結",
          "items": [
            {
              "id": "gua-book/02-index-grid/look",
              "text": "打開專案資料夾 `龜卜卜(程式碼)`，雙擊 **index.html**，一路捲到最下面。\n\n接著隨便起一卦（擲完六次），看「三 卦象」框裡「本卦：第○卦　○○○」那行。\n\n預期：\n- 最下面有「六十四卦」框，下面一行小字「點卦名看原文與解說」，8 格一排共 8 排，每格上面小卦畫、下面卦名\n- 看起來舒服：小卦畫大小、卦名字級；**兩個字的卦名（小畜、噬嗑、既濟……）字比較小**，看順不順眼\n- 本卦、變卦那行的「第○卦　○○○」下面有一條金色細底線，看得出來可以點",
              "spec": {
                "ref": "docs/cards/gua-book/02-index-grid.md",
                "quote": "首頁最下方多一個「六十四卦」區塊：8×8 格，每格小卦畫＋單字卦名"
              },
              "risk": "high",
              "riskReason": "外觀好不好看只能人眼判斷",
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": false,
                  "how": "AI 截圖看過排版，但好不好看要本人判斷"
                }
              },
              "manualOnly": true,
              "manualOnlyReason": "美感與兩字卦名縮小後的觀感只能本人判斷",
              "crossEnv": false
            },
            {
              "id": "gua-book/02-index-grid/grid-click",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n接著上一項，在首頁最下面的「六十四卦」：\n\n1. 從第一排看到最後一排，確認順序\n2. 點「**賁**」（第三排第六格）\n3. 按瀏覽器的「上一頁」\n\n預期：\n1. 順序是乾、坤、屯、蒙……最後是既濟、未濟；抽看幾格卦畫和卦名對得上（例如乾是六條實線、坤是六條斷線）\n2. 同一個分頁換成「第22卦　山火賁」的卦典頁\n3. 回到首頁",
              "spec": {
                "ref": "docs/cards/gua-book/02-index-grid.md",
                "quote": "文王卦序；每格卦畫和卦名對得上；點「賁」前往 gua.html#22；按上一頁回到首頁"
              },
              "risk": "medium",
              "riskReason": "跨頁連結與 64 格資料",
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "Chrome 實測：64 格卦名逐格和文王卦序比對全部相同；抽查乾、坤、賁、明夷、既濟卦畫正確；滑鼠點賁→同分頁到 gua.html#22「第22卦　山火賁」；上一頁→回首頁、64 格都在"
                }
              },
              "manualOnly": false,
              "crossEnv": false
            },
            {
              "id": "gua-book/02-index-grid/result-links",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n在首頁起一卦（要有動爻，才會有變卦），擲完六次後到「三 卦象」框：\n\n1. 點「本卦：」後面那段有底線的「第○卦　○○○」\n2. 回到原本的分頁，點「變卦：」後面那段\n\n預期：\n1. 瀏覽器**多開一個新分頁**，顯示本卦的卦典頁\n2. 又多開一個新分頁，顯示變卦的卦典頁\n- 回到原本的分頁，剛剛擲的卦都還在，沒有被清掉",
              "spec": {
                "ref": "docs/cards/gua-book/02-index-grid.md",
                "quote": "擲出一卦後點結果區本卦、變卦的卦名行：在新分頁打開正確的卦典頁，原分頁的卦還在"
              },
              "risk": "medium",
              "riskReason": "新分頁開啟、不能弄丟正在起的卦",
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "Chrome 實測擲出困之節：點變卦→新分頁 gua.html#60 水澤節；點本卦→新分頁 gua.html#47 澤水困；原分頁仍顯示「占得：困　之　節」；console 無錯誤"
                }
              },
              "manualOnly": false,
              "crossEnv": false
            },
            {
              "id": "gua-book/02-index-grid/wu-not-wu",
              "text": "接著在首頁最下面的「六十四卦」看第四排第一格，再點它。\n\n預期：\n- 格子寫「**無妄**」（不是「无妄」）\n- 點進去的卦典頁標頭是「第25卦　天雷無妄」，原文是「無妄：元亨利貞。……」\n- 隨便點幾卦有「無咎」的（例如 師、隨、恆），原文都寫「無」\n- 牌卡圖上的字不變（圖不能改）",
              "spec": {
                "ref": "docs/SPEC.md",
                "quote": "用字與首頁卦辭一致，一律用繁體正字（例如古本的「无」寫成「無」）"
              },
              "risk": "medium",
              "riskReason": "這次驗收中途追加的改動，AI 沒在瀏覽器打開看過",
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": false,
                  "how": "只用程式檢查（node test.js：資料裡已沒有「无」、第25卦名稱是「無妄」），沒有在瀏覽器打開看"
                }
              },
              "manualOnly": false,
              "crossEnv": false
            },
            {
              "id": "gua-book/02-index-grid/phone-width",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n用手機寬度看首頁最下面的「六十四卦」（電腦上可把瀏覽器視窗拉到最窄）。\n\n預期：\n- 每排還是 8 格，不會掉到下一排\n- 不需要左右捲動\n- 兩個字的卦名沒有擠出格子\n\n（自己手機實機看「好不好點」要等推上網站後）",
              "spec": {
                "ref": "docs/cards/gua-book/02-index-grid.md",
                "quote": "手機寬度：8 欄都放得下、字好點、不需左右捲動"
              },
              "risk": "low",
              "riskReason": "AI 已量過 375、320 寬",
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "把首頁放進 375px、320px 寬的框量：每排 8 格同一行、沒有元素超出右邊、兩字卦名都在格子內；截圖看過兩種寬度（320 寬時每格約 30px）"
                }
              },
              "manualOnly": false,
              "crossEnv": true
            }
          ]
        },
        {
          "id": "03-classic-text",
          "title": "03-原文：爻辭與大象傳",
          "items": [
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": false,
                  "how": "AI 只和《易經白話講座》書中引用的經文用程式比對（384 條：9 條字不同、105 條只有標點不同），沒有你手邊的版本；書裡沒有大象傳"
                }
              },
              "manualOnly": true,
              "crossEnv": false,
              "id": "gua-book/03-classic-text/compare-own-copy",
              "text": "拿出你手邊的《易經》版本（書或筆記都可以），雙擊 **gua.html**，在網址列最後加 **#22**（賁）按 Enter，看「原文」框；再換 **#1**（乾）、**#47**（困）各看一次。\n\n預期：\n- 三卦的爻辭、「象曰」和你手邊的版本**字一樣**（標點斷句不同沒關係；手邊寫「无」的，網站寫「無」是對的）\n- **大象傳**（象曰那句）AI 沒有書可以比對，請特別看一下\n\n**AI 和《易經白話講座》比對後，有 7 個字保留網站寫法，請你決定要不要改成書的寫法：**\n- 剝卦 3 處「剝**床**」（書：牀）\n- 頤卦六四「虎視**眈眈**」（書：耽耽）\n- 困卦六三「蒺**藜**」（書：蔾）\n- 大過九五「老婦得**其**士夫」（書沒有「其」）\n- 革卦六二「**己**日乃革之」（書：巳日；網站卦辭寫「己日乃孚」）\n\n另外 2 處已改成和書一樣：困卦九二「享祀」、大畜九三「日閑輿衛」。",
              "spec": {
                "ref": "docs/cards/gua-book/03-classic-text.md",
                "quote": "抽查 3 卦爻辭和自己手邊的版本比對（用字一律繁體正字：手邊版本寫「无」的，網站寫「無」）"
              },
              "risk": "high",
              "riskReason": "經文用字只有你手邊的版本能定案；大象傳沒有書可比對",
              "manualOnlyReason": "要用你自己的版本對照"
            },
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "截圖看過電腦 1280 寬與 375 寬；量過 375、320 寬沒有左右捲動、睽上九換行後續行和經文對齊"
                }
              },
              "manualOnly": true,
              "crossEnv": true,
              "id": "gua-book/03-classic-text/look",
              "text": "在 **gua.html#38**（睽）看「原文」框，電腦和手機寬度（把視窗拉窄）各看一次。\n\n預期：\n- 由上到下：卦辭（左邊金線）→「象曰：……」→ 一條細金線 → 六條爻辭\n- 爻題（初九、九二……）是金色，跟經文隔開一點\n- 長的爻辭（上九）換行後，第二行和第一行的經文對齊\n- 整體好不好讀：字級、行距、會不會太擠",
              "spec": {
                "ref": "docs/SPEC.md",
                "quote": "六爻爻辭，由初爻排到上爻，每行前面是爻題（初九、六二……上九）"
              },
              "risk": "medium",
              "riskReason": "好不好看只有你能判斷",
              "manualOnlyReason": "好不好看要你親眼判斷"
            },
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "Chrome 打開 #22、#1、#2、#3、#36、#63、#64 讀出原文區文字：#22 兩句逐字相符、乾有用九、坤有用六、其他 6 條；node test.js 逐卦核對 384 爻的九／六和卦畫一致；console 沒有錯誤"
                }
              },
              "manualOnly": false,
              "crossEnv": false,
              "id": "gua-book/03-classic-text/content-22",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n打開 **gua.html#22**（賁）看「原文」框；再按網址列換 **#1**、**#2**、隨便一卦。\n\n預期：\n- 賁：象曰「山下有火，賁。君子以明庶政，無敢折獄。」；初九到上九六條，最後一條「上九　白賁，無咎。」\n- 乾最後多一條「用九」、坤最後多一條「用六」，其他卦都只有 6 條\n- 爻題的九／六和右上角卦畫對得上（卦畫由下往上數：長橫＝九、斷開＝六）",
              "spec": {
                "ref": "docs/cards/gua-book/03-classic-text.md",
                "quote": "`gua.html#22`：象曰「山下有火，賁。君子以明庶政，無敢折獄。」、初九到上九六條爻辭，上九是「白賁，無咎。」"
              },
              "risk": "low",
              "riskReason": "AI 已打開檢查，且程式逐卦核對過 64 卦"
            }
          ]
        },
        {
          "id": "04-custom-keepsake",
          "title": "04-自選卦做紀念圖",
          "items": [
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "Chrome 開 localhost 版選賁→明夷、填啟發後按下載，攔下下載連結把圖顯示出來截圖：觀象、賁之明夷、兩張牌卡（明夷鏡向）、啟發方框、2026.10.10 落款都在；只選賁也試過。沒有真的存成檔案"
                }
              },
              "manualOnly": true,
              "crossEnv": false,
              "id": "gua-book/04-custom-keepsake/download-look",
              "text": "這項要用**網址**開（直接雙擊開檔不能下載）：在瀏覽器網址列輸入 **http://localhost:8765/index.html**（打不開的話跟我說，我幫你重開本機網址），捲到最下面「六十四卦」。\n\n1. 按「✦ 自選卦做紀念圖」，點**賁**、再點**明夷**\n2. 在「我的啟發」打一句話，按「⬇ 下載紀念圖」，打開下載的檔案\n3. 再點一下明夷取消，只剩賁，再下載一次\n\n預期：\n- 賁格子朱紅框、右上角朱紅小標「本」；明夷標「變」——**小標和框好不好看**\n- 預覽：賁＋金色箭頭＋明夷（明夷人物翻向左邊，和賁面對面）\n- 第一張圖：上方小字「觀　象」、金色「賁　之　明夷」、兩張牌卡、「我的啟發」方框、右下「今天日期　龜卜卜線上求卦」＋易印；檔名「龜卜卜_賁之明夷_今天日期.jpg」\n- 第二張圖：只有一張賁牌卡；檔名「龜卜卜_賁_今天日期.jpg」",
              "spec": {
                "ref": "docs/SPEC.md 六十四卦",
                "quote": "紀念圖版面與結果區紀念圖相同，差別只有：上方小字寫「觀　象」（不是「占　得」，因為不是擲出來的）；日期是下載當天"
              },
              "risk": "high",
              "riskReason": "好不好看、真的存得下來只有你能確認",
              "manualOnlyReason": "外觀要你判斷；AI 沒有真的存檔"
            },
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "Chrome 實際點擊：按鈕變「取消選卦」；賁→明夷標本／變；再點賁 → 明夷遞補為本、預覽剩一張；選滿兩卦再點乾、比都選不上；取消選卦後選取、角標、預覽、啟發字都清空，點卦名又連到 gua.html#22；console 沒有錯誤"
                }
              },
              "manualOnly": false,
              "crossEnv": false,
              "id": "gua-book/04-custom-keepsake/pick-rules",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n在首頁「六十四卦」按「✦ 自選卦做紀念圖」，點賁、明夷，然後：\n1. 再點**賁** → 明夷變成「本」，預覽只剩一張明夷\n2. 再點賁、再點**乾** → 乾選不上（最多兩個）\n3. 按「取消選卦」\n\n預期：\n- 取消後框、小標、預覽都不見，啟發框清空；按鈕回到「✦ 自選卦做紀念圖」\n- 這時點任一卦名，會換到那一卦的卦典頁",
              "spec": {
                "ref": "docs/cards/gua-book/04-custom-keepsake.md",
                "quote": "再點已選的卦就取消它（取消本卦時，變卦自動遞補成本卦）"
              },
              "risk": "low",
              "riskReason": "AI 已逐步點過"
            },
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "選卦模式開著時下載結果區紀念圖，仍是「占　得」、用結果區的啟發；用蹇之恆回歸測試：占得、蹇之恆、起卦日期、檔名龜卜卜_蹇之恆_20261009.jpg 都對；重新整理後選卦模式關閉、預覽清空，上方起卦內容不變"
                }
              },
              "manualOnly": false,
              "crossEnv": false,
              "id": "gua-book/04-custom-keepsake/no-side-effect",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n上方先起一卦（或用原本還沒清掉的那一卦），在結果區「我的啟發」打幾個字。再到下方自選一卦、在下方的啟發框打別的字，然後：\n1. 按**結果區**的「⬇ 下載紀念圖」\n2. 重新整理網頁\n\n預期：\n- 結果區的圖上方寫「占　得」，印的是結果區的啟發，不是下方的\n- 重新整理後：上方的卦和啟發都還在；下方選卦模式關掉、選的卦和啟發都沒了",
              "spec": {
                "ref": "docs/cards/gua-book/04-custom-keepsake.md",
                "quote": "上方正在起的卦（含結果區的我的啟發）完全不受影響；重新整理後選卦內容不保留"
              },
              "risk": "medium",
              "riskReason": "這次改到結果區下載按鈕的程式（改成共用），AI 已做回歸測試"
            },
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "把頁面放進 375px、320px 寬的框量：沒有東西超出右邊、不需左右捲動；按鈕高 48px；截圖時發現本／變小標蓋到卦畫，已改成壓在格子外緣後重看 OK。沒有在真的手機上看"
                }
              },
              "manualOnly": true,
              "crossEnv": true,
              "id": "gua-book/04-custom-keepsake/phone",
              "text": "（要先推上網站才能用手機看）用自己的手機打開網站，捲到最下面「六十四卦」，按「✦ 自選卦做紀念圖」，點兩個卦、打一句啟發、按下載。\n\n預期：\n- 卦名格子點得準，本／變小標看得清楚\n- 預覽兩張牌卡並排不擠出畫面，不需左右滑\n- 下載按鈕好按；圖能存到手機（iPhone 可能要長按圖片儲存）",
              "spec": {
                "ref": "docs/cards/gua-book/04-custom-keepsake.md",
                "quote": "手機寬度：預覽和按鈕好按、不需左右捲動"
              },
              "risk": "medium",
              "riskReason": "AI 只量過窄框，沒在真手機上按過",
              "manualOnlyReason": "要在你自己的手機上按"
            }
          ]
        },
        {
          "id": "05-commentary-1",
          "title": "05-解說第1批（第1～8卦）",
          "items": [
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "AI 通讀 8 卦，把偏陰森、帶貶意的說法改溫和（例如「在血泊中等」「小人不可重用」）；全文沒有「一定會」「命中注定」"
                }
              },
              "manualOnly": true,
              "crossEnv": false,
              "id": "gua-book/05-commentary-1/read-one",
              "text": "用瀏覽器打開 `gua.html`（直接雙擊就好），網址最後改成 `#1` 看乾卦（或從首頁「六十四卦」點**乾**），往下捲到「解說」，挑**一兩卦**讀讀看（例如乾、訟）。\n\n預期：\n- 依序有：卦意、陽面、陰面、吉中之凶／凶中之吉、六爻、一句話提醒\n- 讀起來有啟發、口氣溫和，不嚇人、不貶低人\n- 稱呼是「你」（開頭引用的牌卡的話保留「妳」）",
              "spec": {
                "ref": "docs/SPEC.md 卦典頁・解說",
                "quote": "語氣照〈一陰一陽・問事覺察版〉提示詞：溫和、誠懇、清醒、不恐嚇、不神化、不說「一定會」。"
              },
              "risk": "high",
              "riskReason": "你授權 AI 代為審稿，內容好不好只有你能決定",
              "manualOnlyReason": "文字讀起來有沒有啟發、順不順，要你判斷"
            },
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "截圖看過第7卦（電腦寬度）、第2卦（手機寬度）排版，沒有重疊或被切掉"
                }
              },
              "manualOnly": true,
              "crossEnv": false,
              "id": "gua-book/05-commentary-1/look",
              "text": "同上一項，看「解說」區塊的樣子。\n\n預期：\n- 小標（陽面、陰面⋯⋯）是金色，卦意是比較亮的金色\n- 六爻每行前面有金色爻題（初九、九二⋯⋯）\n- 一句話提醒左邊有一條金線\n- 整體好不好看、好不好讀",
              "spec": {
                "ref": "docs/SPEC.md 卦典頁・解說",
                "quote": "解說（區塊，標題「解說」）"
              },
              "risk": "medium",
              "riskReason": "新做的版面，AI 看不出美醜",
              "manualOnlyReason": "好不好看要你判斷"
            },
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "程式逐字比對 8 卦開頭和牌卡的話資料；再直接看 card-01～08.jpg 圖上的字，8 句都一致；全文逐字檢查沒有簡體字；node test.js 也會擋"
                }
              },
              "manualOnly": false,
              "crossEnv": false,
              "id": "gua-book/05-commentary-1/card-words-match",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n打開第1～8卦任一卦，對照上方牌卡下面那句話和「卦意」的開頭。\n\n預期：\n- 卦意開頭（「」裡的字）和牌卡上的句子一字不差",
              "spec": {
                "ref": "docs/cards/gua-book/05-commentary-1.md",
                "quote": "卦意：開頭一定引用牌卡的話原句"
              },
              "risk": "low",
              "riskReason": "AI 已用程式和看圖兩種方式核對"
            },
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "Chrome 逐一換到第1～8、9、22、64卦：1～8 顯示解說（乾坤六爻 7 條，其他 6 條）、其他顯示「解說撰寫中」；console 沒有錯誤"
                }
              },
              "manualOnly": false,
              "crossEnv": false,
              "id": "gua-book/05-commentary-1/pending-and-nav",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n在卦典頁按底部「下一卦 ›」從第7卦換到第8卦，再換到第9卦。\n\n預期：\n- 第8卦有解說；第9卦的解說區塊只寫「解說撰寫中」，牌卡和原文照常顯示\n- 換卦時解說內容跟著換，不會留著上一卦的",
              "spec": {
                "ref": "docs/SPEC.md 卦典頁・解說",
                "quote": "還沒寫好的卦顯示「解說撰寫中」，其他區塊照常顯示"
              },
              "risk": "low",
              "riskReason": "AI 已逐卦換過"
            },
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "把頁面放進 375px、320px 寬的框量：解說區塊沒有超出右邊、不需左右捲動；沒有在真的手機上看"
                }
              },
              "manualOnly": true,
              "crossEnv": true,
              "id": "gua-book/05-commentary-1/phone",
              "text": "（要先推上網站才能用手機看）用自己的手機打開網站的卦典頁第1卦，往下捲到解說。\n\n預期：\n- 字不會太小、好讀\n- 不需要左右滑",
              "spec": {
                "ref": "CLAUDE.md 開發慣例",
                "quote": "手機和電腦都要能正常瀏覽（響應式設計）"
              },
              "risk": "medium",
              "riskReason": "AI 只模擬手機寬度",
              "manualOnlyReason": "要用你自己的手機看"
            }
          ]
        },
        {
          "id": "06-commentary-2",
          "title": "06-解說第2批（第9～16卦）",
          "items": [
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "AI 通讀第9～16卦、避開貶意與陰森說法，沒有「一定會」「命中注定」；內容好不好讀仍要你判斷"
                }
              },
              "manualOnly": true,
              "crossEnv": false,
              "id": "gua-book/06-commentary-2/read-one",
              "text": "用瀏覽器打開 `gua.html`（直接雙擊就好），網址最後改成 `#9`，往下捲到「解說」。挑**一兩卦**讀讀看（建議：小畜、泰、大有）。\n\n預期：\n- 讀起來有啟發、口氣溫和，不嚇人、不貶低人\n- 牌卡的話偏鼓勵的卦，有把卦辭的提醒補上（例如小畜）",
              "spec": {
                "ref": "docs/SPEC.md 卦典頁・解說",
                "quote": "語氣照〈一陰一陽・問事覺察版〉提示詞：溫和、誠懇、清醒、不恐嚇、不神化、不說「一定會」。"
              },
              "risk": "high",
              "riskReason": "內容好不好只有你能決定",
              "manualOnlyReason": "文字讀起來的感覺要你判斷"
            },
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "程式逐字比對第9～16卦開頭和牌卡的話；看過 card-09～16.jpg 圖上的字都一致；沒有簡體字；Chrome 逐卦換過，解說都有顯示、六爻條數對；node test.js 通過"
                }
              },
              "manualOnly": false,
              "crossEnv": false,
              "id": "gua-book/06-commentary-2/card-words-match",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n打開第9～16卦任一卦，對照上方牌卡下面那句話和「卦意」的開頭。\n\n預期：\n- 「」裡的字和牌卡上的句子一字不差\n- 解說區塊有六段：卦意、陽面、陰面、吉中之凶／凶中之吉、六爻、一句話提醒",
              "spec": {
                "ref": "docs/cards/gua-book/06-commentary-2.md",
                "quote": "「卦意」開頭都是牌卡的話原句，且和牌卡圖上的字一樣"
              },
              "risk": "low",
              "riskReason": "AI 已用程式和看圖兩種方式核對"
            }
          ]
        },
        {
          "id": "07-commentary-3",
          "title": "07-解說第3批（第17～24卦）",
          "items": [
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "AI 通讀第17～24卦、避開貶意與陰森說法，沒有「一定會」「命中注定」；內容好不好讀仍要你判斷"
                }
              },
              "manualOnly": true,
              "crossEnv": false,
              "id": "gua-book/07-commentary-3/read-one",
              "text": "用瀏覽器打開 `gua.html`（直接雙擊就好），網址最後改成 `#17`，往下捲到「解說」。挑**一兩卦**讀讀看（建議：隨、臨、剝）。\n\n預期：\n- 讀起來有啟發、口氣溫和，不嚇人、不貶低人\n- 牌卡的話偏鼓勵的卦，有把卦辭的提醒補上（例如隨）",
              "spec": {
                "ref": "docs/SPEC.md 卦典頁・解說",
                "quote": "語氣照〈一陰一陽・問事覺察版〉提示詞：溫和、誠懇、清醒、不恐嚇、不神化、不說「一定會」。"
              },
              "risk": "high",
              "riskReason": "內容好不好只有你能決定",
              "manualOnlyReason": "文字讀起來的感覺要你判斷"
            },
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "程式逐字比對第17～24卦開頭和牌卡的話；看過 card-17～24.jpg 圖上的字都一致；沒有簡體字；Chrome 逐卦換過，解說都有顯示、六爻條數對；node test.js 通過"
                }
              },
              "manualOnly": false,
              "crossEnv": false,
              "id": "gua-book/07-commentary-3/card-words-match",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n打開第17～24卦任一卦，對照上方牌卡下面那句話和「卦意」的開頭。\n\n預期：\n- 「」裡的字和牌卡上的句子一字不差\n- 解說區塊有六段：卦意、陽面、陰面、吉中之凶／凶中之吉、六爻、一句話提醒",
              "spec": {
                "ref": "docs/cards/gua-book/07-commentary-3.md",
                "quote": "「卦意」開頭都是牌卡的話原句，且和牌卡圖上的字一樣"
              },
              "risk": "low",
              "riskReason": "AI 已用程式和看圖兩種方式核對"
            }
          ]
        },
        {
          "id": "08-commentary-4",
          "title": "08-解說第4批（第25～32卦）",
          "items": [
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "AI 通讀第25～32卦、避開貶意與陰森說法，沒有「一定會」「命中注定」；內容好不好讀仍要你判斷"
                }
              },
              "manualOnly": true,
              "crossEnv": false,
              "id": "gua-book/08-commentary-4/read-one",
              "text": "用瀏覽器打開 `gua.html`（直接雙擊就好），網址最後改成 `#25`，往下捲到「解說」。挑**一兩卦**讀讀看（建議：無妄、大過、咸）。\n\n預期：\n- 讀起來有啟發、口氣溫和，不嚇人、不貶低人\n- 牌卡的話偏鼓勵的卦，有把卦辭的提醒補上（例如無妄）",
              "spec": {
                "ref": "docs/SPEC.md 卦典頁・解說",
                "quote": "語氣照〈一陰一陽・問事覺察版〉提示詞：溫和、誠懇、清醒、不恐嚇、不神化、不說「一定會」。"
              },
              "risk": "high",
              "riskReason": "內容好不好只有你能決定",
              "manualOnlyReason": "文字讀起來的感覺要你判斷"
            },
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "程式逐字比對第25～32卦開頭和牌卡的話；看過 card-25～32.jpg 圖上的字都一致；沒有簡體字；Chrome 逐卦換過，解說都有顯示、六爻條數對；node test.js 通過"
                }
              },
              "manualOnly": false,
              "crossEnv": false,
              "id": "gua-book/08-commentary-4/card-words-match",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n打開第25～32卦任一卦，對照上方牌卡下面那句話和「卦意」的開頭。\n\n預期：\n- 「」裡的字和牌卡上的句子一字不差\n- 解說區塊有六段：卦意、陽面、陰面、吉中之凶／凶中之吉、六爻、一句話提醒",
              "spec": {
                "ref": "docs/cards/gua-book/08-commentary-4.md",
                "quote": "「卦意」開頭都是牌卡的話原句，且和牌卡圖上的字一樣"
              },
              "risk": "low",
              "riskReason": "AI 已用程式和看圖兩種方式核對"
            }
          ]
        },
        {
          "id": "09-commentary-5",
          "title": "09-解說第5批（第33～40卦）",
          "items": [
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "AI 通讀第33～40卦、避開貶意與陰森說法，沒有「一定會」「命中注定」；內容好不好讀仍要你判斷"
                }
              },
              "manualOnly": true,
              "crossEnv": false,
              "id": "gua-book/09-commentary-5/read-one",
              "text": "用瀏覽器打開 `gua.html`（直接雙擊就好），網址最後改成 `#33`，往下捲到「解說」。挑**一兩卦**讀讀看（建議：遯、明夷、蹇）。\n\n預期：\n- 讀起來有啟發、口氣溫和，不嚇人、不貶低人\n- 牌卡的話偏鼓勵的卦，有把卦辭的提醒補上（例如遯）",
              "spec": {
                "ref": "docs/SPEC.md 卦典頁・解說",
                "quote": "語氣照〈一陰一陽・問事覺察版〉提示詞：溫和、誠懇、清醒、不恐嚇、不神化、不說「一定會」。"
              },
              "risk": "high",
              "riskReason": "內容好不好只有你能決定",
              "manualOnlyReason": "文字讀起來的感覺要你判斷"
            },
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "程式逐字比對第33～40卦開頭和牌卡的話；看過 card-33～40.jpg 圖上的字都一致；沒有簡體字；Chrome 逐卦換過，解說都有顯示、六爻條數對；node test.js 通過"
                }
              },
              "manualOnly": false,
              "crossEnv": false,
              "id": "gua-book/09-commentary-5/card-words-match",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n打開第33～40卦任一卦，對照上方牌卡下面那句話和「卦意」的開頭。\n\n預期：\n- 「」裡的字和牌卡上的句子一字不差\n- 解說區塊有六段：卦意、陽面、陰面、吉中之凶／凶中之吉、六爻、一句話提醒",
              "spec": {
                "ref": "docs/cards/gua-book/09-commentary-5.md",
                "quote": "「卦意」開頭都是牌卡的話原句，且和牌卡圖上的字一樣"
              },
              "risk": "low",
              "riskReason": "AI 已用程式和看圖兩種方式核對"
            }
          ]
        },
        {
          "id": "10-commentary-6",
          "title": "10-解說第6批（第41～48卦）",
          "items": [
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "AI 通讀第41～48卦、避開貶意與陰森說法，沒有「一定會」「命中注定」；內容好不好讀仍要你判斷"
                }
              },
              "manualOnly": true,
              "crossEnv": false,
              "id": "gua-book/10-commentary-6/read-one",
              "text": "用瀏覽器打開 `gua.html`（直接雙擊就好），網址最後改成 `#41`，往下捲到「解說」。挑**一兩卦**讀讀看（建議：損、困、井）。\n\n預期：\n- 讀起來有啟發、口氣溫和，不嚇人、不貶低人\n- 牌卡的話偏鼓勵的卦，有把卦辭的提醒補上（例如損）",
              "spec": {
                "ref": "docs/SPEC.md 卦典頁・解說",
                "quote": "語氣照〈一陰一陽・問事覺察版〉提示詞：溫和、誠懇、清醒、不恐嚇、不神化、不說「一定會」。"
              },
              "risk": "high",
              "riskReason": "內容好不好只有你能決定",
              "manualOnlyReason": "文字讀起來的感覺要你判斷"
            },
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "程式逐字比對第41～48卦開頭和牌卡的話；看過 card-41～48.jpg 圖上的字都一致；沒有簡體字；Chrome 逐卦換過，解說都有顯示、六爻條數對；node test.js 通過"
                }
              },
              "manualOnly": false,
              "crossEnv": false,
              "id": "gua-book/10-commentary-6/card-words-match",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n打開第41～48卦任一卦，對照上方牌卡下面那句話和「卦意」的開頭。\n\n預期：\n- 「」裡的字和牌卡上的句子一字不差\n- 解說區塊有六段：卦意、陽面、陰面、吉中之凶／凶中之吉、六爻、一句話提醒",
              "spec": {
                "ref": "docs/cards/gua-book/10-commentary-6.md",
                "quote": "「卦意」開頭都是牌卡的話原句，且和牌卡圖上的字一樣"
              },
              "risk": "low",
              "riskReason": "AI 已用程式和看圖兩種方式核對"
            }
          ]
        },
        {
          "id": "11-commentary-7",
          "title": "11-解說第7批（第49～56卦）",
          "items": [
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "AI 通讀第49～56卦、避開貶意與陰森說法，沒有「一定會」「命中注定」；內容好不好讀仍要你判斷"
                }
              },
              "manualOnly": true,
              "crossEnv": false,
              "id": "gua-book/11-commentary-7/read-one",
              "text": "用瀏覽器打開 `gua.html`（直接雙擊就好），網址最後改成 `#49`，往下捲到「解說」。挑**一兩卦**讀讀看（建議：革、歸妹、豐）。\n\n預期：\n- 讀起來有啟發、口氣溫和，不嚇人、不貶低人\n- 牌卡的話偏鼓勵的卦，有把卦辭的提醒補上（例如革）",
              "spec": {
                "ref": "docs/SPEC.md 卦典頁・解說",
                "quote": "語氣照〈一陰一陽・問事覺察版〉提示詞：溫和、誠懇、清醒、不恐嚇、不神化、不說「一定會」。"
              },
              "risk": "high",
              "riskReason": "內容好不好只有你能決定",
              "manualOnlyReason": "文字讀起來的感覺要你判斷"
            },
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "程式逐字比對第49～56卦開頭和牌卡的話；看過 card-49～56.jpg 圖上的字都一致；沒有簡體字；Chrome 逐卦換過，解說都有顯示、六爻條數對；node test.js 通過"
                }
              },
              "manualOnly": false,
              "crossEnv": false,
              "id": "gua-book/11-commentary-7/card-words-match",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n打開第49～56卦任一卦，對照上方牌卡下面那句話和「卦意」的開頭。\n\n預期：\n- 「」裡的字和牌卡上的句子一字不差\n- 解說區塊有六段：卦意、陽面、陰面、吉中之凶／凶中之吉、六爻、一句話提醒",
              "spec": {
                "ref": "docs/cards/gua-book/11-commentary-7.md",
                "quote": "「卦意」開頭都是牌卡的話原句，且和牌卡圖上的字一樣"
              },
              "risk": "low",
              "riskReason": "AI 已用程式和看圖兩種方式核對"
            }
          ]
        },
        {
          "id": "12-commentary-8",
          "title": "12-解說第8批（第57～64卦）",
          "items": [
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "AI 通讀第57～64卦、避開貶意與陰森說法，沒有「一定會」「命中注定」；內容好不好讀仍要你判斷"
                }
              },
              "manualOnly": true,
              "crossEnv": false,
              "id": "gua-book/12-commentary-8/read-one",
              "text": "用瀏覽器打開 `gua.html`（直接雙擊就好），網址最後改成 `#57`，往下捲到「解說」。挑**一兩卦**讀讀看（建議：節、既濟、未濟）。\n\n預期：\n- 讀起來有啟發、口氣溫和，不嚇人、不貶低人\n- 牌卡的話偏鼓勵的卦，有把卦辭的提醒補上（例如節）",
              "spec": {
                "ref": "docs/SPEC.md 卦典頁・解說",
                "quote": "語氣照〈一陰一陽・問事覺察版〉提示詞：溫和、誠懇、清醒、不恐嚇、不神化、不說「一定會」。"
              },
              "risk": "high",
              "riskReason": "內容好不好只有你能決定",
              "manualOnlyReason": "文字讀起來的感覺要你判斷"
            },
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "程式逐字比對第57～64卦開頭和牌卡的話；看過 card-57～64.jpg 圖上的字都一致；沒有簡體字；Chrome 逐卦換過，解說都有顯示、六爻條數對；node test.js 通過"
                }
              },
              "manualOnly": false,
              "crossEnv": false,
              "id": "gua-book/12-commentary-8/card-words-match",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n打開第57～64卦任一卦，對照上方牌卡下面那句話和「卦意」的開頭。\n\n預期：\n- 「」裡的字和牌卡上的句子一字不差\n- 解說區塊有六段：卦意、陽面、陰面、吉中之凶／凶中之吉、六爻、一句話提醒",
              "spec": {
                "ref": "docs/cards/gua-book/12-commentary-8.md",
                "quote": "「卦意」開頭都是牌卡的話原句，且和牌卡圖上的字一樣"
              },
              "risk": "low",
              "riskReason": "AI 已用程式和看圖兩種方式核對"
            }
          ]
        },
        {
          "id": "integration",
          "title": "整體走一遍",
          "items": [
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": false,
                  "how": ""
                }
              },
              "manualOnly": true,
              "crossEnv": false,
              "id": "gua-book/integration/walkthrough",
              "text": "從首頁開始走一遍卦典：\n1. 打開 `index.html`，捲到最下面「六十四卦」，點任一卦名（例如**謙**）\n2. 在卦典頁看牌卡、牌卡的話、原文、解說\n3. 按底部「下一卦 ›」「‹ 上一卦」換幾卦，再按「回首頁」\n4. 回首頁起一卦（或用原本的卦），在結果區點卦名，確認也會進到卦典頁、看得到解說\n5. 在首頁按「✦ 自選卦做紀念圖」選一卦下載，確認紀念圖照常\n\n預期：\n- 64 卦都有解說，沒有「解說撰寫中」\n- 換卦、回首頁、自選卦紀念圖都正常",
              "spec": {
                "ref": "docs/SPEC.md 六十四卦、卦典頁",
                "quote": "新增「六十四卦」卦典：首頁最下方 64 卦區（點卦名看卦典頁、可自選一卦或兩卦做紀念圖）"
              },
              "risk": "medium",
              "riskReason": "整個卦典功能串起來只有你走過才算",
              "manualOnlyReason": "整體走一遍要你親手做"
            }
          ]
        }
      ]
    },
    {
      "id": "beginner-guide",
      "name": "新手說明",
      "status": "closed",
      "closedAt": "2026-10-10",
      "specRef": "docs/SPEC.md",
      "allTicketsLoaded": true,
      "tickets": [
        {
          "id": "01-guide-box",
          "title": "01-新手說明框",
          "items": [
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": false,
                  "how": "AI 有截圖確認結構與位置，但好不好看、文字順不順要你判斷"
                }
              },
              "manualOnly": true,
              "crossEnv": false,
              "id": "beginner-guide/01-guide-box/look-and-words",
              "text": "用**無痕視窗**（Chrome 按 Ctrl＋Shift＋N）打開專案資料夾裡的 **index.html**（把檔案拖進無痕視窗即可）。\n\n預期：\n- 網站標題的金線下方、「一 起卦資訊」上方，有一個「第一次來？三步驟就能解卦」的框，**一打開就是展開的**\n- 框的樣子和下面的區塊同款（深藍底、金框、左上右下小角飾），標題前沒有編號圓圈\n- 標題右邊的展開記號（▾）看得出來可以點\n- 三步驟讀起來順、朋友看得懂；有沒有哪裡覺得擠、太空、字太小",
              "spec": {
                "ref": "docs/cards/beginner-guide/01-guide-box.md",
                "quote": "標題「第一次來？三步驟就能解卦」，點標題展開／收起（標題旁有展開記號）"
              },
              "risk": "high",
              "riskReason": "外觀和文字只有你能判斷",
              "manualOnlyReason": "好不好看、文字是否通順要你看"
            },
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "全新網址第一次打開 → 自動展開；點標題收起、再點展開；重新整理 → 收起；另外模擬瀏覽器擋下儲存 → 照樣展開、沒有錯誤"
                }
              },
              "manualOnly": false,
              "crossEnv": false,
              "id": "beginner-guide/01-guide-box/toggle-and-remember",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n接著上一項（同一個無痕視窗）：\n1. 點框的標題 → 收起\n2. 再點一次 → 展開\n3. 按 F5 重新整理\n\n預期：\n- 1、2 收起展開都正常，展開記號會上下翻轉\n- 重新整理後框是**收起的**（這台瀏覽器已經看過了），點標題仍可展開",
              "spec": {
                "ref": "docs/cards/beginner-guide/01-guide-box.md",
                "quote": "這台裝置第一次打開網站時自動展開；之後再來預設收起，仍可點開"
              },
              "risk": "low",
              "riskReason": "AI 已逐步點過"
            },
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "填資料擲六次 → 結果出現澤水困→水澤節；六十四卦 64 格都在；gua.html 沒有說明框；強制重新整理後主控台無錯誤（曾出現的 hexagramByNumber 錯誤是瀏覽器留舊檔暫存）"
                }
              },
              "manualOnly": false,
              "crossEnv": false,
              "id": "beginner-guide/01-guide-box/others-still-work",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n在首頁照平常起一卦：填時間、類別、問事，按「開始擲卦」，擲完六次。再捲到最下面點一個卦名。\n\n預期：\n- 起卦、擲卦、結果區都和以前一樣\n- 最下面六十四卦 64 格都在，點卦名會到卦典頁\n- 卦典頁**沒有**「第一次來？」這個框",
              "spec": {
                "ref": "docs/cards/beginner-guide/01-guide-box.md",
                "quote": "下方起卦、擲卦、結果區、六十四卦都照常運作；卦典頁沒有這個框"
              },
              "risk": "low",
              "riskReason": "AI 已實際走過；若畫面怪怪的先按 Ctrl＋Shift＋R"
            },
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "把首頁放進 375px 寬的框量：頁面寬 360 沒有左右捲動；標題一行、點按區高 42px；截圖文字沒被切掉。沒有在真的手機上看"
                }
              },
              "manualOnly": true,
              "crossEnv": true,
              "id": "beginner-guide/01-guide-box/phone",
              "text": "（要先推上網站才能用手機看；也可以等之後一起看）用自己的手機打開網站，看最上面的說明框。\n\n預期：\n- 文字大小好讀，不需左右滑\n- 標題一行放得下，用手指點得到、能展開收起",
              "spec": {
                "ref": "docs/cards/beginner-guide/01-guide-box.md",
                "quote": "手機寬度：文字好讀、不需左右捲動，標題好點"
              },
              "risk": "medium",
              "riskReason": "AI 只量過窄框，沒在真手機上按過",
              "manualOnlyReason": "要在你自己的手機上看"
            }
          ]
        },
        {
          "id": "02-ai-button-first",
          "title": "02-AI 提示詞改主按鈕",
          "items": [
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": false,
                  "how": "AI 已截圖確認標題與順序正確；好不好看要你判斷"
                }
              },
              "manualOnly": true,
              "crossEnv": false,
              "id": "beginner-guide/02-ai-button-first/look",
              "text": "在首頁起一卦（填時間、類別、問事 → 開始擲卦 → 擲完六次），捲到最下面的第四區。\n\n預期：\n- 標題是「四　解卦與保存」\n- 第一顆是**朱紅色**「複製 AI 解卦提示詞」，下面是**金框**「複製到 Obsidian」，再來「預覽筆記內容」、「再起一卦」\n- 看看朱紅＋金框這樣搭配順不順眼、標題念起來順不順\n\n（畫面沒變的話先按 Ctrl＋Shift＋R）",
              "spec": {
                "ref": "docs/cards/beginner-guide/02-ai-button-first.md",
                "quote": "區塊標題「四　解卦與保存」；由上到下是「複製 AI 解卦提示詞」（朱紅）→「複製到 Obsidian」（金框）→「預覽筆記內容」→「再起一卦」"
              },
              "risk": "medium",
              "riskReason": "樣子與用字只有你能判斷",
              "manualOnlyReason": "好不好看、順不順口要你決定"
            },
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "滑鼠點兩顆按鈕 → 都變「✓ 已複製」；記錄寫進剪貼簿的文字：提示詞結尾填好（工作）測試問事、第47卦澤水困、初爻四爻、第60卦水澤節；筆記和預覽完全相同。複製程式沒改過。沒有實際貼到記事本（AI 讀剪貼簿會被瀏覽器擋）"
                }
              },
              "manualOnly": false,
              "crossEnv": false,
              "id": "beginner-guide/02-ai-button-first/paste",
              "text": "接著上一項：\n1. 按「複製 AI 解卦提示詞」，打開記事本貼上\n2. 回網頁按「複製到 Obsidian」，在記事本另起一行貼上\n\n預期：\n- 兩顆按鈕按完都變「✓ 已複製」\n- 提示詞最後「我的問卦資料」填好問事、本卦、動爻、變卦，和以前一樣\n- 筆記內容和以前一樣（和「預覽筆記內容」展開的一樣）",
              "spec": {
                "ref": "docs/cards/beginner-guide/02-ai-button-first.md",
                "quote": "按「複製 AI 解卦提示詞」貼到記事本：內容和以前一樣；按「複製到 Obsidian」貼到記事本：筆記內容和以前一樣；按鈕顯示「✓ 已複製」"
              },
              "risk": "medium",
              "riskReason": "AI 沒能親手貼上，只記錄了寫入的內容"
            },
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "還沒複製筆記時點「再起一卦」→ 跳出「這一卦還沒複製，確定要清除嗎？」（測試時讓它自動回答取消，免得卡住瀏覽器）"
                }
              },
              "manualOnly": false,
              "crossEnv": false,
              "id": "beginner-guide/02-ai-button-first/new-cast-confirm",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n另起一卦擲完六次，**什麼都不複製**，直接按「再起一卦」。\n\n預期：\n- 跳出「這一卦還沒複製，確定要清除嗎？」\n- 按「取消」→ 這一卦還在",
              "spec": {
                "ref": "docs/cards/beginner-guide/02-ai-button-first.md",
                "quote": "還沒複製過就按「再起一卦」：仍會先問「這一卦還沒複製，確定要清除嗎？」"
              },
              "risk": "low",
              "riskReason": "AI 已點過，程式也沒改"
            },
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "在 375px 寬的小框載入網站：三顆按鈕都在畫面內、高 48px，頁面沒有左右捲動。沒有在真的手機上按"
                }
              },
              "manualOnly": true,
              "crossEnv": true,
              "id": "beginner-guide/02-ai-button-first/phone",
              "text": "（要先推上網站才能用手機看；也可以等之後一起看）用自己的手機起一卦，捲到第四區。\n\n預期：\n- 兩顆複製按鈕用手指好按\n- 不需要左右滑",
              "spec": {
                "ref": "docs/cards/beginner-guide/02-ai-button-first.md",
                "quote": "手機寬度：兩顆按鈕好按、不需左右捲動"
              },
              "risk": "medium",
              "riskReason": "AI 只量過窄框，沒在真手機上按過",
              "manualOnlyReason": "要在你自己的手機上按"
            }
          ]
        }
      ]
    },
    {
      "id": "origin-story",
      "name": "起源故事",
      "status": "closed",
      "closedAt": "2026-10-10",
      "specRef": "docs/SPEC.md",
      "allTicketsLoaded": true,
      "tickets": [
        {
          "id": "01-story-page",
          "title": "01-故事頁",
          "items": [
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": false,
                  "how": ""
                }
              },
              "manualOnly": true,
              "crossEnv": false,
              "id": "origin-story/01-story-page/look-and-read",
              "text": "用電腦打開專案資料夾裡的 `story.html`（直接雙擊），從頭讀到尾。\n\n預期：\n- 標題「故事緣起」和四段故事的金色、字距看起來舒服\n- 第三段的女吏全身照大小合適，不會太大或太小\n- 故事讀起來順，粗體強調的地方對（文字已照定稿放，AI 逐字比對過）",
              "spec": {
                "ref": "docs/cards/origin-story/01-story-page.md",
                "quote": "標題與四段故事都在，文字與 SPEC「故事全文（定稿）」一致"
              },
              "risk": "high",
              "riskReason": "新頁面的整體觀感 AI 判斷不了",
              "manualOnlyReason": "好不好看、讀起來順不順只有你能判斷"
            },
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "在 Chrome 點第三段的定裝照 → 全畫面放大；再點一下 → 關閉。電腦寬與 375px 手機寬各試一次"
                }
              },
              "manualOnly": false,
              "crossEnv": false,
              "id": "origin-story/01-story-page/photo-zoom",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n在 `story.html` 捲到第三段「三、智慧女吏，神話懸念」，點女吏的照片。\n\n預期：\n- 照片在段落標題下面、內文上面，圖下有「點圖可放大」\n- 點了全畫面放大，再點一下關閉",
              "spec": {
                "ref": "docs/cards/origin-story/01-story-page.md",
                "quote": "點定裝照會全畫面放大，再點一下關閉"
              },
              "risk": "low",
              "riskReason": "AI 已實際點過，沿用牌卡的放大功能"
            },
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "點網站名稱 → 到 index.html；點「靜心起卦 →」→ 到 index.html#cast-info，「一 起卦資訊」停在畫面頂端下方 16px（原本貼頂、金框被切，已修）"
                }
              },
              "manualOnly": false,
              "crossEnv": false,
              "id": "origin-story/01-story-page/links",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n在 `story.html` 捲到最下面，按朱紅「靜心起卦 →」；再回故事頁，點最上面的「龜卜卜線上求卦」。\n\n預期：\n- 按「靜心起卦 →」→ 回到首頁，畫面停在「一 起卦資訊」，上緣金框完整\n- 點網站名稱 → 回到首頁最上面",
              "spec": {
                "ref": "docs/cards/origin-story/01-story-page.md",
                "quote": "故事最後有朱紅「靜心起卦 →」按鈕，按了回首頁並停在「一 起卦資訊」"
              },
              "risk": "low",
              "riskReason": "AI 已實際點過兩個連結"
            },
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "在 375px 寬的小框載入：頁面沒有左右捲動、照片 260px 在框內、內文 17px。沒在真手機上看過"
                }
              },
              "manualOnly": true,
              "crossEnv": true,
              "id": "origin-story/01-story-page/phone",
              "text": "（要先推上網站才能用手機看；也可以等之後一起看）用自己的手機打開故事頁。\n\n預期：\n- 字好讀，不需要左右滑\n- 照片不超出畫面，點了能放大、再點關閉",
              "spec": {
                "ref": "docs/cards/origin-story/01-story-page.md",
                "quote": "手機尺寸下看起來正常：字好讀、圖不超出畫面、不用左右滑"
              },
              "risk": "medium",
              "riskReason": "AI 只量過窄框，沒在真手機上看",
              "manualOnlyReason": "要在你自己的手機上看"
            }
          ]
        },
        {
          "id": "02-home-encounter",
          "title": "02-首頁相遇區",
          "items": [
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": false,
                  "how": "AI 已確認順序、文字逐字相符、圖與新手說明框同寬（528px）；好不好看判斷不了"
                }
              },
              "manualOnly": true,
              "crossEnv": false,
              "id": "origin-story/02-home-encounter/look",
              "text": "用電腦打開首頁 `index.html`（建議先按 Ctrl＋Shift＋R 強制重新整理），看頁首金線下方。\n\n預期：\n- 女吏抱銅龜的橫圖，金框和下方區塊一樣寬，看起來和網站風格搭\n- 圖下四行開場白置中、字比內文小一點，顏色好讀\n- 再下面一行金色「閱讀完整故事 →」\n- 開場白讀起來順（文字是照定稿放的）",
              "spec": {
                "ref": "docs/cards/origin-story/02-home-encounter.md",
                "quote": "首頁頁首下方、新手說明上方，依序有主形象圖、四行開場白、「閱讀完整故事 →」"
              },
              "risk": "medium",
              "riskReason": "整體觀感只有你能判斷",
              "manualOnlyReason": "好不好看、字大小合不合適要你親眼看"
            },
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "用程式把網頁上四行字和 SPEC 逐字比對 → 完全相同；相遇區找不到「觀象」；開場白 14.4px、內文 17px；置中"
                }
              },
              "manualOnly": false,
              "crossEnv": false,
              "id": "origin-story/02-home-encounter/text-order",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n打開首頁，看相遇區四行開場白。\n\n預期：\n- 依序是「昔日姜嫄感天履痕，文王仰觀星穹演易。」「夜空星軌運轉，掌卦女吏手抱溫潤銅龜，於星海下靜候每一位尋找解答的旅人。」「她是嚴謹的掌卦女官，或是穿越千年的神聖指引？」「請靜心起卦，聽天地萬物寄予你的解答。」\n- 相遇區沒有重複「觀象・知時・自省」",
              "spec": {
                "ref": "docs/cards/origin-story/02-home-encounter.md",
                "quote": "開場白四行文字與 SPEC 一致，置中、字比內文小一點，沒有重複「觀象・知時・自省」"
              },
              "risk": "low",
              "riskReason": "AI 已逐字比對"
            },
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "實際用滑鼠點圖 → 畫面無變化、沒有放大框；點連結 → story.html；點「靜心起卦 →」→ index.html#cast-info，起卦資訊停在頂端下方 16px"
                }
              },
              "manualOnly": false,
              "crossEnv": false,
              "id": "origin-story/02-home-encounter/links-click",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n在首頁點主形象圖一下；再點「閱讀完整故事 →」；到故事頁後捲到最下面按「靜心起卦 →」。\n\n預期：\n- 點圖沒有任何反應（不會放大）\n- 點連結 → 到故事頁「故事緣起」\n- 按「靜心起卦 →」→ 回首頁，停在「一 起卦資訊」，金框完整",
              "spec": {
                "ref": "docs/cards/origin-story/02-home-encounter.md",
                "quote": "點「閱讀完整故事 →」到故事頁；在故事頁按「靜心起卦 →」回首頁起卦資訊；點主形象圖不會有反應"
              },
              "risk": "low",
              "riskReason": "AI 已實際點過"
            },
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "點新手說明標題 → 展開；填資料 → 開始擲卦 → 擲六次 → 出現六擲完成、卦象（困之節）、解卦與保存；六十四卦 64 格；主控台沒有錯誤"
                }
              },
              "manualOnly": false,
              "crossEnv": false,
              "id": "origin-story/02-home-encounter/others",
              "text": "> ✅ AI 已實際打開檢查過（見覆蓋說明），可略過；有空再親手看一次。\n\n在首頁照常起一次卦：點開新手說明，填時間、類別、問事，按「開始擲卦」擲六次，再捲到六十四卦。\n\n預期：\n- 新手說明能展開收起\n- 擲完出現卦象、牌卡、卦辭、解卦與保存\n- 六十四卦 64 格都在",
              "spec": {
                "ref": "docs/cards/origin-story/02-home-encounter.md",
                "quote": "新手說明、起卦、擲卦、結果、六十四卦照常能用"
              },
              "risk": "low",
              "riskReason": "AI 已走過一次，這張卡沒改到這些功能的程式"
            },
            {
              "coverage": {
                "auto": {
                  "covered": false,
                  "ref": ""
                },
                "agent": {
                  "covered": true,
                  "how": "375px 窄框：頁面寬 360px 無左右捲動；圖 328×185，臉和銅龜清楚；新手說明在畫面上半；原本「引？」單字落行已改成只在逗號後換行。網頁版圖片 1120×630、約 100KB，原檔仍只在素材。沒在真手機上看過"
                }
              },
              "manualOnly": true,
              "crossEnv": true,
              "id": "origin-story/02-home-encounter/phone",
              "text": "（要先推上網站才能用手機看；也可以等之後一起看）用自己的手機打開首頁。\n\n預期：\n- 圖不超出畫面，女吏的臉和銅龜看得清楚\n- 開場白只在逗號後換行，沒有單一個字掉到下一行\n- 往下滑一點就看到新手說明",
              "spec": {
                "ref": "docs/cards/origin-story/02-home-encounter.md",
                "quote": "手機尺寸下看起來正常：圖不超出畫面、女吏的臉和銅龜清楚、往下滑就看得到新手說明"
              },
              "risk": "medium",
              "riskReason": "AI 只量過窄框，沒在真手機上看",
              "manualOnlyReason": "要在你自己的手機上看"
            }
          ]
        }
      ]
    }
  ]
};
