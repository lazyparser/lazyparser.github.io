---
title: "[摘要] The V8 Myth: Why JavaScript is not a Worthy Competitor"
date: "2012-12-25"
categories: 
  - "web"
tags: 
  - "actionscript"
  - "aot"
  - "javascript"
  - "jit"
  - "tamarin"
  - "v8"
---

本文是内容摘要。原文见[这里](http://blogs.adobe.com/avikchaudhuri/2012/01/17/the-v8-myth-why-javascript-is-not-a-worthy-competitor/)。作者的主页在[这里](http://www.cs.umd.edu/~avik/)。

以下是摘要：

- JavaScript是无类型的（untyped）语言，代码规模相对较小，以源代码形式发布，在运行动态编译；ActionScript是有类型的（typed），代码规模较大，在编译后以二进制字节码的形式发布。
- JavaScript在语言本质上的一些特性导致了它不适合用来开发重量级的应用。清醒一些吧。
- 动态分析是静态分析的很好的补充，但是无法完全替代静态分析。ActionScript代码经过一个AOT（Ahead-of-Time）编译器充分的分析和优化，而JavaScript的即时编译器无法承受这种优化的开销。
- 你大概听说V8（一个新的JavaScript VM）使用了“类型推断”技术，但是你可能不知道一个JIT是无法承受AOT使用的 modular analysis 所带来的开销的。
- 我粗略的测试了一下ActionScript工具链和JavaScript工具链。前者得到的代码速度是后者的三倍以上。当然这个比较不够严谨。
- 所以，不要操心JavaScript了，来关注ActionScript吧，这个才是21世纪最值得拥有的脚本语言。

摘要结束

原文作者原先是美国马里兰大学程序语言研究组的研究人员，后来加入了Adobe公司程序语言研究小组。这篇博客写于2012年1月，距今差不多快1年——对于互联网技术而言是很长的一段时间。文章很短，评论很多，语言之间的对比和吐槽总是很有人气 :-)

今天看来，文中提到的JavaScript的一些问题依然存在，相信其中还有一些研究的机会，博主已经看到了一些相关的研究成果发表了。有兴趣研究的同学要抓紧时间了 :-)
