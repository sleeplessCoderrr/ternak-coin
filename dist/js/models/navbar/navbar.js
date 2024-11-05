export function placeNavbar() {
    const navPlace = document.getElementById("nav-place");
    if (navPlace) {
        navPlace.appendChild(getNavbar());
    }
}
function getNavbar() {
    const navbar = document.createElement("nav");
    navbar.id = "navbar";
    navbar.innerHTML = `
        <div class="nav-img">
            <img src="/assets/resources/element/Logo.svg" alt="Ternak Coin Logo">
        </div>
        <div class="nav-right">
            <ul class="nav-text">
                <li><a href="/pages/homepage.html">Home</a></li>
                <li><a href="/pages/gamesUser.html">Games</a></li>
                <li><a href="/pages/storeUser.html">Store</a></li>
                <li><a href="/pages/about_us.html">About Us</a></li>
            </ul>
        </div>
    `;
    return navbar;
}
