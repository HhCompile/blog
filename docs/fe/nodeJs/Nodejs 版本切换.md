---
date: 2025-05-26
description: Node.js 版本管理工具与 npm 配置实践
tags:
  - Node.js
  - npm
  - 工具
categories:
  - 前端
  - 工具
---


# node_modules 包下载管理


## 资源下载管理

### npm

```bash
# 设置 npm 的默认 registry
npm config set registry <registry-url>

# 设置 npm 的二进制包的下载地址。
npm config set disturl <dist-url>


```



### pnpm

-   **当前项目常用**
-   可分全局和局部配置

```bash
# 切换下载源
pnpm config set registry <registry-url>

# 设置其他 registry
pnpm config set registry http://your-private-registry-url


# 查看当前的配置
pnpm config ls
```



### yarn

```
npm install -g yarn
```



### cnpm

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

-   使用：

    -   安装包：`cnpm install <package-name>`

    -   其他 npm 命令可以用 `cnpm` 替代。





### npx

-   临时操作

```bash
# 临时指定 registry 或 disturl
npx --registry=<registry-url>
```











# Node 切换版本



```bash
# fnm  nodejs 版本切换
https://github.com/Schniz/fnm?tab=readme-ov-file

# asdf 多语言版本版本切换
https://github.com/asdf-vm/asdf

# volta nodejs 版本切换
https://docs.volta.sh/reference/

# nodejs 版本切换工具 mac
https://github.com/tj/n

# nvm 最长久的 nodejs 管理工具
https://github.com/nvm-sh/nvm
```

**如果你只需要管理 Node.js 版本**：

-   **`fnm`** 是一个轻量级的选择，特别适合快速切换和管理全局 Node.js 版本。
-   **`Volta`** 也可以考虑，它提供了更多的整合性和项目级版本控制功能，适合需要在不同项目中使用不同 Node.js 版本的情况。

**如果你需要管理多种编程语言的版本**：

-   **`asdf`** 是一个更通用的选择，支持多种语言的版本管理，包括 Node.js、Python、Ruby 等。它能够为你提供一个统一的工具来管理各种语言环境的版本。



-   **单一需求且仅需管理 Node.js 版本**：使用 **`fnm`**。

-   **需要同时管理多种语言的版本**：使用 **`asdf`**。

-   **希望有更多项目级别控制和整合性**：可以考虑 **`Volta`**，尤其是在需要管理 Node.js 以及相关工具（如 `npm`、`yarn`）的场景。



# Node切换下载源



```bash
# nrm 切换 npm 下载源
https://github.com/Pana/nrm

# yrm 切换 yarn 和 npm 下载源
https://github.com/17hz/yrm
```



## nrm

```bash
# 切换下载源
npm install -g nrm



# 查看
nrm ls



# 切换
nrm use  <registry>
nrm use taobao

# 添加
# 私有域名  私有npm包地址
nrm add <registry> <url>
```



## yrm

```bash
# 切换下载源 同时切换 npm yarn  
npm install -g yrm

# 查看
yrm ls：列出可用的 registry 列表。

# 切换
yrm use <registry-name>：切换到指定的 registry。
yrm use taobao 

# 添加新的
yrm add <registry-name> <registry-url>：添加新的 registry。
```







# 配置文件

-   全局下有一个 
-   项目下也有一个

## .yarnrc

```bash
.yarnrc
# 下载源
registry=https://registry.npmmirror.com 
shamefully-hoist=true
```



## .npmrc

-   项目下的下载源指定

```bash
.npmrc
# 下载源
registry=https://registry.npmmirror.com 
shamefully-hoist=true
```







## 使用代理

```bash
npm config set proxy http://proxy.company.com:8080
npm config set https-proxy http://proxy.company.com:8080
yarn config set proxy http://proxy.company.com:8080
yarn config set https-proxy http://proxy.company.com:8080
```









## registry 和disturl 的区别

 

**功能**：

-   `registry` 主要用于指定包管理器操作时所使用的注册表地址，影响包的查找、下载和发布。
-   `disturl` 主要用于指定 Node.js 安装器在安装 Node.js 时所使用的二进制包下载地址，影响 Node.js 的安装速度和稳定性。

**使用场景**：

-   `registry` 在包管理操作中很常见，影响到 npm 包的管理和发布。
-   `disturl` 则在安装 Node.js 时使用，影响到 Node.js 的安装过程。****



# 工作实践



# Win 配置

## 搜狗输入法 案件冲突

```
ctrl + k
中文时使用因为符号
```



## npm 默认安装路径

```bash
# 查看安装路径
npm config ls

#查看全部默认配置
npm config ls -l

# 修改路径为
npm config set prefix "D:\Develop\nodejs\node_global"
npm config set cache "D:\node_global\node_global_cache"
```

**由于路径改变，系统变量需要重新配置：**

- 变量名：NODE_PATH

- 变量值：D:\node_global\node_global_modules\

- **增加用户变量**

- 在path路径追加%NODE_PATH%

