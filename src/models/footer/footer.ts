export function placeFooter(){
    const footerPlace = document.querySelector(".footer-place");
    if(footerPlace){
        footerPlace.appendChild(getFooter());
    }
}

function getFooter(){
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.innerHTML = `
        <div class="footer-logo">
            <img src="../../assets/images/logo.png" alt="logo">
        </div>
        <div class="footer-links">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    `;
    return footer;
}

export default placeFooter;