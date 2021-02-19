---
title: "IonMonkey并入Mozilla-Central主分支"
date: "2012-09-12"
categories: 
  - "spidermonkey"
tags: 
  - "compiler"
  - "firefox"
  - "ionmonkey"
  - "javascript"
  - "mozilla"
  - "spidermonkey"
---

根据Firefox JS Engine邮件列表中的[这封邮件（墙）](http://groups.google.com/d/topic/mozilla.dev.tech.js-engine/NHZmOf77qTU?show_docid=f4c1d97198f4b465&fromgroups)，Mozilla的（第三个）JavaScript编译器IonMonkey已经基本成熟，在昨天并入了Mozilla-Central主分支。在更新了mozilla代码库之后能够看到js/src目录下新增加了一个“ion”目录，里面包含了IonMonkey的代码。

目前IonMonkey目录中包含了148个文件，其中C++头文件91个。代码共43613行。

使用hg命令可以看到是Ehsan Akhgari（[博客](http://ehsanakhgari.org/)）进行的合并： changeset: 106839:d50bf1edaabe parent: 106838:7612ff8a7fce parent: 106791:fdfaef738a00 user: Ehsan Akhgari <ehsan AT mozilla.com> date: Tue Sep 11 16:38:44 2012 -0400 summary: Merge IonMonkey into mozilla-inbound

目前IonMonkey已经能够在Firefox中默认使用，但是单独编译的JS Shell还无法启用，虽然在测试的时候可以用“--ion”（默认开启）和“--no-ion”来开启或关闭IonMonkey。

IonMonkey是Mozilla开发的下一代JS编译器，主要的设计目标有两个

1. 良好的工程设计，能够方便的添加新的优化；
2. 允许为了生成高效的代码而进行的Specializaion。

关于IonMonkey的介绍可以看[这里](https://wiki.mozilla.org/IonMonkey/Overview)，[这里](https://wiki.mozilla.org/Platform/Features/IonMonkey)，和[这里](https://wiki.mozilla.org/IonMonkey)。
