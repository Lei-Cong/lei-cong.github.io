# Lei Cong — Academic Website

A standalone, responsive, English academic website for **https://lei-cong.github.io/**. Plain HTML, CSS and JavaScript; no installation, build, external fonts, analytics, or account required. All publications remain readable without JavaScript.

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

内容直接修改 `index.html`。论文增删时同步维护 `assets/publications.json`；筛选计数自动跟随 HTML 条目。新增论文的 `data-topic` 使用现有主题（多个主题以竖线分隔），`data-search` 使用小写的标题、作者、期刊和年份。发表状态变化时同时更新期刊信息与标签。更新 CV 时，用新 PDF 替换 assets/Lei-Cong-CV-2026.pdf。

本项目没有依赖构建步骤；不需要 npm、Jekyll、密钥或服务器。未附带 GitHub 自动推送功能。
