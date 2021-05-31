



 document.getElementById("calc").addEventListener("click", function calc() {
  let departure = document.querySelector("#value1").value;

  let depDays = departure.substring (8,10);
  let departureDays = parseInt(depDays);

  let depMonth = departure.substring (6,8);
  let departureMonths = parseInt(depMonth);

  let depYear = departure.substring (0,6);
  let departureYears = parseInt(depYear);

  let arrival = document.querySelector("#value2").value;

  let arrDays = arrival.substring (8,10);
  let arrivalDays = parseInt(arrDays);

  let arrMonth = arrival.substring (6,8);
  let arrivalMonths = parseInt(arrMonth);

  let arrYear = arrival.substring (0,6);
  let arrivalYears = parseInt(arrYear);

  let travelDays = arrivalDays - departureDays;
  let travelMonths = arrivalMonths - departureMonths;
  let travelYears = arrivalYears - departureYears;

if (travelDays < 0) {
  travelMonths -=1;
  travelDays +=30;
  //return travelDays;
}
  if (travelMonths < 0) {
    travelYears -=1;
    travelMonths +=12;
  //  return travelMonths;
}
console.log(travelMonths)

if (travelDays == 0) {
   document.querySelector("#dienos").innerHTML = '';
} else if (travelDays == 1 || travelDays == 21 || travelDays == 31) {
  document.querySelector("#dienos").innerHTML = " " + travelDays + ' dieną ';
} else if (travelDays > 1 && travelDays < 10 || travelDays > 21 && travelDays < 30) {
  document.querySelector("#dienos").innerHTML = " " + travelDays + ' dienas ';
}  else if (travelDays < 21 && travelDays > 9 || travelDays == 30) {
  document.querySelector("#dienos").innerHTML = " " + travelDays + ' dienų ';
};

if (travelMonths == 0) {
   document.querySelector("#mėnesiai").innerHTML = '';
} else if (travelMonths == 1) {
  document.querySelector("#mėnesiai").innerHTML = " " + travelMonths + ' mėnesį,';
} else if (travelMonths > 1 && travelMonths < 10) {
  document.querySelector("#mėnesiai").innerHTML = " " + travelMonths + ' mėnesius,';
}  else if (travelMonths > 9 && travelMonths < 13) {
  document.querySelector("#mėnesiai").innerHTML = " " + travelMonths + ' mėnesių,';
};

if (travelYears == 0) {
   document.querySelector("#metai").innerHTML = '';
} else if (travelYears > 0 && travelYears < 10) {
  document.querySelector("#metai").innerHTML = travelYears + ' metus,';
} else if (travelYears > 9 && travelYears < 21) {
  document.querySelector("#metai").innerHTML = travelYears + ' metų, ';
};


if (departureMonths == 12 || departureMonths > 0 && departureMonths < 4) {
  document.querySelector("#daiktai").innerHTML = 'Šilta striukė, vilnonės kojinės bei pirštinės! Nesušalk.'
} else if (departureMonths > 3 && departureMonths < 6) {
  document.querySelector("#daiktai").innerHTML = 'Pasiruošk pavasariniam orų pokyčiam, turėk striukę nuo lietaus bei akinius nuo saulės.'
} else if (departureMonths > 5 && departureMonths < 9) {
  document.querySelector("#daiktai").innerHTML = 'Vasara! Vienas iš svarbiausiu dalykų vasara yra kremas nuo saulės, akiniai, lengvi marškinukai bei kepurė.'
} else if (departureMonths > 8 && departureMonths < 12) {
  document.querySelector("#daiktai").innerHTML = 'Ruduo, lietingas metas, bet gali ištaikyti ir šiltai bobų vasarai, nepersirenk daug, bet su savimi turėk skėtį.'
}

if (travelDays > 15 || travelMonths > 1 || travelYears > 1) {

}

});
