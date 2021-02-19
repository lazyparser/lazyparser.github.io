---
title: "Phase Analysis 简介"
date: "2011-03-01"
categories: 
  - "compiler"
tags: 
  - "online-optimization"
  - "phase-analysis"
---

程序在运行的时候，其行为不是完全随机的，而是呈现一定的规律性（稳定性）。可以按照程序的性能变化将程序的运行时间分成不同的intervals（时间间隔），性能上相似的intervals的集合称为phase（阶段）。掌握程序的phase信息对于程序的性能模拟、在线优化等都有帮助。本文介绍Phase Analysis的基本概念、分类、应用领域、以及分析算法。

## 导言：什么是program phase？

程序在运行的时候，其行为不是完全随机的，而是呈现一定的规律性（稳定性）。例如一个程序，它运行期间的cache缺页率可能如下图所示（横轴表示时间，竖轴表示缺页率）：

[![cache miss rate](images/phase_analysis_html_1fe30bd1-300x225.gif "cache miss rate")](http://hellocompiler.info/wp-content/uploads/2011/03/phase_analysis_1.gif)

通过对示例图可以看到，cache miss随着程序的运行，一段时间内的cache miss数量相似的，随后短暂剧烈变化，之后在一段时间内“相似”。如果把程序执行的时间分割成一段段小的时间间隔（interval），根据每个interval中cache miss的情况可以将这些interval按照“相似度”划分成不同的集合，称这样的集合为phase\[1\]。掌握了程序的phase信息之后，可以在不同phase使用不同的在线优化/优化参数，帮助指令模拟程序减少模拟时间等。

使用program phase分析，有几个问题需要考虑。首先是phase这个概念的具体定义是什么？不同的研究者使用的方法和研究的目的不同，给出的定义也是各有差异的；其次是如何将程序运行的过程进行分割？早期研究选用固定时间间隔（fix-length interval）的分割方法，后期有研究者提出了变长时间间隔（var-length interval）和“长时间间隔”（long-length interval）的概念；第三是使用何种评价函数来评估interval，并按照相似度进行分类？有从程序代码本身进行评价的，从运行时的硬件计数器进行评价的，也有从程序运行的轨迹（trace）或profile进行评价的；第四是离线（offline）识别还是在线（online）识别？第五是要求识别（detection）还是预测（prediction）phase的变化？

## 问题定义与数学抽象

关于program phase的定义，不同的研究者给出的定义不尽相同。Sherwood 等\[1\]将phase定义为“具有相似行为的大小固定的interval的集合“（We define a phase as a set of intervals (or slices in time) within a program’s execution that have similar behavior, regardless of temporal adjacency. ）；Hind等\[2\]将phase检测问题抽象为在抽象成一个长字符串的execution profile上的相似子串切分问题，进行了形式化的建模，并指出粒度（granularity）和相似度（similarity）是phase detection问题的两个最重要参数；Gu等\[3\]将其定义为“从某种抽样角度相似的行为的序列”（a phase is sequence of similar actions, as seen from a particular sampling perspective.），并提出interval的大小不应该是固定的。本文选用 Sherwood\[1\]的观点。

Phase Analysis的应用

Gu等研究者例举了以下应用\[3\]：

- Program understanding and debugging：用于程序理解和调试。
- Reducing simulation and profiling workload：降低模拟器的时间开销，减少profiling的overhead。
- System reconfiguration：为可配置硬件/系统提供帮助，主要是嵌入式系统和移动设备。
- Adaptive optimizations：JVM、.NET这样的托管环境是phase analysis技术最为活跃的使用领域。

## Phase的划分方法

研究者尝试了很多不同种类的评估标准，从纯软件的代码结构分析到纯硬件的事件计数器。Gu等将评估方法分成以下几类\[3\]：

- High level software data：使用类似过程体、函数调用图之类的代码信息。Sherwood等\[1\]使用的“Basic Block Vector”即属于这一类。
- low level software data：利用指令片段等低级信息。
- mixed software/simulated hardware data：使用代码信息的同时，使用硬件模拟器模拟运行以获得相应的数据。
- simulated hardware data：使用硬件模拟器模拟运行得到程序运行的性能数据。
- real hardware data：使用真实的硬件事件计数器信息。

phase analysis算法按照获取数据的时间可以大致分成online和offline两大类。Online phase analysis在程序运行的时候动态的识别或预测phase的变化，一般不需要代码相关的信息，根据硬件数据分析，硬件数据可以是真实硬件的数据也可以是在模拟器中运行的数据。Offline phase analysis则可以是完全不需要程序的运行数据（纯代码分析方法），或者是将程序运行若干次得到的profile进行分析。\[3\]

## Phase Analysis的研究现状

Phase analysis的论文在2002～2004年的时候发表的比较多\[1\]\[2\]\[4\]\[5\]\[6\]，之后每年大约十篇左右，每年在程序语言和编译技术的顶级会议上会有一到两篇phase analysis相关的论文（包括应用）。主要的研究团队有McGill大学的Dayong Gu和Clark Verbrugge、加利福尼亚大学圣芭芭拉分校Timothy Sherwood和Brad Calder等。

## Bibliography

1: Sherwood, T. and Perelman, E. and Hamerly, G. and Sair, S. and Calder, B., Discovering and exploiting program phases, 2004

2: Hind, M.J. and Rajan, V.T. and Sweeney, P.F., Phase shift detection: A problem classification, 2003

3: Gu, Dayong and Verbrugge, Clark, A Survey of Phase Analysis: Techniques, Evaluation and Applications, 2006

4: Dhodapkar, A.S. and Smith, J.E., Comparing program phase detection techniques, 2003

5: Sherwood, T. and Perelman, E. and Calder, B., Basic block distribution analysis to find periodic behavior and simulation points in applications, 2002

6: Sherwood, T. and Sair, S. and Calder, B., Phase tracking and prediction, 2003
