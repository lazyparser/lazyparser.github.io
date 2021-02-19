---
title: "Thunderbird \"Unable to find specified executable\" 错误解决方案"
date: "2011-04-06"
categories: 
  - "tricks"
tags: 
  - "bug"
  - "linux-2"
  - "thunderbird"
---

重装Linux系统之后，直接复制了thunderbird的用户目录到新的home目录下。thunderbird启动后总是间歇性弹出来提示："Unable to find specified executable" 。

查询了一下,从[这篇文章](http://www.khattam.info/solved-unable-to-find-specified-executable-alert-when-new-mail-arrives-in-thunderbirdicedove-2010-11-13.html)和[这篇文章](http://getsatisfaction.com/mozilla_messaging/topics/unable_to_find_specified_executable)知道了是Gnome Integration Addon调用了新系统没有安装的notify-send命令导致的。

解决方法也很简单，安装“libnotify-bin”包即可：

#Ubuntu
sudo apt-get install libnotify-bin
#Fedora:
su -c 'yes|yum install libnotify'
