var en=document.getElementById("Eni");
var boy=document.getElementById("Boyu");
var m2f=document.getElementById("m2fiyati");
var kacadt=document.getElementById("kacadet");

var dislama=document.querySelector('#Btn');


    
// Firma Adı ve İş Adı
var met1n=document.getElementById("Firma");
var met2n=document.getElementById("Isi");

// Büyük Harfe çevirme
// var uppermet1 = met1n.toUpperCase();
// var uppermet2 = met2n.toUpperCase();


// Grafiker Adı
var grf1adi = document.getElementById("isimgir");


function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    /////////////
    var a = document.querySelector("#isimgir").value = (user);
    /////////////
  } else {
     user = prompt("Lütfen Adınızı Giriniz:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}





function hesapla()
{

// ✅ ÖZEL EBAT HESAPLAMA
var btndeg = document.getElementsByName("btndeg");
for (var i = 0; i < btndeg.length; i++) {
if (btndeg[i].checked) {
radbtn = Number(btndeg[i].value);

break;
}
}

  
var Btn1=document.querySelector('#Btn');
var control=document.querySelector('#btnoption3');
if(!(control.checked)){
  // console.log("✅✅✅ Checked Edildi ✅✅✅");
  document.getElementById("m2fiyati").value=radbtn;
  
};


var yazdir = (met1n.value).toUpperCase();
var yazdir2 = (met2n.value).toUpperCase();

var kulnam = (grf1adi.value).toUpperCase();

var Sonuc = Number(en.value) * Number(boy.value) * Number(m2f.value) * Number(kacadt.value);
var yuvarla = Math.round(Sonuc);

toplamfiyat.innerHTML=yuvarla.toFixed(0) + " TL";
var idcopy = document.getElementById("heading")


idcopy.innerHTML =yazdir+"_1_MAG3_"+en.value+"X"+boy.value+" "+"EBAT TOPLAM"+" "+kacadt.value+".000 ADET_"+kulnam+"_"+yazdir2+"_"+yuvarla+"TL";



// ✅ KDV HESAPLAMA
var kdv = document.getElementById("kdv")
var kdvf = ((yuvarla * 18) / 100 + yuvarla);
kdv.innerHTML = "KDV Dahil Tutar: " + kdvf.toFixed(2) + " TL";

}

en.oninput=hesapla;
boy.oninput=hesapla;
m2f.oninput=hesapla;
kacadt.oninput=hesapla;
met1n.oninput=hesapla;
met2n.oninput=hesapla;
grf1adi.oninput=hesapla;



// ✅ Virgülü Nokta ile Değiştirin.
const str = null;
const result =
typeof str === 'string' ? str.toString().replaceAll('0', '9') : '';




function copyElementText(id) {
    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}


// Button ile aç kapa artema :))
function openmag3() {
    var element = document.getElementById("mag3tainer");
    element.classList.toggle("silmek");
}


// document.querySelector("body > div").style.display = "none";
