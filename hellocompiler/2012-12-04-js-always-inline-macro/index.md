---
title: "JS_ALWAYS_INLINE"
date: "2012-12-04"
categories: 
  - "spidermonkey"
tags: 
  - "mozilla"
  - "spidermonkey"
---

在SpiderMonkey的代码库中经常可以看到一个函数名前面定义了一个宏 JS\_ALWAYS\_INLINE，这个宏定义在js/src/jstypes.h中：

#define JS\_ALWAYS\_INLINE MOZ\_ALWAYS\_INLINE

而 MOZ\_ALWAYS\_INLINE 定义在mfbt/Attributes.h中：

/\*
 \* MOZ\_ALWAYS\_INLINE is a macro which expands to tell the compiler that the
 \* method decorated with it must be inlined, even if the compiler thinks
 \* otherwise.  This is only a (much) stronger version of the MOZ\_INLINE hint:
 \* compilers are not guaranteed to respect it (although they're much more likely
 \* to do so).
 \*/
#if defined(DEBUG)
#  define MOZ\_ALWAYS\_INLINE     MOZ\_INLINE
#elif defined(\_MSC\_VER)
#  define MOZ\_ALWAYS\_INLINE     \_\_forceinline
#elif defined(\_\_GNUC\_\_)
#  define MOZ\_ALWAYS\_INLINE     \_\_attribute\_\_((always\_inline)) MOZ\_INLINE
#else
#  define MOZ\_ALWAYS\_INLINE     MOZ\_INLINE
#endif

而这里的 MOZ\_INLINE 也定义在mfbt/Attributes.h中：

 

/\*
 \* MOZ\_INLINE is a macro which expands to tell the compiler that the method
 \* decorated with it should be inlined.  This macro is usable from C and C++
 \* code, even though C89 does not support the |inline| keyword.  The compiler
 \* may ignore this directive if it chooses.
 \*/
#if defined(\_\_cplusplus)
#  define MOZ\_INLINE            inline
#elif defined(\_MSC\_VER)
#  define MOZ\_INLINE            \_\_inline
#elif defined(\_\_GNUC\_\_)
#  define MOZ\_INLINE            \_\_inline\_\_
#else
#  define MOZ\_INLINE            inline
#endif

 

这个定义文件放在mfbt目录下，这个目录的全称是“Mozilla Framework Based on Templates (MFBT)”，作用在\[1\]中有解释：

> The Mozilla Framework Based on Templates ("mfbt") is the central repository for macros, functions, and data structures used throughout Mozilla code, including in the JavaScript engine.

\[1\]: https://developer.mozilla.org/en-US/docs/Mozilla/MFBT
