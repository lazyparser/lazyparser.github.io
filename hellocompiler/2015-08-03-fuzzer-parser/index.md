---
title: "Fuzzer vs. Parser"
date: "2015-08-03"
categories: 
  - "research"
tags: 
  - "fuzz"
---

如果给定一个 Fuzzer, 可以生成任意长度的文本 I;

一个语法未知的 Parser 读入 I, 并给出接受和拒绝两种状态的一种.

假设 Parser 接受的语法是上下文无关的(CFG), 那么 Fuzzer 是否能够判断出完整的语法?

看起来是一个很直观的问题, 可能有确定的结论?
