/*
5. Verilən mətn tip dəyərdəki vergülləri nöqtəli vergüllə əvəz edin. 
'32, 31, 34, 36, 31' mətni verilmişdir ,İçindəki vergülləri nöqtəli 
vergüllə əvəz edin.(Massivden istifadə ederek */

let metin = "32, 31, 34, 36, 31"
let con = metin.split(",")
console.log(con.join(";"));
