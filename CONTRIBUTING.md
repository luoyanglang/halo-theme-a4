# 贡献指南

感谢你对 Halo A4 主题的关注！我们欢迎各种形式的贡献。

## 如何贡献

### 报告问题

如果你发现了 bug 或有功能建议：

1. 在 [GitHub Issues](https://github.com/your-repo/halo-theme-a4/issues) 中搜索是否已有相关问题
2. 如果没有，创建一个新的 Issue
3. 提供详细的问题描述：
   - 问题的具体表现
   - 复现步骤
   - 期望的行为
   - 截图（如果适用）
   - 环境信息（Halo 版本、浏览器等）

### 提交代码

1. **Fork 项目**
   ```bash
   # 在 GitHub 上 Fork 项目
   # 克隆你的 Fork
   git clone https://github.com/your-username/halo-theme-a4.git
   cd halo-theme-a4
   ```

2. **创建分支**
   ```bash
   # 创建功能分支
   git checkout -b feature/your-feature-name
   
   # 或修复分支
   git checkout -b fix/your-bug-fix
   ```

3. **开发和测试**
   - 遵循代码规范
   - 添加必要的注释
   - 测试你的修改
   - 确保没有破坏现有功能

4. **提交代码**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **推送到 GitHub**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **创建 Pull Request**
   - 在 GitHub 上创建 Pull Request
   - 描述你的修改
   - 关联相关的 Issue

## 代码规范

### HTML
- 使用语义化标签
- 保持合理的层级结构
- 添加必要的注释

### CSS
- 使用 BEM 命名规范
- 模块化组织样式
- 使用 CSS 变量
- 添加浏览器兼容性前缀

### JavaScript
- 使用 ES6+ 语法
- 函数式编程风格
- 添加错误处理
- 避免全局变量污染

### Thymeleaf
- 合理使用模板语法
- 避免在模板中写复杂逻辑
- 添加必要的注释

## 提交信息规范

使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type 类型
- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式调整（不影响功能）
- `refactor`: 重构（不是新功能也不是修复）
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建/工具相关

### 示例
```
feat(theme): add dark mode toggle button

Add a toggle button in header to switch between light and dark mode.
The preference is saved in localStorage.

Closes #123
```

## 开发环境

### 要求
- Halo 2.0+
- JDK 17+
- Node.js 16+ (可选，用于开发工具)

### 设置
1. 安装 Halo
2. 克隆项目到 Halo 的 themes 目录
3. 在 Halo 后台启用主题
4. 开始开发

### 测试
- 在不同浏览器中测试
- 测试响应式布局
- 测试所有配置项
- 测试暗黑模式

## 文档贡献

文档同样重要！你可以：

- 修正文档中的错误
- 改进文档的表达
- 添加使用示例
- 翻译文档

## 设计贡献

如果你擅长设计：

- 提供新的配色方案
- 优化 UI 细节
- 设计图标和插图
- 改进用户体验

## 社区准则

### 行为准则
- 尊重他人
- 保持友善和专业
- 接受建设性批评
- 关注对项目最有利的事情

### 沟通方式
- 使用清晰、简洁的语言
- 提供具体的例子
- 保持耐心和理解
- 及时回应

## 许可证

通过贡献代码，你同意你的贡献将在 MIT 许可证下发布。

## 获得帮助

如果你在贡献过程中遇到问题：

- 查看 [文档](docs/)
- 在 Issue 中提问
- 发送邮件：your-email@example.com

## 致谢

感谢所有贡献者！你们的贡献让这个项目变得更好。

---

再次感谢你的贡献！🎉
