---
title: "伯克利、UIUC、斯坦福三所大学并行计算研究介绍"
date: "2011-03-07"
categories: 
  - "research"
tags: 
  - "berkeley"
  - "gpu"
  - "illinois"
  - "multicore"
  - "parallel-computing"
  - "parlab"
  - "ppl"
  - "stanford"
  - "upcrc"
---

本文是[这篇论文](http://portal.acm.org/citation.cfm?id=1803935.1804054&coll=DL&dl=GUIDE&CFID=11443391&CFTOKEN=66610659)（ [PDF](http://parlab.eecs.berkeley.edu/sites/all/parlab/files/BIS%20for%20IEEE%20Micro%20V6.pdf)）的笔记：

“Ubiquitous Parallel Computing from Berkeley, Illinois and Stanford“

 

# 导论

 

过去几十年处理器的性能一直遵循着摩尔定律增长，现有的软件可以在不改变代码的情况下提升性能。

但是这种趋势在几年前停止了。能耗限制使得处理器时钟频率无法继续提高，处理器厂商开始通过在一个芯片上放置多个核心来提升性能。现在只有支持并行化的应用才能享受到硬件性能提升带来的好处了。 这种变化对于服务器而言不是问题，（因为）可以通过大量的任务级并行来提高系统的吞吐量。问题是那些运行在客户端/移动设备上的应用，需要做算法上的改动支持并行化。 由此带来的问题有：

1. 那种要求增加更多功能（性能）的、令人激动的新型客户端应用 会出现吗？
2. 这类应用会（反过来）促进并行化么？
3. 我们能开发出来一个编程环境，让大多数程序员（轻松的）开发并行代码么？
4. 多核架构和运行其上的应用能够在未来十年内适应几百个核心的规模么？

我们相信以上所有的问题，答案都是肯定的。而及时的解决方案需要加速将研究创想推广到产业界中。 三所实验室的观点相同之处在于：都在针对特定类别的应用进行并行化，而不是沿用过去的方法研究“未来的未知的程序”；都集中于能够scale到上百个核心的客户端/移动设备上的应用；都认为单一的解决方案是不现实的；假设开发团队由计算机专家和领域专家混合组成。 三所实验室的观点差异之处在于：并行编程模式（pattern）在并行软件架构上的角色；针对的编程环境；并行代码的生成方式；并行化的架构支持方式；并行架构的验证（evaluate）方式。

 

# ParLab at Berkeley

## Patterns and Frameworks

大多数人设想的并行编程环境的设计目标是提供给当今的经过常规训练的程序员使用，而ParLab的设计目标是提供给“明天的程序员”——掌握一点计算机技能的领域专家使用。计算机专家和领域专家组成混合团队开发并行应用。 ParLab相信架构（Architecture）是并行程序设计的关键，框架（Framework）是架构实现高效的关键。ParLab用设计模式和一种模式语言作为框架的基础，程序通过设计模式层次化的构建，在不破坏模式的前提下进行定制（customization）。 ParLab构想的框架分为高、低两个层次：productivity层和efficiency层。前者面向领域专家，后者面向计算机专家。

## SEJITS

类似Python、Ruby的高生产力语言具有很高的生产率，但是执行效率不如高效率语言如C/C++/Java。现有的一种提高执行效率的方法是利用高生产力语言的延迟绑定特性，如果被调用的函数有相应的高效率语言编译好的模块实现，那么运行时环境就会使用编译好的高效率代码模块替代相应的函数；如果没有，则进行解释执行。 JVM和.NET都提供了类似的JIT功能，本项目的区别在于不会JIT整个高生产力语言，仅仅是对有对应高效率语言的代码生成器的部分进行JIT。 这样做的好处是领域专家和计算机专家可以更加有效的合作。领域专家专注与高生产力语言部分，计算机专家进行的并行化优化可以在运行时环境中直接替换掉原先的解释代码。 Copperhead是这个思想的一个例子。 项目的目标是针对图像处理应用的并行化提供支持。

## Platforms and Applictions of 2020

未来的程序必然同时是跟移动客户端和云计算相关的。 浏览器中运行的客户端程序很多，所以浏览器的并行化也是关注焦点之一。 移动客户端和云计算都要考虑响应速度和功耗。 接下来使用了一个移动互联网应用来说明。这个应用叫“name whisperer”，运行在手机上，给走向你的人拍一张照片，传到云中进行分析，得到这个人的名字，通过手机上的扬声器说出这个人的名字。

### Object Recognition Systems

将图像处理领域的算法进行并行化，利用GPU将原来4.2分钟的运行时间优化到1.8秒，提升了140倍。

### Performance Measurement and Autotuning

原先对软件隐藏底层平台细节的做法已经不适应生产力发展了。现在需要一种新的接口，将硬件信息暴露给软件。This perspective suggests architectures with transparent performance and energy consumption and Standard Hardware Operation Trackers (SHOT). ParLab认为自动性能调优是也重要的研究领域。

### The Architecture and OS of 2020

我们预测2020年的芯片将会包含几百个核心，采用“hardware tile”的方式进行组织。每一个“tile”包含一个用于顺序代码ILP的处理器和一堆用于DLP的计算单元（GPU）。“tile”组成的阵列支持TLP。内存系统将是cache和scatchpads的混合系统。 运行于此类硬件之上的操作系统，也将会有大的变化，尤其是进程的调度方式。OS kernel会在“hardware tiles”进行粗粒度的调度（“Partitions”），而更细致的调度交给用户层来完成。

## Par Lab Today

识别和使用了一些“软件模式”，应用在了视觉、音乐、医疗、语音、浏览器领域。 两个SEJITS原型和autotuner。 64-core tiles的FPGA模型，SHOT原型。 Tessellation OS原型，Lithe原型。

 

# UPCRC--Illinois

在应用方面，关注于3D Web和human-centered interfaces。关注程序语言、编译器、运行时系统，致力于提供一个简单的并行编程模型。目前关注的硬件架构是上百个核心的共享内存系统。

## Applications

3D Web将带来大量激动人心的新应用，同时这些应用对于算法的效率要求很高。为此我们设计开发了新的并行算法，以期达到更好的性能。在图像处理、视频领域设计的并行算法速度提高了1～2个数量级。 设计了ParKD等执行并行环境的数据结构来支持并行化。 我们也在研究并行浏览器。

## Programming Environment

首先定义和区分了“concurrent”和“parallel”的概念，并指出多核带来的改变跟”concurrency“没有关系，影响的是”parallel programming“。 针对普通的并行编程的需求，我们致力于提供一种编程环境support simple parallelism with languages that are deterministic by default and concurrency safe。 基于Java的Deterministic Parallel Java（DPJ）提供了比较强的确定性，并提供了交互式的分析移植工具，以及代码检查工具。 对于共享库这样的高级并行需求，我们相信性能调优需要在一个编译分析和代码开发紧密结合的环境中进行。通过允许在代码中添加注解来知道编译器优化执行优化，使得在编译器中精细的调整GPU/多核CPU平台的参数成为可能。另外我们还使用autotuning技术来支持高级并行化要求。 SIMD模型最适合并行库和串行代码的集成。我们在Hierarchical Tiled Arrays（HTA）上的工作显示不仅在数组/循环上有很好的性能，在很多复杂应用中也有很好的潜力。

## Architecture

关注的焦点在cache coherence protocols，提出了Bulk Architecture、DeNovo architecture、Rigel architecture三种不同的架构来探索cache coherence protocols。

 

# The Stanford University Pervasive Parallelism Laboratory

## The PPL Approach to Parallelism

我们认为异构架构是未来的趋势（也是现在的现实），而这将导致写并行程序更加困难。我们认为唯一的出路就是提供面向领域的并行语言和编程环境。为此我们的并行环境分成了3个层次：最上层是DSL层，一个领域对应一个领域专属语言；第二层是DSL Infrastructure层，包含一个领域嵌入式语言（Scala）和一个公共并行运行时环境（Delite）；最下层是（异构）的硬件体系结构。 每个层次的具体介绍略。

 

# 参考文献

 

\[1\][Catanzaro et al.,Ubiquitous Parallel Computing from Berkeley, Illinois, and Stanford,IEEE Micro,2010](http://portal.acm.org/citation.cfm?id=1803935.1804054&coll=DL&dl=GUIDE&CFID=11443391&CFTOKEN=66610659)
