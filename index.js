import Dostavka from "./Dostavka.js";

let z1=new Dostavka();
z1.Number=101;
z1.Cost=5.4;
z1.Ready=true;
z1.Adress="Рафиева 49";

let z2=new Dostavka();
z2.Number=102;
z2.Cost=34.5;
z2.Ready=false;
z2.Adress="Чюрлёниса 16";

let mas=[z1,z2];
mas.forEach(el => el.show());

