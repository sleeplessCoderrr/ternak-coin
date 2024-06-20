const games = [
    {   
        img : "../assets/resources/img/nation.png",
        title : "Nation Guess",
        reward : "10",  
    },
    {
        img : "../assets/resources/img/thumb.png",
        title : "Thumb War",
        reward : "10",  
    },
    {
        img : "../assets/resources/img/bomb.png",
        title : "Bomb It",
        reward : "10",  
    },
    {
        img : "../assets/resources/img/2k-shoot.png",
        title : "2k shoot",
        reward : "10",  
    },
    {
        img : "../assets/resources/img/brick-breaker.png",
        title : "Brick Breaker",
        reward : "10",  
    },
    {
        img : "../assets/resources/img/parkour.png",
        title : "Parkour Race",
        reward : "10",  
    },
    {
        img : "../assets/resources/img/trackto.png",
        title : "Tracktor Off-road",
        reward : "10",  
    },
    {
        img : "../assets/resources/img/mad.png",
        title : "Mad King",
        reward : "10",  
    },
    {
        img : "../assets/resources/img/badminton.png",
        title : "Badmin League",
        reward : "10",  
    },
];

const carouselPlace = document.querySelector("#carousel");

// Function to display the games dynamically
function displayGames(container, gamesList) {
    gamesList.forEach((game, index) => {
        const div = document.createElement("div");
        div.classList.add("carousel-item");
        if (index === 0) div.classList.add("active"); 
        div.innerHTML = `
            <img src="${game.img}" class="d-block w-100" alt="${game.title}">
            <div class="carousel-caption d-none d-md-block">
                <h5>${game.title}</h5>
                <p>${game.reward} points</p>
            </div>
        `;
        container.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  displayGames(carouselPlace, games);
  initializeCarousel();
});

function initializeCarousel() {
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;
  let currentIndex = 0;

  function showItems(index) {
    items.forEach((item, i) => {
      item.style.display = (i >= index && i < index + 3) ? "block" : "none";
    });
  }

  function slide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
      currentIndex = totalItems - 3;
    } else if (currentIndex > totalItems - 3) {
      currentIndex = 0;
    }
    showItems(currentIndex);
  }

    function autoSlide() {
        setInterval(() => {
            slide(3); 
        }, 5000); 
    }

    autoSlide();
    
    // Add touch swipe functionality to the carousel
    let touchStartX = 0;
    let touchEndX = 0;

    carouselPlace.addEventListener("touchstart", (event) => {
        touchStartX = event.touches[0].clientX;
    });

    carouselPlace.addEventListener("touchend", (event) => {
        touchEndX = event.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50; // Minimum distance required for a swipe

        if (touchEndX - touchStartX > swipeThreshold) {
            slide(-1); // Swipe to the left
        } else if (touchStartX - touchEndX > swipeThreshold) {
            slide(1); // Swipe to the right
        }
    }

  showItems(currentIndex); // Initialize the carousel to show the first set of items
}