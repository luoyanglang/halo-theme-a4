# Halo A4 主题移植项目

基于 Hexo-theme-A4 移植到 Halo 的极简博客主题。

## 项目概述

将 Hexo A4 主题的极简设计理念和 A4 纸张风格移植到 Halo 平台。

### 核心特性

- ✅ A4 纸张风格的极简设计
- ✅ 多种配色方案（灰白、绿金、自定义）
- ✅ 暗黑模式支持
- ✅ 响应式布局
- ✅ 文章目录（顶部/侧边）
- ✅ 图片画廊
- ✅ 代码高亮
- ✅ 评论系统

## 技术栈

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **模板引擎**: Thymeleaf
- **后端**: Halo 2.x (Java/Spring Boot)
- **字体**: 霞鹜文楷、思源宋体

## 项目结构

```
halo-theme-a4/
├── theme.yaml              # 主题元信息
├── settings.yaml           # 主题配置定义
├── templates/              # 模板文件
│   ├── index.html         # 首页
│   ├── post.html          # 文章详情
│   ├── archives.html      # 归档页
│   ├── categories.html    # 分类页
│   ├── tags.html          # 标签页
│   ├── page.html          # 自定义页面
│   └── modules/           # 模板组件
│       ├── layout.html    # 基础布局
│       ├── header.html    # 页头
│       ├── footer.html    # 页脚
│       ├── nav.html       # 导航菜单
│       ├── toc.html       # 文章目录
│       └── comment.html   # 评论组件
├── assets/                # 静态资源
│   ├── css/
│   │   ├── reset.css      # 重置样式
│   │   ├── style.css      # 主样式
│   │   ├── markdown.css   # Markdown 样式
│   │   ├── colors.css     # 配色方案
│   │   ├── toc.css        # 目录样式
│   │   ├── ui.css         # UI 组件
│   │   └── custom.css     # 用户自定义
│   ├── js/
│   │   ├── main.js        # 主脚本
│   │   ├── theme.js       # 主题切换
│   │   ├── toc.js         # 目录功能
│   │   └── gallery.js     # 图片画廊
│   ├── fonts/             # 字体文件
│   │   ├── LXGWWenKaiLite-Regular.woff2
│   │   ├── LXGWWenKaiLite-Bold.woff2
│   │   └── notoserifsc-medium-webfont.woff2
│   └── images/            # 图片资源
│       └── loading.gif
└── docs/                  # 文档
    ├── installation.md    # 安装指南
    ├── configuration.md   # 配置说明
    └── migration.md       # 迁移指南
```

## 开发路线图

### 第一阶段：环境搭建（1-2天）

- [ ] 搭建 Halo 开发环境
- [ ] 学习 Halo 主题开发规范
- [ ] 创建主题基础结构
- [ ] 配置开发工具

### 第二阶段：核心布局（1周）

- [ ] 实现 A4 纸张布局效果
- [ ] 移植基础 CSS 样式
- [ ] 创建基础布局模板（layout.html）
- [ ] 实现页头和页脚组件
- [ ] 导航菜单组件

### 第三阶段：页面模板（1-2周）

- [ ] 首页模板（支持自定义内容）
- [ ] 文章详情页模板
- [ ] 文章列表/归档页
- [ ] 标签页和分类页
- [ ] 自定义页面模板
- [ ] 404 页面

### 第四阶段：样式移植（1周）

- [ ] 移植 Markdown 样式
- [ ] 移植代码高亮样式
- [ ] 移植字体文件
- [ ] 配色方案系统
- [ ] 响应式样式适配

### 第五阶段：功能实现（1-2周）

- [ ] 暗黑模式切换
- [ ] 配色方案切换器
- [ ] 回到顶部按钮
- [ ] 回退页面按钮
- [ ] 文章顶部目录
- [ ] 文章侧边悬浮目录
- [ ] 图片画廊（lightgallery）
- [ ] 评论系统集成

### 第六阶段：配置系统（3-5天）

- [ ] 定义 settings.yaml 配置项
- [ ] 首页配置（宽度、标题位置等）
- [ ] 文章页配置
- [ ] 工具开关配置
- [ ] 配色配置
- [ ] 字体配置

### 第七阶段：优化完善（1周）

- [ ] 性能优化（CSS/JS 压缩）
- [ ] SEO 优化
- [ ] 移动端优化
- [ ] 浏览器兼容性测试
- [ ] 代码规范整理

### 第八阶段：文档和发布（3-5天）

- [ ] 编写安装文档
- [ ] 编写配置文档
- [ ] 编写迁移指南
- [ ] 功能测试
- [ ] 正式发布

**预计总时间：6-8 周**

## 快速开始

### 环境要求

- Halo 2.x
- JDK 17+
- Node.js 16+ (开发工具，可选)

### 安装步骤

1. 克隆项目
```bash
git clone https://github.com/your-repo/halo-theme-a4.git
cd halo-theme-a4
```

2. 安装主题
- 将主题文件夹复制到 Halo 的 themes 目录
- 在 Halo 后台启用主题

3. 配置主题
- 进入主题设置
- 配置基础信息、配色方案等

## 配置说明

详见 [配置文档](docs/configuration.md)

## 扩展功能

本主题专注于提供优质的博客阅读体验。如果你需要更多高级功能（如会员系统、付费内容等），欢迎联系我们讨论定制开发方案。

**联系方式**：
- Email: your-email@example.com
- GitHub Issues: 提出你的需求

## 贡献指南

欢迎提交 Issue 和 Pull Request

## 许可证

MIT License (继承自原 Hexo A4 主题)

## 致谢

- 原主题: [hexo-theme-A4](https://github.com/HiNinoJay/hexo-theme-A4)
- Halo 博客系统: [Halo](https://github.com/halo-dev/halo)
