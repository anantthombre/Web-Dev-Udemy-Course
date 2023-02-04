$('h1').click(function () {
    console.log("There was a click on h1 tag.");
})

$('li').click(function () {
    console.log("Any of the list item was clicked.");
})

$("h1").click(function () {
    $(this).text("I was changed");
})