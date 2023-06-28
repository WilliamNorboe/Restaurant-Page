import './style.css'
import {pageLoad} from "./pageload.js"
import {loadMenu} from "./menu.js"
import {loadContacts} from "./contact.js"

let content = document.querySelector("#content");
let body = document.querySelector("body");

let tabs = document.querySelector("#tab");

let home = document.createElement("button");
home.textContent = "Home";
let menu = document.createElement("button");
menu.textContent = "Menu";
let contact = document.createElement("button");
contact.textContent = "contact";

tabs.appendChild(home);
tabs.appendChild(menu);
tabs.appendChild(contact);

pageLoad();


home.addEventListener("click", ()=>{
    content.remove();
    content = document.createElement("div");
    content.id = "content";
    body.appendChild(content);
    pageLoad();
});

menu.addEventListener("click", ()=>{
    content.remove();
    content = document.createElement("div");
    content.id = "content";
    body.appendChild(content);
    loadMenu();
});

contact.addEventListener("click", ()=>{
    content.remove();
    content = document.createElement("div");
    content.id = "content";
    body.appendChild(content);
    loadContacts();
});

console.log("dgeg");