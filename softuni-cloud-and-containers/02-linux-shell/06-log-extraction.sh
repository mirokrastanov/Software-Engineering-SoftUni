grep -Eo '^[0-9.]+' access.log > ip_addresses.txt
grep -Eo '\[[^]]+\]' access.log | sed 's/\[//g' | sed 's/\]//g' > dates.txt
