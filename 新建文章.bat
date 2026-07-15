@echo off
cd /d E:\blog

set /p title=请输入文章标题：

call hexo new "%title%"
start "" "C:\Users\LENOVO\AppData\Local\Programs\Microsoft VS Code\Code.exe"
call hexo g
call hexo s

pause