---
title: "Parallel JavaScript"
date: "2011-09-23"
categories: 
  - "research"
tags: 
  - "intel"
  - "javascript"
  - "parallel-programming"
---

#### 介绍：

Intel Labs 前几天发布了一个 JavaScript 扩展，旨在为 JavaScript 提供并行化支持，并在 [Intel Dev Forum 2011](http://www.intel.com/idf/keynote-speakers/index.htm)上进行了展示（看了一下就是走了一个过场的感觉）。

把[源代码](https://github.com/rivertrail)下载下来看了一下，工作量不大（代码行数不到2w），主要的工作是扩展了一个并行数组 ParallelArray，并通过这个类型来利用到 CPU 的并行计算能力。模型是比较常见的数据并行编程模型。

在新的并行编程技术层出不穷的今天，不知道这个技术能否最终延续下来。

#### 参考来源：

[Intel extends JavaScript for parallel programming](http://www.theregister.co.uk/2011/09/17/intel_parallel_javascript/)

[Intel code lights road to many-core future](http://www.eetimes.com/electronics-news/4227359/Intel-code-lights-road-to-many-core-future)

[Building a Computing Highway for Web Applications](http://blogs.intel.com/research/2011/09/pjs.php)
