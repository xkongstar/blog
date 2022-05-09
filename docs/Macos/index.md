---
title: Apple
description: 苹果系统开发中遇到的问题
layout: ../../layouts/MainLayout.astro
---

### 1、homeBrew安转脚本

[教程地址](https://zhuanlan.zhihu.com/p/111014448)

```
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

### 2、安装Nginx
- 安装
 brew install nginx

- 启动
 brew services start nginx

- 停止
 brew services stop nginx

- 重启nginx
 brew services restart nginx

- 重新加载配置文件
 nginx -s reload

- 验证nginx配置文件是否正确
 nginx -t

- 配置文件位置
 /usr/local/etc/nginx/nginx.conf