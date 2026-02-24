// inject current year

const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();

const hamMenu = document.querySelector('#hamburger')
const hamIcon = document.querySelector('#hamIcon')
const toggleNav = document.querySelector('#navWrapper')

hamMenu.addEventListener('click', () => {
    if (hamIcon.name === "menu-outline"){
        hamIcon.name = "close-outline"
        toggleNav.classList.toggle('hide')
    }
    else{
        hamIcon.name = "menu-outline"
        toggleNav.classList.toggle('hide')
    }
})
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  effect: 'cube',
  speed: 2000,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // start autoplay
   autoplay: {
   delay: 5000,
 },
});

// Aquariums page
import {aquariums} from "../data/aquariums.js"

const myRecs = document.querySelector('#recommendations')

for (let x = 0; x< aquariums.length; x++){
    const myCard = document.createElement('section')
    const myName = document.createElement('h2')
    myName.textContent = aquariums[x].name

    const myAddress = document.createElement('div')
    const myAddOne = document.createElement ('p')
    myAddOne.textContent = aquariums[x].address[0]
    const myAddTwo = document.createElement ('p')
    myAddTwo.textContent = aquariums[x].address[1]
    myAddress.appendChild(myAddOne)
    myAddress.appendChild(myAddTwo)

    const myImg = document.createElement('img')
    myImg.src =`img/aquariums/${aquariums[x].img}`

    const myURL = document.createElement('a')
    myURL.textContent = "Learn More Here"
    myURL.href = aquariums[x].site

    myCard.appendChild(myName)
    myCard.appendChild(myImg)
    myCard.appendChild(myAddress)
    myCard.appendChild(myURL)

    myRecs.appendChild(myCard)
}



//Review Card Generation Maintenance Checklist
/* import {reviews} from "../data/reviews.js"

const myReviews = document.querySelector('#reviews')

for (let x = 0; x < reviews.length; x++){
    const mySection = document.createElement('section')
    const myName = document.createElement('h3')
    myName.textContent = reviews[x].name
    const myReview = document.createElement('p')
    myReview.textContent = reviews[x].text
    
    const myRating = document.createElement('div')



    for(let step = 0; step<reviews[x].stars; step++){
        const genIndicator = document.createElement ('img')
        genIndicator.src= "../media/svg/star.svg"
        myRating.appendChild(genIndicator)
    }

    mySection.appendChild(myName)
    mySection.appendChild(myRating)
    mySection.appendChild(myReview)

    myReviews.appendChild(mySection)
}
*/