# 淺入淺出 VS Code

[Web Slide](https://rawgit.com/mvpdw06/aboutVSCode/master/sides/index.html)

## 架構
1. [Open source](https://github.com/Microsoft/vscode)
2. Electron base
3. 全 TypeScript 撰寫

## 優點
- 因為是 open source，幾乎每個月都有一次大 update
- bug fix 與更新有很多都是外部貢獻者幫忙的
- 內建 Emmet(zen-coding)
- 豐富的外掛(extension)
- 方便的 code navigation
- 內建整合 Git
- 內建 Terminal(Command line)
- 內建 TypeScript inline 檢查功能
- Docker file 的 intellisense 
- Auto save 設定
- Slack 整合
- Debugger framework > Node.js

## 與 Sublime 比較
- Sublime 並非 open source
- Sublime Text 3 還在 beta(上一次 update 居然是 2016/09/23...)
- 一個產品保持獲利（活力）是很重要的
- 基本上 VS Code 把 Sublime 的功能幾乎都抄過來了（minimap）
- code snippets 建議順序相反（VS Code 可以改）
- 熱鍵完整複製 > Sublime Text Keymap

## Plugins

1. Bookmarks
Command + Option + K 加入 / 移除書籤
Command + Option + L 前往下一個書籤
Command + Option + K 前往上一個書籤

```
"bookmarks.useStickyBookmarks": true
"bookmarks.saveBookmarksBetweenSessions": true
```

2. Spellchecker
預防 typo 的神器

3. indent-rainbow
縮排神器

4. Material-Icon Theme
Icon / folder 非常漂亮與強大的主題

5. Material
基於 Material design 的 work bench 主題

6. Path Intellisense
import 或是 require 的時候提示相對路徑檔案列表

7. Rainbow Brackets
括號以同樣顏色顯示

8. Theme - Seti-Monokai
React JSX 語法高亮與高對比推薦

9. GitLens
Diff / Blame 強大的工具

10. Git History
列出 Git 的所有歷史紀錄與

11. ESLint
與專案中的 .eslintrc 整合，提示 coding style 的問題

12. Project Manager
設定多個專案路徑，快速切換

13. Copy Relative Path
複製相對路徑

## 推薦 Youtuber

[Editor 編輯者](https://www.youtube.com/channel/UC8-c0VKKqkG_aPe0RG3SF0A)
