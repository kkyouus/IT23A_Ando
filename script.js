const button = document.getElementById("colorButton");
const colors = ["#0d0d0d", "#1a1a1a", "#0f2027", "#17202a", "#2c3e50"]; // Deep black-gray, very dark gray, dark teal-greenish tone, cool bluish-black, dark navy-gray
let index = 0;

button.addEventListener("click", () => {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length; // goes back to first after last color
});