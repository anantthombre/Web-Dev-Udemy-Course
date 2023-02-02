$
ƒ ( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery…
$("h1")
jQuery.fn.init [h1, prevObject: jQuery.fn.init(1)]
$("li")
jQuery.fn.init(6) [li, li, li, li, li, li#special, prevObject: jQuery.fn.init(1)]
var x = $("h1")
undefined
x.css("color", "red")
jQuery.fn.init [h1, prevObject: jQuery.fn.init(1)]
x.css("background", "blue")
jQuery.fn.init [h1, prevObject: jQuery.fn.init(1)]
var newCSS = {
    "color" : "white",
    'backgroud' : 'blue',
    'border' : 'red'
}
undefined
x.css(newCSS)
jQuery.fn.init [h1, prevObject: jQuery.fn.init(1)]
var newCSS = {
    "color" : "white",
    'backgroud' : 'green',
    'border' : '20px solid red'
}
undefined
x.css(newCSS)
jQuery.fn.init [h1, prevObject: jQuery.fn.init(1)]
var listItems = $('li')
undefined
listItems
jQuery.fn.init(6) [li, li, li, li, li, li#special, prevObject: jQuery.fn.init(1)]
listItems.css('color','blue')
jQuery.fn.init(6) [li, li, li, li, li, li#special, prevObject: jQuery.fn.init(1)]
listItems.eq(0).css('color', 'orange')
jQuery.fn.init [li, prevObject: jQuery.fn.init(6)]
listItems.eq(-1).css('color','orange')
jQuery.fn.init [li#special, prevObject: jQuery.fn.init(6)]