---
title: 服务器
description: 服务器开发中遇到的问题
layout: ../../layouts/MainLayout.astro
---

<!-- 服务器 -->

### 1、服务器安装nvm
> [nvm安装教程地址](https://github.com/nvm-sh/nvm#troubleshooting-on-linux)

```bash
# 1、下载nvm脚本
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
# 2、配置nvm环境
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

### 2、安装node、切换node

```bash
# 1、安装node
nvm install 16.15.0
# 2、查看当前环境的node版本
nvm ls
# 3、切换版本
nvm use 12.3.0
```