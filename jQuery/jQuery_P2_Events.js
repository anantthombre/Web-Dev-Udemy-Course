$('h1').click(function () {
    console.log("There was a click on h1 tag.");
})

$('li').click(function () {
    console.log("Any of the list item was clicked.");
})

$("h1").click(function () {
    $(this).text("I was changed");
})

//KEY PRESS
// $('input').eq(0).keypress(function (event) {
//     $('h3').toggleClass('turnBlue');
//     console.log(event);
// })

$('input').eq(0).keypress(function (event){
    if (event.which === 13) {
        $('h3').toggleClass('turnBlue');
    }
})

//on() method
$('h1').on('mouseenter', function(){
    $(this).toggleClass('turnBlue');
})

// $('input').eq(1).on('click', function () {
//     $('.container').fadeOut(3000);
// })

$('input').eq(1).on('click', function () {
    $('.container').slideUp(3000);
})