function randomcard() {
    let a = {};
    a["numero"] = parseInt(Math.random() * 13 + 1);
    a["tipo"] = parseInt(Math.random() * 4);
    return a;
}

let obj = randomcard(), tip, num;

switch (obj.numero) {
    case 11: num = "J"; break;
    case 12: num = "Q"; break;
    case 13: num = "K"; break;
    case 1: num = "A"; break;
    default: num = obj.numero
}
switch (obj.tipo) {
    case 0: tip = "diamond"; break;
    case 1: tip = "spade"; break;
    case 2: tip = "club"; break;
    case 3: tip = "heart"; break;
}
document.querySelector("#card").classList.remove("diamond");
document.querySelector("#card").classList.add(tip);
document.querySelector("#middle").innerText=num;
