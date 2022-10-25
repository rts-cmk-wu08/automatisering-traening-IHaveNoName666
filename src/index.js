import section from "./component/section.js"
import ContactForm from "./component/ContactForm.js"

let element = document.querySelector(".wrapper")
let main = document.createElement("main")
element.append(main)
main.append(section())
main.append(ContactForm())

