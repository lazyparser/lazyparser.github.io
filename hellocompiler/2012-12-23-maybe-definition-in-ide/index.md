---
title: "Project Idea: 增强C++ IDE的宏展开能力"
date: "2012-12-23"
categories: 
  - "ide"
tags: 
  - "ccs"
  - "cdt"
  - "code-recommanders"
  - "eclipse"
  - "ide"
  - "idea"
  - "preprocessor"
  - "proposal"
---

这个想法源自前天在阅读IonMonkey代码时候寻找UnrootedScript类型定义的时候。UnrootedScript这个类型的名字是用C++中的宏定义展开生成的。这种利用宏拼接字符串的技术在编译器的代码中比较的常见。例如编译器的设计和实现中，一般都会有一个或多个代码的中间表示（IR），每个中间表示都由若干种不同的节点组成。这些节点的实例构成程序的抽象表示。编译器在生成机器码的过程中需要访问和遍历抽象表示中的节点。对于每个节点，往往需要有一个 is\_NODENAME() 或 visit\_NODENAME() 类似的函数，这类函数写起来费时费力，并且当中间表示的数据结构修改时需要同步的修改代码中多处地方，这种关联应当尽量避免。

宏定义中字符串拼接的定义和代码实例见GNU的[C预处理器文档3.5节“Concatenation”](http://gcc.gnu.org/onlinedocs/cpp/Concatenation.html)\[1\]。

Eclipse/CDT 中已经内建了对于宏定义展开的部分支持\[2\]。以下面的代码为例：

#include<stdio.h>
#define DEBUG
#ifdef DEBUG
#define INT(A,B) int A##B
#define CONCAT(A,B) A##B
#else
#define INT(A,B) int B##A
#define CONCAT(A,B) A
#endif

#define CONCAT2(A,B) A##B
#define INT2(A,B) int A##B
int main(){
    int a = 1,b = 2,ab = 3;
    int c = 4,d = 5;
    INT(c,d);
    cd=c+d;
    INT2(ab,cd);
    abcd=ab+cd;

    printf("%d\\n",CONCAT(a,b));
    printf("%d\\n",CONCAT2(a,b));
    printf("%d\\n",cd);
    printf("%d\\n",abcd);
    return 0;
}

在这段代码中，变量“cd”和变量“abcd”都是通过宏拼贴技术生成的。拼贴变量“cd”的宏INT被包含在一个“#ifdef”条件语句中，而拼贴出变量“abcd”的宏INT2没有。对于宏INT2这样的确定性的宏展开，Eclipse/CDT能够识别出来“abcd”变量是由INT2定义的，并在鼠标移动至对应变量（“abcd”）上面时给出相关的提示；对于包含在预处理条件语句中的宏定义而言，Eclipse/CDT会尝试分析条件跳转语句中的真值，如果可以静态的确定“#ifdef”语句的结果（如上例所示），Eclipse/CDT也会同样的给出定义的提示。

这已经非常的智能了。但是当移除掉上例中第二行的“#define DEBUG”语句之后，Eclipse/CDT就不能够确定DEBUG是否在别处被定义过，因此就无法给出“cd”变量的定义信息。这也就是导致之前Eclipse无法提示出“UnrootedScript”类型定义的原因。

为了解决这个问题，我的想法是在CDT目前的“准确”推断提示系统的基础上，添加一个“可能”推断提示系统，在遇到类型定义的时候记录下来，当“准确”提示系统无法得到定义信息的时候就将“可能”提示系统的定义信息（集合）展示给用户。

进一步的，“可能”推断提示系统可以通过用户的点击反馈来“反向”的推断和求解阻碍“精确”推断提示系统的变量（表达式）的值，从而进一步的改善提示系统的提示能力。例如在上例中，移除第二行的“#define DEBUG”语句之后，“可能”推断提示系统记录了INT宏的两个不同的定义，并在处理第16行INT宏引用时，同时计算出来“cd”和“dc”两种变量定义的结果，在第17行时就可以给出“cd”的定义值了。当用户点击了“cd”的定义提示浮窗时，推断提示系统就可以推断“DEBUG”宏已经被定义，进而可以确定宏CONCAT是第五行的定义结果。

\[1\]: [http://gcc.gnu.org/onlinedocs/cpp/Concatenation.html](http://gcc.gnu.org/onlinedocs/cpp/Concatenation.html)

\[2\]: [http://www.eclipse.org/recommenders/](http://www.eclipse.org/recommenders/)
