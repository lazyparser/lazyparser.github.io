---
title: "[JS-internals] Jit DevTools 0.0.1"
date: "2015-06-18"
categories: 
  - "spidermonkey"
tags: 
  - "devtools"
  - "firefox"
  - "ionmonkey"
  - "jit"
  - "spidermonkey"
---

转发，我一直期待（但是自己没有做）的工具之一：

Nicolas B. Pierron via lists.mozilla.org

Hello everybody,

I am please to do an early announce a new tool named Jit DevTools.

This new tool is an addon which mostly target Jit developers.  It uses the recently added Debugger.onIonCompilation hook to display the latest MIR \[1\] and LIR graphs within the dev tools.

To use this tool, go to a web page, and open the Jit DevTools panel, then wait until a function got compiled.

Once a function is compiled, you can select a compiled script, which will display the MIR graph of the compilation.  If you need to, you can also have a look at the LIR graph.  The output is similar to the one rendered with iongraph \[5\].

By selecting any inlined script, the background of the block titles will change color, if the block correspond to the inlined instance.  This feature is quite useful to identify how a function plays in a compiled script.

You might find this tool quite handy to use for the following use cases: - Investigating DOM optimization. - Investigating jsperf issues. - Comparing function implementations, and impacts on the generated code.

This addon works on optimized builds, and even with parallel compilation enabled.

You can download \[2\] this early version from http://people.mozilla.org/~npierron/jit-dev-tools/ , or build it your-self by using the sources \[3\] with jpm tool \[4\].

Have fun, and enjoy.

\[1\] http://people.mozilla.org/~npierron/jit-dev-tools/jit-dev-tools-0.0.1.png \[2\] http://people.mozilla.org/~npierron/jit-dev-tools/jit-dev-tools-0.0.1.xpi \[3\] https://github.com/nbp/jit-dev-tools/ \[4\] https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/jpm \[5\] https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Hacking\_Tips#Using\_IonMonkey\_spew\_%28JS\_shell%29
