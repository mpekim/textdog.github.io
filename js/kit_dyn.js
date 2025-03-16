const accNav = document.getElementById("nav");

function navAcc(accNav){
    if (accNav.style.width === "0%")
        {
            accNav.style.width = "30%";
            accNav.style.display = "block";
        }
        else{
            accNav.style.width = "0%";
            accNav.style.display ="none";
        }
}