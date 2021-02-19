---
title: "如何用TrueCrypt加密Windows系统分区"
date: "2016-03-24"
categories: 
  - "security"
tags: 
  - "truecrypt"
---

如何用TrueCrypt加密Windows系统分区(Last Update: 2016-03-24 09:24:23) **0\. 从正确的位置下载** **这步错了，什么都没用了**。

1\. 首先需要明确硬盘是否是多系统 因为引导区会被TrueCrypt的引导程序覆盖，目前不支持引导linux；简单的解决方法是找个U盘，进入Linux，grub-install到U盘引导区，以后插U盘可以进入linux。难的解决方法是用grub引导后面提到的rescue.iso，比较麻烦，这里略过。

2\. 明确是否打算刻恢复光盘 TrueCrypt为了安全性要求刻录恢复光盘才行。没有检测到刻录设备时会提示要做恢复U盘。如果不想刻录，下载\[2\]中的WinCDEmu模拟器，在TrueCrypt生成ISO之后，用WinCDEmu挂载，盘符随意，TrueCrypt就能自动检测到光盘，就骗过去了。这个ISO比较重要， 需要在自己的U盘上复制一份，以后引导区坏掉了或者被覆盖了，还可以用这个。

**3\. 反复确认TrueCrypt是否是正版** **TrueCrypt网站已经自己关闭了，目前有一个github上的版本可信，国内所有网站上下载的都可能有后门。****不要相信任何迅雷、百度云、下载站之类提供的下载软件，从\[1\]上下载，是审计过的\[3\]。**

4\. 安装之后打开TrueCrypt，选择“System”菜单，选择第一个“Encrypt System Partition/Drive”，按照提示操作就可以。如果有linux分区，则不能选择加密整个Drive（磁盘），要选择加密系统分区（Partition）。

**5\. 密码一定要非常非常非常的长** 加密算法和散列算法选择什么无所谓，哪个都足够了。一般AES最快。

6\. 重启之后完成加密 经过加密操作之后TrueCrypt只是修改了引导区，加密从重新启动之后才开始。等大概1个小时就能完成，不影响常规电脑操作。也可以暂停，在合适的时候恢复加密。

7\. 随时可以解密

解密命令也是在System菜单下面 \[1\]: [https://github.com/AuditProject/truecrypt-verified-mirror/tree/master/Windows](https://github.com/AuditProject/truecrypt-verified-mirror/tree/master/Windows) \[2\]: [http://wincdemu.sysprogs.org/download/](http://wincdemu.sysprogs.org/download/) \[3\]: [http://istruecryptauditedyet.com/](http://istruecryptauditedyet.com/)
