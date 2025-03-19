/*
3. Massiv verilib. "Episode 4: New Hope" kimi mesajları ardıcıl olaraq konsola çıxarın. Massiv elementlərin düzün.
let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi'];

Episode 4: New Hope
Episode 5: Empire strikes back
Episode 6: Return of the Jdi */

let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi']
arr.splice(0,1,"Episode 4: New Hope")
arr.splice(1,1,"Episode 5: Empire strikes back")
arr.splice(2,1,"Episode 6: Return of the Jdi")
let mesaj = ""
for(let i = 0;i<=arr.length -1;i++){
     console.log(arr[i]);
     
}

