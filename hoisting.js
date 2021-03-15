//zmienna w JS może być użyta wcześniej niż była zadeklarowana

x = 5;

console.log("xd " + x)

var x;

//Hoisting jest to domyślne zachowanie przenoszenia wszystkich na górę danego zasięgu

//ale jeśli damy let w takie sytuacji , to uzyskam RefferenceError lub undefined

y = 19;

let y;

console.log(y)

//ale kiedy tak zrobimy z specyfikatorem const ,to program po prostu nie ruszy
//z = 20;
//const z;
//console.log(z)

//ale hoisting działa tylko dla deklaracji ,nie pociąga za sobą inicjalizacji nawet jeśli
//były by one w tym samym wyrażeniu
var t = 6;

console.log("hoist2: " + t + u)

var u = 8;//do góry zostanie przeniesiona tylko deklaracja
