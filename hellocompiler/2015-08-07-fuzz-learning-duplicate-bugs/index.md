---
title: "使用机器学习算法训练 Language Fuzzer 的一个问题"
date: "2015-08-07"
categories: 
  - "research"
tags: 
  - "fuzz"
  - "machine-learning"
  - "research-2"
  - "testing"
---

使用机器学习的技术来训练针对编译器的 Programming Language Fuzzer, 有一个问题, 就是找到了 bug(s) 之后, 整个 Fuzzer 可能就跑偏了, 重复性的触发已经发现的 bugs.

理想的情况是, Fuzzer 能够发现 Compiler 的某个模块, 针对 PL 中的某个语言的 feature, 已有的测试不充分导致发现了 bug, 于是就更多的生成针对这个模块的 testcase, 但是在这个目标下, 还是尽可能的做到 diversity.
