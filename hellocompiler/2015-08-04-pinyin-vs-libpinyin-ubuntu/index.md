---
title: "ibus-pinyin vs. ibus-libpinyin on ubuntu 14.04"
date: "2015-08-04"
categories: 
  - "nix"
tags: 
  - "ibus"
  - "ibus-libpinyin"
  - "ibus-pinyin"
  - "ubuntu"
---

安装了 Ubuntu 14.04 之后, ibus-pinyin/ibus-sunpinyin/ibus-googlepinyin会出现各种诡异的bug. 以下是我曾经遇到的:

- 数字'e'无法输入(输入了没反应);
- 从12.04直接升级的系统, 输入的字母映射全部是错误的;
- Googlepinyin 的候选词显示滞后一个翻页键, 导致翻页选择总是错误的;
- ibus-pinyin 模式下**双击选中一段文字, 文字会被删除(这个简直不能忍)**.

搜索到最后从 [ArchWiki 上](https://wiki.archlinux.org/index.php/IBus)知道的原因:

> [ibus-pinyin](https://www.archlinux.org/packages/?name=ibus-pinyin) - Intelligent Chinese Phonetic IME for Hanyu pinyin and Zhuyin (Bopomofo) users. Designed by IBus main author and has many advance features such as English spell checking. Package currently not maintained and partly broken with latest ibus base. Use [ibus-libpinyin](https://www.archlinux.org/packages/?name=ibus-libpinyin) instead.

解决方法就是卸载掉 ibus-pinyin, 安装 ibus-libpinyin, 并在 ibus 语言选择中重新选择"智能拼音".

Ubuntu 14.04 已经出来一年多了, 这个包依赖关系还没有解决. 这或许能够体现出来FOSS在桌面上的窘境.
