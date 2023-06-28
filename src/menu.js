

function menu () {
    this.itemName = [];
    this.itemDes = [];
    this.itemPrice = [];
}

const myMenu = new menu();
myMenu.itemName = ["Elixer of Sweet Dreams"];
myMenu.itemDes = ["a velvety chocolate mousse infused with a potion of love and whimsy. Each bite takes you on a journey through the realm of dreams, where the flavors dance on your palate like ethereal sprites."];
myMenu.itemPrice = ["$2"]

myMenu.itemName.push("Dragon's Breath Steak");
myMenu.itemDes.push("a sizzling, succulent cut of meat that is seared to perfection using a mystical flame from the belly of a sleeping dragon. The steak is accompanied by an array of vibrant vegetables, foraged from the enchanted forest, and drizzled with a sauce made from rare herbs and enchanted mushrooms.");
myMenu.itemPrice.push("$3");

function loadMenu(){
    let contentDiv = document.querySelector("#content");
    let title = document.createElement("h1");
    title.textContent = "Menu";
    contentDiv.appendChild(title);

    for(let i = 0; i < myMenu.itemName.length; ++i){
        let item = document.createElement("div");
        item.classList.add("menuItem");
    
        let itemName = document.createElement("div");
        itemName.classList.add("itemName");
        itemName.textContent = myMenu.itemName[i];
        item.appendChild(itemName);
    
        let itemDes = document.createElement("div");
        itemDes.classList.add("itemDes");
        itemDes.textContent = myMenu.itemDes[i];
        item.appendChild(itemDes);
    
        let price = document.createElement("div");
        price.classList.add("price");
        price.textContent = myMenu.itemPrice[i];
        item.appendChild(price);
    
        contentDiv.appendChild(item);
    }

}

export{
    loadMenu,
}