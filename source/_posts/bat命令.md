---
title: bat命令
date: 2026-07-01 21:04:05
tags:
 -编程
comments: true 
categories:
 -编程
---
此文章所写不是所有命令，仅是挑了最简单，常用的命令，若想要执行某操作而文章中没有的话，建议先去bing一下有没有相应操作

*如果写中文的时候输出乱码，则现在使用的是UTF-8编码，改为GBK编码就可以正常显示*

**以下为新建Post文章的bat命令**
```
@echo off
cd /d E:\blog

set /p title=请输入文章标题：

call hexo new "%title%"
start "" "C:\Users\LENOVO\AppData\Local\Programs\Microsoft VS Code\Code.exe"
call hexo g
call hexo s

pause
```

bat文件是一种Windows系统下的批处理文件，用于自动执行一系列命令行指令，实现任务自动化和批量操作

# 语法
## @echo off 
***用来取消 PS C:\Users\LENOVO> 烦人前缀的***

使用前
```
PS C:\Users\LENOVO>hexo g
info...
PS C:\Users\LENOVO>hexo s
info...
```

使用后
```
info...
```
直接开始运行结果,开头一般都写这个，以下均为使用了这个命令后而做出的演示

## echo
***输出文字***

输入：
```
echo hello
```
输出：
```
hello
```

这个后面跟汉语不需要双引号。e.g.``echo 你好``

## pause
***让程序暂停***

```
请按任意键继续...
```

## cls
***当输入一堆命令在命令提示符中时，可使用 cls 将光标重置到屏幕的左上角***

输入：
```
cls
``` 
没错，只输入cls就万事大吉了


## title
***用于更改命令提示符窗口的标题***

输入：
```
title Hexo 管理工具
```
输出：
输入前
```
命令提示符
-----------------
C:\UsersLENOVO>|
```
输入后
```
Hexo 管理工具
-----------------
C:\Users\LENOVO>title Hexo 管理工具

C:\Users\LENOVO>|

```
## cd
***进入对应磁盘***
输入：
```
cd /d E:\blog
```
输出：
```
C:\Users\LENOVO>cd /d E:\blog
E:\blog>
```
/d 作用就是同时切换盘符和目录。它告诉系统：“我要去的这个路径，它的盘符和目录都要变。”

## dir
***查看对应目录下的文件***

```
E:\blog>cd /d E:\blog\source\img\bat命令

E:\blog\source\img\bat命令>dir
 驱动器 E 中的卷是 新加卷
 卷的序列号是 E8ED-E3DB

 E:\blog\source\img\bat命令 的目录

2026/07/01  22:01    <DIR>          .
2026/07/01  21:44    <DIR>          ..
2026/07/01  21:59            14,831 title-演示用法（输出前）.png
2026/07/01  21:47            17,305 title-演示用法（输出后）.png
               2 个文件         32,136 字节
               2 个目录 639,694,381,056 可用字节
```

## mkdir(md)
***创造文件夹***

输入：
```
mkdir image
```
和人为右击鼠标创造文件夹一样，只不过这个是由命令创造的

## rmdir(rd)
***删除文件夹***

输入：
```
rmdir /s /q image
```
/s 因为rmdir只能删除空的文件夹，/s可以将文件夹下面的子文件都可以删掉
/q quiet,取消删除前的确认提示。直接执行删除，不会再问你“确认要删除吗？”，不会进回收站，会直接删除。谨慎！ 
可以分开用 ``rmdir /s image``，``rmdir /q image``

## del
***删除文件***
输入：
```
del *.txt
```
del和rmdir的区别为del会把文件夹里面的文件都删干净，留一个空的文件夹，rmdir则是将文件夹删除。两个都可以配/s,/q来彻底删除文件
del支持通配符``del *.txt``:删除所有文件夹下TXT文件

### 通配符
1. *（星号）—— 代表“任意数量”的字符**
它是最常用的通配符，可以匹配 0个或多个 任意字符。
*.txt：代表所有以 .txt 结尾的文件（不管文件名多长，前面是什么）。
2026-*.jpg：代表所有以 2026- 开头的 jpg 图片。
E:\blog\*：代表 E:\blog 目录下的所有文件和文件夹。

2. ?（问号）—— 代表“单个”字符
它严格匹配 恰好 1个 任意字符，常用于定位文件名长度固定的文件。
file?.doc：能匹配 file1.doc、fileA.doc，但不能匹配 file12.doc（因为 ? 只能占一个位置）。
2026-07-??.log：能匹配 2026-07-01.log 到 2026-07-31.log 这 31 个文件

## set
***定义变量***
输入：
```
set name=Tom
echo %name%
```
输出：
```
Tom
```
个人感觉可以类比python中``a="tom"  print(a)``==>``tom``

## set /p
***输入变量***
输入：
```
set /p title=请输入标题：
echo 标题为%title%
```
输出：
```
请输入标题：**你好**
标题为**你好**
```
和python中的input一样``name = input()
print(name)``

## set/a
***计算***
输入：
```
set /a a=1+2
echo %a%
```
输出：
```
3
```

## if 
***执行判断***
输入：
```
set/p a=a=？
if %a%==1 (echo YES) else (echo NO)
```

输出：
```
a=?1
YES
```
```
a=?2
NO
```
一定要写到一行上,如果你把(echo YES)写到第二行，系统会报错，它不像Python，Python可以通过缩进识别，而bat中没有缩进，只能通过写到它后面来执行 
e.g``if%n%==1(go to start)``

## choice
***显示菜单***

输入：
```
choice /c 123 /n /m 请选择
```
输出：
```
请选择
```
**/c** 表示允许哪些按键  /c 123 只能按123，其他的不能按
，只能输入数字和字母，不能输入汉字
**/n** 在默认情况下choice 会自动显示：[1,2,3]?，但是在choice之前的命令一定会写123代表什么，所以默认显示的[1,2,3]?比较累赘，加上/n就会取消[1,2,3]?，直接输入，请选择
**/m** 提示信息,现在这个就可以写‘请输入选项’到cmd中

Choice后面的if只能跟errorlevel（错误等级）
```
choice /c 123 /n /m 请选择
if errorlevel 3 ...
if errorlevel 2 ...
if errorlevel 1 ...
```
有严格的排列顺序
``if errorlevel 1 ...``代表≥1，也就是说你输入3，会先执行1，然后2、3就不执行了，所以应该采取倒序排列

也可以写做
```
choice /c 123 /n /m 请选择
if errorlevel == 1 ...
if errorlevel == 2 ...
if errorlevel == 3 ...
```
这样的话，就不需要严格的顺序了

## goto
***跳转***
输入：
```
:menu

echo 1
echo 2

goto menu
```
输出：
```
1
2
1
2
...
```
其中``:menu``为标签，执行到goto menu后，跳转到:menu上继续向下执行


## call
***调用内部标签，调用外部程序***
输入：
调用内部标签
```
call :myFunction
echo 函数执行完毕，继续执行主流程
pause
exit /b

:myFunction
echo 这是被调用的函数
exit /b
```
调用外部程序
```
echo 这是主批处理
call other.bat
echo 主批处理继续执行

```

在执行call后，会直接跳转到另一个bat去执行，在另一个bat执行完毕之后，才会跳回主bat,这个命令也可以用来调用exe

## exit
***退出***
输入：
```
...
exit
```
直接退出命令行窗口

输入：
```
...
exit /b
```
仅仅退出当前bat,不退出命令行窗口

## 文件复制
***复制，移动，重命名***
**复制**
```
copy a.txt b.txt
```
将 a.txt 复制一份，并命名为 b.txt。如果 b.txt 不存在，系统会自动创建；如果 b.txt 已存在，系统会直接覆盖（且默认不提示确认）
完整语法：copy [源文件路径] [目标文件路径]
copy 不能复制文件夹（即带子目录的目录）。如果要复制整个文件夹，必须用 xcopy 或 robocopy。
如果目标路径带有空格（如 Program Files），必须加引号：copy a.txt "C:\Program Files\a.txt"
**移动（剪切）**
```
move a.txt test\
```
将 a.txt 从当前文件夹剪切到 test 文件夹中
完整语法：move [源文件/文件夹] [目标路径]
目标路径结尾的反斜杠 \ 至关重要：
move a.txt test\：如果 test 是一个文件夹，会把 a.txt 移进去。
move a.txt test：如果 test 不存在，系统会把 a.txt 重命名为 test（无后缀名文件）；如果 test 是一个已存在的文件夹，则依然会移进去。这一点经常导致文件被意外改名！
如果目标位置已有同名文件，move 会直接覆盖且不提示（除非在 PowerShell 中）。
**重命名**
```
ren a.txt b.txt
```
将当前文件夹下的 a.txt 名字改为 b.txt。内容完全不变，只改文件名
ren [旧文件名] [新文件名]
如果 b.txt 已经存在，ren 会报错（提示“存在同名文件”），它不会像 copy 和 move 那样直接覆盖。这一点相对安全

## for
***循环***
遍历目录
输入：
```
for %%i in (*.md) do (
    echo %%i
)
```
遍历数字
```
for /d %%i in (*) do (
    echo %%i
)
```
好像不是很常用，了解不深

## 函数
***bat没有真正函数，一般用模拟***
输入：
```
call :hello

goto end

:hello
echo Hello
exit /b

:end
pause
```
## 常见系统命令

**打开程序**
```
start notepad
```

**打开网页**
```
start https://google.com
```

**打开文件夹**
```
start .
```
用系统默认的文件管理器（通常是“文件资源管理器”）打开当前所在的文件夹。

**等待**
```
timeout /t 5
```
**/t 5**  表示让系统暂停 5 秒钟，然后自动继续执行后续的命令。

**查看环境变量**
```
set
```

**查看路径**
```
echo %PATH%
```

**获取日期**
```
echo %date%
```
%date% 的输出包含空格和斜杠。如果你在写批处理脚本，想用它来创建文件名（比如 20260702.log），直接拼接 %date% 会因包含 / 而报错（文件名不允许斜杠）。通常需要用 ~ 截取或配合 wmic 命令处理。

**时间**
```
echo %time%
```
小时部分如果是 1 点，可能显示为 1:35:22.87（前面有一个空格，而不是 01）。这在拼接日志文件名时同样容易产生格式问题。

**用户名**
```
echo %username%
```

**电脑名**
```
echo %computername%
```
