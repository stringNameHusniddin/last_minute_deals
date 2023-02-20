let hidden = document.getElementById("hidden")
let sort = document.getElementsByClassName("sort_p")[0]
let cards = document.getElementById("cards")


let data = [
    {
        src: "./images/img1.png",
        title: "Wilderness Club at Big Ceddar",
        combined: "2 Bedroom Combined Lodge",
        when: "28 October — 1 November",
        price: "$2016",
        day: "/6 night",
        bed: "4 Beds",
        people: "8 Sleeps",
        arrows: "1,350 Sq Ft",
        rating: "4.8"
    },
    {
        src: "./images/img2.png",
        title: "Wilderness Club at Big Ceddar",
        combined: "2 Bedroom Combined Lodge",
        when: "28 October — 1 November",
        price: "$2016",
        day: "/6 night",
        bed: "4 Beds",
        people: "8 Sleeps",
        arrows: "1,350 Sq Ft",
        rating: "4.8"
    },
    {
        src: "./images/img3.png",
        title: "Wilderness Club at Big Ceddar",
        combined: "2 Bedroom Combined Lodge",
        when: "28 October — 1 November",
        price: "$2016",
        day: "/6 night",
        bed: "4 Beds",
        people: "8 Sleeps",
        arrows: "1,350 Sq Ft",
        rating: "4.8"
    },
    {
        src: "./images/img4.png",
        title: "Wilderness Club at Big Ceddar",
        combined: "2 Bedroom Combined Lodge",
        when: "28 October — 1 November",
        price: "$2016",
        day: "/6 night",
        bed: "4 Beds",
        people: "8 Sleeps",
        arrows: "1,350 Sq Ft",
        rating: "4.8"
    },
    {
        src: "./images/img5.png",
        title: "Wilderness Club at Big Ceddar",
        combined: "2 Bedroom Combined Lodge",
        when: "28 October — 1 November",
        price: "$2016",
        day: "/6 night",
        bed: "4 Beds",
        people: "8 Sleeps",
        arrows: "1,350 Sq Ft",
        rating: "4.8"
    },
    {
        src: "./images/img6.png",
        title: "Wilderness Club at Big Ceddar",
        combined: "2 Bedroom Combined Lodge",
        when: "28 October — 1 November",
        price: "$2016",
        day: "/6 night",
        bed: "4 Beds",
        people: "8 Sleeps",
        arrows: "1,350 Sq Ft",
        rating: "4.8"
    },
    {
        src: "./images/img7.png",
        title: "Wilderness Club at Big Ceddar",
        combined: "2 Bedroom Combined Lodge",
        when: "28 October — 1 November",
        price: "$2016",
        day: "/6 night",
        bed: "4 Beds",
        people: "8 Sleeps",
        arrows: "1,350 Sq Ft",
        rating: "4.8"
    },
    {
        src: "./images/img8.png",
        title: "Wilderness Club at Big Ceddar",
        combined: "2 Bedroom Combined Lodge",
        when: "28 October — 1 November",
        price: "$2016",
        day: "/6 night",
        bed: "4 Beds",
        people: "8 Sleeps",
        arrows: "1,350 Sq Ft",
        rating: "4.8"
    },
]

hidden.style.width = "0px"
hidden.style.height = "0px"

sort.addEventListener("click", () => {
    if (hidden.style.width === "0px") {
        hidden.style.width = "159px"
        hidden.style.height = "210px"
    } else {
        hidden.style.width = "0px"
        hidden.style.height = "0px"
    }
})



for (let i = 0; i < data.length; i++) {
    const el = data[i]

    let card = document.createElement("div")
    card.className = "card"

    let imgWrapper = document.createElement("div")
    imgWrapper.className = "imgWrapper"

    let rating_like = document.createElement("div")
    rating_like.className = "rating_like"

    let rating = document.createElement("div")
    rating.className = "rating"

    let star = document.createElement("img")
    star.src = "./images/star.png"

    let rating_p = document.createElement("p")
    rating_p.textContent = el.rating

    let like = document.createElement("div")
    like.className = "like"

    let heart = document.createElement("img")
    heart.src = "./images/heart.png"

    let title = document.createElement("p")
    title.textContent = el.title
    title.className = "title"

    let combined = document.createElement("p")
    combined.textContent = el.combined
    combined.className = "combined"

    let when = document.createElement("div")
    when.textContent = el.when
    when.className = "when"

    let price = document.createElement('p')
    price.textContent = el.price
    price.className = "price"

    let day = document.createElement("p")
    day.textContent = el.day
    day.className = "day"

    let bed = document.createElement("img")
    bed.src = "./images/bed.png"

    let people = document.createElement("img")
    people.src = "./images/people.png"

    let arrows = document.createElement("img")
    arrows.src = "./images/arrows.png"

    let bed_p = document.createElement("p")
    bed_p.textContent = el.bed

    let people_p = document.createElement("p")
    people_p.textContent = el.people

    let arrows_p = document.createElement("p")
    arrows_p.textContent = el.arrows

    let people_wrapper = document.createElement("div")
    people_wrapper.className = "icon_wrapper"

    let arrows_wrapper = document.createElement("div")
    arrows_wrapper.className = "icon_wrapper"

    let bed_wrapper = document.createElement("div")
    bed_wrapper.className = "icon_wrapper"

    let facts = document.createElement("div")
    facts.className = "facts"

    let priceWrapper = document.createElement("div")
    priceWrapper.className = "priceWrapper"

    let icons = document.createElement("div")
    icons.className = "icons"


    people_wrapper.append(people)
    people_wrapper.append(people_p)

    bed_wrapper.append(bed)
    bed_wrapper.append(bed_p)

    arrows_wrapper.append(arrows)
    arrows_wrapper.append(arrows_p)

    icons.append(bed_wrapper)
    icons.append(people_wrapper)
    icons.append(arrows_wrapper)

    facts.append(title)
    facts.append(combined)
    facts.append(when)

    rating.append(star)
    rating.append(rating_p)



    priceWrapper.append(price)
    priceWrapper.append(day)

    like.append(heart)

    rating_like.append(rating)
    rating_like.append(like)

    imgWrapper.append(rating_like)
    imgWrapper.style.backgroundImage = `url(${el.src})`

    card.append(imgWrapper)
    card.append(facts)
    card.append(priceWrapper)
    card.append(icons)

    cards.append(card)
}

let menu_btn = document.getElementById("menu_btn")
let menu_img = document.getElementById("menu_img")
let links = document.getElementById("links")

links.style.width = "0px"
links.style.height = "0px"

menu_btn.addEventListener("click", () => {
    if (links.style.width === "0px") {
        links.style.width = "105%"
        links.style.height = "280px"
        menu_img.src = './images/iks.png'
    } else {
        links.style.width = "0px"
        menu_img.src = "./images/menu.png"
    }
})