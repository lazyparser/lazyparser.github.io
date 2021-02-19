---
title: "SpiderMonkey 的版本号在代码中是如何传播的"
date: "2015-10-27"
categories: 
  - "spidermonkey"
tags: 
  - "spidermonkey"
---

编译好的 SpiderMonkey JSShell 是有一个版本号的. 通过运行 js --version 可以看到(是Mozilla的版本, 不是1.7+,1.8这样的JS\_VERSION). 例如我的构建版本输出的是44.0a1. 这个版本上是Mozilla仓库统一的版本号. 这个信息并不保存在 SpiderMonkey 源代码目录中, 而是保存于 Mozilla-Central(or gecko-dev) 仓库的 config/milestone.txt 目录下:

$ cd mozilla-central/
$ cat config/milestone.txt

文件很简单. 就只有一个版本号.

\# Holds the current milestone.
# Should be in the format of
#
# x.x.x
# x.x.x.x
# x.x.x+
#
# Referenced by milestone.py.
# Hopefully I'll be able to automate replacement of \*all\*
# hardcoded milestones in the tree from these two files.
#--------------------------------------------------------
44.0a1

之后, 在 SpiderMonkey 的 configure 脚本中, configure 脚本调用 $srcdir/python/mozbuild/mozbuild/milestone.py 读取 milestone.txt 并返回版本(子)字符串. 在脚本配置过程中使用到了 MOZILLA\_VERSION、MOZILLA\_UAVERSION、MOZILLA\_SYMBOLVERSION 三种版本形式:

MOZILLA\_VERSION=\`$PYTHON $srcdir/python/mozbuild/mozbuild/milestone.py --topsrcdir $srcdir\`
MOZILLA\_UAVERSION=\`$PYTHON $srcdir/python/mozbuild/mozbuild/milestone.py --topsrcdir $srcdir --uaversion\`
MOZILLA\_SYMBOLVERSION=\`$PYTHON $srcdir/python/mozbuild/mozbuild/milestone.py --topsrcdir $srcdir --symbolversion\`

其中 MOZILLA\_VERSION 又进一步的被分成 MOZJS\_MAJOR\_VERSION、MOZJS\_MINOR\_VERSION、MOZJS\_PATCH\_VERSION、IS\_ALPHA 四个变量:

MOZJS\_MAJOR\_VERSION=\`echo $MOZILLA\_VERSION | sed "s|\\(^\[0-9\]\*\\)\\.\[0-9\]\*.\*|\\1|"\`
MOZJS\_MINOR\_VERSION=\`echo $MOZILLA\_VERSION | sed "s|^\[0-9\]\*\\.\\(\[0-9\]\*\\).\*|\\1|"\`
MOZJS\_PATCH\_VERSION=\`echo $MOZILLA\_VERSION | sed "s|^\[0-9\]\*\\.\[0-9\]\*\[^0-9\]\*||"\`
IS\_ALPHA=\`echo $MOZILLA\_VERSION | grep '\[ab\]'\`

在本例中分别对应 44, 0, 1, a.

configure 获取到相关的信息之后, 将其写入到 js-config.h 以及 js-confdefs.h 两个文件中, 使得 JSShell 能够获得版本信息. 同时, configure 也将该信息写入 Makefile 文件, 用于在 make source-package 命令式, 将版本号正确的传递给 make-source-package.sh 脚本. make-source-package.sh 脚本可以简单的理解为一个打包脚本, 将 SpiderMonkey 在 mozilla-central 仓库中所有依赖的文件都抽取出来, 用于单独发布.
