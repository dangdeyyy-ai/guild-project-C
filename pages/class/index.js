let container = document.querySelector("#classes")

function initClass() {
    for (key in classes) {
        for (key2 in classes[key]) {
            container.innerHTML += `
                <div class="card flex-r t-flex-c g20"">
                    <div class="image" style="background-image: url(${classes[key][key2]['background']});"></div>
                    <div class="flex-c m-flex-r j-between g20 t-g10 m-g3 content a-start">
                        <div class="flex-c g5">
                            <div class="w7 f27 t-f24 m-f18">
                                ${classes[key][key2]['name']}
                            </div>
                            <div class="w7 f18 t-f15">
                                <img src="/assets/svg/people.svg"> Trainer:
                                <span>${classes[key][key2]['trainer']}</span>
                            </div>
                            <div class="f18 m-f15">
                                <span class="w7 ">
                                    <img src="/assets/svg/time.svg"> Class time:
                                </span>
                                <span>${classes[key][key2]['time']}</span>
                            </div>
                            <div class="f22 t-f18 m-f15 w4">
                                <span>${classes[key][key2]['participant']} / ${classes[key][key2]['totalSlots']}</span> 
                                <span class="w5 f18 t-f15 m-f13">participants</span>
                            </div>
                        </div>
                        <button class="primary idx" id="${classes[key][key2]['name']}">
                            Participate
                        </button>
                    </div>
                </div>
            `
        }
    }
}
function filter(mode) {

}
initClass()
let button = document.querySelectorAll(".idx")
button.forEach((e) => {
    e.addEventListener("click", () => {
        createModal({
            title: "Sign up successfully", 
            description: `You have successfully join ${e.id}`,
            button: {
                type: "tertiary",
                description: "Close"
            }
        })
    })
})