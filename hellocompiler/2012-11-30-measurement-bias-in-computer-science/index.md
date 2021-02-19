---
title: "如何写一篇没有节操的计算机科学论文"
date: "2012-11-30"
categories: 
  - "research"
---

本文是对[这篇论文](http://dl.acm.org/citation.cfm?id=1508275)\[1\]内容的介绍。

做编译性能优化的同学，免不了要面对Benchmark这个东西。一个idea实现出来，Benchmark上跑一跑，如果性能提升了百分之几，那就是莫大的宽慰，可以写论文了。不过大多数的时候，性能提升是看人品的事情，性能下降的反而居多。这个时候，不要慌，不要愁，把链接次序改一改，多添加几个环境变量，见证奇迹的时刻到了：看看是不是性能的对比就不一样了？多试几次，最多会有5%～10%的性能改变，有时高有时低。这时，没有节操的你，就可以跳出对你最有利的链接次序和环境设置，放在自己的论文里面了。

开个玩笑。你肯定不是没有节操的人，但是严谨的你需要阅读一下[Todd Mytkowicz](http://dl.acm.org/author_page.cfm?id=81100300026&coll=DL&dl=ACM&trk=0&cfid=150288720&cftoken=63493986 "Author Profile Page")等人的论文，防止自己在实验环节出现“[Measurement Bias](http://en.wikipedia.org/wiki/Experimenter's_bias)”错误。计算机发展到现在已经变得非常复杂，各种看起来微不足道的因素都有可能影响到你的性能测试结果。只有在实验的时候充分的考虑到这些可能的因素并积极的避免，才可能会让自己的实验结果更加的可信。

原论文的摘要：

> This paper presents a surprising result: changing a seemingly innocuous aspect of an experimental setup can cause a systems researcher to draw wrong conclusions from an experiment. What appears to be an innocuous aspect in the experimental setup may in fact introduce a significant bias in an evaluation. This phenomenon is called measurement bias in the natural and social sciences.
> 
> Our results demonstrate that measurement bias is significant and commonplace in computer system evaluation. By significant we mean that measurement bias can lead to a performance analysis that either over-states an effect or even yields an incorrect conclusion. By commonplace we mean that measurement bias occurs in all architectures that we tried (Pentium 4, Core 2, and m5 O3CPU), both compilers that we tried (gcc and Intel's C compiler), and most of the SPEC CPU2006 C programs. Thus, we cannot ignore measurement bias. Nevertheless, in a literature survey of 133 recent papers from ASPLOS, PACT, PLDI, and CGO, we determined that none of the papers with experimental results adequately consider measurement bias.
> 
> Inspired by similar problems and their solutions in other sciences, we describe and demonstrate two methods, one for detecting (causal analysis) and one for avoiding (setup randomization) measurement bias.

\[1\]: [Producing wrong data without doing anything obviously wrong](http://dl.acm.org/citation.cfm?id=1508275)

附：标题抄袭了[果壳](http://www.guokr.com)/[mihir0](http://www.guokr.com/i/0259984159/ "mihir0")的这篇文章：

[要显著，不要节操——如何写一篇节操丧尽的心理学论文](http://www.guokr.com/post/348626/)
