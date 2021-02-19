---
title: "如何得到SpiderMonkey引擎的字节码（bytecode）"
date: "2012-12-05"
categories: 
  - "spidermonkey"
tags: 
  - "bytecode"
  - "firefox"
  - "jsshell"
  - "mozilla"
  - "spidermonkey"
---

最简单的方法是用[SpiderMonkey](https://wiki.mozilla.org/JavaScript:New_to_SpiderMonkey)\[4\]自带的[jsshell](https://developer.mozilla.org/en-US/docs/SpiderMonkey/Introduction_to_the_JavaScript_shell)\[1\]工具。使用debug模式编译之后，通过“-D”参数就可以获得JavaScript脚本对应的bytecode了。示例（假设你编译的目录是build-debug）：

cd mozilla-central/js/src
./build-debug/js -D tests/js1\_8\_5/shell.js

得到的结果如下：

> \--- SCRIPT tests/js1\_8\_5/shell.js:1 --- 00000: 10 getgname "version" {"interp": 1} 00005: 10 typeof {"interp": 1} 00006: 10 string "undefined" {"interp": 1} 00011: 10 ne {"interp": 1} 00012: 10 ifeq 32 (+20) {} 00017: 12 callgname "version" {"interp": 1} 00022: 12 undefined {"interp": 1} 00023: 12 notearg {"interp": 1} 00024: 12 uint16 185 {"interp": 1} 00027: 12 notearg {"interp": 1} 00028: 12 call 1 {"interp": 1} 00031: 12 pop {"interp": 1} 00032: 12 stop {"interp": 1} --- END SCRIPT tests/js1\_8\_5/shell.js:1 ---

注意只有debug模式才会输出，release/optimize模式的jsshell会忽略该选项。

可以通过Mozilla的wiki学习如何[下载](https://developer.mozilla.org/en-US/docs/SpiderMonkey/Getting_SpiderMonkey_source_code)\[2\]和[编译](https://developer.mozilla.org/en-US/docs/SpiderMonkey/Build_Documentation)\[3\]源代码。

\[1\]: [Introduction\_to\_the\_JavaScript\_shell](https://developer.mozilla.org/en-US/docs/SpiderMonkey/Introduction_to_the_JavaScript_shell)

\[2\]: [Getting\_SpiderMonkey\_source\_code](https://developer.mozilla.org/en-US/docs/SpiderMonkey/Getting_SpiderMonkey_source_code)

\[3\]: [SpiderMonkey/Build\_Documentation](https://developer.mozilla.org/en-US/docs/SpiderMonkey/Build_Documentation)

\[4\]: [JavaScript:New\_to\_SpiderMonkey](https://wiki.mozilla.org/JavaScript:New_to_SpiderMonkey)
