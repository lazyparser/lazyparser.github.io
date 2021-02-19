---
title: "谁在为SpiderMonkey提交代码"
date: "2013-06-13"
categories: 
  - "spidermonkey"
tags: 
  - "ionmonkey"
  - "spidermonkey"
---

[Ehsan Akhgari](http://ehsanakhgari.org/) 在自己的一篇博客\[1\]中介绍了如何通过 git 的 log 日志统计得到了各个开发人员的提交统计. 并给出了Mozilla SpiderMonkey 引擎开发人员2012年上半年的提交统计, 这是一部分结果:

$ git log --format='%an <%ae>' \\
    --since=2012-01-01 --until=2012-07-01 \\
    --all --no-merges -- js/ | sed 's/@/--at--/' | \\
    grep -v ^commit | sort | uniq -c | sort -rn | head
 199 David Anderson <danderson--at--mozilla.com>
 155 Jan de Mooij <jdemooij--at--mozilla.com>
 133 Jeff Walden <jwalden--at--mit.edu>
 115 Luke Wagner <luke--at--mozilla.com>
 114 Bill McCloskey <wmccloskey--at--mozilla.com>
 108 Nicholas Nethercote <nnethercote--at--mozilla.com>
 105 Marty Rosenberg <mrosenberg--at--mozilla.com>
 104 Bobby Holley <bobbyholley--at--gmail.com>
 103 Nicolas Pierron <nicolas.b.pierron--at--mozilla.com>
  78 Terrence Cole <terrence--at--mozilla.com>

Ehsan 在博客中同时提供了生成数据的(一行)命令脚本, 并对各个参数进行了详细的解释. 只要是 git 仓库就可以使用这种脚本进行统计(需要改一下起始时间和结束时间). 如果你有兴趣, 可以看看自己的仓库中谁最努力. :-)

\[1\]: [Data about people’s contribution to the Mozilla code base](http://ehsanakhgari.org/blog/2012-10-11/data-about-peoples-contribution-to-the-mozilla-code-base)
