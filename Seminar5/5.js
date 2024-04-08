"use strict";

/*
Необходимо создать объект, в котором будут объединены два массива en и ru 
так, чтобы в объекте ключами выступали значения из массива en, а значениями 
объекта являлись значения из массива ru.
*/

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];

const daysOfWeek = {};
for (let i = 0; i < en.length; i++) {
  const enDay = en[i];
  const ruDay = ru[i];
  daysOfWeek[enDay] = ruDay;
}
console.log(daysOfWeek);
