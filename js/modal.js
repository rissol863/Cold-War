let modal = document.querySelector(".block_mobile")
let burger = document.querySelector(".burger")
let header = document.querySelector("header")
let menu_click = false

burger.addEventListener("click", () => {
    if(menu_click == false){
        header.style = "overflow: visible;"
        modal.style = "transform: translateX(0%);"
        menu_click = true
    }

    else if(menu_click == true){
        header.style = "overflow: hidden;"
        modal.style = "transform: translateX(100%)"
        menu_click = false
    }


})