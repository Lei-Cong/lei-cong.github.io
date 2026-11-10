# Lei Cong — Academic Website

A standalone, responsive, English academic website for **https://lei-cong.github.io/**. Plain HTML, CSS and JavaScript; no installation, build, external fonts, analytics, or account required. The full publication list initially shows five entries, with a button to expand or collapse the rest. Search and topic filters show all matching entries. All publications remain readable without JavaScript and in print.

## 本地预览

在本目录打开终端，运行：

```sh
python3 -m http.server 8000
```

浏览器访问 http://localhost:8000 。也可直接打开 index.html；搜索和主题筛选均不需要服务器。

## 部署到 GitHub Pages

1. 登录 GitHub 的 **lei-cong** 账号，创建名为 **lei-cong.github.io** 的独立公开仓库。如同名仓库已存在，先检查并备份已有内容，再合并本项目。
2. 将本目录内的文件上传到仓库根目录。确保 `index.html` 直接位于根目录，而不是嵌套在另一个 `lei-cong.github.io` 文件夹中。保留 `.nojekyll`。
3. 进入仓库 **Settings → Pages**。
4. 在 **Build and deployment → Source** 选择 **Deploy from a branch**。
5. 选择分支 **main**、目录 **/ (root)**，点击 **Save**。
6. 等待 Pages 构建完成，访问 **https://lei-cong.github.io/**。后续提交到 main 会自动更新网站。

现有研究资源 `/Spin-Dependent-5th-Force-Limits/` 保留为指向原项目的链接；无需将其代码复制到本仓库。本项目不配置自定义域名。

GitHub 官方说明：https://docs.github.com/en/pages/quickstart

## 文件说明

- `index.html`：全部英文网站内容、17 项研究成果。
- `assets/style.css`：桌面、手机、打印样式。
- `assets/main.js`：论文主题筛选和搜索。
- `assets/publications.json`：结构化论文资料，供后续维护；当前 HTML 不依赖运行时读取此文件。
- `assets/Lei-Cong-CV-2026.pdf`：你提供的 PDF 简历，可从首页个人信息区下载。
- `404.html`、`robots.txt`、`sitemap.xml`、`.nojekyll`：静态托管支持。
- `CONTENT-NOTES.md`：内容来源和维护注意事项。

## 日常维护

内容直接修改 `index.html`。完整论文列表按已发表论文的 `publication_date` 从新到旧排列；未发表稿件随后按预印本年月排列，数据库固定最后。修改顺序时同步调整 HTML 和 `assets/publications.json`；默认展示排序后的前五项。论文增删时同步维护 `assets/publications.json`；筛选计数自动跟随 HTML 条目。新增论文的 `data-topic` 使用现有主题（多个主题以竖线分隔），`data-search` 使用小写的标题、作者、期刊和年份。发表状态变化时同时更新期刊信息与标签。更新 CV 时，用新 PDF 替换 assets/Lei-Cong-CV-2026.pdf。

修改 `assets/style.css` 或 `assets/main.js` 后，也要更新 `index.html` 中对应资源链接的 `?v=` 版本号（可用文件内容的哈希值），让浏览器获取新版本。部署后若仍显示旧页面，可强制刷新或用无痕窗口检查。

本项目没有依赖构建步骤；不需要 npm、Jekyll、密钥或服务器。未附带 GitHub 自动推送功能。

## 搜索收录与个人身份信息

首页的搜索标题、摘要、分享摘要以及 JSON-LD 共同描述 Lei Cong 的身份、ORCID、现任机构、研究方向、两篇代表作、社区平台和归档数据集。修改个人资料或代表作后，须同步检查 index.html 的 JSON-LD 与可见正文。网页有实质内容更新时再更新 sitemap.xml 的 lastmod。

robots.txt 现有的通用允许规则覆盖搜索机器人。新增文字直接存在于 HTML，便于抓取。上述设置有助于访问和理解内容，实际收录及 AI 引用仍由各服务决定。

发布后可完成以下账号操作。

1. 在 Google Search Console 添加 URL-prefix 属性 https://lei-cong.github.io/，选择 HTML 文件或 HTML meta 标签验证方式。将平台提供的真实验证文件放到本仓库根目录，或把标签加到 index.html 的 head，发布后点击验证。URL-prefix 属性适用于本 GitHub Pages 地址。
2. 在 Search Console 提交 https://lei-cong.github.io/sitemap.xml，并用网址检查工具检查首页，按需请求编入索引。
3. 在 Bing Webmaster Tools 导入已验证的 Google 属性，或使用 Bing 提供的 XML 文件或 meta 标签验证，再提交相同站点地图。
4. 在 ORCID、GitHub 个人资料及现有 Google Scholar 档案中添加个人主页，并确认公开可见。机构个人页的主页链接可由有编辑权限的人补充。
5. 观察搜索曝光、查询词和点击，以及 Bing 支持的 AI 引用报告。提交站点地图后无需反复提交相同内容。

目前仓库没有 Google 或 Bing 的账号验证文件，收录提交尚未完成。

官方资料
- https://support.google.com/webmasters/answer/34592
- https://support.google.com/webmasters/answer/9008080
- https://www.bing.com/webmasters/help/add-and-verify-site-12184f8b
- https://developers.google.com/search/docs/appearance/structured-data/profile-page
- https://developers.google.com/search/docs/appearance/structured-data/dataset
- https://developers.openai.com/api/docs/bots
