---
title: "afl-fuzz vs. mozjs: 1st round."
date: "2015-08-13"
categories: 
  - "security"
tags: 
  - "afl-fuzz"
  - "fuzz"
  - "mozilla"
  - "spidermonkey"
  - "testing"
---

第一轮, 随机从 mozilla-central 的回归测试集中选择了几个js文件, 没有使用字典, 默认 afl-fuzz 配置.

结果: 一个 crash 都没有发现.

分析: 这个是合理的. 没有字典直接 Fuzz, 绝大部分都过不了前端的 Parser. (绝大部分的意思是我没有做统计, 直观猜测的)

[![afl-fuzz-vs-mozjs](images/afl-fuzz-vs-mozjs.png)](http://hellocompiler.com/wp-content/uploads/2015/08/afl-fuzz-vs-mozjs.png)
