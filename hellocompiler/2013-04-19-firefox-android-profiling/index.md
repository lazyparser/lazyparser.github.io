---
title: "Firefox for Android 的 JavaScript Profiling 方法"
date: "2013-04-19"
categories: 
  - "spidermonkey"
tags: 
  - "android"
  - "benchmark"
  - "firefox"
  - "firefox-for-android"
  - "profiling"
---

最近需要对手机版浏览器的JavaScript执行效率做性能分析。浏览器选择 Firefox for Android，JavaScript 程序选择 SunSpider、Octane和kraken测试集。

首先要做的就是获得性能测评数据。基本上参照[Mozilla的教程](https://developer.mozilla.org/en-US/docs/Performance/Profiling_with_the_Built-in_Profiler)就可以做到，但是有几个地方值得记录一下：

1. 教程中说 Profiler 需要查找“`arm-eabi-addr2line`”工具，当前版本的Android NDK没有这个文件。找到一个“`arm-linux-androideabi-addr2line`”，建立一个符号链接，成功骗过了 Profiler。
2. ADB在Ubuntu下需要sudo启动否则连接不上USB设备。
3. 手机需要在“开发人员选项”中开启USB调试功能。
4. Profiler 要求 PC 端开启“devtools.debugger.remote-enabled”选项。（我在手机上手工输入了这个字符串三次，囧）
5. 开启 Profiling 之后跑 benchmark，有时候会导致 Firefox for Android 和 PC 上的 Profiler 同时假死，停止 Profiling 之后 Profiler 读取数据也可能会假死。多尝试几次总会有成功跑完的时候。（这是个需要解决的问题）
6. 建议将自动待机（锁屏）时间延长到10分钟以上，在插电源时不关闭屏幕。
7. 如果不想自己编译，可以下载 Firefox Nightly 安装测试。Release 通道的 Firefox 没有这个功能。

PS：发现 Nightly 经常性的出现输入URL之后网页显示不出来，标签页选择的时候能够看到略缩图，很奇怪的一个bug——一定是我打开的方式不对 :-)
