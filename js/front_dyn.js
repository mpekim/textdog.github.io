// JS file for dynamic info.

const date = new Date();
const showYear = document.getElementsByClassName("show-year");
const listDates = document.getElementsByClassName("ss-curr");
const showDates = document.getElementById("show-dates");

const accMenuBut = document.getElementsByClassName("head-laurel");
const accMenu = document.getElementById("accol");
const tooltip = document.getElementsByClassName("tooltip");

for (let i = 0; i < showYear.length; i++)
{
    showYear[i].innerHTML = date.getFullYear();
}

for (let i = 0; i < listDates.length; i++)
{
    var text = listDates[i].innerHTML;
    listDates[i].innerHTML = text.replace(
    "{2c}", (date.getFullYear() - 2000));
}

function setShowDates(showDates){
    var text = showDates.innerHTML;
    showDates.innerHTML = text.replace("{curr}", date.getFullYear());
    var text = showDates.innerHTML;
    showDates.innerHTML = text.replace("{next}", date.getFullYear() + 1);
}

function accordion(accMenu, tooltip){
    if (accMenu.style.height === "0%")
    {
        accMenu.style.height = "auto";
        accMenu.style.display = "inline";
        tooltip.innerHTML = "^ Close Awards ^"
    }
    else{
        accMenu.style.height = "0%";
        accMenu.style.display ="none";
        tooltip.innerHTML = "^ Open Awards ^"
    }
}

function showTooltip(tooltip){
    tooltip.style.visibility = "visible";

}

function hideTooltip(tooltip){
    tooltip.stylecolor = "red";
}

setShowDates(showDates);
accMenu.style.display = "none";
accMenu.style.height = "0%";
tooltip[0].style.visibility = "hidden";

// Adding Event Listeners.
for (let i = 0; i < accMenuBut.length; i++)
{
    accMenuBut[i].addEventListener("hover", showTooltip(tooltip[0]));
    accMenuBut[i].addEventListener("click", accordion(accMenu, tooltip[0]));
}