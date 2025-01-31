const accNav = document.getElementById("nav");

function navAcc(accNav){
    if (accNav.style.width === "0%")
        {
            accNav.style.width = "auto";
            accNav.style.display = "block";
        }
        else{
            accNav.style.width = "0%";
            accNav.style.display ="none";
        }
}