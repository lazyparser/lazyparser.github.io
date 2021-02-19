---
title: "从头写一个JIT?从这篇文章开始吧 :-)"
date: "2013-06-15"
categories: 
  - "compiler"
tags: 
  - "compiler"
  - "jit"
  - "just-in-time"
---

[http://blog.reverberate.org/2012/12/hello-jit-world-joy-of-simple-jits.html](http://blog.reverberate.org/2012/12/hello-jit-world-joy-of-simple-jits.html)

JIT非常的复杂——我学了好多年都没有学会 :-) ——但是如果你想象一下最简单的JIT是什么样子, 那么它其实就是一个printf语句而已. 根据一些输入, 打印一些二进制的字符串到内存, 恰好这个内存是可执行的, 事就这样成了. 作为Demo, 作者在这篇文章中为 Brainf\_ck 这种异类的语言实现了一个简单的JIT.
