---
title: "[SpiderMonkey] 基于 Compartment 的内存管理"
date: "2013-06-17"
categories: 
  - "spidermonkey"
tags: 
  - "compartment"
  - "gc"
  - "heap"
  - "jscompartment"
  - "memory-management"
  - "spidermonkey"
---

Firefox 浏览器内部的内存管理是基于"Compartment"的.

提出这个概念的背景, 是 Firefox 既是一个单进程多线程的架构, 又支持多 Tab 页面浏览. 这就导致了不同的网页的内容出现在同一个虚拟地址空间中. Firefox 3.5 之前的内存组织方式是一视同仁的散布在堆中. 这样如果 Firefox 有内存方面的漏洞, 导致恶意页面可以访问到敏感页面(例如银行支付页面)的内存信息, 就悲剧了. 性能上使得页面浏览的时候无法利用缓存访问的局部性, Cache Miss 高一点点对于软件的速度影响是很可观的(1).

于是 Mozilla 把单个进程的堆, 以网页为单位分成了子堆, 在浏览器的内部实现了一套隔离和通信机制. 你可以认为 Mozilla 把操作系统对于进程所做的工作, 在线程的层次上做了一层实现. 具体的实现原理和示意图可以参考文后的相关文献.

相关文献:

\[1\]: [Andreas Gal 的博客](http://andreasgal.com/2010/10/13/compartments/)

\[2\]: [MDN上的介绍](https://developer.mozilla.org/en-US/docs/SpiderMonkey/SpiderMonkey_compartments)

\[3\]: 论文: Compartmental memory management in a modern web browser. 里面的配图很好, 看起来很直观. [ACM链接](http://dl.acm.org/citation.cfm?id=1993496). [PDF下载的地址](http://ssllab.org/~nsf/files/memory_management.pdf)

 

尾注:

(1) 这里有一个研究问题: 在单核的架构中, 编译器优化的主要目标之一就是减少 CPU Cache Miss, 但是在多核中, CPU Cache 还是编译器优化的主要目标么? 我并不知道答案.
