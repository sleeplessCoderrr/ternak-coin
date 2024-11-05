export function placeFooter(){
    const footerPlace = document.querySelector("body");
    if(footerPlace){
        footerPlace.appendChild(getFooter());
    }
}

function getFooter(){
    const footer = document.createElement("div");
    footer.id = "fot";
    footer.innerHTML = `
        <nav id="footer">
            <div class="footer-img">
                <img src="/assets/resources/element/Logo.svg" alt="">
            </div>
            <ul id="game">
                <label>Game</label>
                <li>Race</li>
                <li>Sports</li>
                <li>Casuals</li>
            </ul>
            <ul id="store">
                <label>Store</label>
                <li>MyPoin</li>
                <li>Items</li>
                <li>Product</li>
            </ul>
            <ul id="legal">
                <label>Legal</label>
                <li>Privacy</li>
                <li>Terms</li>
            </ul>
        </nav>
        <div class="copyright">
            <p>&copy; 2020 Ternak Coin. All Rights Reserved.</p>
        </div>
    `;
    return footer;
}

