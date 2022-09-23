

var a = $("#task1").html();
// console.log(a);
// $("#optask1").html(a);
$("#myFunction1").click(function () {
    $("#task1").html("<span>Lorem Ipsum Replaced Text</span>");
});


$("#myFunction2").click(function () {
    $("#task2").before("<p>Newly Added Before Tag</p>");
});


$("#myFunction3").click(function () {
    $("#task2").prepend("<p>Newly Added Prepend Tag</p>");
});

$("#myFunction4").click(function () {
    $("#task2").append("<p>Newly Added Append Tag</p>");
});

$("#myFunction5").click(function () {
    $("#task2").after("<p>Newly Added after Tag</p>");
});

$("#myFunction6").click(function () {
    $("#task3").empty();
});

$("#myFunction7").click(function () {
    $(".wrap-span").wrap("<p></p>");
});


var currentyear = new Date().getFullYear();

$("#myFunction8").click(function () {
    for (var i = currentyear; i >= currentyear - 100; i--) {
        $("#yearDropDownList").append("<option>" + i + "</option>");
    }
});



//Event Handling

$("#myFunction9").click(function () {
    window.alert('Button Clicked!!!...');
});

$("#myFunction10").dblclick(function () {
    window.alert('Button Double Clicked!!!...');
});

$("#myFunction11").mouseover(function () {
    window.alert('Button Mouse Over Happened!!!...');
});

$("#myFunction12").mouseout(function () {
    window.alert('Button Mouse Out Happened!!!...');
});

$("#myFunction13").hover(
    function () {
        window.alert('Button Hover Happened!!!...');
    },
    function () {
        window.alert('Button Hover Out Happened!!!...');
    }
);

$("#txt1").focus(function () {
    $("#span1").show();
});
$("#txt1").blur(function () {
    $("#span1").hide();
});
