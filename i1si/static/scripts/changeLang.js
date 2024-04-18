function changeLang() {
    let currLang = document.getElementById("lang");
    if (currLang.innerHTML == "ENG") {
        currLang.innerHTML = "RU";
        document.getElementById("full-name").innerHTML = 'Ivan Sidorchuk';
        var elements = document.getElementsByClassName("stack");
        for (var i=0; i < elements.length; i++) {
            elements[i].innerHTML = 'Stack'
        }
        document.getElementById("about").innerHTML = 'About';
        document.getElementById("about-t").innerHTML = 'I am actively seeking a position as a backend developer in order to adopt and apply best practices.';
        document.getElementById("about-p").innerHTML = 'I am interested in using programming to solve emerging problems and make life easier. This is how some applications came about, some of which have become my pet-projects.        '
        document.getElementById("pet").innerHTML = 'Pet-projects'
        document.getElementById("pet-first").innerHTML = '— travel companion search app.'
        document.getElementById("pet-second").innerHTML = '— free vpn app.'
        document.getElementById("pet-third").innerHTML = '— gym progress tracking app.'
    } else {
        currLang.innerHTML = "ENG";
        document.getElementById("full-name").innerHTML = 'Иван Сидорчук'
        var elements = document.getElementsByClassName("stack");
        for (var i=0; i < elements.length; i++) {
            elements[i].innerHTML = 'Стек'
        }
        document.getElementById("about").innerHTML = 'Обо мне';
        document.getElementById("about-t").innerHTML = 'Активно ищу работу в качестве backend разработчика для получения и применения best practices.';
        document.getElementById("about-p").innerHTML = 'Мне интересно использовать программирование для решения возникающих проблем и упрощения жизни. Так появились приложения, некоторые из которых стали отдельными pet-проектами.';
        document.getElementById("pet").innerHTML = 'Pet-проекты'
        document.getElementById("pet-first").innerHTML = '— приложение для поиска попутчиков.'
        document.getElementById("pet-second").innerHTML = '— приложение для получения бесплатного доступа к прокси серверам (VPN).'
        document.getElementById("pet-third").innerHTML = '— приложение для отслеживания прогресса в тренажерном зале.'
    }
}