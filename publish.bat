@echo off

cd /d E:\blog

call hexo clean
call hexo generate

git add .
git commit -m "update"
git push

pause