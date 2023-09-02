


document.getElementById("th").addEventListener("click",myfunction)
function myfunction() {
    var Fname = document.getElementById("fname");
    var Lname = document.getElementById("lname");
    var mphone = document.getElementById("num");
    if (!isNaN(Fname.value)) {
        document.getElementById("mesFN").innerHTML = "<br>Enter valid name <br>";
        var color = "rgb(240, 17, 17)";
        Fname.style.borderColor = color;
    }
    if (!isNaN(Lname.value)) {
        document.getElementById("mesLN").innerHTML = "<br>Enter valid name ";
        var color = "rgb(240, 17, 17)";
        Lname.style.borderColor = color;
    }
    if (mphone.value.length != 10) {
        var color = "rgb(240, 17, 17)";
        mphone.style.borderColor = color;
        document.getElementById("mesN").innerHTML = "<br>Enter valid mobile number";

    } //else { alert("FirstName:" + Fname.value + "   Lastname:" + Lname.value) }
}
/*$("buttom").click(function() {
    var fname = $('#fname').val();
    var lname = $('#lname').val();
    var num = $('#num').val();
    var email = $('#email').val();
    var state = $('#state').val();
    var city = $('#city').val();
    var interest = $('#interest').val();
    $.post("", {
        fname: 'fname',
        lname: 'lname',
        number: 'num',
        Email: 'email',
        State: 'state',
        City: 'city',
        Interest: 'interest'
    }, function(data, status) {
        alert("Data: " + data + "\nStatus: " + status);

    });



    $.post("", {
        name: "$('#fname').val()"

    });

});*/