---
name: git-commit
description: 引導使用者完成 git commit（存檔）與 push（上傳）的完整流程，適合完全沒用過 git 的新手。
  流程包含：顯示目前變更、安全掃描（攔截敏感檔案）、分析變更並規劃 commit 計畫（判斷是否需要拆分多次）、
  逐筆執行 commit（commit message 使用繁體中文並符合 Conventional Commits 規範）、
  使用者確認後才 push。當使用者說「幫我 commit」、「我要 push」、「提交變更」、「git commit」、
  「推上去」、「儲存 git 紀錄」、「同步到 GitHub」、「把改動存起來」時觸發。
  只要使用者提到要提交或推送程式碼，就應主動使用此 skill，不要等使用者說出完整指令。
---

# Git Commit & Push 流程

這個 skill 幫你安全地把程式碼的變更記錄下來（commit），並視情況推送到遠端（push）。

**每一步都會先讓你看清楚要做什麼，你確認後才執行。Push 永遠不會自動發生。**

**給新手的兩句話**：commit 就像遊戲存檔，記下「現在這個版本」，之後改壞了可以回來；push 是把存檔上傳到 GitHub（雲端），網站有接自動上線的話，push 完網站就會更新。

---

## Conventional Commits 格式規範

所有 commit message 使用以下格式，說明文字用繁體中文：

```
type: 說明文字
```

| type | 用途 | 範例 |
|------|------|------|
| `feat` | 新功能、新頁面、新區塊 | `feat: 新增作品集頁面` |
| `fix` | 修正 bug | `fix: 修正送出表單後畫面空白的問題` |
| `docs` | 規格、任務卡、進度追蹤等文件 | `docs: 更新專案進度追蹤` |
| `style` | 格式調整，不影響邏輯 | `style: 統一縮排格式` |
| `refactor` | 重構，不加功能也不修 bug | `refactor: 拆分登入邏輯為獨立模組` |
| `chore` | 雜項設定、工具、依賴 | `chore: 新增 .gitignore` |
| `perf` | 效能優化 | `perf: 改善圖片載入速度` |

說明文字原則：
- 用「動詞 + 受詞」的句型，例如「新增、修正、更新、移除、重構」
- 說明「做了什麼」，不需要說「為什麼」（那是 PR 說明的事）
- 30 字以內，簡潔清楚

---

## 步驟一：確認 git 環境

執行 `git status`，確認目前目錄有 git 管理。

若出現 `not a git repository`：
> 「這個資料夾還沒有設定 git。如果你想初始化，我可以幫你執行 `git init`；如果你在錯誤的資料夾，請告訴我正確路徑。」

停止並等待使用者指示。

---

## 步驟二：顯示目前變更

執行 `git status` 與 `git diff --stat`，用白話整理：

```
目前有以下變更（上次 commit 之後的改動）：

新增：2 個檔案
  • src/login.html
  • src/auth.js

修改：1 個檔案
  • README.md

刪除：0 個檔案
```

若 `git status` 顯示 `nothing to commit`：
> 「目前沒有任何變更，不需要 commit。」
流程結束。

---

## 步驟三：安全掃描

在暫存任何檔案之前，主動掃描以下風險。

### 高風險（強制攔截，不得繼續）

偵測到以下情況時，立即警告並停止流程：

**危險檔名：**
- `.env`、`.env.local`、`.env.production`、`.env.*`
- `*.pem`、`*.key`、`id_rsa`、`id_ed25519`

**檔案內容（對變更的檔案執行 `git diff` 後掃描）：**
- 含有 `password=`、`api_key=`、`secret=`、`token=`、`ACCESS_KEY`（非純註解行）

攔截訊息範例：
> 「⚠️ 警告：偵測到可能含有敏感資訊的檔案 `.env`。
> 這個檔案可能包含密碼或 API 金鑰，**不應該被 commit**。
>
> 建議做法：
> 1. 把 `.env` 加入 `.gitignore`（我可以幫你做）
> 2. 確認這個檔案不含真實的金鑰才繼續
>
> 要我幫你處理 .gitignore，還是你要自己確認？」

### 中風險（警告，讓使用者決定）

- 單一檔案超過 10MB
- `credentials.*`、`config.local.*`、`secrets.*` 命名的檔案
- `.gitignore` 不存在：提醒「你目前沒有 .gitignore，可能會不小心 commit 不該上傳的檔案。要我幫你建立一個基本版嗎？」

安全掃描通過後，再進入步驟四。

---

## 步驟四：分析變更，規劃 commit 計畫

讀取所有變更（`git diff HEAD` 或 `git diff --cached`），分析變更的性質與範圍，判斷應分幾次 commit。

### 判斷邏輯

**建議 1 次 commit：**
- 所有變更都屬於同一個目的（例如：都是為了修同一個 bug）
- 變更檔案很少（1–3 個），且主題清楚

**建議拆分多次 commit：**
- 變更涉及不同功能（例如：同時新增功能 A 又修了 bug B）
- 變更橫跨多個不相關的模組
- 有些是功能程式碼、有些是文件或設定檔

### 判斷 type

拆分計畫定好後，每一筆 commit 依上方「Conventional Commits 格式規範」的表格判斷 type。

### 給使用者三個選項

顯示計畫前，先查好推送目標：

```bash
git remote -v
git branch --show-current
```

計畫的最後一律附上推送目標與三個選項。用 AskUserQuestion 工具呈現；沒有這個工具時，改用編號文字，使用者回數字即可。

- **1. commit**：只存在本機，不 push
- **2. commit + push**：commit 完直接推送到上面的推送目標
- **3. 要修改**：拆法、type、說明文字都可以改

各選項的後續：

- 選 1 → 步驟五，完成後流程結束
- 選 2 → 步驟五，完成後直接進步驟六 push。**選 2 本身就是 push 的確認，不再另外詢問**
- 選 3 → 問要改哪裡，改完重新顯示計畫與三個選項

推送目標的標示：

- 分支是 `main` 或 `master` → 在分支後面標「（主分支）」
- 分支還沒有 upstream → 選項 2 寫成「commit + push（首次推送，會建立遠端分支）」
- 沒有任何遠端 → 拿掉選項 2，只給 1 和 3

### 輸出範例（多次 commit）

```
我分析了你的變更，建議分成 3 次 commit：

① feat: 新增使用者登入頁面
   涉及檔案：src/login.html、src/login.css、src/auth.js

② fix: 修正導覽列在手機版跑版的問題
   涉及檔案：src/navbar.css

③ docs: 更新 README 安裝說明
   涉及檔案：README.md

推送目標：origin → main（主分支）

1. commit
2. commit + push
3. 要修改
```

### 輸出範例（單次 commit）

```
這次的變更都是同一件事，建議 1 次 commit：

  fix: 修正登入後跳轉路徑錯誤的問題
  涉及檔案：src/router.js、src/auth.js

推送目標：origin → feature/login

1. commit
2. commit + push
3. 要修改
```

---

## 步驟五：逐筆執行 commit

依照確認的計畫，逐筆執行。計畫裡的 message 已經在選項那一步確認過，這裡不再逐筆詢問。每一筆都重複以下流程：

### 5-1 精準暫存指定檔案

```bash
git add <計畫中指定的檔案清單>
```

說明：
> 「暫存這次 commit 要包含的 2 個檔案：src/login.html、src/auth.js」

### 5-2 執行 commit

```bash
git commit -m "feat: 新增使用者登入頁面"
```

顯示執行結果，並用白話說明：
> 「✓ 第 1 筆 commit 完成。繼續下一筆。」

完成所有 commit 後，顯示整體摘要：

```
所有 commit 完成！共 3 筆：

① feat: 新增使用者登入頁面
② fix: 修正導覽列在手機版跑版的問題
③ docs: 更新 README 安裝說明
```

- 選 1 → 補一句「這些紀錄目前只在你的電腦上，以後想 push 隨時叫我。」流程結束
- 選 2 → 進入步驟六

---

## 步驟六：執行 Push

只有使用者在步驟四選了 2 才會到這裡。

### 第一次 push：還沒有 GitHub 遠端

使用者想上傳、但 `git remote -v` 是空的 → 一步一步帶他做：

1. 沒有 GitHub 帳號 → 請他到 https://github.com/signup 申請
2. 到 https://github.com/new 建一個新的 repository（儲存庫）：名稱填網站英文名，Public 或 Private 都可以（Private 別人看不到原始檔，網站照樣能上線），**不要勾**「Add a README」
3. 建好後請他把網址貼回來（像 `https://github.com/帳號/網站名.git`），你執行 `git remote add origin <網址>`
4. 第一次 push 時會跳出瀏覽器要他登入 GitHub 授權，提醒他照畫面登入即可

```bash
git push origin <current-branch>
```

分支還沒有 upstream 時，改用 `git push -u origin <current-branch>`。

### Push 成功

> 「✓ Push 完成！你的變更已經同步到遠端了。」

### Push 失敗：常見錯誤處理

**`rejected ... non-fast-forward`（遠端有別人的新 commit）：**
> 「遠端有比你這邊更新的版本，需要先把那些拉下來才能推。
> 要我執行 `git pull --rebase` 幫你合併後再 push 嗎？」

**`Authentication failed`（認證失敗）：**
> 「認證失敗，可能是 GitHub token 過期了。
> 請到 GitHub → Settings → Developer Settings → Personal Access Tokens 重新產生，
> 或確認 SSH Key 是否正確設定。」

**其他錯誤：**
> 「發生了我不確定的錯誤，錯誤訊息如下：
> [原始錯誤訊息]
> 你可以把這段貼給我，我們一起排查。」

---

## 安全防護原則（永遠遵守）

- **永遠不跳過使用者確認直接 push**：使用者在步驟四選 2，就是 push 的確認
- **commit 一定要使用者確認**
- **不使用 `git push --force`**，除非使用者明確要求，且要二次確認
- **不使用 `git add .` 暴力全包**，永遠依照 commit 計畫精準暫存指定檔案
- **commit message 不能為空**，若使用者沒有回應，停下來等待
- **安全掃描沒過就不繼續**，直到使用者確認處理完畢
