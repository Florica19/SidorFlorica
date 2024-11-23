document.getElementById("validare-email").addEventListener("click", function() {
    var email = document.getElementById("email-input").value;
    var errorMessage = document.getElementById("email-error");

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    if (emailPattern.test(email)) {
        errorMessage.style.display = "none";
        alert("Adresa de e-mail este validă!");
    } else {
        errorMessage.style.display = "block";
    }
});
document.getElementById("alta-viata").addEventListener("click", function()  {

    document.body.style.backgroundColor = "#E4D1B9";

    document.querySelector(".nume p").innerText = "Profesie: Inginer electronist";

    document.querySelector('.nume').style.fontFamily = "Arial, sans-serif";
    document.querySelector('.nume').style.fontSize = "25px";
    document.querySelector('.nume').style.color = "#c79b7d";

    document.querySelector(".imagine img").src = "img2.jpg";

    const imagine2 = document.querySelector(".imagine img");
    imagine2.style.opacity = "0.8";
    imagine2.style.borderRadius = "15px";
    imagine2.style.border = "5px solid #F7C4A1";

    document.querySelector('.contact').style.fontFamily = "Arial, sans-serif";
    document.querySelector('.contact').style.fontSize = "10px";
    document.querySelector('.contact').style.color = "#c79b7d";

    
    document.querySelector('.citat').style.fontFamily = "Arial, sans-serif";
    document.querySelector('.citat').style.fontSize = "20px";
    document.querySelector('.citat').style.color = "#c79b7d";


    document.querySelector(".subtitlu2 h3").innerText = "Ce obiective am?";

    const listaobiective = document.querySelectorAll(".hobby li");
    listaobiective[0].innerText = "Îmi doresc să avansez cât mai mult în acest domeniu.";
    listaobiective[1].innerText = "Îmi doresc să cunosc oameni care sunt pasionați de acest domeniu și să învăț lucruri noi de aceștia.";
    listaobiective[2].innerText = "Vreau ca în perioada următoare să fac intership pentru a învăța cât mai multe.";
    listaobiective[3].innerText = "Aș vrea să văd cum se dezvoltă acest domeniu și în alte țări.";
    listaobiective[4].innerText = "Vreau să particip la cât mai multe workshop-uri.";


    document.querySelector('.subtitlu1').style.color = "#c79b7d";
    document.querySelector('.subtitlu2').style.color = "#c79b7d";

    document.querySelector('.tabel').style.fontFamily = "Arial, sans-serif";
    document.querySelector('.tabel').style.border = "2px solid #c79b7d";
    document.querySelectorAll('.tabel th').forEach(function(th) {
        th.style.backgroundColor = "#c79b7d";
    });

    document.querySelector('.hobby').style.fontFamily = "Arial, sans-serif";
    document.querySelector('.hobby').style.border = "2px solid #c79b7d";
    document.querySelector('.hobby').style.color = "#c79b7d";

    document.querySelector("button").style.backgroundColor = "#F7C4A1";
    document.querySelector("button").style.color = "#ede8e4";

    function varsta() {
        var anul_nasterii = 2005; 
        var anul_curent = new Date().getFullYear(); 
        var varsta = anul_curent - anul_nasterii; 
   
        document.getElementById("anul-nasterii").innerText = "Vârsta: " + varsta + " ani";
    }
    
    document.getElementById("anul-nasterii").addEventListener("mouseover", varsta);
    
    document.getElementById("anul-nasterii").addEventListener("mouseout", function() {
        document.getElementById("anul-nasterii").innerText = "Anul nașterii: 2005";
    });
});