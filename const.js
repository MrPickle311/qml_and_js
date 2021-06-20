//const
const var1 = 6.75;
//zmienna const musi byc zadeklarowana i zdefiniowana od razu
//to nie jest stała wartość , tylko stała referencja do pewnej wartości

//poniższe linijki nie będą działać
var1 = 34;
var1 += 5;

var g = 2;
{
    const g = 6;
    //tutaj g == 6
}
//tutaj g == 2

//stałe obiekty

const car = {type: 'abc' , model: "500", color: "white"};

//mogę zmienic warości poszczególnych elementów tablicy asocjacyjnej,ale nie mogę zmienic jej rozmiaru

car.type = "Ford";

//mogę też dodać property do obiektu

car.owner = "CJ";

car = {type: "XD",model: "67", color: "black"} // to wywali błąd

//podobnie z normalnymi tablicami

const cars = ['audi','saab','bmw'];
cars[0] = 'toyota'; //mogę zmienic element
cars.push("ford");//mogę dodać nawet

cars = ["xd","xd","xd"]; //ale nie mogę przypisać innej tablicy do tej zmiennej

//jesli stworze jakas zmienną typu var , to nie mogę zrobić jej przedeklarować jako const
var x = 5;
const x = 5; //nie mozna tak

{
    let x = 5; //ok
    const x = 5;//nie ok
}

//jednaj redeklaracje zmiennych typu const w innych blokach jest dozwolone

const y = 5;

{
    const y = 6;//ok
}

{
    const y = 8;//ok
}

//zmienne typu const są również hoistowane ,ale nie są inicjalizowane na górze
//to niesie za sobą to ,że nie mogę użyc zmiennej zanim jej nie zadeklaruję

carName = "Volvo";
const carName;
//powyższe dwie linijki nie zadziałają
