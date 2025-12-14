let input = document.querySelectorAll(".input")
function handleForm(event) {
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let date = document.getElementById("date").value
    input.forEach((e) => {
        e.value = ""
    })
    createModal({
        title : `Trial Class Successfully Scheduled`,
        description: `
            Your trial class is schedule at ${date}<br>
            We'll see you there ${firstName} ${lastName}. Hope you'll have a great experience<br>
            Since this is the first time you request a trial class, we'll also give you a gift when you come to your first class
        `,
        button: {
            type: "tertiary",
            description: "Close"
        }
    })
}