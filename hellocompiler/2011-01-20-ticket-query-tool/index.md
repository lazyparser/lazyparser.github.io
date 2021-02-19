---
title: "赶集网火车票查票小工具"
date: "2011-01-20"
categories: 
  - "tricks"
tags: 
  - "bash-2"
  - "script"
  - "火车票"
---

这几天忙着买回家的火车票，早晨四点爬起来去火车站买票都没有买到，太难买了。无奈之下将希望寄托于赶集网、酷讯之类的转票网站。转票信息都很火热，一转眼就被人打电话买了。手工查票速度比较慢，也没有精力做别的事情。这个小脚本是自己刷页面刷烦了的结果，自动查最新的火车票转让信息，显示转票的车次，日期，还有电话号码。

#!/bin/bash
#赶集网查票小工具
#date:2011-1-20
#author:ww

#临时文件的名字
tmp="R8zk9B\_Kdn3"
#ri\_qi表示关注多少号的票,25=25号
ri\_qi="25"
#关心的车次
che\_ci="T1"
#每隔三秒钟刷新一次，可以更改
delay=3
while sleep $delay
do
	wget "http://bj.ganji.com/piao/" -O $tmp.html -o /dev/null
	urls=$(grep -A 4 -i 'class="list\_cont"' $tmp.html | \\
		head -n 12 | \\
		grep href | \\
		sed 's:^.\*href="/::;s:\\.htm.\*$:.htm:g' |\\
		grep 'htm' )
	for url in $urls;do
		wget "http://bj.ganji.com/$url" -O $tmp.detail -o /dev/null
		phone\_number=$(grep 'class="phoneNum"' $tmp.detail | \\
			sed 's:<\[^>\]\*>::g;s:\\s\*::g' | tr '\\n' ' ')
		ticket\_info=$(grep -A 4 -i "$url" $tmp.html | \\
			head -n 4 | \\
			tr '\\n' ' ' |\\
			sed 's/<\[^>\]\*>/,/g;s:\\s\\s\*::g;s:,,\*:,:g' )
		echo $ticket\_info | grep -q -e "$ri\_qi" && \\
    		echo $ticket\_info | grep -q -e "$che\_ci" && \\
			notify-send -t 20000 "$phone\_number" "$ticket\_info"
		echo "$phone\_number" "$ticket\_info"
	done
done

几句总结的话：

1. 使用了命令行输出和Gnome下的 libnotify 功能，需要 bash 环境，最好有 libnotify 支持。当然这个Windows下不好用。
2. 之所以可以直接刷是因为赶集网的车票信息是直接写在HTML里面的，所以可以直接解析到车次信息和电话号码。
3. 赶集网对电话号码的保护不是很完善，没有转换成图片显示。肯定有人会写爬虫专门去爬电话号码，卖给广告公司。
4. 第一次使用 Syntax Highlighter ComPress ，感觉效果很不错。
