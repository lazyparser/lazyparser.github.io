---
title: "Pidgin加密插件介绍"
date: "2011-03-01"
categories: 
  - "security"
tags: 
  - "im"
  - "pidgin"
  - "privacy"
---

# Pidgin是Unix/Linux下使用最多的IM客户端，支持MSN、GTalk、飞信[1](#sdfootnote1sym)等几十种协议。Pidgin同时也是一个开放应用程序框架，允许用户开发自己的插件。本文介绍在Pidgin官网列出的几款通信加密插件，并分析其安全性和易用性。

## Pidgin-paranoia

Pidgin-paranoia基于一次一密乱码本的加密原理。假设你和朋友各自有一本一模一样的小本子，里面写的是一串随机字符序列。当你要发信息给朋友的时候，就将信息（明文）按照顺序与小本子中的随机字符进行异或操作，这就加密成了密文。你的朋友收到密文之后根据小本子将密文再次进行异或操作，便还原了明文。之后你和朋友将乱码本上“用过”的字符序列撕掉，下次加密/解密的时候使用新的随机字符序列。如果乱码本的随机字符序列足够长，那么理论上一次一密乱码本是无法破解的。

一次一密乱码本原理上完美，使用上却有几个问题。第一个问题就是乱码本属于对称加密，你和朋友需要共享乱码本。如果安全的与朋友共享乱码本而不被他人监听获取，是对称密码的主要的问题。Pidgin-paranoia官方页面给出的一个方案是“拷贝到U盘里面，然后（寄）给你的朋友”。

对称加密的第二个问题是如果你有N个朋友，那么你就需要N个密码本。如果这些朋友相互之间通信，那么就需要N\*N个不同的密码本。朋友一多，乱码本管理就麻烦起来。

通信的安全性只依赖于乱码本的安全性，乱码本是明文保存在硬盘里的，进而安全性依赖于你和朋友的电脑的安全性。如果你的电脑被入侵，被盗窃，被别人扣留，那么对方就可以得到密码本，继而得以知道你和朋友聊天的所有内容。

另外，Pidgin-paranoia没有认证功能，无法确定和你聊天的是否就是你的朋友，中间人可以伪造消息。

Pidgin-paranoia目前的最新版本是0.4.0。

## Pidgin-GPG

PGP是久经考验的邮件加密工具/协议，而GPG是PGP的GNU实现。Pidgin-GPG实现了GPG的功能，从而（理论上）可以达到和GPG一样的安全性。

## Pidgin-Encryption

Pidgin-Encryption的设计考虑了安全性和易用性的折中问题，设计时参考了SSH的风格。Pidgin-Encryption为每一个帐号新建一个公钥/私钥对。当你与朋友聊天时，Pidgin-Encryption会将你的公钥发送给对方，同时接收对方的公钥并保存起来。相互有了对方的公钥之后便可以进行加密聊天了。下一次聊天时Pidgin-Encryption会先比对对方发送的公钥和上次接受的公钥是否一致，如果不一致将提示你进行确认，以防止中间人攻击。

Pidgin-Encryption最大的特点就是易用，安装并开启了之后，不需要额外的设置就可以直接使用。Pidgin-Encryption使用Mozilla的NSS库，提供加密和认证两个功能。缺点是其安全性也依赖于私钥的安全性，而私钥是明文保存的，如果你的电脑被入侵，被盗窃，被别人扣留，那么对方就可以得到私钥，继而可能破译你和朋友聊天的所有内容。

周期性的删除并重新生成自己的公钥/私钥对可以在一定程度上避免以往的聊天内容被破译。

## Pidgin-OTR

 

Pidgin-OTR是四款插件中最年轻的一款插件，采用Ian Goldberg等人专门为IM聊天设计的安全协议，其对IM通信安全的角度和目标也和之前的几款插件不同。

Ian Goldberg等人认为在IM上的“秘密”谈话应该和两个人在单独房间中谈话一样“秘密”，满足以下的特点（假设这两个人叫Alice和Bob）：

1. Alice能够确认自己在和Bob谈话，反之亦然。
2. 房间只有他们俩，除非实现安装了窃听器，或者Alice（Bob）自己说出来，没有人知道他们的谈话内容。
3. 即使Alice将Bob的谈话内容透露出来，她也不能证明这些话确实是Bob说的，反之亦然。

其中特点1是属于认证（Authentication）要求；特点2在网络上无法满足（任何路由节点都可以窃听），需要用加密来保证；特点3 Pidgin-Encryption和Pidgin-GPG都无法满足。Pidgin-OTR根据以上的场景，在保密性和认证功能的基础上提出了另外两个设计目标：

1. Perfect Forward Secrecy：即使获取了Bob和Alice的电脑，知道了所有的私钥、公钥、密码，截获了过去所有的数据包，也无法破译Alice和Bob过去的通信内容。
2. Repudiable Authentication：Bob知道自己在和Alice通信，但是无法向第三人证明信息就是Alice发送的。

在实现上，Pidgin-OTR使用了短生命期密钥和消息认证吗机制来达到上述的两个设计目标。大致的协议过程如下：

1. 通过经典的Diffie-Hellman密钥交换过程交换公钥，得到一个共享的密钥SS；
2. 密钥SS进行散列处理，得到通信需要的对称加密密钥EK和MAC密钥MK，加密通道建立完成；
3. 用第二组公钥再次使用Diffie-Hellman交换过程，得到第二个共享的密钥SS'；
4. 密钥SS'进行散列处理，得到通信需要的加密密码EK'和MAC密码MK'；
5. 丢弃SS、EK，将MK随后续数据报文发送出去，握手完成。

这个设计如何保证Perfect Forward Secrecy和Repudiable Authentication？

1. Perfect Forward Secrecy：Pidgin-OTR在每次会话建立的时候生成临时的公钥/私钥对，并在会话结束时删除。由于Alice（Bob）的私钥只存在于Alice（Bob）的电脑中，一旦删除便可做到彻底无法恢复。这就保证了即使窃取了Alice（Bob）的电脑，或是在其中装了后门，也无法知晓之前Alice和Bob的通信内容。
2. Repudiable Authentication：首先通信内容是采用的对称加密方式，这就使得Bob无法证明加密信息是自己生成的还是Alice生成的；其次步骤5的时候将MK发送出去，使得窃听者可以伪造基于密钥SS的数据包。由于Alice和Bob已经采用了基于SS'的密钥，所以无法欺骗Alice和Bob，但是另一方面，Alice和Bob就可以以此抵赖自己发送过的数据包。

## 其它通信安全问题

除了使用以上各种加密插件之外，以下问题也会对你和朋友的通信安全有影响：

1. Pidgin聊天记录。默认是开启的，而Pidgin-Encryption等插件都是是默认保存解密后的明文。如果你的电脑被别人访问，对方可以直接看到你的聊天记录。加密聊天的时候最好选择“不记录本次会话”，或者干脆关闭聊天记录功能。
2. 木马/后门/Rootkit/按键记录器。如果你是“重要人物”，那么小心你的电脑上可能会被黑客安装这些东西。这意味着你的私钥会被窃取，继而通信的安全性就不存在了。定期杀毒、经常更换私钥都无法彻底避免。用LiveCD或LiveUSB来启动可以彻底避免这个问题。
3. 站在背后的人/摄像头。他能看到你看到的内容，即所有聊天内容。
4. 不要在网吧使用。理由是网管和GA局都可以看到你的屏幕。

## 参考链接

pidgin-paranoia主页：[http://pidgin-paranoia.sourceforge.net/](http://pidgin-paranoia.sourceforge.net/)

pidgin-GPG主页：[https://github.com/segler-alex/Pidgin-GPG/wiki](https://github.com/segler-alex/Pidgin-GPG/wiki)

pidgin-encryption主页：[http://pidgin-encrypt.sf.net/](http://pidgin-encrypt.sf.net/)

pidgin-OTR主页：[http://www.cypherpunks.ca/otr/](http://www.cypherpunks.ca/otr/)

pidgin主页：[http://pidgin.im/](http://pidgin.im/)

[1](#sdfootnote1anc)通过将openfetion移植到Pidgin实现。
