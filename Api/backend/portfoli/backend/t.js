function myfunction() {
    var mphone = document.getElementById("myphone");
    var fbnam = document.getElementById("fname");
    if (!isNaN(fbnam.value)) {
        document.getElementById("mess").innerHTML = "Enter valid name <br>";

    }

    if (mphone.value.length != 10) {
        var color = "rgb(240, 17, 17)";
        mphone.style.borderColor = color;
        document.getElementById("mes").innerHTML = "Enter valid mobile number <br>";
        return false;

    }


}