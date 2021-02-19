---
title: "[Howto] 修订github仓库中的提交信息"
date: "2013-06-22"
categories: 
  - "tricks"
tags: 
  - "git"
  - "github"
---

如果提交（commit）了代码并且已经推送（push）到了github之后，发现自己的作者名字（Author）需要修改，怎么办？用这个命令试试：

git commit --amend --reset-author
git push -f

如果在你第一次错误的 push 之后，没有人 pull 过那个仓库，那么你的修改就完成了。如果已经被人 pull 过了你的改动，就不太可能改过来了（“The already pushed change, if people have pulled it, is something you'll have to live with. [\[1\]](http://stackoverflow.com/questions/3593722/amend-username-for-a-pushed-commit-on-github)”）。

有此需求的同学可以参考\[1\]、\[2\]和\[3\]，希望对你有帮助。 ;)

\[1\]: [stackoverflow: amend-username-for-a-pushed-commit-on-github](http://stackoverflow.com/questions/3593722/amend-username-for-a-pushed-commit-on-github)

\[2\]: s[tackoverflow: github-doesnt-show-the-right-author-of-a-commit](http://stackoverflow.com/questions/11244547/github-doesnt-show-the-right-author-of-a-commit)

\[3\]: [github help: can-i-delete-a-commit-message](https://help.github.com/articles/can-i-delete-a-commit-message)
