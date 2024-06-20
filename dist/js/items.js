const itemPlace = document.querySelector('#items');
const itemList = [
    { link: "../assets/resources/element/Cear.png" },
    { link: "../assets/resources/element/Cgame.png" },
    { link: "../assets/resources/element/Claptop.png" },
    { link: "../assets/resources/element/Cphone.png" },
    { link: "../assets/resources/element/Cshoes.png" },
    { link: "../assets/resources/element/Cwatcj.png" }
];

function itemLoader(conatiner, items) {
    items.forEach(item => {
        const img = document.createElement('img');
        img.src = item.link;
        img.alt = 'item';
        conatiner.appendChild(img);
    });
}

itemLoader(itemPlace, itemList);
