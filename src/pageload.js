
function pageLoad(){
    let contentDiv = document.querySelector("#content");
    
    let title = document.createElement("h1");
    title.textContent = "The Enchanted Spoon";
    contentDiv.appendChild(title);

    let imageAndText = document.createElement("div");
    imageAndText.classList.add("imageBlock");
    let image = document.createElement("img");
    image.src = "../dist/res.jpg"
    image.classList.add("photo");

    let tagline = document.createElement("div");
    tagline.textContent = "-Where every bite you take is shining";
    tagline.classList.add("tagline");
    imageAndText.appendChild(image);
    imageAndText.appendChild(tagline);

    contentDiv.appendChild(imageAndText);
    let description = document.createElement("h2");
    description.textContent = "Description";
    let info = document.createElement("p");
    info.classList.add("info");
    info.textContent = 'Welcome to "The Enchanted Spoon," a truly magical dining experience that will transport you to a world of culinary delights. Nestled in a hidden corner of the mystical forest, this extraordinary restaurant promises an unforgettable journey for your taste buds. Step into our ethereal dining room, adorned with shimmering crystals and soft, iridescent lighting. The air is filled with enchanting aromas that beckon you to indulge in a feast fit for royalty. The walls are adorned with ancient tapestries depicting mythical creatures and landscapes that whisper stories of forgotten realms. Our menu is a symphony of flavors, crafted by master wizards who have dedicated their lives to the pursuit of culinary sorcery. Start your magical journey with our signature dish, "Faerie Wings"—delicate, golden-brown wings of mythical birds, infused with a secret blend of spices that awaken your senses. For the main course, experience the "Dragon\'s Breath Steak," a sizzling, succulent cut of meat that is seared to perfection using a mystical flame from the belly of a sleeping dragon. The steak is accompanied by an array of vibrant vegetables, foraged from the enchanted forest, and drizzled with a sauce made from rare herbs and enchanted mushrooms. And no mystical meal would be complete without a spellbinding dessert. Indulge in our "Elixir of Sweet Dreams," a velvety chocolate mousse infused with a potion of love and whimsy. Each bite takes you on a journey through the realm of dreams, where the flavors dance on your palate like ethereal sprites. To accompany your meal, our knowledgeable enchanters will guide you through an extensive selection of magical potions, elixirs, and elven wines, carefully chosen to enhance your dining experience. Imbibe in the "Pixie\'s Kiss," a sparkling elixir that tickles your tongue with a delightful blend of fruit and fairy dust. Whether you\'re seeking a romantic evening or a whimsical gathering with friends, "The Enchanted Spoon" promises an enchanting escape from the ordinary. Join us and be transported to a world where food and magic intertwine, leaving you spellbound and craving for more.';
    contentDiv.appendChild(description);
    contentDiv.appendChild(info);
}

export{
    pageLoad,
}
