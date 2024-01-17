let nomor = prompt("Nomor Urut :");
let nama = prompt("Nama Anda :");
let alamat = prompt("Alamat Anda :");
let angkaGilir = prompt("Giliran Anda");



if (angkaGilir == "1"){
    hasil = "Saatnya Giliran Anda"
}
else if (angkaGilir == "2"){
    hasil = "Giliran anda tingal 1 orang lagi"
}
else if (angkaGilir == "3"){
    hasil = "Giliran anda tingal 2 orang lagi"
}
else if (angkaGilir == "4"){
    hasil = "Giliran anda tingal 3 orang lagi"
}
else if (angkaGilir == "5"){
    hasil = "Giliran anda tingal 4 orang lagi"
}
else if (angkaGilir == "6"){
    hasil = "Giliran anda tingal 5 orang lagi"
}
else if (angkaGilir == "7"){
    hasil = "Giliran anda tingal 6 orang lagi"
}
else{
    angkaGilir = "gausah nunggu serbotoaja tendang "
}
for(let i = 1; i <= 5 ; i++){
    document.write("<h1> ====TIKET "+nomor+"====</h1><h2>Nomor Anda : "+nomor+"</h2><h2> Nama Anda : "+nama+"</h2><h2> Alamat Anda : "+alamat+"</h2><h2> Angka : "+hasil)
}

