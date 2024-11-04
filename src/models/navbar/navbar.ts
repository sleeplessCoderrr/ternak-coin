export function placeNavbar(){
    const navPlace = document.querySelector(".nav-place");
    if(navPlace){
        navPlace.appendChild(getNavbar());
    }
}

function getNavbar(){
    const navbar = document.createElement("nav");
    navbar.classList.add("navbar");
    navbar.innerHTML = `
        <div class="nav-logo">
            <img src="../../assets/images/logo.png" alt="logo">
        </div>
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    `;
    return navbar;
}

export default placeNavbar;