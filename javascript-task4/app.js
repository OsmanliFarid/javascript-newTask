/*
.İstifadəçidən vergüllə ayrılmış beş ədədi daxil etməyi xahiş edin və onları 
massivdə saxlayın. İstifadəçidən beş ədəd elementi daxil etməyi tələb edən, onları 
massivə yazan və ən kiçik ədədi konsola çıxaran proqram yazın. */

let e1 = +prompt("reqem daxil et")
let e2 = +prompt("reqem daxil et")
let e3 = +prompt("reqem daxil et")
let e4 = +prompt("reqem daxil et")
let e5 = +prompt("reqem daxil et")
let arr = [e1,e2,e3,e4,e5]
console.log(arr);
if(e1<e2 && e1<e3 && e1<e4 && e1<e5){
    console.log(e1 + "en kicik ededdir");
    
}else if(e2<e1 && e2<e3 && e2<e4 && e2<e5){
    console.log(e2 + "en kicik ededdir");
    
}else if(e3<e1 && e3<e2 && e3<e4 && e2<e5){
    console.log(e3 + "en kicik ededdir");
    
}else if(e4<e1 && e4<e2 && e4<e3 && e4<e5){
    console.log(e4 + "en kicik ededdir");
    
}else if(e5<e1 && e5<e2 && e5<e3 && e5<e4){
    console.log(e5 + "en kicik ededdir");
    
}
