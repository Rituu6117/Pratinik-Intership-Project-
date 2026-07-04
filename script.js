function cart() {
    alert("Product Added To Cart Successfully!");
}

const sizeButtons = document.querySelectorAll(".sizes button");

sizeButtons.forEach(button => {
    button.addEventListener("click", function () {

        sizeButtons.forEach(btn => {
            btn.style.background = "white";
            btn.style.color = "black";
        });

        this.style.background = "green";
        this.style.color = "white";
    });
});

const colorButtons = document.querySelectorAll(".colors span");

colorButtons.forEach(color => {
    color.addEventListener("click", function () {

        colorButtons.forEach(c => {
            c.style.border = "none";
        });

        this.style.border = "3px solid black";
    });
});