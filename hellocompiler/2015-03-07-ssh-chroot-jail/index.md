---
title: "构建一个受限SSH中转环境的简单教程"
date: "2015-03-07"
categories: 
  - "nix"
tags: 
  - "chroot"
  - "jail"
  - "ops"
  - "ssh"
---

单位中有一些机器需要通过SSH跳板机跳一次，网管希望通过跳板机进行SSH跳转的用户只能够执行SSH命令。

可以使用的方法很多，Allan Feid 提供的方法是相对简单的一个：

[http://allanfeid.com/content/creating-chroot-jail-ssh-access](http://allanfeid.com/content/creating-chroot-jail-ssh-access "http://allanfeid.com/content/creating-chroot-jail-ssh-access")

在参照实现的过程中，需要注意这个教程是针对32位系统的，直接照搬的话可能会导致SSH报告说“/bin/bash不是目录”的错误，原因是该教程中使用的 l2chroot 脚本没有检测目的目录是否存在导致了以下命令错误：

Copying /lib64/ld-linux-x86-64.so.2 /var/jail//lib64

解决方法是添加一个 /lib64 目录，重新运行 l2chroot 就可以了。
