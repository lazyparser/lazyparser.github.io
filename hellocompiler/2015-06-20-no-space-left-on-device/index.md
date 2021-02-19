---
title: "“No space left on device“ 的解决过程"
date: "2015-06-20"
categories: 
  - "nix"
tags: 
  - "devops"
  - "linux-2"
  - "xfs"
---

管理的一个集群上的 HW RAID FS 出现了这个问题：

```
mkdir: cannot create directory `some_folder': No space left on device
```

1. 用 **df** 检查，磁盘空间只用了一半；
2. 用 **df -i** 检查，inode 空间只用了 1%，还很充足；
3. 猜测可能是IO缓冲或文件读写异常，用 **lsof** 检查，没有问题；
4. 停掉 NFS 服务，**umount**，再 mount 回来，问题依旧；
5. 使用 **smartctl** 命令检查 RAID 状态，没有发现问题；
6. 注意到文件系统是 XFS，使用 **xfs\_repair** 自动修复，重新挂载，问题依旧；
7. 最后的猜测是因为 XFS 的前 1TB 满了，添加了 **inode64** 的选项，重新挂载，问题搞定。
8. 最后，别忘记重新开始NFS服务。

折腾了一晚上，最后的解决方法很简洁。

```
mount -o inode64 /dev/sdx /mount/point
```

如果一开始没有想当然的认为是EXT4分区的话可能就简单很多啦。还是因为对XFS不熟悉导致搜索了很久才找到问题所在。
