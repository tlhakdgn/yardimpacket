// function modalGoster(){
//     document.getElementById("myModal").style.display = "block";
// }

function closeModal(){
    document.getElementById("myModal").style.display = "none";    
    clearInterval(sayac);
    time=11;
}

var time = 11;
const sayac = setInterval(mesajGoster,1000);

function mesajGoster() {
    document.getElementById("myModal").style.display = "block";
    time--;
    document.getElementById("goster").innerHTML  = "Reklam " + time + " saniye sonra kapanacaktır. ";
    if(time == 0){
        closeModal();
    }
}

// FORM SAYFASI KODLARI


function kayitOl() {

   var ad, soyad, email, sifre, tekrarsifre;
   var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/;
   ad = document.getElementById("ad").value;
   sifre = document.getElementById("sifre").value;
   email = document.getElementById("email").value;
   tekrarsifre = document.getElementById("tekrarsifre").value;
   if (ad == "" || soyad == "" || sifre == "" || email == "" || tekrarsifre == "") {
    document.getElementById("uyari").innerHTML += "<br>" + "Boş bırakılamaz." + "<br>";
   }

   if (sifre != tekrarsifre) {
    document.getElementById("uyari").innerHTML += "<br>" + "Şifrelerin aynı olması gerekli." + "<br>";
   }

   if (regex.test(email)==false) {
    document.getElementById("uyari").innerHTML += "<br>" + "Email kurallarına uygun olması gereklidir." + "<br>"; 
   }
}