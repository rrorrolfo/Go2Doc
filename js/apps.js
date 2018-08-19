
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


const submit_form = document.querySelector("#submit");
const speciality = document.querySelector("#speciality");
const place = document.querySelector("#place");
const date = document.querySelector("#date");
const time = document.querySelector("#time");

submit_form.addEventListener("click", () => {
    
var text = "";
var obj = {};
var new_app = document.createElement("div");

// tengo que crear un div con todo el contenido cada vez que se envie el formulario
//actually it is better to add the object to the array and then print each one of them
// crear objeto - crear elemento - ponder contenido del elemento

obj.speciality = speciality.value;
obj.place = place.value;
obj.date = date.value;
obj.time = time.value;

appointment.push(obj);
console.log(appointment);

new_app.className = "appointment";
new_app.innerHTML = '<h4>Open appointment for:</h4> <div id="data_app_wrapper"> <div> <p>Speciality: </p><span>' + speciality.value + '</span></div><div><p>Place: </p><span>' + place.value + '</span></div><div> <p>Day: </p><span>' + date.value + '</span></div><div><p>Time: </p><span>' + time.value + '</span></div><button type="button">Delete</button></div>';

app_output.appendChild(new_app);
console.log(new_app.innerHTML)



});