// Type your JavaScript code here.

 function createItem() {
  localStorage.setItem("mytime", -100);
  alert("YURTLUM TR'YE ÖZEL KODLAR AKTİF EDİLDİ");
  localStorage.removeItem("hus3");
  localStorage.setItem("hus3", 50);
  
  location.reload();
}

 function createItem2() {
  localStorage.setItem("mytime", 100);
  alert("BEKİR'E ÖZEL KODLAR AKTİF EDİLDİ");
  localStorage.removeItem("hus3");
  localStorage.setItem("hus3", 50);
  
  location.reload();
}

 function createItem3() {
  localStorage.setItem("hus3", 60);
  alert("GHOST'A ÖZEL KODLAR AKTİF EDİLDİ");
  
  location.reload();
}






// İNPUT CHANGE 

let input1 = document.getElementById("btnoption0");
let input2 = document.getElementById("btnoption1");
let input3 = document.getElementById("btnoption2");
let input4 = document.getElementById("btnoption3");
let input5 = document.getElementById("btnoption4");

let pg1 = document.getElementsByClassName("pg1");
let pg2 = document.getElementsByClassName("pg2");
let pg3 = document.getElementsByClassName("pg3");
let pg4 = document.getElementsByClassName("pg4");
let pg5 = document.getElementsByClassName("pg5");

///////////////////////////////////////// 1
input1.addEventListener("change", function() {
  for (let i = 0; i < pg1.length; i++) {
    pg1[i].style.display = "flex";
  }
  for (let i = 0; i < pg2.length; i++) {
    pg2[i].style.display = "none";
  }
  for (let i = 0; i < pg3.length; i++) {
    pg3[i].style.display = "none";
  }
  for (let i = 0; i < pg4.length; i++) {
    pg4[i].style.display = "none";
  }
  for (let i = 0; i < pg5.length; i++) {
    pg5[i].style.display = "none";
  }
});
///////////////////////////////////////// 2
input2.addEventListener("change", function() {
  for (let i = 0; i < pg1.length; i++) {
    pg1[i].style.display = "none";
  }
  for (let i = 0; i < pg2.length; i++) {
    pg2[i].style.display = "flex";
  }
  for (let i = 0; i < pg3.length; i++) {
    pg3[i].style.display = "none";
  }
  for (let i = 0; i < pg4.length; i++) {
    pg4[i].style.display = "none";
  }
  for (let i = 0; i < pg5.length; i++) {
    pg5[i].style.display = "none";
  }
});
///////////////////////////////////////// 3
input3.addEventListener("change", function() {
  for (let i = 0; i < pg1.length; i++) {
    pg1[i].style.display = "none";
  }
  for (let i = 0; i < pg2.length; i++) {
    pg2[i].style.display = "none";
  }
  for (let i = 0; i < pg3.length; i++) {
    pg3[i].style.display = "flex";
  }
  for (let i = 0; i < pg4.length; i++) {
    pg4[i].style.display = "none";
  }
  for (let i = 0; i < pg5.length; i++) {
    pg5[i].style.display = "none";
  }
});
///////////////////////////////////////// 4
input4.addEventListener("change", function() {
  for (let i = 0; i < pg1.length; i++) {
    pg1[i].style.display = "none";
  }
  for (let i = 0; i < pg2.length; i++) {
    pg2[i].style.display = "none";
  }
  for (let i = 0; i < pg3.length; i++) {
    pg3[i].style.display = "none";
  }
  for (let i = 0; i < pg4.length; i++) {
    pg4[i].style.display = "flex";
  }
  for (let i = 0; i < pg5.length; i++) {
    pg5[i].style.display = "none";
  }
});
///////////////////////////////////////// 5
input5.addEventListener("change", function() {
  for (let i = 0; i < pg1.length; i++) {
    pg1[i].style.display = "none";
  }
  for (let i = 0; i < pg2.length; i++) {
    pg2[i].style.display = "none";
  }
  for (let i = 0; i < pg3.length; i++) {
    pg3[i].style.display = "none";
  }
  for (let i = 0; i < pg4.length; i++) {
    pg4[i].style.display = "none";
  }
  for (let i = 0; i < pg5.length; i++) {
    pg5[i].style.display = "flex";
  }
});
// İNPUT CHANGE 





var label1 = document.querySelector("#babanum > label:nth-child(2)");
var label2 = document.querySelector("#babanum > label:nth-child(4)");
var label3 = document.querySelector("#babanum > label:nth-child(6)");
var label4 = document.querySelector("#babanum > label:nth-child(8)");
var label5 = document.querySelector("#babanum > label:nth-child(10)");

label1.addEventListener("mouseover", function() {
  label1.click();
});

label2.addEventListener("mouseover", function() {
  label2.click();
});

label3.addEventListener("mouseover", function() {
  label3.click();
});

label4.addEventListener("mouseover", function() {
  label4.click();
});

label5.addEventListener("mouseover", function() {
  label5.click();
});



// GO LİNK "SHİFT + E OTO CHANGE LABEL 1 LABEL 2"
let toggle = true;

document.addEventListener("keydown", function(event) {
  if (event.shiftKey && event.keyCode === 192) {
    event.preventDefault();
    // var label1 = document.querySelector("#babanum > label:nth-child(2)");
    // var label2 = document.querySelector("#babanum > label:nth-child(6)");
    if (toggle) {
      label1.click();
    } else {
      label3.click();
    }
    toggle = !toggle;
  }
});
















// EN ÜSTTEKİ SAAT
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
 
    document.getElementById("YurtlumSaat").innerText = h;
    document.getElementById("YurtlumDakika").innerText = m;
    document.getElementById("YurtlumSaniye").innerText = s;  
    
    setTimeout(showTime, 1000);  
}

showTime();

// Title Change
document.querySelector("head > title").innerHTML = "YURTLUM • Mustafa Aykut Yurtlu";

// EN ÜSTTEKİ TARİH

var aylar = new Array("Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık");

var gunler = new Array("Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi");
var rakkamlar = new Array("4", "3", "2", "1", "0", "6", "5");

var t = new Date();
var gun = t.getDate();
var ay = t.getMonth();
var hafta = t.getDay();

gun = (gun < 10) ? "0" + gun : gun;

var s = (gun + " " + aylar[ay] + " " + gunler[hafta]);

var gh1 = (rakkamlar[hafta]);

document.getElementById("YurtlumGun").innerText = s; 


// TİMER ORTA MENÜ • MESAİ BİTİMİNE KALAN ZAMAN

var d = new Date();
var gun = d.getDay();
var haft = d.getDay();
 
  if (haft < 6) {
  // 👇️ if block runs
  var countDownDate = new Date("Jul 25, 2030 18:00:00").getTime();
  console.log('⛔️ Bugün Cumartesi Günü Değil ⛔️');
} else {
  var countDownDate = new Date("Jul 25, 2030 14:00:00").getTime();
  console.log('✅ Bugün Cumartesi Günü ✅');
}
 

var myfunc = setInterval(function() {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

   var xd0 = (days);
   var xd1 = (hours);
   var xd2 = (minutes);
   var xd3 = (seconds);
    
    xd0 = (days < 10) ? "0" + days : days;
    xd1 = (hours < 10) ? "0" + hours : hours;
    xd2 = (minutes < 10) ? "0" + minutes : minutes;
    xd3 = (seconds < 10) ? "0" + seconds : seconds;
 

const sp1 = document.getElementById("sp1").innerText = xd1;
const sp2 = document.getElementById("sp2").innerText = xd2;
const sp3 = document.getElementById("sp3").innerText = xd3;




//////////// GHBG TİMER 

    if (haft < 6) {
  // 👇️ if block runs
    if (xd2 < 30){
      ghda = (minutes + 0);
      ghsa = ((hours) + 2);
  }
  else {
      ghda = (minutes + 0);
      ghsa = ((hours) + 2);
  }

  console.log('⛔️ GHBG • Bugün Cumartesi Günü Değil ⛔️');
} else {
    if (xd2 < 30){
      ghda = (minutes + 0);
      ghsa = ((hours) + 6);
  }
  else {
      ghda = (minutes + 0);
      ghsa = ((hours) + 6);
  }

  console.log('✅ GHBG • Bugün Cumartesi Günü ✅');
}
 


document.getElementById("ghbg1").innerText = gh1; // BU KAÇ GÜN KALDIĞI
document.getElementById("ghbg2").innerText = ghsa; // BU KAÇ SAAT KALDIĞI
document.getElementById("ghbg3").innerText = ghda; // BU KAÇ DAKİKA KALDIĞI
  
  
}, 1000)


//////////// GHBG TİMER 


    var date = new Date();
    var hours = date.getHours(); // 0 - 23
    var minutes = date.getMinutes(); // 0 - 59
    var seconds = date.getSeconds(); // 0 - 59
    


// 18:30 DA ÇALIŞIR
// if (saat < 18 || daki < 30) {
console.log(hours);
console.log("ssssat");

if (hours == 17) {
  // 👇️ Yukarıdakiler Doğru İse
  document.getElementById("hs3").innerHTML = "🕔  AZ KALDI  🕔";
  // Title Change
  document.querySelector("head > title").innerHTML = "YURTLUM • MESAİ BİTTİ";

  console.log('✅✅✅ Mesai Bitimine Son 1 Saat ✅✅✅');

  // Renk Change "html"
 // document.querySelector("body").classList.add("mystyle");
 // document.querySelector("html").classList.add("mystyle"); 
  document.querySelector("#r4nk").classList.add("mystyle"); 
  
} else {
  // 👇️ Yukarıdakiler Yanlış İse
  document.getElementById("hs3").innerHTML = "MESAİ BİTİMİNE KALAN ZAMAN";
  // Title Change
  document.querySelector("head > title").innerHTML = "YURTLUM • Mustafa Aykut Yurtlu";
  

  console.log('⛔️⛔️⛔️ Mesai Bitmedi ⛔️⛔️⛔️');
  // renkli kenar çerçeve orta bar
  // document.querySelector("#r4nk").classList.add("mystyle"); 

}


// YURTLUM CHANGE TO BEKIR

let lastname = localStorage.getItem("mytime");
let husey = localStorage.getItem("hus3");

  if (lastname < 0) {
  // 👇️ if block runs


  
  console.log("✅ YURTLUM TR'YE ÖZEL KODLAR ÇALIŞACAK ✅");
} else {
  
     
  // EBUREİS Text Title and Box  
  document.querySelector("#boxtainer > div.box.box2 > a").innerHTML = "Merhaba Ebubekir Erdoğan";
  document.querySelector("head > title").innerHTML = "EBUREİS • Ebubekir Erdoğan";
    
    // EBUREİS YOUTUBE CHANNEL Powered By "CHATGPT"
   document.querySelector("#boxtainer > div.box.box2 > a").href = "https://www.youtube.com/@ebubekirerdogan_";
  
  // EBUREİS RENK KODLARI
   document.documentElement.style.setProperty('--yurtlum-yellow', '#27b29f');
   document.documentElement.style.setProperty('--yurtlum-brown', '#13d5c8');
   document.documentElement.style.setProperty('--yurtlum-yellow2', '#fff');
   document.documentElement.style.setProperty('--yurtlum-brown2', '#fff');
   document.documentElement.style.setProperty('--yurtlum-black', '#fff');

   console.log('⛔️ Bekire Özel Kodlar Çalışacak ⛔️');
  // EBUREİS LOGO  
   document.querySelector("#contboxtainer > div:nth-child(1) > a").style.backgroundImage = "url('https://i.hizliresim.com/80eojn8.png')";

}

// HÜSEYİNE ÖZEL KOD BLOĞU


 if (husey < 55) {
  // 👇️ if block runs


  
  console.log("✅ HÜSEYİN'E ÖZEL KODLAR ÇALIŞACAK ✅");
} else {
  // GHOST Text Title and Box  
  document.querySelector("#boxtainer > div.box.box2 > a").innerHTML = "Merhaba Hüseyin Çubukçu";
  document.querySelector("head > title").innerHTML = "GHOST • Hüseyin Çubukçu";
    

  // GHOST RENK KODLARI
   document.documentElement.style.setProperty('--yurtlum-yellow', '#f3e700');
   document.documentElement.style.setProperty('--yurtlum-brown', '#15375f');
   document.documentElement.style.setProperty('--yurtlum-yellow2', '#f3e700');
   document.documentElement.style.setProperty('--yurtlum-brown2', '#fff');
   document.documentElement.style.setProperty('--yurtlum-black', '#15375f');

 // GHBG NONE
 document.querySelector("body > div.countup2 > div").style.display = "none";
 document.querySelector("body > div.countup2 > div.fblogo.ggizle > a").style.display = "block";

  // GHOST LOGO  
  // https://media.tenor.com/srbYdsNYPJoAAAAM/fener-fenerbahce.gif
 
   document.querySelector("#contboxtainer > div:nth-child(1) > a").style.backgroundImage = "url('https://i.imgur.com/TrETgYH.png')";

    element.style.setProperty(propertyName, value, priority);
    document.body.style.setProperty('background-color', 'red', 'important');

   document.querySelector("#logo").style.backgroundImage = "url('https://i.imgur.com/TrETgYH.png')";


}








// var link2 = document.querySelector("#logo");
// console.log("ast 💚💚💚💛💛💛🧡"+link2);
// if (!link2) {
//     link2 = document.createElement('link');
//     link2.rel = 'icon';
//     document.head.appendChild(link);
//     console.log("dssssssssss 💚💚💚💛💛💛🧡"+link2);
// }





// İCON CHANGE
var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = 'http://www.alexisdeneme.tk/images/png/yurtlum_circle.png';
// İCON CHANGE






// CHAT GPT PAGE RELOAD 17:00
// let today = new Date();
// let targetTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 17, 0, 0);

// if (today.getTime() > targetTime.getTime()) {
//     targetTime.setDate(targetTime.getDate()+1);
// }

// let timeToReload = targetTime.getTime() - today.getTime();

// setTimeout(function(){
//     location.reload();
// }, timeToReload);
// CHAT GPT PAGE RELOAD 17:00

// BUDA CHANGE EDİLEBİLİR HALİ
// function setReloadTime() {
//     let reloadTime = document.getElementById("reloadTime").value;
//     let targetTime = new Date();
//     targetTime.setHours(reloadTime.substring(0,2));
//     targetTime.setMinutes(reloadTime.substring(3,5));
//     targetTime.setSeconds(0);

//     let today = new Date();
//     if (today.getTime() > targetTime.getTime()) {
//         targetTime.setDate(targetTime.getDate()+1);
//     }

//     let timeToReload = targetTime.getTime() - today.getTime();

//     setTimeout(function(){
//         location.reload();
//     }, timeToReload);
// }
// BUDA CHANGE EDİLEBİLİR HALİ


// function setReloadTime() {
//     let reloadTime = document.getElementById("reloadTime").value;
//     localStorage.setItem("reloadTime", reloadTime);
//     // ...
// }


// let reloadTime = localStorage.getItem("reloadTime");
// if(reloadTime){
//     let targetTime = new Date();
//     targetTime.setHours(reloadTime.substring(0,2));
//     targetTime.setMinutes(reloadTime.substring(3,5));
//     targetTime.setSeconds(0);
//     //...
// }


// ONCHANGE ONLY

// function updateTime() {
//   var reloadTime = document.getElementById("reloadTime").value;
//   document.getElementById("reloadTime").value = reloadTime;
// }

// ONCHANGE ONLY

// LOCAL STORAGE
// const reloadTime = document.getElementById("reloadTime");
// reloadTime.value = localStorage.getItem("reloadTime") || reloadTime.value;
// reloadTime.addEventListener("change", function(){
//     localStorage.setItem("reloadTime", reloadTime.value);
// });

// LOCAL STORAGE


// AYNI İSE YENİLER

// setInterval(function(){
//   var reloadTime = document.getElementById("reloadTime").value;
//   var now = new Date();
//   if(now.getHours() == reloadTime.split(':')[0] && now.getMinutes() == reloadTime.split(':')[1]){
//     location.reload();
//   }
// }, 60000); // 60 saniyede bir kontrol eder

// AYNI İSE YENİLER




//auto 

// var today = new Date();
// var day = today.getDay();

// if (day == 1 || day == 2 || day == 3 || day == 4 || day == 5) {
//   document.getElementById("reloadTime").value = "17:00";
// } else {
//   document.getElementById("reloadTime").value = "14:00";
// }



// var currentDate = new Date();
// var currentDay = currentDate.getDay();
// var reloadTime;

// if (currentDay === 0 || currentDay === 6) {
//     reloadTime = "14:00";
// } else {
//     reloadTime = "17:00";
// }

// localStorage.setItem("reloadTime", reloadTime);



// var input = document.getElementById("reloadTime");
// input.value = localStorage.getItem("reloadTime") || "";

// input.addEventListener("change", function(){
//     localStorage.setItem("reloadTime", input.value);
// });^













// GO LİNK "SHİFT + 1"
document.addEventListener("keydown", function(event) {
  if (event.shiftKey && event.keyCode === 49) {
    event.preventDefault();
    var link = document.querySelector("body > div.countup3 > div > div.div1 > span > a");
    link.click();
  }
});

// GO LİNK "SHİFT + 2"
document.addEventListener("keydown", function(event) {
  if (event.shiftKey && event.keyCode === 50) {
    event.preventDefault();
    var link = document.querySelector("body > div.countup3 > div > div.div2 > span > a");
    link.click();
  }
});

// GO LİNK "SHİFT + 3"
document.addEventListener("keydown", function(event) {
  if (event.shiftKey && event.keyCode === 51) {
    event.preventDefault();
    var link = document.querySelector("body > div.countup3 > div > div.div3 > span > a");
    link.click();
  }
});

// GO LİNK "SHİFT + 4"
document.addEventListener("keydown", function(event) {
  if (event.shiftKey && event.keyCode === 52) {
    event.preventDefault();
    var link = document.querySelector("body > div.countup3 > div > div.div4 > span > a");
    link.click();
  }
});

// GO LİNK "SHİFT + Q"
document.addEventListener("keydown", function(event) {
  if (event.shiftKey && event.keyCode === 81) {
    event.preventDefault();
    var link = document.querySelector("body > div.countup3 > div > div.div5 > span > a");
    link.click();
  }
});

// GO LİNK "SHİFT + W"
document.addEventListener("keydown", function(event) {
  if (event.shiftKey && event.keyCode === 87) {
    event.preventDefault();
    var link = document.querySelector("body > div.countup3 > div > div.div6 > span > a");
    link.click();
  }
});

// GO LİNK "SHİFT + E"
document.addEventListener("keydown", function(event) {
  if (event.shiftKey && event.keyCode === 69) {
    event.preventDefault();
    var link = document.querySelector("body > div.countup3 > div > div.div7 > span > a");
    link.click();
  }
});

// GO LİNK "SHİFT + R"
document.addEventListener("keydown", function(event) {
  if (event.shiftKey && event.keyCode === 82) {
    event.preventDefault();
    var link = document.querySelector("body > div.countup3 > div > div.div8 > span > a");
    link.click();
  }
});

// GO LİNK "SHİFT + A"
document.addEventListener("keydown", function(event) {
  if (event.shiftKey && event.keyCode === 65) {
    event.preventDefault();
    var link = document.querySelector("body > div.countup3 > div > div.div9 > span > a");
    link.click();
  }
});

// GO LİNK "SHİFT + S"
document.addEventListener("keydown", function(event) {
  if (event.shiftKey && event.keyCode === 83) {
    event.preventDefault();
    var link = document.querySelector("body > div.countup3 > div > div.div10 > span > a");
    link.click();
  }
});

// GO LİNK "SHİFT + D"
document.addEventListener("keydown", function(event) {
  if (event.shiftKey && event.keyCode === 68) {
    event.preventDefault();
    var link = document.querySelector("body > div.countup3 > div > div.div11 > span > a");
    link.click();
  }
});

// GO LİNK "SHİFT + F"
document.addEventListener("keydown", function(event) {
  if (event.shiftKey && event.keyCode === 70) {
    event.preventDefault();
    var link = document.querySelector("body > div.countup3 > div > div.div12 > span > a");
    link.click();
  }
});






// // İNPUT CHANGE 
// const input1 = document.querySelector("#input1");
// const input2 = document.querySelector("#input2");

// // Check if value is already in local storage
// const lastSelected = localStorage.getItem("last-selected-input");

// if (lastSelected === input1.value) {
//   input1.checked = true;
// } else if (lastSelected === input2.value) {
//   input2.checked = true;
// }

// // Add event listener to input1
// input1.addEventListener("change", () => {
//   if (input1.checked) {
//     localStorage.setItem("last-selected-input", input1.value);
//   }
// });

// // Add event listener to input2
// input2.addEventListener("change", () => {
//   if (input2.checked) {
//     localStorage.setItem("last-selected-input", input2.value);
//   }
// });



// WEB SAYFASI YENİLEME 18:00 - 14:00

// Sayfayı her 86400000 milisaniyede bir (1 gün) yenile
setInterval(refreshPage, 86400000);

function refreshPage() {
    var currentDate = new Date();
    var currentDay = currentDate.getDay();
    var currentHour = currentDate.getHours();
    var currentMinute = currentDate.getMinutes();
    var currentSecond = currentDate.getSeconds();

    // Pazartesiden Cumaya 17:00 olup olmadığını kontrol edin
    if (currentDay >= 1 && currentDay <= 5 && currentHour === 17 && currentMinute === 49 && currentSecond === 0) {
        location.reload();
    }
    // Saat 14:00'te Cumartesi mi Pazar mı kontrol edin
    else if ((currentDay === 6 || currentDay === 0) && currentHour === 14 && currentMinute === 0 && currentSecond === 0) {
        location.reload();
    }
}

// WEB SAYFASI YENİLEME 18:00 - 14:00

