function colorChange(color) {
    console.log(color.value);
    if(color.value === "White") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "red";
    } else if (color.value === "Black") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
}