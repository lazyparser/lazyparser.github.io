---
title: "Clang/LLVM距离完全编译FreeBSD还有五个字节"
date: "2011-03-07"
categories: 
  - "compiler"
tags: 
  - "clang"
  - "freebsd"
  - "gcc-2"
  - "llvm-2"
---

估计FreeBSD会慢慢舍弃GCC了。

Roman Divacky发送至 llvmdev

> In FreeBSD, we aim for replacing gcc with clang. We can compile all of the base system except the loader which does not fit within the hardware limits (7680 bytes). Currently (r127066) clang/llvm is missing the target by 5 bytes. Thus it's 5 bytes from us being able to compile all of FreeBSD with clang (and replace gcc with clang).
> 
> There's #6627 ([http://llvm.org/bugs/show\_bug.cgi?id=6627](http://llvm.org/bugs/show_bug.cgi?id=6627)) that if fixed would get us well over the limit (by saving ~30 bytes).
> 
> Can someone please help us and fix this bug? thank you!
> 
> roman \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ LLVM Developers mailing list [LLVMdev@cs.uiuc.edu](mailto:LLVMdev@cs.uiuc.edu) [http://llvm.cs.uiuc.edu](http://llvm.cs.uiuc.edu) [http://lists.cs.uiuc.edu/mailman/listinfo/llvmdev](http://lists.cs.uiuc.edu/mailman/listinfo/llvmdev)
> 
>
