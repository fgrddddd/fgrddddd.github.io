@echo off

cd /d E:\blog

git push origin main

call hexo clean
call hexo generate

git add .
git commit -m "update"

git push -f origin main

pause