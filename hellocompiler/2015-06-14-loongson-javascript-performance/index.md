---
title: "龙芯CPU的JavaScript性能"
date: "2015-06-14"
categories: 
  - "blabla"
tags: 
  - "javascript"
  - "jit"
  - "sunspider"
  - "龙芯"
---

这是4月份的新闻的评论，一直没有时间来写，拖了两个月了。

四月份的时候，类似“龙芯性能不到iPhone6 A8性能的1/10？”的新闻\[1\]\[2\]\[3\]又一次把龙芯拉出来被人吐槽。其中出现 1/10 对比的一项是 SunSpider 测试，SPEC CINT2000 的测试差异没有那么大。另外没有贴出来 SPEC CFP2000 的分数对比。

作为一度天天跑SPEC和SunSpider等Benchmark的人来说，新闻中的测试报告是没有可信度的。性能测评需要有一套完整的流程，才能够确认自己获得的测评分数是正确的。不同的环境设定、软硬件组合、是否联网\[7\]等都会影响到SPEC的测评分数。

\[4\]中有人提供了反面的数据，表达另一种可能性。

就我个人的经验而言，龙芯的 SunSpider 性能差异更多的应该是在软件层面。现代的浏览器都通过（多个层级的）JIT来对JavaScript进行加速，开启和关闭JIT的SunSpider、Kraken、Octane 跑分差异可能会相差20～30倍。使用 iPhone 的同学可以在 Safari 和微信自带的浏览器中测试对比下速度差异（iOS 中只有 Safari 可以开 JIT）。三大开源浏览器JIT引擎对于龙芯采用的MIPS后端的支持都还很初级，甚至还不能正常使用。龙芯官方\[6\]和开源爱好者\[5\]的数据也印证了龙芯CPU跑 JavaScript 的尴尬。软件层面的缺失，或者往大了说，生态环境的问题，也是龙芯（MIPS架构）需要面对的一个大问题。

\[1\] http://www.leiphone.com/news/201504/aCIGktK8BJgon9BV.html

\[2\] http://tech.163.com/15/0406/14/AMHCJ04K000915BD.html

\[3\] http://tech.sina.com.cn/zl/post/detail/it/2015-04-09/pid\_8476155.htm

\[4\] http://tieba.baidu.com/p/3684400301

\[5\] http://www.lingcc.com/2010/06/28/10983/

\[6\] http://www.loongson.cn/dev/ftp/doc/07FAQ/%E9%BE%99%E8%8A%AFFAQ\_V0.8.pdf

\[7\] 我有一次跑SPEC的时候没有拔掉网线，结果内网MDNS广播风暴导致性能掉了非常多，内核处理TCP/IP需要跟Benchmark抢占资源。
