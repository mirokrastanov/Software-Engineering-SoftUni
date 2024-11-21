dir="images"

file_count=$(ls -1 "$dir" | wc -l)

for ((i=1; i<=$file_count; i++)); do
  mv "$dir/image$i.jpg" "$dir/img_$(printf "%03d" $i).jpg"
done