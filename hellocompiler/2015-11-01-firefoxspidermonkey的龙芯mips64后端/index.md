---
title: "Firefox/SpiderMonkey的龙芯MIPS64后端"
date: "2015-11-01"
categories: 
  - "blabla"
tags: 
  - "backend"
  - "ionmonkey"
  - "jit"
  - "mips64"
  - "spidermonkey"
  - "龙芯"
---

不久之前写过[一篇博客](http://hellocompiler.com/archives/746)\[1\]为龙芯CPU"辩护", 解释为什么龙芯CPU的JavaScript性能会很低.

> 就我个人的经验而言，龙芯的 SunSpider 性能差异更多的应该是在软件层面。现代的浏览器都通过（多个层级的）JIT来对JavaScript进行加速，开启和关闭JIT的SunSpider、Kraken、Octane 跑分差异可能会相差20～30倍。使用 iPhone 的同学可以在 Safari 和微信自带的浏览器中测试对比下速度差异（iOS 中只有 Safari 可以开 JIT）。三大开源浏览器JIT引擎对于龙芯采用的MIPS后端的支持都还很初级，甚至还不能正常使用。龙芯官方\[6\]和开源爱好者\[5\]的数据也印证了龙芯CPU跑 JavaScript 的尴尬。软件层面的缺失，或者往大了说，生态环境的问题，也是龙芯（MIPS架构）需要面对的一个大问题。

但是现在情况可能就要大不同了. 中科梦兰(龙芯系)的 [heiher\[2\] 同学](http://hev.cc)在今年开始[频繁地向 Mozilla 提交MIPS64后端代码](https://bugzilla.mozilla.org/page.cgi?id=user_activity.html&action=run&who=r%40hev.cc&from=2015-01-01&to=2015-10-30&group=when)\[3\], 相信启用了JavaScript JIT的 Firefox 在龙芯CPU会有很大的性能提升. 到时候(瞎猜)快个20倍也说不定哦 ;-)

\[1\]: [龙芯CPU的JavaScript性能](http://hellocompiler.com/archives/746)

\[2\]: [http://hev.cc](http://hev.cc)

\[3\]: [Bugzilla User Activity](https://bugzilla.mozilla.org/page.cgi?id=user_activity.html&action=run&who=r%40hev.cc&from=2015-01-01&to=2015-10-30&group=when)
