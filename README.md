# XZH- — 初始网站框架

这是为你的仓库创建的初始静态网站框架（提交到 site-init 分支）。文件说明：

- index.html — 主页（已包含对 css/style.css 和 js/main.js 的引用）
- css/style.css — 基本样式文件
- js/main.js — 空的脚本入口，可用于以后添加交互
- .gitignore — 常见忽略项

如何在本地使用该分支：
1. 克隆仓库（如果尚未克隆）：
   git clone git@github.com:XZHANB666/XZH-.git
   cd XZH-

2. 切换到 site-init 分支并拉取最新内容：
   git fetch origin
   git checkout -b site-init origin/site-init

如何将更改合并到 main（发布到 GitHub Pages 时常见做法）：
- 在 GitHub 上创建 Pull Request：
  打开仓库页面 -> Branches -> site-init -> 点击 "Compare & pull request" -> 创建 PR -> 合并到 main。

或者在本地合并并推送：
   git checkout main
   git pull origin main
   git merge --no-ff site-init
   git push origin main

如何发布到 GitHub Pages（在合并到 main 后）：
1. 打开仓库页面 -> Settings -> Pages。
2. 在 Source（来源）中选择 Branch: main，Folder: / (root)。
3. 点击保存，等待几分钟，网站将发布到：
   https://XZHANB666.github.io/XZH-/

下一步建议：
- 你可以在 site-init 分支上自由修改文件，提交并推送（git add/commit/push origin site-init），然后发起 PR 合并到 main。
- 需要我把 site-init 的内容合并到 main 并启用 Pages 吗？（回复合并/启用）
