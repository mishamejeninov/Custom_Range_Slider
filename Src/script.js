const slider = document.getElementById("range");
const value = document.getElementById("value");

value.textContent = slider.value;

slider.oninput = function () {
    value.textContent = this.value;
}