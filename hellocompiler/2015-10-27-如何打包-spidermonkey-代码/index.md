---
title: "如何打包 SpiderMonkey 代码"
date: "2015-10-27"
categories: 
  - "spidermonkey"
tags: 
  - "spidermonkey"
---

SpiderMonkey 提供了一个脚本`make-source-package.sh`来打包 SpiderMonkey 代码. 在`configure`生成的`js/src/Makefile`中, 包含了打包脚本的使用方法.

source-package:
        SRCDIR=$(srcdir) \\
        DIST=$(DIST) \\
        MAKE=$(MAKE) \\
        MKDIR=$(MKDIR) \\
        TAR=$(TAR) \\
        MOZJS\_MAJOR\_VERSION=$(MOZJS\_MAJOR\_VERSION) \\
        MOZJS\_MINOR\_VERSION=$(MOZJS\_MINOR\_VERSION) \\
        MOZJS\_PATCH\_VERSION=$(MOZJS\_PATCH\_VERSION) \\
        MOZJS\_ALPHA=$(MOZJS\_ALPHA) \\
        $(srcdir)/make-source-package.sh

 

如果是在Debian/Ubuntu或Fedora这样的Linux系统下, 可以直接替换成以下命令生成:

```
cd $srcdir && \
SRCDIR=$PWD \
DIST=$YOUR_DIST_DIR_OUTSIDE_SRCDIR \
MAKE=make \
MKDIR=mkdir \
TAR=tar \
MOZJS_MAJOR_VERSION=44 \
MOZJS_MINOR_VERSION=0 \
MOZJS_PATCH_VERSION=1 \
MOZJS_ALPHA=a \
./make-source-package.sh
```

对于`make source-package`而言, 生成的代码包会放置于`./dist`目录下. 注意目前`make-source-package.sh`并不能忽略掉`js/src`中的`_DBG.OBJ`和`_OPT.OBJ` 这样的临时文件夹. 所以在打包的时候需要检查相关的目录中没有中间文件或临时文件.
