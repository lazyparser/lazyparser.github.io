---
title: "SpiderMonkey内部的字符串表示"
date: "2012-12-04"
categories: 
  - "spidermonkey"
tags: 
  - "spidermonkey"
---

在SpiderMonkey的代码中经常能够看到JSAtom这一个数据结构。它并不是定义在 js/src/jsatom.h 中，而是在js/src/vm/String.h中。SpiderMonkey为了能够快速的实现字符串的复制、比较操作，使用了一系列的C++对象。具体实现在String.h的注释中有描述：

/\*
 \* JavaScript strings
 \*
 \* Conceptually, a JS string is just an array of chars and a length. This array
 \* of chars may or may not be null-terminated and, if it is, the null character
 \* is not included in the length.
 \*
 \* To improve performance of common operations, the following optimizations are
 \* made which affect the engine's representation of strings:
 \*
 \*  - The plain vanilla representation is a "flat" string which consists of a
 \*    string header in the GC heap and a malloc'd null terminated char array.
 \*
 \*  - To avoid copying a substring of an existing "base" string , a "dependent"
 \*    string (JSDependentString) can be created which points into the base
 \*    string's char array.
 \*
 \*  - To avoid O(n^2) char buffer copying, a "rope" node (JSRope) can be created
 \*    to represent a delayed string concatenation. Concatenation (called
 \*    flattening) is performed if and when a linear char array is requested. In
 \*    general, ropes form a binary dag whose internal nodes are JSRope string
 \*    headers with no associated char array and whose leaf nodes are either flat
 \*    or dependent strings.
 \*
 \*  - To avoid copying the left-hand side when flattening, the left-hand side's
 \*    buffer may be grown to make space for a copy of the right-hand side (see
 \*    comment in JSString::flatten). This optimization requires that there are
 \*    no external pointers into the char array. We conservatively maintain this
 \*    property via a flat string's "extensible" property.
 \*
 \*  - To avoid allocating small char arrays, short strings can be stored inline
 \*    in the string header (JSInlineString). To increase the max size of such
 \*    inline strings, extra-large string headers can be used (JSShortString).
 \*
 \*  - To avoid comparing O(n) string equality comparison, strings can be
 \*    canonicalized to "atoms" (JSAtom) such that there is a single atom with a
 \*    given (length,chars).
 \*
 \*  - To avoid copying all strings created through the JSAPI, an "external"
 \*    string (JSExternalString) can be created whose chars are managed by the
 \*    JSAPI client.
 \*
 \* Although all strings share the same basic memory layout, we can conceptually
 \* arrange them into a hierarchy of operations/invariants and represent this
 \* hierarchy in C++ with classes:
 \*
 \* C++ type                     operations+fields / invariants+properties
 \* ==========================   =========================================
 \* JSString (abstract)          getCharsZ, getChars, length / -
 \*  | \\
 \*  | JSRope                    leftChild, rightChild / -
 \*  |
 \* JSLinearString (abstract)    chars / might be null-terminated
 \*  | \\
 \*  | JSDependentString         base / -
 \*  |
 \* JSFlatString                 - / null terminated
 \*  |  |
 \*  |  +-- JSStableString       - / may have external pointers into char array
 \*  |  |
 \*  |  +-- JSExternalString     - / char array memory managed by embedding
 \*  |  |
 \*  |  +-- JSExtensibleString   capacity / no external pointers into char array
 \*  |  |
 \*  |  +-- JSUndependedString   original dependent base / -
 \*  |  |
 \*  |  +-- JSInlineString       - / chars stored in header
 \*  |         \\
 \*  |         JSShortString     - / header is fat
 \*  |
 \* JSAtom                       - / string equality === pointer equality
 \*  |
 \* js::PropertyName             - / chars don't contain an index (uint32\_t)
 \*
 \* Classes marked with (abstract) above are not literally C++ Abstract Base
 \* Classes (since there are no virtual functions, pure or not, in this
 \* hierarchy), but have the same meaning: there are no strings with this type as
 \* its most-derived type.
 \*
 \* Technically, there are three additional most-derived types that satisfy the
 \* invariants of more than one of the abovementioned most-derived types:
 \*  - InlineAtom = JSInlineString + JSAtom (atom with inline chars)
 \*  - ShortAtom  = JSShortString  + JSAtom (atom with (more) inline chars)
 \*  - StableAtom = JSStableString + JSAtom (atom with out-of-line chars)
 \*
 \* Derived string types can be queried from ancestor types via isX() and
 \* retrieved with asX() debug-only-checked casts.
 \*
 \* The ensureX() operations mutate 'this' in place to effectively the type to be
 \* at least X (e.g., ensureLinear will change a JSRope to be a JSFlatString).
 \*/
