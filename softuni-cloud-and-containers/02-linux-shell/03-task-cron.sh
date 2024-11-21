echo "Hello, world!" > hello.sh
chmod +x hello.sh
crontab -e
# Add the following line to your crontab:
* * * * * /path/to/hello.sh