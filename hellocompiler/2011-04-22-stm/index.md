---
title: "“Why STM Can Be More Than A Research Toy”"
date: "2011-04-22"
categories: 
  - "research"
tags: 
  - "cacm"
  - "stm"
---

《Why STM Can Be More Than A Research Toy》这篇文章发表在CACM 2011年四月刊上（VOL.54 NO.4）。Cascaval等研究人员在2008年针对STM（软件实现的事务内存）进行了一系列的实验，得出的结论是STM的“效率很差，开销过高，只能作为‘研究者的玩具’（Research Toy）”。本文的作者是从事STM研究的，针对这个试验结果进行了另外一组实验来反驳Cascaval等的研究结论。

本文指出了Cascaval的实验的局限性：

- 实验使用的基准测试程序不具有代表性
- 使用软件模拟而不是实际运行的方式来进行实验
- 没有使用最新的STM实现
- 实验使用的线程数量太少

针对提出的这些局限性，本文的几位作者设计了如下的实验环境：

- 使用state-of-the-art的STM实现（SwissTM）作为实验对象
- 使用两个真实的硬件平台（SPARC T2，AMD Opteron x86 quad-core）进行实验，这样可以使用更多的硬件特性。
- 使用硬件平台能够提供的最大数量的线程支持。（SPARC支持64个线程，AMD支持16个）
- 测试了STMBench7、STAMP等多个benchmark。

得到的实验结论是STM的性能表现在最大多数情况下都比没有使用STM的串行程序要好。

相关连接

Why STM Can Be More Than A Research Toy： [http://infoscience.epfl.ch/record/141907/files/paper.pdf](http://infoscience.epfl.ch/record/141907/files/paper.pdf)

Software transactional memory: why is it only a research toy?： [http://portal.acm.org/citation.cfm?id=1400228](http://portal.acm.org/citation.cfm?id=1400228)

PS：两篇文章的名字蛮有意思的 :-)
