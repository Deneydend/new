var en=document.getElementById("Eni");
var boy=document.getElementById("Boyu");
var m2f=document.getElementById("m2fiyati");
var kacadt=document.getElementById("kacadet");

var ektrabic = document.getElementById("ektrabic"); // EKSTRA BIÇAK


// SUNUCU VERİLERİ 
let SncHzr = 20;
let SncGrf = 21;
let SncTm = 33;
let SncExt = 60;


// Otomatik Olarak Kayıt Yoksa EVET SEÇ
// var kontrol = localStorage.getItem("kontrol");
// if (kontrol == null) {
//   var kontrol = localStorage.setItem("kontrol", "1");
// }

// if (kontrol == "1") {
//   console.log("kontrol 1 = EVET");
//   document.querySelector("#yes").checked = true;
// }
// else if (kontrol == "2") {
//   console.log("kontrol 2 = HAYIR");
//   document.querySelector("#no").checked = true;
// }












    
// Firma Adı ve İş Adı
var met1n=document.getElementById("Firma");
var met2n=document.getElementById("Isi");

// Grafiker Adı
var grf1adi = document.getElementById("isimgir");


// Input alanı değiştiğinde çalışacak olan işlevi tanımlayın
grf1adi.addEventListener("input", function() {
  // Yazıyı alın
  const yazı = grf1adi.value;
  
  // Local Storage'a kaydedin
  localStorage.setItem("grfisim", yazı);
});

// Sayfa yüklendiğinde kaydedilmiş değeri geri yükleyin
window.addEventListener("DOMContentLoaded", function() {
  const kaydedilmisYazı = localStorage.getItem("grfisim");
  
  // Kaydedilmiş değer varsa, input alanına atayın
  if (kaydedilmisYazı) {
    grf1adi.value = kaydedilmisYazı;
  }
});









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

  

  
  // EKSTRA BIÇAK
  
var newbicak = document.querySelector("#ext").value;
  
// VALUE 0'DAN BÜYÜKSE YELLOW Classı Ekler • EKSTRA BIÇAK
var input = document.getElementById("ektrabic");
if (input.value > 0) {
    var ekstrabicyazi = "EKSTRA_"+(input.value)+"_BIÇAK_"
  }
else {
    var ekstrabicyazi = ""
  }; 

  document.querySelector("#ekstra > span").innerHTML = " " + newbicak + " TL";

  


var yazdir = (met1n.value);
var yazdir2 = (met2n.value);

var kulnam = (grf1adi.value);

var Sonuc = en.value * boy.value * m2f.value * kacadt.value + (ektrabic.value * newbicak);
var yuvarla = Math.round(Sonuc);

toplamfiyat.innerHTML=yuvarla.toFixed(0) + " TL";
var idcopy = document.getElementById("heading")


idcopy.innerHTML = yazdir+"_1_MAG3_"+en.value+"X"+boy.value+" "+"EBAT TOPLAM"+" "+kacadt.value+".000 ADET_"+ekstrabicyazi+kulnam+"_"+yazdir2+"_"+yuvarla+"TL";




// ✅ KDV HESAPLAMA
var kdv = document.getElementById("kdv")
var kdvf = ((yuvarla * 20) / 100 + yuvarla);
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

  localStorage.setItem("hzrfiyat2", hzrValue);
  localStorage.setItem("grffiyat2", grfValue);
  localStorage.setItem("tmfiyat2", tmValue);
  localStorage.setItem("grfisim", isimValue);
  localStorage.setItem("ekstrabicak2", extValue);

  // sayfayı yenile
  // location.reload();
});

// EKSTRA BIÇAK DEĞERİ SOL PANEL VALUE İÇİNE YAZDIR

var hzrStoredValue = localStorage.getItem("hzrfiyat");
var grfStoredValue = localStorage.getItem("grffiyat");
var tmStoredValue = localStorage.getItem("tmfiyat");
var isimStoredValue = localStorage.getItem("grfisim");
var storedValue = localStorage.getItem("ekstrabicak");

// inputun value değerine yerel depolamadan gelen değeri atayın

document.querySelector("#isimgir").value = isimStoredValue;







// BİLGİLERİ SUNUCUDAN AL



  
//   // Local storage'dan "kontrol" isimli kaydı al
//   var kontrol = localStorage.getItem("kontrol");

//   // idsi "yes" olan radio button'ı seç
//   var radioYes = document.querySelector("input[id=yes]");

//   // idsi "no" olan radio button'ı seç
//   var radioNo = document.querySelector("input[id=no]");


//   // Radio button'ların durumunu değiştirdiğinde bir fonksiyon çalıştır
//   radioNo.addEventListener("change", function() {
//     // Radio button seçiliyse
//     if (this.checked) {
//       // Bir uyarı penceresi göster
//       var result = confirm("Hayır seçtiniz. Emin misiniz?");
//       // Kullanıcının seçimine göre işlem yap
//       if (result) {
//         // OK butonuna tıklandıysa
//         console.log("Hayır seçimi onaylandı.");
//         localStorage.setItem("kontrol", "2");
//         radioNo.checked = true;
//       }
//       else {
//         // Cancel butonuna tıklandıysa
//         console.log("Hayır seçimi iptal edildi.");
//         localStorage.setItem("kontrol", "1");
//         radioYes.checked = true;
//         radioNo.checked = false;
//         document.getElementById("yes").checked = false;
//       }
//     }
//   });






  
  window.onload = function() {
    // Kullanıcının daha önce bir seçim yapmış mı kontrol ediyoruz
    var selectedOption = localStorage.getItem("selectedOption");
    
    if (selectedOption === "no") {
      // Eğer kullanıcı daha önce "no" seçmişse, seçimi koruyoruz
      document.getElementById("no").checked = true;
    } else {
      // Varsayılan olarak "yes" seçeneğini seçili hale getiriyoruz
      document.getElementById("yes").checked = true;
    }
  
    // Seçenek değiştiğinde localStorage'a kaydediyoruz
    document.querySelectorAll('input[name="rdo"]').forEach(function(radio) {
      radio.addEventListener('change', function() {
        localStorage.setItem("selectedOption", this.id);
      });
    });
  
    // İlk yüklendiğinde seçenek değiştiğinde kodları çalıştırıyoruz
    selectOption(document.querySelector('input[name="rdo"]:checked'));
  };




function selectOption(radio) {
  if (radio.id === "yes") {
    // Yes seçeneği için geçerli olan kodlar burada yer alacak
    console.log("Yes seçeneği seçildi.");
    localStorage.setItem("kontrol", "1");
    // Diğer işlemler...
    document.querySelector("#mag3bas2").innerHTML = "🔵🔵🔵 FİYATLAR SUNUCUDAN ALINMAKTADIR 🔵🔵🔵";
    
    
    // Style ve non select
    document.querySelector("#submit").style.display = "none";
    // Öğe kimliklerinin bir dizisini tanımlayın
    let ids = ["#hzr", "#grf", "#tmm", "#ext"];

    // Dizide döngü yapın ve aynı değişiklikleri her öğeye uygulayın
    for (let id of ids) {
      document.querySelector(id).setAttribute("readonly", true);
      document.querySelector(id).style.cursor = "not-allowed";
      document.querySelector(id).style.opacity= "0.5";
   }

    
    var newbicak = document.querySelector("#ext").value;
    
    
    
    

    // Sol Panel Yazdır
    document.querySelector("#hzr").value = SncHzr;
    document.querySelector("#grf").value = SncGrf;
    document.querySelector("#tmm").value = SncTm;
    document.getElementById("ext").value = SncExt;
    // Orta Panel Yazdır
    document.querySelector("#btnoption0").value = SncHzr;
    document.querySelector("#btnoption1").value = SncGrf;
    document.querySelector("#btnoption2").value = SncTm;
    document.querySelector(".ekstrabicfiyat").value = newbicak;
    
  } else if (radio.id === "no") {
    // No seçeneği için geçerli olan kodlar burada yer alacak
    console.log("No seçeneği seçildi.");
    localStorage.setItem("kontrol", "2");
    // Diğer işlemler...
    document.querySelector("#mag3bas2").innerHTML = "🔴🔴🔴 FİYATLAR KULLANICININ GİRDİĞİ FİYATLARDIR 🔴🔴🔴";
    
    
// if (input.value > 0 && newbicak === 0) {
//   alert("HATA: Ekstra Bıçak Fiyatı Sıfır Girildi");
// } // Added a closing curly brace

    
    // Style ve non select
    document.querySelector("#submit").style.display = "block";
    // Öğe kimliklerinin bir dizisini tanımlayın
    let ids = ["#hzr", "#grf", "#tmm", "#ext"];

    // Dizide döngü yapın ve aynı değişiklikleri her öğeye uygulayın
    for (let id of ids) {
      document.querySelector(id).removeAttribute("readonly", true);
      document.querySelector(id).style.cursor = "auto";
      document.querySelector(id).style.opacity= "1";
   } 

    // Sol Panel Yazdır
    document.querySelector("#hzr").value = localStorage.getItem("hzrfiyat2");
    document.querySelector("#grf").value = localStorage.getItem("grffiyat2");
    document.querySelector("#tmm").value = localStorage.getItem("tmfiyat2");
    document.getElementById("ext").value = localStorage.getItem("ekstrabicak2");
    // Orta Panel Yazdır
    document.querySelector("#btnoption0").value = localStorage.getItem("hzrfiyat2");
    document.querySelector("#btnoption1").value = localStorage.getItem("grffiyat2");
    document.querySelector("#btnoption2").value = localStorage.getItem("tmfiyat2");
    // document.querySelector(".ekstrabicfiyat").value = localStorage.getItem("ekstrabicak2"); 

  }
}

// oninput="hesapla()" oninput="selectOption(this)" EKLEME
// var yes = document.getElementById("yes");
// var no = document.getElementById("no");
// yes.addEventListener("input", function() {selectOption(this)});
// yes.addEventListener("input", hesapla);

// no.addEventListener("input", function() {selectOption(this)});
// no.addEventListener("input", hesapla);



var yes = document.getElementById("yes");
var no = document.getElementById("no");

yes.addEventListener("change", function() {
  selectOption(this);
  hesapla();
});

no.addEventListener("change", function() {
  selectOption(this);
  hesapla();
});
