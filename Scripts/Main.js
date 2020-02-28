var lng = $("#langselector").val;
var cnt = $("#contents").val;
var reg = $("#register").val;

$(document).ready(function () {

    loadlang();
});

function loadlang() {
  
    switch (lng) {
        case "hn":
            cnt.src = "Hindi.html";
            document.title = "ग्रैस्ट्रीम | घर";
            reg.innerHTML = "पंजीकरण";
            break;
        case "en":
            cnt.src = "Eng.html";
            document.title = "Greystream | Home";
            reg.innerHTML = "Registration";
            break;
        default:
            cnt.src = "Hindi.html";
    }
}