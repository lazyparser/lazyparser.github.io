---
title: "PACE 项目介绍"
date: "2010-11-18"
categories: 
  - "research"
tags: 
  - "adaptive-compiler"
  - "auto-tuning"
  - "meta-optimization"
  - "pace"
---

注：部分内容翻译自 Rice University 的 PACE Project 项目网站。

PACE(Platform-Aware Compiler Environment,具有平台感知能力的编译器环境)项目是由美国 Rice 大学的 Keith D. Cooper 教授领导的一个多研究机构参与的研究项目，团队规模超过30人。由DARPA/AFRL赞助一千六百万美元（2009年），作为具有感知架构能力的编译环境项目（Architecture-Aware Compiler Enviornment,AACE）的一部分。项目的预期长度是四年半，现在可能还没有结束。

过去几十年的经验表明为一个新的平台写一个优化的编译器平均需要3～5年时间。平台感知编译环境（PACE）项目的目标是将一个优化的编译器移植到新的系统的过程自动化。基本的方法是：

- 重写优化，使得无论是单独的优化还是整个优化策略都根据目标系统的属性参数化。
- 自动检测目标系统（target platform）的各种属性
- 同时提供直接的运行时支持和长期的智能化的运行时支持（基于机器学习的参数制导优化）

PACE计划为性能可移植性提供了一个新的解决途径。PACE使用现有的本地C编译器作为代码生成器，而不是（像传统的编译器一样）重新实现一个汇编生成模块。 PACE系统应对前两个问题，解决方案如下：

- 依赖一个本地的C编译器来作为代码生成器，而不是直接生成汇编代码。通过生成直观的C代码，可以将写一个新的汇编后端的代价降低；
- PACE包含一个参数化的优化变换集合，这里的参数既包括硬件的特性也包括软件的特性。PACE会根据具体硬件/软件的特征来使用特定的优化参数，从而使得编译器得以根据目标平台的特点来进行优化。

最后，考虑到有些重要的特征无法静态的获得，PACE系统还包含了一个运行时环境，用于在运行时收集系统的特征，对已经编译过的代码进行优化参数调整。 PACE 是一个有远大目标的项目，Keith D. Cooper 是在编译领域响当当的大牛，在编译器优化自动调整方面做了超过二十年的努力。PACE 如果能够完美解决这个问题，那么在编译器的历史里应该是有浓重的一笔。可惜这个项目貌似是不开源的，至少目前我在项目网站上没有找到下载的链接地址。 参考资料 PACE项目主页：[http://pace.rice.edu/](http://pace.rice.edu/) Keith Cooper 的介绍主页：[http://compsci.rice.edu/Facultydetail.cfm?riceid=912](http://compsci.rice.edu/Facultydetail.cfm?riceid=912) Keith Cooper 的个人主页：[http://www.cs.rice.edu/~keith/](http://www.cs.rice.edu/~keith/) AACE项目主页：[http://www.darpa.mil/tcto\_aace.html](http://www.darpa.mil/tcto_aace.html)
