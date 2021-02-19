---
title: "SunPinyin Installation on Ubuntu 10.04"
date: "2013-01-14"
categories: 
  - "nix"
---

在 Ubuntu 10.04 LTS 下安装 SunPinyin 2.0.3，下载了 [sunpinyin-all-in-one-2.0.3.tar.gz](http://code.google.com/p/sunpinyin/downloads/detail?name=sunpinyin-all-in-one-2.0.3.tar.gz&can=2&q=) 压缩包之后解压编译，需要从 [https://code.google.com/p/open-gram/](https://code.google.com/p/open-gram/) 下载另外两个文件 [lm\_sc.t3g.arpa-20121025.tar.bz2](https://code.google.com/p/open-gram/downloads/detail?name=lm_sc.t3g.arpa-20121025.tar.bz2&can=2&q=) 和 [dict.utf8-20120830.tar.bz2](https://code.google.com/p/open-gram/downloads/detail?name=dict.utf8-20120830.tar.bz2&can=2&q=) 进行编译。但是总是下载失败，不知道是不是因为国内随机丢Google站点的数据包的缘故。解决方法是手工下载这两个文件，注释掉 Makefile 中的下载指令。以下是编译和安装的脚本：

sudo apt-get install -y sqlite3 libsqlite3-dev 
sudo apt-get install -y gettext libibus-dev scons
tar xf sunpinyin-all-in-one-2.0.3.tar.gz 
cd sunpinyin-2.0.3/
scons
# 自己下载。文件名中的日期会有变化。
cp ../dict.utf8-20120830.tar.bz2 raw/dict.utf8.tar.bz2 
cp ../lm\_sc.t3g.arpa-20121025.tar.bz2 raw/lm\_sc.t3g.arpa.tar.bz2 
cd raw/
sed -i '/WGET/d' Makefile 
scons
cd ../wrapper/ibus/
scons --prefix=/usr && sudo scons install
