---
title: "Farewell, JaegerMonkey!"
date: "2013-01-21"
categories: 
  - "spidermonkey"
tags: 
  - "firefox"
  - "jaegermonkey"
---

这样的告别有点早，但是随着 IonMonkey 正式在 Firefox 18 中启用，JaegerMonkey 的替换工作也会开始加速。从 Mozilla Bugzilla 中的这个页面（[Bug 805241](https://bugzilla.mozilla.org/show_bug.cgi?id=805241 "Bug 805241 - (BaselineCompiler) [meta] Build a new baseline compiler")）可以看到相关的工作已经进行了大半，JaegerMonkey 被一个简单的 Baseline Compiler 替换掉的日子或许已经不远了。贴上 Baseline Compiler 的目标：

> Jan de Mooij \[:jandem\] 2012-10-24 15:50:07 PDT
> 
> Now that IonMonkey has landed, we want to replace JM(+TI) with a much simpler baseline compiler. The main goals are
> 
> \* No dependency on TI, no recompilations caused by type changes \* Fast compilation times \* Clean design, easy to support new ops \* No advanced optimizations (LICM, inlining, regalloc) \* ICs for most operations, reusable IC stubs \* Collect and store data useful for Ion compilation
