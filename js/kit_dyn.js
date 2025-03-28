const date = new Date();
const listDates = document.getElementsByClassName("ss-curr");

for (let i = 0; i < listDates.length; i++)
{
    var text = listDates[i].innerHTML;
    listDates[i].innerHTML = text.replace("{2c}", (date.getFullYear() - 2000));
}

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