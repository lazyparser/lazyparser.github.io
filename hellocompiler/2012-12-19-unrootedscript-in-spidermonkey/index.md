---
title: "UnrootedScript in SpiderMonkey"
date: "2012-12-19"
categories: 
  - "spidermonkey"
tags: 
  - "c"
  - "code-reading"
  - "jsscript"
  - "macro"
  - "spidermonkey"
  - "unrootedscript"
---

在 SpiderMonkey 中，JSScript 是比较常见的一个数据结构，它封装了一个 JavaScript 脚本。而 UnrootedScript 是在 SpiderMonkey 代码中经常作为函数返回值出现的类型。奇怪的是，使用 Eclipse IDE 找不到该类型的定义；使用 grep 搜索也只能找到该类型的使用，找不到该类型的定义（这个类型的使用非常广泛，眼睛都看花了）；直接使用 Google 搜索，也找不到这个类型。

最后，在 Mozilla 的 Bugzilla 上看到 [bug 817818](https://bugzilla.mozilla.org/show_bug.cgi?id=817818)，才意识到：这个类型是用宏定义拼出来的。

以下这段代码来自于 Mozilla-central/js/src/vm/Root.h：

#ifdef DEBUG
/\* irrelevant code ... \*/
/\*
 \* This macro simplifies declaration of the required 
 \* matching raw-pointer for optimized builds and 
 \* Unrooted<T> template for debug builds.
 \*/
# define ForwardDeclare(type)                        \\
    class type;                                      \\
    typedef Unrooted<type\*> Unrooted##type;          \\
    typedef type \* Raw##type

# define ForwardDeclareJS(type)                      \\
    class JS##type;                                  \\
    namespace js {                                   \\
        typedef js::Unrooted<JS##type\*> Unrooted##type; \\
        typedef JS##type \* Raw##type;                \\
    }                                                \\
    class JS##type
/\* irrelevant code ... \*/
#else /\* NDEBUG \*/
/\* irrelevant code ... \*/
/\* In opt builds |UnrootedFoo| is a real |Foo\*|. \*/
# define ForwardDeclare(type)        \\
    class type;                      \\
    typedef type \* Unrooted##type;   \\
    typedef type \* Raw##type

# define ForwardDeclareJS(type)              \\
    class JS##type;                          \\
    namespace js {                           \\
        typedef JS##type \* Unrooted##type;   \\
        typedef JS##type \* Raw##type;        \\
    }                                        \\
    class JS##type
/\* irrelevant code ... \*/
#endif

在 Mozilla-central/js/src/JSScript.h 文件中，有一行对应的宏引用：

ForwardDeclareJS(Script);

通过这种方式完成了 UnrootedScript 的定义。 类似的定义还有：

Mozilla-cental/js/src/$grep ForwardDeclare | grep -v define
./jsscript.h:21:ForwardDeclareJS(Script);
./gc/Root.h:959:ForwardDeclareJS(Script);
./gc/Root.h:960:ForwardDeclareJS(Function);
./jsfun.h:20:ForwardDeclareJS(Script);
./jsinfer.h:23:ForwardDeclareJS(Script);
./vm/ObjectImpl.h:27:ForwardDeclare(Shape);
./jsobj.h:38:ForwardDeclare(Shape);
./jsscope.h:225:ForwardDeclare(UnownedBaseShape);
./jsscope.h:226:ForwardDeclare(BaseShape);
./jsscope.h:227:ForwardDeclare(Shape);
./jspropertytree.h:14:ForwardDeclare(Shape);

生成了以下类型：

js::UnrootedFunction
js::RawFunction
UnrootedShape
RawShape
UnrootedUnownedBaseShape
RawUnownedBaseShape
UnrootedBaseShape
RawBaseShape

评注：以前在 GCC 的代码中也见到了不少这样的技巧，用 C/C++ 中的宏拼出来很多的代码，使得源代码看起来简洁，代码行数更少。但是要看懂这样的代码也需要更多的耐心和技巧，对于初学者而言不是很友好。内部实现的文档稀缺，加之目前IDE中的智能提示系统（CCS）还搞不定这么复杂的宏展开，使得初学者的学习门槛更高了。
