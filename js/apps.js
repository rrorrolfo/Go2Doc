
var appointment = [

];

const menu = document.querySelector("#nav_img");
const menu_links = document.querySelector("ul");
const app_output = document.querySelector("#output_my_appointments");


// functions:

function print(location, message) {
    location.innerHTML = message;
}

// Mobile Menu:

menu.addEventListener("click" , () => {

    if (menu.nextElementSibling.className == "hide_content") {

        menu.nextElementSibling.className = "show_content";
    } else (
        menu.nextElementSibling.className = "hide_content"
    )
});

// Print appointment to my open appointments section

