let options = document.querySelectorAll(".options div");
let cup = document.querySelector(".cup");
let title = document.querySelector(".title");

function formatOption(option) {
    return option.toLowerCase().replace(/\s/g, "-");
}

options.forEach((option) => {
    option.addEventListener("click", function () {
        options.forEach((opt) => {
            cup.classList.remove(formatOption(opt.textContent));
        });
        cup.classList.add(formatOption(this.textContent));
        title.innerHTML = this.textContent;
    });
});




const colorVariables = [
    "--lightest-secondary",
    "--light-secondary",
    "--middle-secondary",
    "--dark-secondary",
    "--lightest-primary",
    "--light-primary",
    "--dark-primary"


];

const divElements = document.querySelectorAll('.options > div');

divElements.forEach((div, index) => {
    const colorVariable = colorVariables[Math.floor(Math.random() * colorVariables.length)];
    const delay = -1 * (index + 1);

    div.style.animationDelay = `calc(var(--_speed) * ${delay}s)`;
    div.style.color = `var(${colorVariable})`;
});