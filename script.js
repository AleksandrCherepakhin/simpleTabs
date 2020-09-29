

const allTabs = document.querySelector('.all_tabs'),
      tab = document.querySelectorAll('.tab_item'),
      content = document.querySelectorAll('.content_item');

//фнкция что скрывает контент и табы
function hideContent() {
    content.forEach((item) => {
        item.classList.add('hide')
        item.classList.remove('show')
    });
    tab.forEach((item) => {
        item.classList.remove('show', 'tab_item--active')
    });
}

//функция что показывает контент и табы
function showContent(i = 0) {
    tab[i].classList.add('show', 'tab_item--active');
    content[i].classList.remove('hide', 'anim');
    content[i].classList.add('show', 'anim');
}

//вызов функций
hideContent();
showContent();

// обработчик событий по клику на таб через родителя
allTabs.addEventListener('click', function(event) {
    // делегирование событий
    let target = event.target;
    //проверяем если клик был по табу то перебираем наши табы
    //и при этом проверяем равно ли событие какому-то табу 
    //если равно, то запускаем функции
    if(target && target.classList.contains('tab_item')) {
        tab.forEach((item, i) => {
            if(target == item) {
                hideContent();
                showContent(i);
            }
        });
    }
})



























