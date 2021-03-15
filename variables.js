//string
var str1 = "Hello";
var str2 = 'Hello'

//Można wiele zmiennych stworzyć za pomocą jednego var
var xd = 23, xd1 = "sad" , xd2 = 'das';

//jeśli nie nadamy przy deklaracji zmiennej żadnej wartości, to ma ona wartość : undefined
var maybe_undefined;

//tutaj redeklaracja zmiennej nie usuwa jej starej wartości, nadal a = 3
var a = 3;
var a;

//wartość poniższej zmiennej to '432'
var g = '4' + 3 + 2;

//nazwa zmiennej może mieć w sobie znak $
var $dg = 3;

//Zasięgi

//zmienne oznaczone słowem kluczowym var
//mogą być odczytane i zmodyfikowane prawie wszędzie
//jeśli chodzi o samodzielne bloki

{
    var trololo = 4;
}

//ale let sprawia ,że w tym bloku zmienna będzie tylko lokalna
{
    let param = "sd";
}

//pętla for

//jeśli chodzi o zasięgi globalne to var i let zachowują się tak samo
var i = 5;

for(var i = 0 ; i < 10 ; ++i )//tutaj pętla modyfikuje wcześniejsze i
{}
console.log('i: ' + i)

let j = 5;

for(let j = 0; i <10 ; ++j)//tutaj już nie
{}
console.log('j: ' + j)

//jeśli damy zmienną let w pętli to jest ona widoczna tylko w niej


//w funkcji już tak nie jest
//obydwa specyfikatory zachowują się tak samo
function func()
{
    let i = 20;
    var j = 20;
}

//mieszanie zmiennych o tej samej nazwie ,ale z innymi specyfikatorami var i let w jednym
//zasięgu nie jest dozwolone
var trololo = 1;
let trololo = 3;//źle

let r = 2;
var r = 's'; //źle

let y = 5;
let y = '23';//też źle
//END Zasięgi
