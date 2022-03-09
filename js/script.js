// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

// Task 1.0
// Select and cache the <main>element in a variable named mainEl.
let mainEl = document.querySelectorAll("main")

// Task 1.1
// Set the background color of mainElto the value stored in the --main-bgCSS custom property.
// Hint: Assign a string that uses the CSS var()function like this:
// 'var(--main-bg)'
mainEl[0].style.backgroundColor = "var(--main-bg)"

// Task 1.2
// Set the content of mainElto <h1>SEI Rocks!</h1>.
mainEl[0].innerHTML = "<h1>SEI Rocks!</h1>"

// Task 1.3
// Add a class of flex-ctrto mainEl.let mainEl = document.querySelectorAll("main")
// returns an array
mainEl[0].classList.add("flex-ctr")


//Select and cache the <nav id="top-menu">element in a variable named topMenuEl.
let topMenuEl = document.getElementById("top-menu")

// Task 2.1
// Set the height topMenuElelement to be 100%.
topMenuEl.style.height = "100%"

// Task 2.2
// Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
console.log(topMenuEl)

// Task 2.3
// Add a class of flex-aroundto topMenuEl.
topMenuEl.classList.add("flex-around")

// Task 3.1
// Iterate over the entire menuLinksarray and for each "link" object:

// Create an <a>element.
// On the new element, add an href attribute with its value set to the href property of the "link" object.
// Set the new element's content to the value of the textproperty of the "link" object.
// Append the new element to the topMenuElelement.
    for (let link of menuLinks) {
        let newA = document.createElement("a")
        newA.setAttribute("href", link.href)
        newA.innerHTML = link.text
        topMenuEl.appendChild(newA)
}
