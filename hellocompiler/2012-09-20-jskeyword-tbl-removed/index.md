---
title: "SpiderMonkey代码变动：jskeyword.tbl被删除"
date: "2012-09-20"
categories: 
  - "spidermonkey"
tags: 
  - "firefox"
  - "javascript"
  - "spidermonkey"
---

今天更新 Mozilla-Central 代码的时候发现 jskeyword.tbl 文件没有了。这个文件用于定义 JavaScript 输入文件中的关键字信息。删除后 Keyword 信息还是需要的，所以应该定义到别处了。查看了使用关键字信息的 frontend/ 下的文件，并没有增加相应的代码。使用 hg log 搜索了一下发现了改动来自这个patch：

changeset: 107332:0f0affefe76f
user: Jeff Walden
date: Mon Sep 10 13:27:18 2012 -0700
summary: Bug 790349 - Define keywords with a higher-order
         macro. r=jorendorff

这个 patch 将 jskeyword.tbl 中的内容移动到了 vm/Keywords.sh 中，使用的宏定义看起来也不比之前可读性好。 另外不太明白为什么要把 Keyword.h 放在 vm/ 目录下。

参考

[通过网页方式查看该 Patch](https://hg.mozilla.org/integration/mozilla-inbound/rev/0f0affefe76f) [Mozilla Bugzilla #790349 链接](https://bugzilla.mozilla.org/show_bug.cgi?id=790349)
