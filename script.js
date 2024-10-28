/*console.log(validator)
console.log(validator.isEmail("pepik@seznam.cz"))

const email = prompt("Zadej e-mail")

if(validator.isEmail(email)) {
    document.body.innerHTML = "<h1>Vitej na strance!</h1>"
} else {
    document.body.innerHTML = "<h1>Spatne zadany e-mail!</h1>"
}

console.log(validator)
console.log(validator.isEmail("pepik@seznam.cz"))
console.log(validator.isMobilePhone("111 222 333", "cs-CZ"))
console.log(validator.isMobilePhone("11122233", "cs-CZ"))
console.log(validator.isPostalCode("16900", "CZ"))

const cas = new Date()
console.log(cas.getDay())
console.log(cas.getHours())
console.log(cas.getTime())

const cas2 = dayjs()
console.log(cas2)
console.log(cas2.format("DD-MM-YYYY"))
console.log(cas2.format("MM/DD/YYYY"))

const novyRok = dayjs("2025-01-01")
console.log(novyRok)
console.log(cas2.isAfter(novyRok))
*/

/*
const answerElement = document.querySelector('#msg');
const email = prompt("Zadej e-mail")
if(validator.isEmail(email)) {
    answerElement.textContent = "<h1>E-mail v pořádku</h1>"
    answerElement.classList.add('msg--valid');
    answerElement.classList.remove('msg--invalid');
} else {
    answerElement.textContent = "<h1>Neplatný e-mail</h1>"
    answerElement.classList.add('msg--invalid');
    answerElement.classList.remove('msg--valid');
}

const creditCardNumber = prompt("Zadej číslo karty")

if(validator.isCreditCard(creditCardNumber)) {
    answerElement.textContent += "<h1>Vitej na strance!</h1>"
    answerElement.classList.add('msg--valid');
    answerElement.classList.remove('msg--invalid');
} else {
    answerElement.textContent += "<h1>Špatně zadané číslo karty!</h1>"
    answerElement.classList.add('msg--invalid');
    answerElement.classList.remove('msg--valid');
}*/
/*const ahoj = (jmeno, idZamestnance) => {
    console.log(`Ahoj uzivateli ${jmeno} - ${idZamestnance}`)
}

const nasobeni = (cislo1, cislo2) => {
    return cislo1 * cislo2
}

const spravneTelCislo = (tel) => {
    if(validator.isMobilePhone(tel, "cs-CZ")) {
        return true
    } else {
        return false
    }
}

ahoj("Michal", 123)
ahoj("Jana", 12)
ahoj("Erik", 3)
ahoj("Lucie", 1234)

console.log(nasobeni(10, 10))
console.log(spravneTelCislo("123456789")) 
const bezpecneHeslo = (heslo) => {
    if(heslo.length >= 16 && heslo.contains("@")) {
        return true
    }

    return false
}

const heslo = prompt("Zadej heslo")

if(bezpecneHeslo(heslo)) {
    console.log("Super!")
} else {
    console.log("Nebezpecne heslo")
}*/
//Cvičení: Vlastní funkce
//Obsah elipsy
const width = parseFloat(prompt("Zadejte šířku elipsy:"));
const height = parseFloat(prompt("Zadejte výšku elipsy:"));
const ellipseArea = (width, height) => {
    return (width / 2) * (height / 2) * Math.PI;
};

const area = ellipseArea(width, height);
document.body.innerHTML += "<h1>Plocha pozemku je: 2"+area+" m2</h1>"

//Maximum ze dvou čísel
const a = parseFloat(prompt("Zadejte první číslo"));
const b = parseFloat(prompt("Zadejte druhé číslo"));
const max2 = (a, b) => {
    if (a > b) {
        return a;
    } else {
        return b;
    }
};
