function myfunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive"; // Lägg till "responsive" när hamburgarmenyn aktiveras
    } else {
        x.className = "topnav"; // Återställ när menyn ska stängas
    }
}