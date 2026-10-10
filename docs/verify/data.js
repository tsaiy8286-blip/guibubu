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
      "status": "verifying",
      "specRef": "docs/SPEC.md",
      "allTicketsLoaded": false,
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
        }
      ]
    }
  ]
};
