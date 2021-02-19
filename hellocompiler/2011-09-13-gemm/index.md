---
title: "GEMM"
date: "2011-09-13"
categories: 
  - "research"
---

翻译自维基百科（[http://en.wikipedia.org/wiki/General\_Matrix\_Multiply](http://en.wikipedia.org/wiki/General_Matrix_Multiply)）

General Matrix Multiply（GEMM，通用矩阵相乘）是“基础线性代数程序库”（BLAS）的子程序库，执行两个矩阵的相乘计算。根据精度分成四个不同的版本：

- SGEMM：单精度GEMM；
- DGEMM：双精度GEMM；
- CGEMM：复杂（合成？）单精度GEMM；
- ZGEMM：复杂（合成？）双精度GEMM。

GEMM是构建其它高性能计算程序的基础单元，所以各个高性能计算机器的生产商（和许多研究人员）都致力于发挥硬件的极限来提升GEMM的运行效率。同时，GEMM也是LINPACK——评价高性能计算机器的重要指标——的最重要的组成部分，针对BLAS的优化往往始于对GEMM的优化。
