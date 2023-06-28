

function contacts () {
    this.itemName = [];
    this.itemDes = [[]];
}

const mycontacts = new contacts();
mycontacts.itemName = ["Company Phone"];
mycontacts.itemDes = ["555-555-5555"];

mycontacts.itemName.push("Gandalf The Grey");
mycontacts.itemDes.push("Manager, Email: gandalf@notfake.com");

mycontacts.itemName.push("Harry Potter");
mycontacts.itemDes.push("Chef, Email: notslytherin@notfake.com");

function loadContacts(){
    let contentDiv = document.querySelector("#content");
    let title = document.createElement("h1");
    title.textContent = "Contact Us";
    contentDiv.appendChild(title);

    for(let i = 0; i < mycontacts.itemName.length; ++i){
        let item = document.createElement("div");
        item.classList.add("contactsItem");
    
        let itemName = document.createElement("div");
        itemName.classList.add("itemName");
        itemName.textContent = mycontacts.itemName[i];
        item.appendChild(itemName);
    
        let itemDes = document.createElement("div");
        itemDes.classList.add("itemDes");
        itemDes.textContent = mycontacts.itemDes[i];
        item.appendChild(itemDes);
    
        contentDiv.appendChild(item);
    }

}

export{
    loadContacts,
}