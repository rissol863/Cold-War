let btn_lang = document.querySelector(".lang")
let modal_window = document.querySelector(".lang_block")


btn_lang.addEventListener("click", () => {
    modal_window.classList.toggle('lang_block_open')
})