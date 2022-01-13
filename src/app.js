//Engin Demiroğ JS kampı 1.video başlangıç {13.01.2022}

console.log("Merhaba Kodlama.io");

//21:20  13.01.2022 dersteyiz 

//JS de type safe korunmaz

/*JS de değişkenleri tanımlamanın 3 yolu vardır; 
1-var
2-let
3-const
*/

/* 
const: sabit değişkendir değeri değişmez örneğin;
*/

const baskentFR = "Paris"

console.log(baskentFR)

"---------------------------------"

/*var:saf JS de kullanılır bazı sorunları vardır örneğin; */

var baskentTR = "Ankara"

{
    var baskentTR = "Diyarbakır"
}

console.log(baskentTR)

/*
sonuç: {} parentizi ayrı bir dünyayı temsil eder mesela biz baskent adında bir değişken daha oluşturuyoruz farklı bir dünyada ama var en son verdiğimiz değeri yani Diyarbakırı alıyor değer olarak bu bir hatadır
*/

"-------------------------------"

/* 
let: ES6 ile JS`ti kolaylaştırmak ve hataları gidermek için yapılan en iyi güncellemelerden biridir.Bu sayede üsteki var değişkenindeki gibi hata almlıyız örneğin;
*/

let baskentABD = "Washington"

{
    let baskentABD = "Hawai"
}

console.log(baskentABD)

/* 
Sonuç:let değişkeninde {} içi başka bir dünya kabul edildiği için konsola Washington yazıldı.
*/

"-------------------------------"

//21:43 molaa

//22:38 dersteyizzz

//Arraylar (dizi)

/* 
Notlar:
        1-Arraylar çoğul isimlerle adlandırılmalı.
        2-Adlandırma yaparken;
        3-Array içine array yazılabilir, sayı yazılabilir, harf yazılabilir
            a-camelCasing (JS gibi dillerde kullanılır ilk harf büyük ikincisi küçük)
            b-PascalCasing (C# gibi dillerde kullanılır ilk harfler büyük)
*/

//Örnek bir Array;

let Krediler = ["Konut Kredisi", "İhtiyaç Kredisi", "Kamu Kredisi"]

console.log(Krediler)

let Array = [12, "Array Örnek", ["a", "b", "c"]]

console.log(Array)

//For döngüsü giriş 

//Arrayler ne işe yarar: back-end`ten gelen json formatını front-end nasıl yansıtılır örneği ile Arraylerin kullanım amacını gördük

// https://jsonplaceholder.typicode.com/users --- sitesinde json formatında dosyalar var ve bu dosyalar arrayler içinde bu şekilde o arrayleri açabiliriz.


for (let index = 0; index < Array.length; index++) {
    console.log(Krediler[index])
}

// 14.01.2022 00:13 ders bitişşş