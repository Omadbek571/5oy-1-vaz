// 1-SAVOL

// let arr = new Set([1, 2, 3, 3, 4, 5, 6, 7]);

// console.log(arr);

// 2-SAVOL

// function noyobBelgilar(satr) {
//     let belgilar = new Map();

//     for (let belgi of satr) {
//         belgilar.has(belgi) ? belgilar.set(belgi, belgilar.get(belgi) + 1) : belgilar.set(belgi, 1);
//     }

//     return belgilar;
// }

// let satr = "Salomat";
// let belgiMap = noyobBelgilar(satr);
// console.log(belgiMap);


// 3-SAVOL

// function func(mass) {
//     let el = new Set(mass);
//     if (el.size === 1) {
//         return true;
//     } else {
//         return false;
//     }
// }
// // togrisi
// let massiv1 = [1, 1, 1];
// console.log(func(massiv1));
// // hatosi
// let massiv2 = [1, 1, 7];
// console.log(func(massiv2));


// 4-SAVOL

// function birlashtirediganFunc(massiv1, massiv2) {
//     let birlik = new Set([...massiv1, ...massiv2]);

//     let yangiMassiv = Array.from(birlik);

//     return yangiMassiv;
// }

// let massiv1 = [1, 2, 3];
// let massiv2 = [3, 4, 5];
// let natija = birlashtirediganFunc(massiv1, massiv2);
// console.log(natija);


// 5-SAVOL

// function hisoblash(satr) {
//     let sozlar = satr.split(' ');

//     let noyobSozlar = new Map();

//     sozlar.forEach(soz => {
//         if (noyobSozlar.has(soz)) {
//             noyobSozlar.set(soz, noyobSozlar.get(soz) + 1);
//         } else {
//             noyobSozlar.set(soz, 1);
//         }
//     });

//     return noyobSozlar;
// }

// let satr = "salomlar bolsin sizga salomlar bolsin";
// let natija = hisoblash(satr);
// console.log(natija);


// 6-SAVOL

// function dublikatlarniOlibTashlash(massiv) {
//     const unikalElementlar = new Set(massiv);

//     const yangiMassiv = [...unikalElementlar];

//     return yangiMassiv;
// }

// const massiv = [1, 2, 3, 4, 4, 5, 6, 6, 7];
// const yangiMassiv = dublikatlarniOlibTashlash(massiv);
// console.log(yangiMassiv);


// 7-SAVOL

// function tekshirediganFunc(ikinchiMass, birMass) {
//     let ikkinchiSet = new Set(ikinchiMass);

//     for (let element of birMass) {
//         if (!ikkinchiSet.has(element)) {
//             return false;
//         }
//     }
//     return true;
// }

// let birMas = [1, 2, 3];
// let ikiMass = [1, 2, 3, 4, 5];
// console.log(tekshirediganFunc(ikiMass, birMas));

// let birinchiMassiv2 = [4, 5, 6];
// console.log(tekshirediganFunc(ikiMass, birinchiMassiv2));


// 9-SAVOL


// function qiymatlarniYigindisi(qiymatlar) {
//     const qiymatlarMap = new Map();

//     for (let i = 0; i < qiymatlar.length; i++) {
//         if (!qiymatlarMap.has(qiymatlar[i])) {
//             qiymatlarMap.set(qiymatlar[i], 0);
//         }
//         qiymatlarMap.set(qiymatlar[i], qiymatlarMap.get(qiymatlar[i]) + 1);
//     }

//     let yigindi = 0;
//     for (let qiymat of qiymatlarMap.keys()) {
//         yigindi += qiymat * qiymatlarMap.get(qiymat);
//     }

//     return yigindi;
// }

// const qiymatlar = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
// console.log(qiymatlarniYigindisi(qiymatlar));

// 10-SAVOL

// function umumiyKalitlarniTopish(map1, map2) {
//     let yangiMap = new Map();

//     for (let kalit of map1.keys()) {
//         if (map2.has(kalit)) {
//             yangiMap.set(kalit, map1.get(kalit));
//         }
//     }

//     return yangiMap;
// }

// let map1 = new Map([
//     ['a', 1],
//     ['b', 2],
//     ['c', 3]
// ]);

// let map2 = new Map([
//     ['b', 20],
//     ['c', 30],
//     ['d', 40]
// ]);

// let natijaMap = umumiyKalitlarniTopish(map1, map2);
// console.log(natijaMap);
















