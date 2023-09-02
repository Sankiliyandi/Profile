$('.add').click(function() {
    $('.model').show()
});
$('.cancel').click(function() {
    $('.model').hide()
});


$('.save').click(function() {
    var sno = $('#sno').val();
    var fname = $('#fname').val();
    var lname = $('#lname').val();
    var dept = $('#dept').val();
    var reg = $('#reg').val();
    var gpa = $('#gpa').val();
    var trow = '<tr class="' + fname + '"><td>' + sno + '</td><td>' + fname + '</td><td>' + lname + '</td><td>' + dept + '</td><td>' + reg + '</td><td>' + gpa + '</td><td><button class="remove">remove</button></td></tr>';

    $(".ttable").append(trow);
    $.ajax()({
        url: url,
        type: 'POST',
        data: "lname",
        success: function(data) {
            alert(data);
        }

    });
    $("form")[0].reset();


    console.log(trow);
    $('.model').hide();
    $("body").on('click', '.remove', function() {
        $(this).closest("tr").remove();
        $("form")[0].reset();
    });

});