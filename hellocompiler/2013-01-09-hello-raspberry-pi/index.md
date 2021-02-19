---
title: "Hello Raspberry Pi, Hello 2013"
date: "2013-01-09"
categories: 
  - "blabla"
tags: 
  - "firefox"
  - "raspberry-pi"
  - "spidermonkey"
  - "sunspider"
  - "ubench"
  - "v8-v4"
---

这是本博客2013年的第一篇博客，献给刚入手的树梅派（Raspberry Pi，RBP） :-)

拿到手的第一件事情就是浏览器性能测试。下载 Mozilla 源代码，编译 SpiderMonkey Shell（jsshell）进行测试。我使用的OS是树梅派官网的镜像包，按照SpiderMonkey的wiki一路走下来就可以编译成功。

编译的时间意外的长，超过了一个小时。

下面是SunSpider测试集的结果。每个测试都跑了100次，没有设置jsshell命令行参数。看起来树梅派的性能还是不太给力，可能是不太适合做计算密集型的工作。

**SunSpider-1.0 测试集结果（在我的PC上是200ms，速度相差了46倍）**

\============================================ RESULTS (means and 95% confidence intervals) -------------------------------------------- Total: **9231.6ms** +/- 0.3% --------------------------------------------

3d: 1691.6ms +/- 0.6% cube: 588.9ms +/- 0.5% morph: 409.0ms +/- 2.1% raytrace: 693.7ms +/- 0.3%

access: 1171.5ms +/- 0.8% binary-trees: 189.2ms +/- 1.4% fannkuch: 277.4ms +/- 0.1% nbody: 313.6ms +/- 0.7% nsieve: 391.3ms +/- 1.8%

bitops: 527.2ms +/- 0.1% 3bit-bits-in-byte: 46.5ms +/- 0.3% bits-in-byte: 168.1ms +/- 0.2% bitwise-and: 158.3ms +/- 0.1% nsieve-bits: 154.3ms +/- 0.3%

controlflow: 58.8ms +/- 0.3% recursive: 58.8ms +/- 0.3%

crypto: 975.4ms +/- 0.7% aes: 605.6ms +/- 0.9% md5: 241.1ms +/- 0.5% sha1: 128.8ms +/- 0.7%

date: 1349.5ms +/- 0.3% format-tofte: 758.5ms +/- 0.4% format-xparb: 591.0ms +/- 0.4%

math: 861.2ms +/- 0.6% cordic: 219.7ms +/- 0.1% partial-sums: 485.7ms +/- 0.9% spectral-norm: 155.7ms +/- 1.1%

regexp: 289.1ms +/- 0.1% dna: 289.1ms +/- 0.1%

string: 2307.3ms +/- 0.5% base64: 275.6ms +/- 1.5% fasta: 344.2ms +/- 1.2% tagcloud: 673.9ms +/- 0.4% unpack-code: 732.1ms +/- 0.6% validate-input: 281.5ms +/- 0.9%

 

**ubench测试集结果：**

\============================================ RESULTS (means and 95% confidence intervals) -------------------------------------------- Total: **13391.6ms** +/- 0.9% --------------------------------------------

function: 9965.3ms +/- 1.2% closure: 674.9ms +/- 2.3% empty: 1078.0ms +/- 0.1% correct-args: 1093.7ms +/- 0.1% excess-args: 3940.2ms +/- 2.1% missing-args: 2370.2ms +/- 2.8% sum: 808.4ms +/- 0.1%

loop: 3426.2ms +/- 0.1% empty-resolve: 182.4ms +/- 0.2% empty: 1506.0ms +/- 0.1% sum: 1737.8ms +/- 0.1%

 

**v8-v4测试集结果：**

\============================================ RESULTS (means and 95% confidence intervals) -------------------------------------------- Total: **9294.2ms** +/- 0.4% --------------------------------------------

3d: 1702.0ms +/- 0.7% cube: 591.4ms +/- 0.4% morph: 410.5ms +/- 2.2% raytrace: 700.0ms +/- 0.4%

access: 1175.1ms +/- 0.7% binary-trees: 190.6ms +/- 1.4% fannkuch: 280.4ms +/- 0.3% nbody: 315.6ms +/- 0.7% nsieve: 388.5ms +/- 1.6%

bitops: 530.1ms +/- 0.2% 3bit-bits-in-byte: 46.8ms +/- 0.4% bits-in-byte: 169.1ms +/- 0.3% bitwise-and: 159.4ms +/- 0.3% nsieve-bits: 154.7ms +/- 0.4%

controlflow: 59.1ms +/- 0.4% recursive: 59.1ms +/- 0.4%

crypto: 982.6ms +/- 0.6% aes: 610.9ms +/- 0.9% md5: 242.9ms +/- 0.6% sha1: 128.8ms +/- 0.5%

date: 1361.7ms +/- 0.3% format-tofte: 763.2ms +/- 0.3% format-xparb: 598.5ms +/- 0.5%

math: 868.8ms +/- 0.7% cordic: 220.9ms +/- 0.2% partial-sums: 490.7ms +/- 1.0% spectral-norm: 157.2ms +/- 1.1%

regexp: 291.2ms +/- 0.2% dna: 291.2ms +/- 0.2%

string: 2323.7ms +/- 0.5% base64: 277.0ms +/- 1.6% fasta: 346.5ms +/- 1.1% tagcloud: 678.3ms +/- 0.4% unpack-code: 737.7ms +/- 0.6% validate-input: 284.1ms +/- 1.1%

 

**这是目前的一些简单的心得：**

- 我的树梅派是在淘宝上买的，中国版B，512M内存，价格319，加上一个8G Class10的SD卡和快递，390元。在Element14上也有卖的，价格298，不知道有没有加快递和税收。淘宝卖家简单直接，不还价，总体感觉不错。
- 第一次启动的时候需要初始化一下，这个时候是需要外接到显示器的，可以用HDMI-VGA转接头接到显示器上，或者用视频线直接接到电视机上。我是直接外接到电视机，设置好了IP地址，SSH登录就OK了。新买HDMI-VGA价格在30～120不等。
- RBP手册要求供电USB输出750mA以上。我用普通的USB手机充电器做的电源，600mA输出，同时接USB无线键鼠、网线和电视机没有问题。但是HDMI转VGA的时候显示器总是闪，不知道是不是功率的问题。
- 在电视机上开Firefox测试SunSpider，需要很久才有结果，没有耐心测试完。
