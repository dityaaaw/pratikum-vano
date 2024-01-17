let nama = prompt ("Nama :");
let tinggi = prompt ("Tinggi badan anda:"); 



// tinggi = parseInt(tinggi)


if(tinggi >= 170){
    alert("Tinggi anda normal ");
}else if(tinggi >= 180){
    alert("Anda sudah cukup tinggi");
}else if(tinggi <= 160){
    alert("Tinggi anda dibawah rata rata");
}else if(tinggi <= 150){
    alert("Anda kurang gizi");
}else {
    alert("tinggal nunggu ajal");
}
