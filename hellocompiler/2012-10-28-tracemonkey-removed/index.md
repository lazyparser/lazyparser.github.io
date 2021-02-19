---
title: "TraceMonkey (not) in Firefox"
date: "2012-10-28"
categories: 
  - "spidermonkey"
tags: 
  - "firefox"
  - "jaegermonkey"
  - "javascript"
  - "jit"
  - "mozilla"
  - "spidermonkey"
  - "tracemonkey"
  - "type-inference"
---

这个世界总是变化太快。浏览器的世界变化更快。

2008年左右加入到Firefox/SpiderMonkey中的Trace-based JIT引擎TraceMonkey，2011年10月份的时候被默认禁用（[bug#697666](https://bugzilla.mozilla.org/show_bug.cgi?id=697666)），11月份的时候已经被David Anderson从Mozilla-Central中移除了（[bug#698201](https://bugzilla.mozilla.org/show_bug.cgi?id=698201)）。

[Nicholas Nethercote](https://blog.mozilla.org/nnethercote/about/)在他的[博客中解释说](https://blog.mozilla.org/nnethercote/2011/11/23/memshrink-progress-report-week-23/)，当时Firefox中有TraceMonkey（TM）和JaegerMonkey（JM）两个不同的JIT同时存在，而引入的Type Inference技术（TI）使得JM+TI的执行性能超过了JM+TM的执行速度。TM针对特定的代码优化的效果还是不错的，例如没有分支跳转的循环。但是在其它的代码情形下，不如JM（它是Method-based）。除此之外TM的代码的复杂性和内存消耗也是它被移除的原因之一。在移除前，TM的代码行数已经达到了67000+的规模，对于一个JS编译器来说已经是很大了。

TraceMonkey诞生的时候出了好几篇高质量的论文（[PLDI'09](http://dl.acm.org/citation.cfm?id=1542528), [VEE'09](http://dl.acm.org/citation.cfm?id=1508304)），我也曾经想在上面做一些工作。想不到我还没有克服自己的拖延症，TraceMonkey就已经告别了。只能叹“相逢恨晚，造物弄人” :-D。
