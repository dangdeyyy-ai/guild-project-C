let container = document.querySelector("#trainerInfo")
for (key in trainer) {
    console.log(container)
    if (trainer[key].favorite) {

    }
    container.innerHTML += `
    <div class="card" id="${key}" style="--bg: url(${trainer[key].image})">
        <div class="favorite" data-name="${key}">
            <img src="/assets/svg/star-filled.svg">
        </div>
        <div class="flex-c g10 info">
            <div class="f25 w7">
                ${key}
            </div>
            <div class="f20 w5">
                ${trainer[key].expertise}
            </div>
        </div>
    </div>
    `
}
let current = ""
function showTrainerModal(content) {
    console.log()
    let title = document.querySelector("#title"), 
        description = document.querySelector("#description"),
        button = document.querySelector("#button"),
        image = document.querySelector("#trainerImage"),
        star = document.querySelector("#star"),
        socials = document.querySelector("#social")
    current = content.name
    if (content.favorite) {
        star.src = "/assets/svg/star-filled.svg"
    } else {
        star.src = "/assets/svg/star-blank.svg"
    }
    image.style.backgroundImage = `url(${content.image})`
    title.innerHTML = content.name
    description.innerHTML = `
        ${content.expertise}<br>
        <span class="f24 w7">Rating <span class="c-accent">${content.rating}</span></span>
        `
    button.className = content.button?.type || "tertiary"
    button.textContent = content.button?.description || "Close"
    socials.innerHTML = `
        <span class="w7 f15">Phone number:</span> <span>${content.phone}</span><br>
        <span class="w7 f15">Email:</span> <span>${content.email}</span>
        <div class="linkContainer">
            <div class="w7 f15">
                Socials
            </div>
            <div class="flex-r g16">
                <img src="/assets/svg/facebook.svg">
                <img src="/assets/svg/twitter.svg">
                <img src="/assets/svg/youtube.svg">
            </div>
        </div>
    `
    let backdrop = document.querySelector(".backdrop")
    backdrop.style.display = "flex"
    return false;
}
let card = document.querySelectorAll(".card")
let favorite = document.querySelectorAll(".favorite")
card.forEach((e) => {
    e.addEventListener("click", () => {
        showTrainerModal(trainer[e.id])
    })
})
star.addEventListener("click", () => {
        trainer[current].favorite = !trainer[current].favorite
        if (trainer[current].favorite) {
            star.src = "/assets/svg/star-filled.svg"
            favorite.forEach((e) => {
                if (e.dataset.name == current) {
                    e.style.display = "block"
                }
            })
        } else {
            star.src = "/assets/svg/star-blank.svg"
            favorite.forEach((e) => {
                if (e.dataset.name == current) {
                    e.style.display = "none"
                }
            })
        }
        console.log(trainer[current].favorite, current)
})