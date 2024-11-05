export function placeNavbar(){
    const navPlace = document.getElementById("nav-place");
    if(navPlace){
        navPlace.appendChild(getNavbar());
    }
}

function getNavbar(){
    const navbar = document.createElement("nav");
    navbar.id = "navbar";
    navbar.innerHTML = `
        <div class="nav-img">
            <img src="/assets/resources/element/Logo.svg" alt="Ternak Coin Logo">
        </div>
        <div class="nav-right">
            <ul class="nav-text">
                <li><a href="./home_page.html">Home</a></li>
                <li><a href="./game_page.html">Games</a></li>
                <li><a href="./store_page.html">Store</a></li>
            </ul>
        </div>
    `;
    return navbar;
}

