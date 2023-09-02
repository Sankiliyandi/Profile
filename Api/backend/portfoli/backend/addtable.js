$(document).ready(function() {
    $(".add").click(function() {

        $("table").append("<tr class='trRow'><td>2</td><td>raj</td><td>kumar</td><td>CSE</td><td>67767786769</td><td>7.9</td></tr>");
    });
    $(".remove").click(function() {

        $("tr").remove(".trRow");
    });
});