---
title: "Multicore JIT in .NET 4.5"
date: "2012-10-28"
categories: 
  - "compiler"
tags: 
  - "net"
  - "clr"
  - "jit"
  - "microsoft"
  - "multicore"
  - "profile-based"
---

前不久微软推出了 .NET 4.5，其中包含了一个 Multicore JIT。

这个Multicore JIT的目标是减少应用程序的启动时间，提高启动速度。根据相关的介绍，.NET程序在运行时需要先从平台无关的字节码翻译到本地码，这个过程就依赖JIT。如此JIT的运行时间就包含在了应用程序的启动时间内了。为了提高应用程序的启动时间，微软的做法是将JIT从主线程中拆出来，放在一个单独的线程中。在目前的多核平台上，这一个单独的线程可以和主线程并行的执行，减少用户的等待时间。

但是这样会遇到一个问题：一般情况下JIT是在程序的函数即将被执行的时候进行翻译的，这样就会导致主线程执行一个函数时，需要等待JIT进行即时编译，效果上跟把JIT放在主线程中没有什么区别。为了使JIT线程在翻译的时候主线程不至于停顿，就需要JIT能够提前判断接下来要执行的函数并进行编译。JIT不是神仙，能够未卜先知，于是微软给出来一个Profile-based的方案：启用Multicore JIT之前，首先要对应用程序进行Profiling，记录下程序在启动时调用的函数（代码）序列，并保存在文件中。下次应用程序启动的时候，Multicore JIT从Profile中读取函数调用序列并提前进行翻译。

理论上Multicore JIT最大能够缩短50%的启动时间，如果Profile信息和当前程序运行的情况是相同的话。最坏情况是Profile跟应用程序的当前执行情况完全不懂，那么可能就反而有降速了。

为什么只有一个JIT线程？用两个JIT线程会不会将启动速度缩短到原来的三分之一？我想，大概是因为以下的几个原因：

- .NET环境中还有别的线程执行，应用程序本身也可能是多线程的，JIT能够使用的空闲核心不会太多；
- 有不少的运行环境还是双核平台的，两个JIT线程不会增加速度；
- 多个JIT线程会导致更多的并发数据访问和线程上下文切换开销，性能反而可能会下降；
- 多个JIT线程开发难度更大，非确定性的bug会让调试的人发疯。

另外，看相关的文档，似乎微软的.NET环境中，应用程序只会被JIT一次，而不是像JVM（如Oracle HotSpot）一样有多个JIT编译器可以对一个函数生成多种不同的本地码。

以下是微软开发人员关于Multicore JIT的访谈视频，中间的是Multicore JIT程序经理Dan Taylor，右边是.NET性能架构师（Performance Architect）Vance Morrison，左边是Windows软件工程师Rick Brewster。Dan和Vance介绍Multicore JIT原理和初心，Rick现身说法用了Multicore JIT之后他开发的大型.NET桌面程序启动时间上的改进。
