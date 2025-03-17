let currentIndex = 0;

let s_btn_left = document.querySelector(".slider_btn_left")
let s_btn_right = document.querySelector(".slider_btn_right")


s_btn_left.addEventListener("click" , () => {
    currentIndex = (currentIndex - 1 + 11) % 11;
    updateSlider(currentIndex);
})

s_btn_right.addEventListener("click" , () => {
    currentIndex = (currentIndex + 1) % 11;
    updateSlider(currentIndex);
})


function updateSlider(index) {
    const slider = document.querySelector('.slider');
    const offset = index * 100;
    slider.style.transform = `translateX(-${offset}%)`;
   

    // Обновляем активный элемент меню
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`.menu-item[data-index="${index + 1}"]`).classList.add('active');
}

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => { 
        const index = parseInt(item.getAttribute('data-index')) - 1;
        currentIndex = index;
        updateSlider(index);
    });
});

// Инициализация Hammer.js
const slider = document.querySelector('.slider');
const hammer = new Hammer(slider);

hammer.on('swipeleft', () => {
    currentIndex = (currentIndex + 1) % 11;
    updateSlider(currentIndex);
});

hammer.on('swiperight', () => {
    currentIndex = (currentIndex - 1 + 11) % 11;
    updateSlider(currentIndex);
});

// Инициализация первого слайда
updateSlider(currentIndex);

