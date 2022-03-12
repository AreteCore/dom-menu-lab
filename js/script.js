// Menu data structure
// var menuLinks = [
//     {text: 'about', href: '/about'},
//     {text: 'catalog', href: '/catalog'},
//     {text: 'orders', href: '/orders'},
//     {text: 'account', href: '/account'},
//   ];

//original
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
]

//fixed

// var menuLinks = [
//   { text: "about", href: "#" },
//   {
//     text: "catalog",
//     href: "#",
//     subLinks: [
//       { text: "all", href: "#" },
//       { text: "top selling", href: "#" },
//       { text: "search", href: "#" },
//     ],
//   },
//   {
//     text: "orders",
//     href: "#",
//     subLinks: [
//       { text: "new", href: "" },
//       { text: "pending", href: "#" },
//       { text: "history", href: "#" },
//     ],
//   },
//   {
//     text: "account",
//     href: "#",
//     subLinks: [
//       { text: "profile", href: "#" },
//       { text: "sign out", href: "#" },
//     ],
//   },
// ]

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

// Task 4.0
// Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.
let subMenuEl = document.querySelector("#sub-menu")


// Task 4.1
// Set the height subMenuElelement to be 100%.
subMenuEl.style.height = "100%"

// Task 4.2
// Set the background color of subMenuElto the value stored in the --sub-menu-bgCSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bgCSS)"

// Task 4.3
// Add the class of flex-aroundto the subMenuElelement.
subMenuEl.classList.add("flex-around")

// Task 4.4
// Set the CSS positionproperty of subMenuElto the value of absolute.
subMenuEl.style.position = "absolute"

// Task 4.5
// Set the CSS topproperty of subMenuElto the value of 0.
subMenuEl.style.top = "0"

// Task 5.0
// Update the menuLinksarray in script.js to this:
//done

// Task 5.1
// Select and cache the all of the <a>elements inside of topMenuElin a variable named topMenuLinks.
let topMenuLinks = topMenuEl.children

// Declare a global showingSubMenu variable and initialize it to false;
let showingSubMenu = false


// Task 5.2
topMenuEl.addEventListener("click", function (e) {
  e.preventDefault()
  if (e.target.tagName !== "A") { return }

  // Task 5.3
  if (e.target.className === "active") {
    e.target.className.remove("active")
    showingSubMenu = false
    subMenuEl.style.top = "0"
    return
  }
  for (let a of topMenuLinks) {
    a.classList.remove("active")
  }
  e.target.classList.add("active")

  let aIndex = Array.prototype.indexOf.call(e.target.parentElement.children, e.target);

  if (menuLinks[aIndex].subLinks !== undefined) {
    showingSubMenu = true
  } else {
    showingSubMenu = false;
    mainEl[0].innerHTML = `<h1>${e.target.innerHTML}</h1>`
  }

  let link = menuLinks[aIndex]

  //5.7 5.8
  let buildSubMenu = function (link) {
    subMenuEl.style.top = "100%"
    subMenuEl.textContent = ""
    for (let sub of link.subLinks) {
      const a = document.createElement("a")
      a.setAttribute("href", sub.href)
      a.textContent = sub.text
      subMenuEl.appendChild(a)
    }
  }

  //5.7
  if (showingSubMenu === true) {
    buildSubMenu(link)
  } else {
    subMenuEl.style.top = 0
  }
});
//end of listener

//6.0
// Attach a delegated 'click' event listener to subMenuEl.
subMenuEl.addEventListener("click", function (e) {
  // The first line of code of the event listener function should call the event object's preventDefault()method.
  e.preventDefault()
  // The second line of code function should immediately return if the element clicked was not an <a>element.
  if (e.target.tagName !== "A") { return }
  // console.logthe content of the <a>to verify the handler is working.
  //6.1
  showingSubMenu = false
  subMenuEl.style.top = "0"
  //6.2
  for (let a of topMenuLinks) {
    a.classList.remove("active")
  }
  //6.3
  mainEl[0].innerHTML = `<h1>${e.target.innerHTML}</h1>`

}) //end of listener