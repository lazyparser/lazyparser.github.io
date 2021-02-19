---
title: "SpiderMonkey中“-inl.h”头文件的由来"
date: "2013-06-04"
categories: 
  - "spidermonkey"
tags: 
  - "code-reading"
  - "spidermonkey"
---

如果你看过 SpiderMonkey 的代码目录，你就发现经常会有名为“ABC-inl.h”的文件与头文件“ABC.h”成对出现。这是 SpiderMonkey 内部组织的一个风格（不知道算不算规范），其目的是为了改善和提高系统内部的模块性。感兴趣的同学可以看看这个 [Mozilla 维基页面](https://wiki.mozilla.org/JS_engine_modularization)\[1\]或者[这个 Bugzilla 链接](https://bugzilla.mozilla.org/show_bug.cgi?id=653057)\[2\]。

$find ./mozilla-central/js/ -iname '\*-inl.h'
./src/frontend/SharedContext-inl.h
./src/frontend/ParseMaps-inl.h
./src/frontend/Parser-inl.h
./src/frontend/ParseNode-inl.h
./src/ion/BaselineFrame-inl.h
./src/ion/PcScriptCache-inl.h
./src/ion/IonFrameIterator-inl.h
./src/ion/CompileInfo-inl.h
./src/ion/IonFrames-inl.h
./src/ion/shared/Lowering-shared-inl.h
./src/ion/shared/CodeGenerator-shared-inl.h
./src/ion/LIR-inl.h
./src/builtin/Iterator-inl.h
./src/vm/ArgumentsObject-inl.h
./src/vm/RegExpStatics-inl.h
./src/vm/GlobalObject-inl.h
./src/vm/RegExpObject-inl.h
./src/vm/Shape-inl.h
./src/vm/Stack-inl.h
./src/vm/StringObject-inl.h
./src/vm/BooleanObject-inl.h
./src/vm/String-inl.h
./src/vm/ScopeObject-inl.h
./src/vm/ObjectImpl-inl.h
./src/vm/NumberObject-inl.h
./src/gc/Barrier-inl.h
./src/gc/FindSCCs-inl.h
./src/gc/Nursery-inl.h

\[1\]: [https://wiki.mozilla.org/JS\_engine\_modularization](https://wiki.mozilla.org/JS_engine_modularization)

\[2\]: [https://bugzilla.mozilla.org/show\_bug.cgi?id=653057](https://bugzilla.mozilla.org/show_bug.cgi?id=653057)
