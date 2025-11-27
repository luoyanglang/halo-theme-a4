# 配置文档

本文档详细说明 A4 主题的所有配置项。

## 基础设置

### 布局配置

**首页宽度** (`layout.indexWidth`)
- `small`: 小宽度，适合简洁的首页
- `middle`: 中等宽度（推荐）
- `big`: 大宽度，适合内容较多的首页

**首页标题位置** (`layout.indexTitlePosition`)
- `left`: 左对齐
- `center`: 居中（推荐）

**文章页宽度** (`layout.postWidth`)
- `middle`: 中等宽度（推荐）
- `big`: 大宽度，适合长文章

**文章标题位置** (`layout.postTitlePosition`)
- `left`: 左对齐
- `center`: 居中（推荐）

### 头像配置

**头像图片** (`avatar.favicon`)
- 上传你的头像或网站 Logo
- 支持格式：jpg, png, webp, svg
- 推荐尺寸：200x200 像素

**圆形头像** (`avatar.isRounded`)
- `true`: 显示为圆形
- `false`: 显示为方形（默认）

**悬浮旋转效果** (`avatar.isRotating`)
- `true`: 鼠标悬浮时旋转
- `false`: 不旋转（默认）
- 注意：仅圆形头像生效

### 页脚配置

**首页页脚** (`footer.indexFooter`)
- 显示在首页底部的文字
- 支持邮箱自动链接化，格式：`Email:your@email.com`
- 示例：`Email:example@gmail.com`

**文章页脚** (`footer.postFooter`)
- 显示在文章底部的文字
- 支持 Emoji
- 示例：`🌊看过大海的人不会忘记海的广阔🌊`

**显示主题信息** (`footer.showThemeInfo`)
- `true`: 显示「Powered by Halo | Theme A4」
- `false`: 不显示

**版权信息** (`footer.copyright`)
- 显示在页脚的版权信息
- 示例：`© 2024 Your Site`

## 配色方案

### 预设配色

**灰白配色** (`colorScheme: greywhite`)
- 经典的黑白灰配色
- 适合专业、严肃的内容
- 默认配色

**绿金配色** (`colorScheme: greengold`)
- 护眼的绿色和金色搭配
- 适合长时间阅读
- 温暖舒适的视觉效果

### 自定义配色

选择 `colorScheme: custom` 后，可以自定义以下颜色：

**字体颜色** (`customColors.font`)
- 主要文字颜色
- 默认：`#333333`

**底层背景色** (`customColors.background`)
- 页面最底层的背景颜色
- 默认：`#f5f5f5`

**首页背景色** (`customColors.indexBackground`)
- 首页内容区域的背景颜色
- 默认：`#ffffff`

**文章页背景色** (`customColors.postBackground`)
- 文章内容区域的背景颜色
- 默认：`#ffffff`

**代码块背景色** (`customColors.codeBackground`)
- 代码块的背景颜色
- 默认：`#f5f5f5`

**代码块字体色** (`customColors.codeFont`)
- 代码块的文字颜色
- 默认：`#333333`

**链接未访问颜色** (`customColors.linkBefore`)
- 链接的默认颜色
- 默认：`#0066cc`

**链接已访问颜色** (`customColors.linkAfter`)
- 已访问链接的颜色
- 默认：`#551a8b`

### 配色建议

**高对比度配色**（适合阅读）
```
字体: #000000
背景: #ffffff
链接: #0066cc
```

**低对比度配色**（适合护眼）
```
字体: #4a4a4a
背景: #f8f8f8
链接: #5a9fd4
```

**暗色调配色**（适合夜间）
```
字体: #e0e0e0
背景: #1a1a1a
链接: #6ab0f3
```

## 工具开关

**暗黑模式** (`tools.darkMode`)
- 启用后，用户可以切换暗黑模式
- 推荐开启

**回到顶部按钮** (`tools.returnToTop`)
- 显示回到顶部的按钮
- 推荐开启

**回退页面按钮** (`tools.returnToLast`)
- 显示返回上一页的按钮
- 适合浏览体验优化

**文章顶部目录** (`tools.topToc`)
- 在文章顶部显示目录
- 适合移动端

**文章左侧悬浮目录** (`tools.leftToc`)
- 在文章左侧显示悬浮目录
- 仅大屏幕显示
- 推荐开启

## 字体设置

**启用字体切换** (`font.enableFontSwitch`)
- 允许用户切换字体
- 默认关闭

**使用霞鹜文楷** (`font.useLXGWWenKai`)
- `true`: 使用霞鹜文楷（默认）
- `false`: 使用思源宋体

### 字体说明

**霞鹜文楷**
- 现代化的楷体字
- 适合技术博客
- 清晰易读

**思源宋体**
- 传统的宋体字
- 适合文学、人文内容
- 优雅大方

## 文章设置

### 文章信息显示

**显示更新时间** (`postInfo.showUpdateDate`)
- 显示文章最后更新时间

**显示字数统计** (`postInfo.showWordCount`)
- 显示文章字数

**显示阅读时间** (`postInfo.showReadTime`)
- 显示预计阅读时间

**显示阅读量** (`postInfo.showViewCount`)
- 显示文章访问量

**显示上下篇导航** (`postInfo.showPrevNext`)
- 显示上一篇和下一篇文章链接

**上一篇提示文字** (`postInfo.prevText`)
- 自定义提示文字
- 默认：`上一篇`
- 可改为英文：`Previous`

**下一篇提示文字** (`postInfo.nextText`)
- 自定义提示文字
- 默认：`下一篇`
- 可改为英文：`Next`

**文章结束提示** (`postInfo.endContent`)
- 文章结束时的提示文字
- 默认：`以上`
- 可自定义为其他文字

## 图片画廊

基于 lightGallery 实现的图片查看器。

**显示缩略图** (`gallery.thumbnail`)
- 显示图片缩略图导航

**缩放功能** (`gallery.zoom`)
- 允许缩放图片

**旋转功能** (`gallery.rotate`)
- 允许旋转图片

**自动播放** (`gallery.autoplay`)
- 自动播放幻灯片

**全屏功能** (`gallery.fullScreen`)
- 允许全屏查看

## 高级设置

### 自定义 CSS

在「自定义 CSS」文本框中添加你的样式：

```css
/* 示例：修改标题颜色 */
.post-title {
    color: #ff6b6b;
}

/* 示例：修改链接样式 */
a {
    text-decoration: underline;
}
```

### 自定义 JavaScript

在「自定义 JavaScript」文本框中添加你的脚本：

```javascript
// 示例：添加统计代码
console.log('A4 Theme Loaded');

// 示例：自定义交互
document.addEventListener('DOMContentLoaded', function() {
    // 你的代码
});
```

## 配置示例

### 极简配置

适合追求纯粹阅读体验的用户：

```yaml
layout:
  indexWidth: small
  indexTitlePosition: center
  postWidth: middle
  postTitlePosition: center

colorScheme: greywhite

tools:
  darkMode: true
  returnToTop: true
  returnToLast: false
  topToc: false
  leftToc: true

postInfo:
  showUpdateDate: false
  showWordCount: false
  showReadTime: true
  showViewCount: false
  showPrevNext: true
```

### 功能完整配置

适合需要完整功能的用户：

```yaml
layout:
  indexWidth: middle
  indexTitlePosition: left
  postWidth: big
  postTitlePosition: left

colorScheme: greengold

tools:
  darkMode: true
  returnToTop: true
  returnToLast: true
  topToc: true
  leftToc: true

postInfo:
  showUpdateDate: true
  showWordCount: true
  showReadTime: true
  showViewCount: true
  showPrevNext: true
```

## 性能优化建议

1. **图片优化**
   - 使用 WebP 格式
   - 压缩图片大小
   - 使用 CDN 加速

2. **字体优化**
   - 仅加载需要的字体
   - 使用字体子集

3. **代码优化**
   - 压缩 CSS 和 JavaScript
   - 启用浏览器缓存

## 常见问题

### 配置不生效

1. 清除浏览器缓存
2. 重启 Halo 服务
3. 检查配置格式是否正确

### 颜色显示异常

1. 检查颜色代码格式（需要 # 号）
2. 使用标准的十六进制颜色代码
3. 清除浏览器缓存

### 字体未加载

1. 检查网络连接
2. 检查字体文件是否完整
3. 尝试切换字体设置

## 获取帮助

如有问题，请访问：
- GitHub Issues: https://github.com/your-repo/halo-theme-a4/issues
- Halo 社区: https://bbs.halo.run
