const inputText = document.getElementById("console-input-text")
//const inputButton = document.getElementById("console-input-button")
const files = document.getElementById("files")
const sobreMi = document.getElementById("sobre-mi-id")
const certificaciones = document.getElementById("certificaciones-id")
const noSuported = document.getElementById("non-suported-id")
const help = document.getElementById("help-id")

//inputButton.addEventListener("click", show)

function show(){
    if (inputText.value == "ls"){
        files.style.display = "flex"
        inputText.value = ""
    }
    else if (inputText.value == "cat sobre mi"){
        files.style.display = "none"
        sobreMi.style.display = "flex"
        inputText.value = ""
    }
    else if (inputText.value == "cat certificaciones"){
        files.style.display = "none"
        certificaciones.style.display = "flex"
        certificaciones.style.flexDirection = "column"
        inputText.value = ""
    }
    else if (inputText.value == "clear"){
        sobreMi.style.display = "none"
        certificaciones.style.display = "none"
        files.style.display = "none"
        noSuported.style.display = "none"
        help.style.display = "none"
        inputText.value = ""
    }
    else if (inputText.value == "help"){
        help.style.display = "flex"
        inputText.value = ""
    }
    else{
        noSuported.style.display = "flex"
        inputText.value = ""
    }
}

shortcut.add("enter", intro)

function intro(){
    show()
}

shortcut.add("Ctrl+l", () => {
    sobreMi.style.display = "none"
    certificaciones.style.display = "none"
    files.style.display = "none"
    noSuported.style.display = "none"
    help.style.display = "none"
    inputText.value = ""
})


