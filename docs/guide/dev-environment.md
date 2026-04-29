---
date: 2026-04-29
description: macOS 下完整的前端开发环境搭建指南，涵盖 Homebrew、Node.js、Git、VSCode 等核心工具
tags:
  - 开发环境
  - macOS
  - 前端工程化
  - 效率
top: 1
---

# 前端开发环境搭建（macOS）

一套规范的前端开发环境，能在换机、入职、带新人时节省大量时间。

本文面向 macOS 用户，覆盖从零开始到可以正常参与团队开发的完整流程。

---

## 总览

| 步骤 | 工具 | 用途 |
|------|------|------|
| 1 | Homebrew | macOS 包管理器 |
| 2 | Node.js + pnpm | 前端运行时 + 包管理 |
| 3 | Git | 版本控制 |
| 4 | VSCode | 编辑器 |
| 5 | 终端 | iTerm2 + Oh My Zsh |
| 6 | 调试工具 | Chrome DevTools + React/Vue DevTools |

---

## 1. Homebrew

Homebrew 是 macOS 上最主流的包管理器，用来安装命令行工具和桌面应用。

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

装完后验证：

```bash
brew --version
# Homebrew 4.x.x
```

常用命令速查：

```bash
brew install <pkg>    # 安装包
brew install --cask <app>  # 安装桌面应用
brew update           # 更新 Homebrew 自身
brew upgrade          # 升级所有已安装的包
brew list             # 查看已安装列表
brew cleanup          # 清理旧版本缓存
```

---

## 2. Node.js + 包管理器

### 安装 Node.js

推荐使用 **fnm**（快速 Node 版本管理器），比 nvm 更快，比 Volta 更轻量：

```bash
brew install fnm
```

在 `~/.zshrc` 末尾添加：

```bash
eval "$(fnm env --use-on-cd --shell zsh)"
```

重新打开终端后：

```bash
# 安装并使用 LTS 版本
fnm install 22
fnm use 22
node -v  # v22.x.x
```

### 包管理器选择

```bash
# 推荐 pnpm —— 快、省磁盘、严格依赖管理
brew install pnpm
```

| 特性 | npm | yarn | pnpm |
|------|-----|------|------|
| 安装速度 | 慢 | 中 | 快 |
| 磁盘占用 | 大 | 大 | 小（硬链接） |
| 幽灵依赖问题 | 有 | 有 | 无 |
| lock 文件 | package-lock.json | yarn.lock | pnpm-lock.yaml |

> 幽灵依赖（Phantom Dependencies）：项目能 `import` 一个你没有安装的包，因为它被某个其他包依赖。pnpm 从根源上杜绝这个问题。

---

## 3. Git 配置

### 安装

```bash
brew install git
```

### 基本配置

```bash
git config --global user.name "你的名字"
git config --global user.email "your@email.com"

# 换行符处理（macOS）
git config --global core.autocrlf input

# 默认分支名
git config --global init.defaultBranch main

# 别名
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.st status
git config --global alias.lg "log --oneline --graph --all -20"
```

### SSH 连接 GitHub

```bash
ssh-keygen -t ed25519 -C "your@email.com"
cat ~/.ssh/id_ed25519.pub  # 复制到 GitHub → Settings → SSH Keys
```

验证：

```bash
ssh -T git@github.com
# Hi xxx! You've successfully authenticated.
```

---

## 4. VSCode 配置

### 安装

```bash
brew install --cask visual-studio-code
```

### 必装扩展

```bash
# 一次性安装推荐扩展
code --install-extension Vue.volar          # Vue 3 官方支持
code --install-extension dbaeumer.vscode-eslint  # ESLint 集成
code --install-extension esbenp.prettier-vscode  # Prettier 格式化
code --install-extension bradlc.vscode-tailwindcss  # Tailwind CSS 智能提示
code --install-extension usernamehw.errorlens  # 行内错误提示
```

### 关键设置

打开 `Cmd+Shift+P` → `Preferences: Open User Settings (JSON)`：

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "explicit"
  },
  "files.autoSave": "onFocusChange",
  "terminal.integrated.fontSize": 13
}
```

这样每次保存时自动格式化、修复 ESLint 问题、整理 `import` 语句。

---

## 5. 终端环境

### iTerm2

```bash
brew install --cask iterm2
```

### Oh My Zsh

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

推荐插件（在 `~/.zshrc` 的 `plugins=(...)` 中配置）：

```bash
plugins=(
  git
  zsh-autosuggestions
  zsh-syntax-highlighting
  fnm
)
```

安装额外插件：

```bash
brew install zsh-autosuggestions zsh-syntax-highlighting
```

---

## 6. 浏览器调试工具

| 工具 | 安装方式 |
|------|---------|
| Chrome | `brew install --cask google-chrome` |
| **React DevTools** | [Chrome 商店](https://chromewebstore.google.com/detail/react-developer-tools) |
| **Vue DevTools** | [Chrome 商店](https://chromewebstore.google.com/detail/vuejs-devtools) |

---

## 一键验证

环境搭完后跑一遍检查清单：

```bash
#!/bin/bash
echo "=== 开发环境检查 ==="
echo ""

check() {
  if command -v $1 &> /dev/null; then
    echo "✅ $1: $($1 --version 2>&1 | head -1)"
  else
    echo "❌ $1: 未安装"
  fi
}

check brew
check node
check pnpm
check git
check code
check ssh -T git@github.com 2>&1 | head -1

echo ""
echo "=== 检查完毕 ==="
```

---

## 总结

完成以上步骤后，你拥有了一套完整的前端开发环境：

1. **Homebrew** 统一管理软件安装
2. **fnm + pnpm** 管理 Node 版本和项目依赖
3. **Git + SSH** 连接 GitHub 顺畅协作
4. **VSCode** 保存即格式化，零手动操作
5. **终端** 有智能补全和高亮

这套配置也是本博客项目的实际开发环境。后续文章会继续覆盖代码规范、Git 工作流等内容。
