var en=document.getElementById("Eni");
var boy=document.getElementById("Boyu");
var m2f=document.getElementById("m2fiyati");
var kacadt=document.getElementById("kacadet");

var ektrabic=document.getElementById("ektrabic"); // EKSTRA BIÇAK

    
// Firma Adı ve İş Adı
var met1n=document.getElementById("Firma");
var met2n=document.getElementById("Isi");


// Grafiker Adı
var grf1adi = document.getElementById("isimgir");


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

  

var hzrloc = localStorage.getItem("hzrfiyat");
var grfloc = localStorage.getItem("grffiyat");
var tmmloc = localStorage.getItem("tmfiyat");
var ismloc = localStorage.getItem("grfisim");
var extloc = localStorage.getItem("ekstrabicak");
  
  

// VALUE 0'DAN BÜYÜKSE YELLOW Classı Ekler • EKSTRA BIÇAK
var input = document.getElementById("ektrabic");
if (input.value > 0) {
    var ekstrabicyazi = "EKSTRA_"+(input.value)+"_BIÇAK_"
  }
else {
    var ekstrabicyazi = ""
  }; 




var yazdir = (met1n.value);
var yazdir2 = (met2n.value);

var kulnam = (grf1adi.value);

var Sonuc = en.value * boy.value * m2f.value * kacadt.value + (ektrabic.value * extloc);
var yuvarla = Math.round(Sonuc);

toplamfiyat.innerHTML=yuvarla.toFixed(0) + " TL";
var idcopy = document.getElementById("heading")


idcopy.innerHTML = yazdir+"_1_MAG3_"+en.value+"X"+boy.value+" "+"EBAT TOPLAM"+" "+kacadt.value+".000 ADET_"+ekstrabicyazi+kulnam+"_"+yazdir2+"_"+yuvarla+"TL";




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
grf1adi.oninput = hesapla;
ektrabic.oninput = hesapla;



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


// VALUE 0'DAN BÜYÜKSE YELLOW Classı Ekler
var input = document.getElementById("ektrabic");
var h3 = document.getElementById("ekstra");
input.addEventListener("change", function (){
  if (input.value > 0) {
    h3.classList.add("yellow");
  }
  
  else { h3.classList.remove("yellow"); }
}); 



/* HAMBURGER MENU İCON */

function myFunction() {
  var element = document.querySelector("body > div.burgergps > div");
  element.classList.toggle("active");
  var panel = document.getElementById("solgraypanel");
  if (element.classList.contains("active")) {
    panel.style.left = "0px";
  } else {
    panel.style.left = "-350px";
  }
};

// MENÜ KAPATMA



/* HAMBURGER MENU İCON */

// İSİM LOCAL STORAGE KAYDETME


// BUTONA BASTIĞINDA LOCAL STORAGE KAYDEDER
// butonu seç
var submitButton = document.getElementById("submit");
// butona tıklama olayı ekle
submitButton.addEventListener("click", function(e) {
  // inputun değerini al

  var hzrValue = document.querySelector("#hzr").value;
  var grfValue = document.querySelector("#grf").value;
  var tmValue = document.querySelector("#tmm").value;
  var isimValue = document.querySelector("#isimgir").value;
  var extValue = document.getElementById("ext").value;
  
  // yerel depolamaya "ekstrabicak" anahtarıyla kaydet

  localStorage.setItem("hzrfiyat", hzrValue);
  localStorage.setItem("grffiyat", grfValue);
  localStorage.setItem("tmfiyat", tmValue);
  localStorage.setItem("grfisim", isimValue);
  localStorage.setItem("ekstrabicak", extValue);

  // sayfayı yenile
  location.reload();
});

// EKSTRA BIÇAK DEĞERİ SOL PANEL VALUE İÇİNE YAZDIR
// yerel depolamadan "ekstrabicak" değerini al

var hzrStoredValue = localStorage.getItem("hzrfiyat");
var grfStoredValue = localStorage.getItem("grffiyat");
var tmStoredValue = localStorage.getItem("tmfiyat");
var isimStoredValue = localStorage.getItem("grfisim");
var storedValue = localStorage.getItem("ekstrabicak");

// inputun value değerine yerel depolamadan gelen değeri atayın

document.querySelector("#hzr").value = hzrStoredValue;
document.querySelector("#grf").value = grfStoredValue;
document.querySelector("#tmm").value = tmStoredValue;
document.querySelector("#isimgir").value = isimStoredValue;
document.getElementById("ext").value = storedValue;

// Main Change
document.querySelector("#btnoption0").value = hzrStoredValue;
document.querySelector("#btnoption1").value = grfStoredValue;
document.querySelector("#btnoption2").value = tmStoredValue;

