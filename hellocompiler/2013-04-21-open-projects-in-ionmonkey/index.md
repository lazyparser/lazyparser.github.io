---
title: "Open Projects in IonMonkey"
date: "2013-04-21"
categories: 
  - "spidermonkey"
tags: 
  - "ionmonkey"
  - "mozilla"
  - "open-projects"
---

昨天 Mozilla 的 Nicolas B. Pierron 在邮件列表中给出了几个 IonMonkey 的开放项目，有兴趣的同学可以去 SpiderMonkey 的[邮件列表](https://groups.google.com/forum/#!msg/mozilla.dev.tech.js-engine.internals/-kLUDSAxrhA/HKjvjfYLWukJ)看看。这里列出项目的简介：

- Clarifying our heuristics, to be able to make guesses while we are compiling in IonMonkey, and recompile without the guarded assumptions if the bailout paths are too costly. Our current view is mostly black & white and only one bad use case can destroy the performances. 
- Adding resume operations, such as an instruction can be moved to a later point in the control flow. This optimization is a blocker for any optimization which can be done with the escape analysis.
- Adding profile guided optimization, the idea would be to profile which branches are used and to prune branches which are unused, either while generating the MIR Graph, or as a second optimization phase working on the graph. 
- Improving our Alias Analysis to take advantage of the type set (this might help a lot kraken benchmarks, by factoring out array accesses).
- Improve dummy functions used for asm.js boundaries. Asm.js needs to communicate with the DOM, and to do so it need some trampoline functions which are used as an interface with the DOM API. Such trampolines might transform typed arrays into strings or objects and serialize the result back into typed arrays.
