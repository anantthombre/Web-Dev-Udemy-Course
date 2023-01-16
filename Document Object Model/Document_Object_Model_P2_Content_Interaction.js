var para = document.querySelector("p")
undefined
para
<p>​…​</p>​"To Edit Styles, we've already seen we can use the .style tag. Now if we want to edit "<strong>​actual html or text​</strong>​" or "<a href=​"http:​/​/​www.google.com">​attributes​</a>​" we can use different methods. If you want to change the text,html content, or attributes you can use the following: "</p>​
para.textContent
"To Edit Styles, we've already seen we can use the .style tag.\n      Now if we want to edit actual html or text or\n      attributes we can use different methods.\n       If you want to change the text,html content, or attributes you can use the following:\n    "
para.textcontent = "new text"
'new text'
para.textContent = "new text"
'new text'
para.innerHTML = "<strong>I'm bold</strong>"
"<strong>I'm bold</strong>"
var special = document.querySelector("#special")
undefined
special
<h4 id=​"special">​…​</h4>​
var specialA = document.querySelector("a")
undefined
specialA
<a href=​"https:​/​/​www.facebook.com">​FACEBOOK LINK​</a>​
special.getAttribute()
special.getAttribute("href")
null
specialA.getAttribute("href")
'https://www.facebook.com'
specialA.setAttribute("href", "https://www.amazon.com")
undefined
specialA.getAttribute("href")
'https://www.amazon.com'
