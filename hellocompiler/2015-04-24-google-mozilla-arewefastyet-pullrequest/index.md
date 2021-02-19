---
title: "[社区八卦]Google向Mozilla的JavaScript引擎评测平台提了个PullRequest"
date: "2015-04-24"
categories: 
  - "blabla"
tags: 
  - "arewefastyet"
  - "google"
  - "javascript"
  - "mozilla"
---

AreWeFastYet.com\[1\] 是Mozilla的SpiderMonkey开发人员搭建的JS引擎对比网站, 实时评测三大开源浏览器的JS性能\[2\].

最近Mozilla的开发人员抱怨说V8的turbofan性能太糟糕了, 拉低了多个benchmark显示结果的坐标轴(Y轴), 于是推送了一个PR删掉了V8的这项测试\[3\].

然后今天德国的一位google的哥们儿不开心了, 火速提交了一个PR, 说"不是我们的大风扇装反了, 是你们摁错开关了."\[4\]

八卦的同学可以移步 PR#67\[3\] 和 PR#70\[4\]

\[1\] [https://github.com/h4writer/arewefastyet](https://github.com/h4writer/arewefastyet)

\[2\] [http://www.arewefastyet.com](http://www.arewefastyet.com)

\[3\] [https://github.com/h4writer/arewefastyet/pull/67](https://github.com/h4writer/arewefastyet/pull/67)

\[4\] [https://github.com/h4writer/arewefastyet/pull/70](https://github.com/h4writer/arewefastyet/pull/70)
