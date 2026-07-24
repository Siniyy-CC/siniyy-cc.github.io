# SetsuLand

雪梨的【桃絨】個人站，基於 [Ed](https://minicomp.github.io/ed/) 改造。保留 Ed 適合長文閱讀的輕量排版，加入文章歸檔、標籤、分級與內容提示、中文搜尋、RSS，以及 GitHub Pages 自動發布。

## 網站設定

網站名稱、簡介、作者與正式網址集中在 `_config.yml`；目前設定為 `https://siniyy-cc.github.io`。

## 寫一篇文章

在 `_posts` 目錄中新建 `年-月-日-英文短名.md`，例如：

```markdown
---
title: "文章標題"
date: 2026-07-24 20:00:00 +0800
description: "一兩句話的摘要。"
tags: [桃絨, 正文]
rating: PG-13
warnings: "請在這裡填寫內容提示"
---

正文從這裡開始。
```

## 本地預覽

專案使用 Ruby 3.3 與 Jekyll 4.2.2：

```sh
bundle install
bundle exec jekyll serve --livereload
```

瀏覽器開啟 `http://127.0.0.1:4000/`。

## 發布

倉庫已包含 GitHub Pages 工作流程。把程式碼推送到自己的 GitHub 倉庫後，在 Settings → Pages 將 Source 設為 GitHub Actions；之後每次推送到 `main` 都會自動重新發布。

如果是使用者網站 `username.github.io`，`baseurl` 保持為空；如果是普通專案倉庫，工作流程會在構建時自動使用倉庫路徑。

## 致謝與授權

視覺基礎來自 [Ed](https://github.com/minicomp/ed)，原專案採用 MIT License。本倉庫保留原始 `LICENSE.md`。
