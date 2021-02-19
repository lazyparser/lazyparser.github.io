---
title: "如何在大陆构建 Firefox for Android"
date: "2015-10-29"
categories: 
  - "tricks"
tags: 
  - "android"
  - "bootstrap"
  - "fennec"
  - "firefox"
  - "mach"
---

大陆由于墙的缘故, 不仅Google的服务没有正确的部署, 所有依赖于Google的服务都会出现问题. Firefox for Android (以下称 Fennec) 需要使用 Android SDK 和 NDK 进行构建, 因此也就遇到了同样的问题, 导致了 Mozilla 仓库中的 mach bootstrap 命令无法正确执行.

一种方式是不使用 mach bootstrap 命令初始化的 toolchain, 利用你之前手工下载的 Android SDK/NDK 进行构建. 方法是配置 mozilla 仓库根目录下的 mozconfig 参数, 指定好路径.

另一种方式是死磕, 在 mach bootstrap 过程中加入一点手工的方法来绕过. 以下是方法:

1. 首先你需要 google hosts 能够下载基本的SDK等; 具体可以自行上 github 上找找;
2. 运行 mach bootstrap, 在尝试 refresh android repository addons list-2.xml 或者类似的文件的时候会显示读取失败.
3. 手工的切换到 $HOME/.mozbuild 中的目录. 找到 Android 工具并运行, 一般是 **$HOME/.mozbuild/android-sdk-linux/tools/android**
4. 这是就看到了熟悉的 Android SDK 管理页面. 在配置中取消 HTTPS, 强制使用 HTTP. 安装所有需要的 SDK.
5. 回到 mozilla-central 目录下运行 **mach build**
6. 这个时候可能会遇到说找不到正确的 SDK 和 NDK 路径, 这是因为 **bootstrap** 没有正确执行结束导致的. 解决方法是修改 mozconfig 配置文件中"--with-android-sdk"和"--with-android-ndk"选项, 指向具体的位置.

之后就可以执行 mach build & mach package 正确的编译出 apk 了.

PS: 当然还有一种最为高大上的方式就是VPN了...然而下载量很大的说...
