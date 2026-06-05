@echo on
cd /d E:\blog

hexo clean
hexo generate

git add .
git commit -m "update"
git push

echo.
echo ===== 完成 =====
pause