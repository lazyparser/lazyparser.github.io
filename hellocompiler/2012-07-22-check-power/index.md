---
title: "在脚本中判断电脑是否插了电源"
date: "2012-07-22"
categories: 
  - "tricks"
tags: 
  - "bash-2"
  - "linux-2"
  - "script"
---

（针对Debian/Ubuntu发行版）

以下的代码可以判断电脑是否电池供电（来自于/etc/cron.daily/mlocate，apt 也使用了类似的脚本）：

if which on\_ac\_power >/dev/null 2>&1; then
    ON\_BATTERY=0
    on\_ac\_power >/dev/null 2>&1 || ON\_BATTERY=$?
    if \[ "$ON\_BATTERY" -eq 1 \]; then
	exit 0
    fi
fi

这段脚本使用“on\_ac\_power”这个小工具来判断是否AC电源供电。这个工具属于包“powermgmt-base”，默认安装。“on\_ac\_power”没有参数，启动后没有屏幕输出，通过返回值来发挥结果：

- 0（zero）：电源供电
- 1（one）：电源供电
- 255：程序无法判断

这个工具位于“/sbin/”目录下，同时在“/usr/bin/”目录下有一个符号链接指向前者。也是一个 Bash 脚本，不到一百行代码，通过“/proc/”目录中的信息来进行判断。

#!/bin/sh
#
# Returns 0 (true) if on AC power
#         1 (false) if not on AC power
#         255 (false) if can't tell
#
# Example shell script:
#     if on\_ac\_power; then
#       echo We're on AC power
#     else
#       echo Can't say we're on AC power
#     fi

set -e

# sysfs
#
# This algorithm is complicated by the possibility of multiple AC
# adapters.  We scan the ac\_adapter/power\_supply directory looking for adapters
# that have known states.  If any adapter is on-line, we return 0. If
# no adapters are on-line but one or more are off-line, we return 1.
#
OFF\_LINE\_P=no

if \[ -d /sys/class/power\_supply/ \]; then
    for FN in /sys/class/power\_supply/\*; do
	if test -d "${FN}" && test -r "${FN}/type"; then
	    type="$(cat ${FN}/type)"
	    if test "x${type}" = "xMains"; then
		if \[ -r "${FN}/online" \]; then
		    online="$(cat ${FN}/online)"
		    \[ "$online" = 1 \] && exit 0
		    \[ "$online" = 0 \] && OFF\_LINE\_P=yes
		fi
	    fi
	fi
    done
    \[ "${OFF\_LINE\_P}" = "yes" \] && exit 1
fi

# ACPI
# same algorithm as above, a fallback only when the generic sysfs interface
# is not available (old kernels only)
if /sbin/acpi\_available && \[ -d /proc/acpi/ac\_adapter \]; then
    for FN in /proc/acpi/ac\_adapter/\*; do
	if \[ -d "${FN}" \]; then
	    if \[ -r "${FN}/state" \]; then
		grep --quiet on-line "${FN}/state" && exit 0
		grep --quiet off-line "${FN}/state" && OFF\_LINE\_P=yes
	    elif \[ -r "${FN}/status" \]; then
		grep --quiet on-line "${FN}/status" && exit 0
		grep --quiet off-line "${FN}/status" && OFF\_LINE\_P=yes
	    fi
	fi
    done
    \[ "${OFF\_LINE\_P}" = "yes" \] && exit 1
fi

# PMU
if \[ -r /proc/pmu/info \]; then
    exec awk </proc/pmu/info '
	BEGIN { FS=":"; ret = 255 }
	/^AC Power.\*1$/ { ret = 0; exit }
	/^AC Power.\*0$/ { ac = 1 }
        /^Battery.\*/ {
                if ($2 ~/0/ && ac == 1)
                        ret = 0
                else
                        ret = 1
                exit }
	END { exit ret }
    '
fi

# APM
if \[ -r /proc/apm \] && /sbin/apm\_available; then
    exec awk </proc/apm '
	BEGIN { ret = 255 }
	/^\[0-9.a-zA-Z\]\* \[0-9.\]\* 0x.. 0x../ {
		if ($4 == "0x01") { ret = 0; exit }
		else if ($4 == "0x00") { ret = 1; exit }
	}
	END { exit ret }
    '
fi

# nothing is available
exit 255
