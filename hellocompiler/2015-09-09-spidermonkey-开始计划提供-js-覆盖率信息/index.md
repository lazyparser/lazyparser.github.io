---
title: "SpiderMonkey 开始计划提供 JS 覆盖率信息"
date: "2015-09-09"
categories: 
  - "spidermonkey"
tags: 
  - "code-coverage"
  - "ionmonkey"
  - "spidermonkey"
---

Mozilla Bugzilla 上已经有了对应的 [meta bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1189360). 具体的实现可能需要再等一到两个月.

> Nicolas B. Pierron \[:nbp\] 2015-07-30 08:05:23 PDT This is a meta bug to add Code Coverage for JavaScript code executed in SpiderMonkey. We have multiple reasons to do that:
> 
> The most important is to support release management team, by producing Code Coverage information over executed JavaScript code, and producing gcov-like data files. This would help improve the quality of Firefox, and help evaluate the quality of our tests to accept/refuse new features.
> 
> The second reason is to expose this information to the dev-tools, such that JavaScript developers do not have to instrument their code to have code coverage results within the dev-tools.
> 
> The third, if the overhead is neglectable, is to make use of the same information to improve IonMonkey register allocation and removal of unused basic blocks ahead of time.
