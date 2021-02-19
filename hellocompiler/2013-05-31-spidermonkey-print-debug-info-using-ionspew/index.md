---
title: "[SpiderMonkey] 利用 IonSpew 输出调试信息"
date: "2013-05-31"
categories: 
  - "spidermonkey"
tags: 
  - "debug"
  - "ionmonkey"
  - "ionspew"
  - "spidermonkey"
---

SpiderMonkey 中默认提供了 IonSpew, 可以用来输出JIT编译器的内部信息. 使用方法是通过 debug 模式编译 JSShell, 然后在调用 ./js 的时候设置 IONFLAGS 宏. 例如:

IONFLAGS=all ./js path/to/js/file

JSShell 会在屏幕上输出 IonMonkey JIT 各个编译阶段的 IR 内容, 以及代码生成(CodeGen)的内容. 同时, 还会将完整的  MIR 信息输出到 /tmp/ion.json 和 /tmp/ion.cfg 两个文件中, 分别可以被 IonGraph\[1\] 和 C1visualizer\[2\] 图形化的显示.

IonSpew 有一个"通道"的概念, 类似于系统log中的"info", "verbose", "error" 等类型, 不同的是 IonSpew 中的通道都是独立的, 没有等级的概念.

可以很方便的在 IonSpew 中建立自己的"通道", 用于程序的调试或性能分析. 只需要三步:

第一步, 添加通道的名称. 在"mozilla-central/js/src/ion/IonSpewer.h"中找到"IONSPEW\_CHANNEL\_LIST"宏, 在最后追加一个通道的名字, 这里假设叫"HelloIonSpew":

diff -r b35170667a2f js/src/ion/IonSpewer.h
--- a/js/src/ion/IonSpewer.h	Thu May 02 23:04:58 2013 -0700
+++ b/js/src/ion/IonSpewer.h	Fri May 31 23:57:03 2013 +0800
@@ -71,7 +71,8 @@
     /\* OSR from Baseline => Ion. \*/         \\
     \_(BaselineOSR)                          \\
     /\* Bailouts. \*/                         \\
- \_(BaselineBailouts)
+    \_(BaselineBailouts)                     \\
+    \_(HelloIonSpew)

第二步, 激活通道. 在"mozilla-central/js/src/ion/IonSpewer.cpp"中找到"ion::CheckLogging()"函数, 照葫芦画瓢的添加两行代码:

    if (ContainsFlag(env, "HelloIonSpew"))
        EnableChannel(IonSpew\_HelloIonSpew);

第三步, 调用 IonSpew. 在文件中包含"IonSpew.h", 就可以通过"IonSpew()"输出信息了.

        IonSpew(IonSpew\_HelloIonSpew, "Hello, IonSpew.");

Enjoy. :-)

\[1\]: [https://github.com/sstangl/iongraph‎](https://github.com/sstangl/iongraph‎)

\[2\]: [http://c1visualizer.java.net](http://c1visualizer.java.net)
