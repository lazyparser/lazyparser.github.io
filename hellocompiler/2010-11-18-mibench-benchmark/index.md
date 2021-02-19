---
title: "MiBench Benchmark 简介"
date: "2010-11-18"
categories: 
  - "research"
tags: 
  - "benchmark"
  - "mibench"
---

MiBench Benchmark 是 Michigan 大学电子工程与计算科学学院推出的一个免费的嵌入式基准测试集合。2001年推出之后得到了广泛的使用，截止2010年11月被引用了1234次（[Google Scholar 数据](http://scholar.google.com/scholar?hl=en&q=Mibench&btnG=Search&as_sdt=2000&as_ylo=2001)，[ACM portal 的数据](http://portal.acm.org/citation.cfm?id=1128020.1128563&coll=DL&dl=GUIDE&CFID=111362712&CFTOKEN=66459161)显示MiBench论文被引用了325次）。

MiBench Benchmark 总共包含35个嵌入式程序，分成汽车及工业制造、消费电子、办公自动化、网络、安全、通信六个子类。所有程序都使用 ANSI C 编写，这使得 MiBench Benchmark 也具有了很好的可移植性。以下是 MiBench Benchmark 包含的程序介绍：

- 汽车及工业制造

1. basicmath：一些简单的数学计算测试；
2. bitcount：统计一个整数数组包含的bit中1的个数；
3. qsort：字符串快速排序程序；
4. susan：图像识别工具包。

- 消费电子

1. jpeg：JPEG编解码程序；
2. lame：MP3转换程序；
3. mad：MPEG音频解码器；
4. tiff2bw：将TIFF格式转换成黑白图的格式；
5. tiff2rgba：将TIFF格式转换成RGBA的格式；
6. tiffdither：TIFF图像抖动工具，降低分辨率，减少图片体积。
7. tiffmedian：TIFF图像调色板调整工具；
8. typeset：基于HTML的排版工具。

- 办公自动化

1. ghostscript：排版工具，CLI版本；
2. ispell：快速拼写检查工具；
3. rsynth：text to speech 工具；
4. sphinx：语音解码工具；
5. stringsearch：字符串查找工具。

- 网络

1. dijkstra：Dijkstra算法实现；
2. patricia：Patricia Trie，用于叶子稀疏的树结构。

- 安全

1. blowfish enc./dec.：blowfish加密/解密算法；
2. pgp sign/verify：pgp 签名/检验算法；
3. rijndael enc./dec.：rijndael加密/解密算法；
4. sha：SHA散列算法。

- 通信

1. CRC32：CRC32计算工具；
2. FFT/IFFT：快速傅立叶变换及其逆变换；
3. ADPCM enc./dec.：Adaptive Differential Pulse Code Modulation 编解码工具；
4. GSM enc./dec.：GSM加密/解密算法。

参考资料：

- MiBench 网址：[http://www.eecs.umich.edu/mibench/](http://www.eecs.umich.edu/mibench/)
- MiBench 论文链接：[http://www.eecs.umich.edu/mibench/Publications/MiBench.pdf](http://www.eecs.umich.edu/mibench/Publications/MiBench.pdf)
