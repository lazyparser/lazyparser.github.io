---
title: "JS and js namespaces in SpiderMonkey"
date: "2013-01-30"
categories: 
  - "spidermonkey"
tags: 
  - "c"
  - "mozilla"
  - "spidermonkey"
---

今天在Mozilla的[SpiderMonkey C++编码规范](https://wiki.mozilla.org/JavaScript:SpiderMonkey:C%2B%2B_Coding_Style)\[1\]中找到了JS和js的说明：

Mozilla SpiderMonkey 中有两个不同的 namespace: JS 和 js。JS 名字空间用来存放公开的函数和类型名称。类似 JSXXX、jsXXX、JS\_XXX 的函数和类型名都应该放在这个名字空间中；js 名字空间用来保存私有的函数和对象。

SpiderMonkey的这两个名字空间用大小写进行区分，带来的最大的不方便，就是用搜索引擎搜索的时候无法找到相关的说明。以前想找这两个名字空间的区别，搜索了半天都找不到相关的网页。

这个博客，估计想知道JS和js区别的SpiderMonkey初学者也搜不到。 :-)

 

\[1\][SpiderMonkey C++编码规范](https://wiki.mozilla.org/JavaScript:SpiderMonkey:C%2B%2B_Coding_Style)： [https://wiki.mozilla.org/JavaScript:SpiderMonkey:C%2B%2B\_Coding\_Style](https://wiki.mozilla.org/JavaScript:SpiderMonkey:C%2B%2B_Coding_Style)
