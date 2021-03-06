---
title: "一个小bug引发的Mozilla开发过程改进, 堪称雷厉风行"
date: "2015-11-28"
categories: 
  - "blabla"
tags: 
  - "mozilla"
  - "mozillian"
---

故事发生在2015年的感恩节前后, 起因很简单: Firefox的前端(UI部分)很多都是用JavaScript脚本写的, 9月份的时候一个开发人员无意间引入了一个bug, 这个bug的是类似"FooBar"错误写成了"Foobar", 拼错了一个变量的大小写. 然后这个bug就进入了Mozilla的代码库, 潜伏了2个月多几天, 到了11月份的时候被发现, 并且修复了.

然后一个目睹了整个事件的(看着级别比较高的)员工就不能忍了, 拍案而起, 在 Firefox Dev 邮件列表公开喷这个事情, 表示"对于JS的代码检查我们可以做到更好", 并且"对于Nightly地测试我们可以做得更好".

这要是在一般的公司内部, 会在你上个厕所的时间内就演变成 Developer, Reviewer, QA 和 Manager 之间的撕逼大战, 妥妥的, 遵循"你不能说我有错否则就是骂我你针对我你是不是搞阴谋"这样的剧情发展下去. 但是这里是Mozilla, 于是立刻就就有(架构师级别的)人跳出来开始就这个需求 expand, 在bugzilla上开bug的开bug, 跳出来发表观点的发表观点, 跟这个需求有关系的Mozillian纷纷跳出来说自己做的 bug(s) 跟这个的关系, 可以先做A然后做B同时可以改过程C等等. 然后今天就看到, 一个现成的工具(ESLINT)已经可以在Mozilla的核心代码库上直接检查了, 被合并到了'mach'工具中. 一大批bugs被建立并开始fix\[1\].

这次事件的给我的感受是比较复杂和震撼的:

- 作为 Level 1 的 "Mozillian", 表示投身 Mozilla 这样的 highly-motivated 的社区真的会压力山大. 记得之前有一个 Firefox 开发人员(Level 3, not JS Team)特地写过一篇blog, 题目就叫"如何不要在Mozilla油尽灯枯(burnout)"\[2\]. 没有任何人会主动的压迫你做什么, 事实上 Mozilla 是 remote-friendly 的, 遵循一定程度的精英自治. 因此这需要你遵循着"能力越大, 责任越大"的原则不断的push自己. Mozilla 作为一个非常公开开放的组织, 基本上你所有的代码, 进展, 态度, 当然也包括过失, 个人威望, 都直接而且实时的曝光在网络上. 而全球各地的开发人员聚集在IRC上的时候, 如果你是足够重要的(比如到了Level 3), 几乎会一直都会有人在IRC问你问题, 在Bugzilla上让你Review, 让你回答疑问(needinfo), 或者让你bisect新暴露的bug. 这会让你像是被磁铁一样牢牢地吸住, 连轴转地贡献自己地力量. 如果你在IRC上被人ping了还不吭声, 或者消失了一段时间, 其他的人会自然而然的失望, 不再期待于你, 个人的 reputation 会有很大的影响.
- Mozilla算是一个高度协作地组织, 虽然我没有听过说要实施敏捷开发之类地口号, 没有SCRUM之类地过程, 这个反应速度实在是快. 如果是我知道地国内软件开发团队, 估计要先吵一段时间, 然后更高级别地人出来拍板, 然后各个PM调整进度条, 然后不同部门之间继续吵架. 注意到这个过程地改进是牵涉到多个小team的, 没有上面那种"把个人热情和名望都绑定在自己的言行上"的精英自治体系, 估计Mozilla上面的大头早就burnout了.
- 对事不对人, 跳出来说话地人素质都比较高. 相信这跟邮件列表公开与否并没有关系(Mozilla地组织模式比较难hide秘密), 就技术讨论技术改进的风格非常的高效\[3\]. 就我个人接触过的Mozillian而言, 都是非常的nice的. 我想即使有不nice或者很难打交道的人, 也会很快的被甄别出来, reputation 会掉得厉害, 会有人直接跳出来纠正或仲裁.
- 发起这次过程改进的开发人员(Gijs), 在发出了两封过程改进的号召之后, 恰好卷入了另一个争议中. 作为前端(JS)开发, 他一次提交涉及平台(C++)修改, 代码包含了一个小的 memory leak, 提交之后立刻被一个(可能是平台的)C++开发发现, 并以此提议"JS语言在动C++代码的时候应该增加一个C++的开发来review". 这个提议看着是有些"C++看不起JS"的味道\[4\], 但是同时, 那次commit确实有leak. 包括Gijs在内共有4个人参与了邮件讨论, 将两个问题拆分的非常清楚. 承认了错误的部分, 评估了影响程度, 同时也反驳了扩大的(带有偏见的)观点, 两个问题都有人站出来vouch. 这种应对能力, 我个人觉得对能力要求挺高的.\[5\]

\[1\] 我并没有关注fx-team那部分的bug, 平时关注放在了js-team这边, 具体多少个bugs并不了解. 感兴趣的同学可以自己查.

\[2\] Robert O'Callahan, "Avoiding Burnout" http://robert.ocallahan.org/2013/10/avoiding-burnout.html

\[3\] 当然, Mozilla也有因为bug处理过程长被人吐槽过. 最近的一个例子是 bug 322529, 再过2个月就整整10岁了! :P

\[4\] 邮件标题是: "C++ code from JS engineers probably need additional review from C++ engineers"

\[5\] 另一方面, 这也体现出来了Mozilla内部确实也会存在不满地情绪, 并且会发泄出来.
