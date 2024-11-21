echo "This is a line of text." > text.txt
echo "This is another line." >> text.txt
cat text.txt
sed 's/This/That/g' text.txt
sed 's/This/That/g' text.txt > new_text.txt