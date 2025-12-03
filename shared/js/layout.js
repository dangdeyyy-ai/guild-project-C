let header = document.getElementById("header")
let footer = document.getElementById("footer")
let logo = document.getElementsByClassName("logo")
let menu = document.getElementsByClassName("hamburger")
footer.innerHTML = `
        <div class="container flex-c g24">
            <div class="flex-c g5">
                <div class="logo">

                </div>
                <div class="f14 w5">
                    Farland Superlunary © 2025. All rights reserved.
                </div>
            </div>
            <div class="flex-r t-flex-c g20 j-between">
                <div class="flex-r t-flex-wrap g48 t-g20">
                    <div class="linkContainer">
                        <div class="linkType">
                            Links
                        </div>
                        <div class="link">
                            Homepage
                        </div>
                        <div class="link">
                            Activities
                        </div>
                        <div class="link">
                            Contact us
                        </div>
                    </div>
                    <div class="linkContainer">
                        <div class="linkType">
                            Resources
                        </div>
                        <div class="link">
                            Terms Of Service
                        </div>
                        <div class="link">
                            Privacy Policy
                        </div>
                        <div class="link">
                            Frequently Asked Questions
                        </div>
                    </div>
                    <div class="linkContainer">
                        <div class="linkType">
                            Contact Information
                        </div>
                        <div class="link">
                            Address: 123 That road, This city, Random Country
                        </div>
                        <div class="link">
                            Phone Number: 0-1800-INFORMATION
                        </div>
                        <div class="link">
                            Gmail: abluecat@waitingforever.com
                        </div>
                    </div>
                </div>
                <div class="linkContainer">
                    <div class="linkType">
                        Our socials
                    </div>
                    <div class="flex-r g16">
                        <img src="/assets/svg/facebook.svg">
                        <img src="/assets/svg/twitter.svg">
                        <img src="/assets/svg/youtube.svg">
                    </div>
                </div>
            </div>
        </div>
`
header.innerHTML = `
        <div class="container flex-r j-between">
            <img src="/assets/svg/Menu.svg" class="Tablet Mobile hamburger">
            <div class="logo">

            </div>
            <menu class="PC">
                <a href="../../pages/homepage/" id="home">Homepage</a>
                <a href="../../pages/activities/" id="activities">Activities</a>
                <a href="../../pages/contactUs/" id="contactUs">Contact us</a>
            </menu>
            <div class="flex-r g10 a-center">
                <button class="secondary signUp">Sign Up</button>
                <button class="primary signIn">Sign In</button>
            </div>
        </div>
`
logo[0].addEventListener("click", () => {
    window.location.assign("/pages/homepage/")
})
logo[1].addEventListener("click", () => {
    window.location.assign("/pages/homepage/")
})
let menuOn = localStorage.getItem("menuState");
function menuAction() {
    menuOn = menuOn == "true" ? "false" : "true"
    if (menuOn == "true") {
        header.innerHTML = `
        <div class="container flex-r j-between">
            <img src="/assets/svg/Menu.svg" class="Tablet Mobile hamburger">
            <div class="logo PC">

            </div>
            <menu class="PC Tablet Mobile">
                <a href="../../pages/homepage/" id="home">Homepage</a>
                <a href="../../pages/activities/" id="activities">Activities</a>
                <a href="../../pages/contactUs/" id="contactUs">Contact us</a>
            </menu>
            <div class="flex-r g10 a-center PC">
                <button class="secondary signUp">Sign Up</button>
                <button class="primary signIn">Sign In</button>
            </div>
        </div>
        `
    } else {
        header.innerHTML = `
        <div class="container flex-r j-between">
            <img src="/assets/svg/Menu.svg" class="Tablet Mobile hamburger">
            <div class="logo">

            </div>
            <menu class="PC Tablet Mobile menuOff">
                <a href="../../pages/homepage/" id="home">Homepage</a>
                <a href="../../pages/activities/" id="activities">Activities</a>
                <a href="../../pages/contactUs/" id="contactUs">Contact us</a>
            </menu>
            <div class="flex-r g10 a-center">
                <button class="secondary signUp">Sign Up</button>
                <button class="primary signIn">Sign In</button>
            </div>
        </div>
        `
    }
    menu[0].addEventListener("click", () => {
        menuAction()
    })
    logo[0].addEventListener("click", () => {
        window.location.assign("/pages/homepage/")
    })
    localStorage.setItem("menuState", menuOn)
}
function initMenu() {
    if (menuOn == "true") {
        header.innerHTML = `
        <div class="container flex-r j-between">
            <img src="/assets/svg/Menu.svg" class="Tablet Mobile hamburger">
            <menu>
                <a href="../../pages/homepage/" id="home">Homepage</a>
                <a href="../../pages/activities/" id="activities">Activities</a>
                <a href="../../pages/contactUs/" id="contactUs">Contact us</a>
            </menu>
        </div>
        `
    } else {
        header.innerHTML = `
        <div class="container flex-r j-between">
            <img src="/assets/svg/Menu.svg" class="Tablet Mobile hamburger">
            <div class="logo">

            </div>
            <menu class="PC">
                <a href="../../pages/homepage/" id="home">Homepage</a>
                <a href="../../pages/activities/" id="activities">Activities</a>
                <a href="../../pages/contactUs/" id="contactUs">Contact us</a>
            </menu>
            <div class="flex-r g10 a-center">
                <button class="secondary signUp">Sign Up</button>
                <button class="primary signIn">Sign In</button>
            </div>
        </div>
        `
    }
    menu[0].addEventListener("click", () => {
        menuAction()
    })
    logo[0].addEventListener("click", () => {
        window.location.assign("/pages/homepage/")
    })
    localStorage.setItem("menuState", menuOn)
}
menu[0].addEventListener("click", () => {
    menuAction()
})
initMenu()