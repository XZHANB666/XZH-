组件（header/footer）已加入：

- components/header.html
- components/footer.html
- js/components.js（运行时会把上面两个文件注入到页面的 #site-header / #site-footer 容器）

使用说明：
- 在 site-init 分支上，你可以修改 components/header.html 或 components/footer.html 来统一改变所有页面的头部和底部。
- 如果本地直接用 file:// 打开页面，组件注入可能因 fetch 限制而失败，components.js 提供了回退 HTML，所以仍可显示基本头部/底部。

本地更新步骤：
1) 切到 site-init：
   git fetch origin
   git checkout -b site-init origin/site-init
2) 拉取最新并查看：
   git pull origin site-init
3) 编辑文件并推送：
   git add .
   git commit -m "Update components/header & footer and add components loader"
   git push origin site-init

如需我把这些更新合并到 main 或把 Pages 指向 site-init，告诉我我会按你授权去做。