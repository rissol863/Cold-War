let vopros = [
    "В каком году началась Холодная война?",
    "В каком году закончилась Холодная война?",
    "Кто был верховным лидером США в 1945 году?",
    "Кто был верховным лидером Франции в 1945 году?",
    "Как нызавалась операция по освобождению Сицилии?",
    "Какую операцию провели ГРУ во вьетнаме?",
    "Какую операцию провели ЦРУ во афганистане?",
    "В каком году началась Афганская война?",
    "Кто такой Сталин?",
    "Ты молодец"
]

let vopros_en =  [
    'In what year did the Cold War begin?',
    'In what year did the Cold War end?',
    'Who was the supreme leader of the United States in 1945?',
    'Who was the supreme leader of France in 1945?',
    'What was the name of the operation to liberate Sicily?',
    'What operation did the GRU conduct in Vietnam?',
    'What operation did the CIA conduct in Afghanistan?',
    'In what year did the Afghan War begin?',
    'Who is Stalin?',
    'You are doing great'
]

let otvet = [
    "1945",
    "1991",
    "Гарии Трумэн",
    "Шарль де Голль",
    "Хаски",
    "Вьетнамский бросок",
    "Сайклон",
    "1979",
    "Верховный лидер СССР",
    ""
]

let otvet_en = [
    '1945',
    "1991",
    "Harry Truman",
    "Charles de Gaulle",
    "Husky",
    "Vietnamese throw", 
    "Cyclone",
    "1979",
    "Supreme leader of the USSR",
    ''
]


let otvet2 = [
    ['1945', '1994', '1941', '2001'],
    ['1955', '1945', '1991', '2001'],
    ['Шарль де Голль', 'Гарии Трумэн', 'Сталин', 'Черчилль'],
    ['Гарии Трумэн', 'Шарль де Голль', 'Черчилль', 'Сталин'],
    ['Оверлорд', 'Хаски', 'Багратион', 'Сайклон'],
    ['Вьетнамский бросок', 'Сайклон', 'Тушканчик', 'Оверлорд'],
    ['Вьетнамский бросок', 'Тушканчик', 'Багратион', 'Сайклон'],
    ['1918', '1979', '1991', '750'],
    ['Верховный лидер США', 'Верховный лидер Франции', 'Верховный лидер Великобритании', 'Верховный лидер СССР'],
    []
]


let otvet2_en = [
    ['1945', '1994', '1941', '2001'],
    ['1990', '1945', '1991', '1955'],
    ['Harry Truman', 'Joseph Stalin', 'Winston Churchill', 'Charles de Gaulle'],
    ['Joseph Stalin', 'Harry Truman', 'Charles de Gaulle', 'Winston Churchill'],
    ['Husky', 'Cyclone', 'Overlord', 'Vietnamese throw'], 
    ['Cyclone', 'Overlord', 'Husky', 'Vietnamese throw'], 
    ['Overlord', 'Vietnamese throw', 'Cyclone', 'Overlord'], 
    ['1945', '1994', '1979', '2001'],
    ['Supreme leader of China', 'Supreme leader of the USA', 'Supreme leader of the USSR', 'Supreme leader of Russia'],
    []
]


let lang = document.documentElement.lang

let items_stats = document.querySelectorAll(".opros_item_stats span")
let false_otvet = 0

let step = 0
let btns = document.querySelectorAll('.opros_btns button')
let vopros_text = document.querySelector('.opros_item h1')
let contant_img = document.querySelector(".opros_item_contant img")

let btn_inner = () => {
    if(lang == "ru"){
        vopros_text.innerHTML = vopros[step]
        for (let i = 0; i < btns.length; i++) {
            btns[i].innerHTML = otvet2[step][i]
        }
    }

    else if(lang == "en"){
        vopros_text.innerHTML = vopros_en[step]
        for (let i = 0; i < btns.length; i++) {
            btns[i].innerHTML = otvet2_en[step][i]
        }
    }
        

    

    if (step == 3) {
        contant_img.src = "img/game_cherchil.jpg"
    }
    else if (step == 6) {
        contant_img.src = "img/lid_truman.jpg"
    }
    else if (step == 9) {
        btns.forEach(item => {
            item.remove()
        })
    }
}

btn_inner()


btns.forEach(item => {  
    item.addEventListener('click', () => {
        if(lang === "ru"){
            if (item.innerHTML == otvet[step]) {
                item.style.backgroundColor = "#00C871"
                step++
                items_stats[1].innerHTML = step
                items_stats[0].innerHTML = step
                btn_inner()
                setTimeout(() => {
                    item.style.backgroundColor = "#5b78a0"
                }, 600)
            }
            else {
                item.style.backgroundColor = "#ff0000"
                false_otvet++
                setTimeout(() => {
                    item.style.backgroundColor = "#5b78a0"
                    items_stats[2].innerHTML = false_otvet
                }, 600)
            }
        }

        else if(lang == 'en'){
            if (item.innerHTML == otvet_en[step]) {
                item.style.backgroundColor = "#00C871"
                step++
                items_stats[1].innerHTML = step
                items_stats[0].innerHTML = step
                btn_inner()
                setTimeout(() => {
                    item.style.backgroundColor = "#5b78a0"
                }, 600)
            }
            else {
                item.style.backgroundColor = "#ff0000"
                false_otvet++
                setTimeout(() => {
                    item.style.backgroundColor = "#5b78a0"
                    items_stats[2].innerHTML = false_otvet
                }, 600)
            }
        }
        
    })
})