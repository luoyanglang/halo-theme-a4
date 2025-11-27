# 从 Hexo A4 主题迁移指南

本文档帮助你从 Hexo A4 主题迁移到 Halo A4 主题。

## 迁移概述

### 主要差异

| 项目 | Hexo A4 | Halo A4 |
|------|---------|---------|
| 博客类型 | 静态博客 | 动态博客 |
| 内容管理 | Markdown 文件 | 在线编辑器 |
| 发布方式 | 本地构建+部署 | 在线发布 |
| 评论系统 | 第三方服务 | Halo 原生 |
| 配置方式 | _config.yml | 后台设置界面 |

### 保留的特性

✅ A4 纸张风格设计
✅ 灰白和绿金配色方案
✅ 暗黑模式
✅ 文章目录
✅ 图片画廊
✅ 响应式布局
✅ 极简设计理念

## 迁移步骤

### 1. 导出 Hexo 内容

#### 导出文章

Hexo 的文章位于 `source/_posts/` 目录：

```bash
cd your-hexo-blog
ls source/_posts/
```

#### 导出页面

Hexo 的页面位于 `source/` 目录下的各个文件夹。

### 2. 安装 Halo 和 A4 主题

参考 [安装指南](installation.md) 完成安装。

### 3. 导入内容到 Halo

#### 方法一：手动导入（推荐）

1. 登录 Halo 后台
2. 进入「内容」->「文章」
3. 点击「新建」
4. 复制 Hexo 文章的内容
5. 设置标题、标签、分类等
6. 发布文章

#### 方法二：批量导入

使用 Halo 的导入功能：

1. 将 Hexo 文章转换为 Halo 格式
2. 使用 Halo API 批量导入
3. 或使用第三方迁移工具

### 4. 配置映射

#### Hexo 配置 → Halo 配置

**首页配置**

Hexo `_config.a4.yml`:
```yaml
index:
  titlePosition: left
  width: small
  footer: Email:example@gmail.com
```

Halo 后台设置：
- 布局配置 → 首页标题位置：左对齐
- 布局配置 → 首页宽度：小
- 页脚配置 → 首页页脚：Email:example@gmail.com

**文章配置**

Hexo:
```yaml
post:
  width: middle
  titlePosition: center
  footer: 🌊看过大海的人不会忘记海的广阔🌊
```

Halo:
- 布局配置 → 文章页宽度：中
- 布局配置 → 文章标题位置：居中
- 页脚配置 → 文章页脚：🌊看过大海的人不会忘记海的广阔🌊

**配色方案**

Hexo:
```yaml
color:
  enable: true
  font: "#9e5345"
  background: "#e8e0c9"
```

Halo:
- 配色方案 → 预设配色：自定义
- 自定义颜色 → 字体颜色：#9e5345
- 自定义颜色 → 底层背景色：#e8e0c9

**工具开关**

Hexo:
```yaml
tool:
  darkMode: true
  returnToTop: true
  topToc: true
  leftToc: true
```

Halo:
- 工具开关 → 暗黑模式：✓
- 工具开关 → 回到顶部按钮：✓
- 工具开关 → 文章顶部目录：✓
- 工具开关 → 文章左侧悬浮目录：✓

### 5. 迁移静态资源

#### 图片

1. 将 Hexo 的图片上传到 Halo
2. 进入「附件」->「上传」
3. 批量上传图片
4. 更新文章中的图片链接

#### 自定义 CSS

Hexo 的 `source/css/custom.css` 内容：
- 复制到 Halo 后台「高级设置」->「自定义 CSS」

### 6. 配置菜单

Hexo:
```yaml
menu:
  首页: /
  文章: /list/
  关于: /about/
  标签: /tags/
```

Halo:
1. 进入「外观」->「菜单」
2. 添加菜单项：
   - 首页：/
   - 归档：/archives
   - 关于：/about
   - 标签：/tags

### 7. 配置评论系统

#### Hexo 使用 Waline

Hexo:
```yaml
comment:
  use: waline
  waline:
    serverUrl: https://your-waline.com
```

#### Halo 评论

Halo 使用内置评论系统，无需额外配置。

如需使用 Waline，可以通过插件实现。

## 功能对照表

| 功能 | Hexo A4 | Halo A4| 说明 |
|------|---------|---------|------|
| A4 布局 | ✅ | ✅ | 完全保留 |
| 配色切换 | ✅ | ✅ | 完全保留 |
| 暗黑模式 | ✅ | ✅ | 完全保留 |
| 文章目录 | ✅ | ✅ | 完全保留 |
| 图片画廊 | ✅ | ✅ | 完全保留 |
| 一言接口 | ✅ | 🔄 | 计划支持 |
| CDN 加速 | ✅ | ✅ | Halo 配置 |
| 字数统计 | ✅ | ✅ | Halo 原生 |
| 阅读量 | ✅ | ✅ | Halo 原生 |
| 评论系统 | Waline 等 | Halo 原生 | 更简单 |
| 文章加密 | 插件 | 插件 | 需安装 |
| 数学公式 | 插件 | 插件 | 需安装 |

## 迁移检查清单

### 内容迁移
- [ ] 所有文章已导入
- [ ] 所有页面已创建
- [ ] 图片已上传并更新链接
- [ ] 标签和分类已设置

### 配置迁移
- [ ] 布局配置已设置
- [ ] 配色方案已配置
- [ ] 工具开关已配置
- [ ] 菜单已配置
- [ ] 页脚信息已设置

### 功能测试
- [ ] 首页显示正常
- [ ] 文章页显示正常
- [ ] 归档页显示正常
- [ ] 标签和分类页显示正常
- [ ] 暗黑模式切换正常
- [ ] 文章目录显示正常
- [ ] 图片画廊功能正常
- [ ] 评论功能正常
- [ ] 移动端显示正常

### SEO 迁移
- [ ] 设置网站标题和描述
- [ ] 配置 SEO 插件
- [ ] 提交新的 sitemap
- [ ] 设置 301 重定向（如果域名不变）

## 迁移后优化

### 1. URL 重定向

如果你的域名不变，建议设置 301 重定向：

Hexo URL: `https://example.com/2024/01/01/post-title/`
Halo URL: `https://example.com/archives/post-title`

在服务器配置重定向规则。

### 2. 更新外部链接

- 更新社交媒体上的链接
- 更新其他网站的友链
- 更新搜索引擎收录

### 3. 性能优化

- 启用 Halo 缓存
- 配置 CDN
- 优化图片大小
- 启用 Gzip 压缩

## 常见问题

### 文章格式不兼容

Hexo 和 Halo 的 Markdown 语法基本兼容，但有些扩展语法可能不同：

**Hexo 特有语法**
```markdown
{% note info %}
提示信息
{% endnote %}
```

**Halo 替代方案**
```markdown
> 💡 提示信息
```

### 图片路径问题

Hexo 图片路径：`/images/photo.jpg`
Halo 图片路径：`/upload/photo.jpg`

需要批量替换图片路径。

### 评论数据迁移

如果使用第三方评论系统（如 Waline），评论数据保留在第三方服务中，可以继续使用。

如果要迁移到 Halo 原生评论，需要手动导入或使用脚本转换。

## 获取帮助

迁移过程中遇到问题：

- 查看 [Halo 文档](https://docs.halo.run)
- 访问 [Halo 社区](https://bbs.halo.run)
- 提交 [GitHub Issue](https://github.com/your-repo/halo-theme-a4/issues)

## 迁移工具

我们正在开发自动化迁移工具，敬请期待：

- Hexo to Halo 内容转换器
- 配置自动映射工具
- 图片批量处理工具
