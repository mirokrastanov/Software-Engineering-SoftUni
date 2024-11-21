mkdir backup
cp data.txt backup
tar -czvf backup.tar.gz backup
ls -lh backup.tar.gz