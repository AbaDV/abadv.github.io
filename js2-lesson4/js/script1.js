//Функция табов idTabs - селектор для табов
function tabs(idTabs) {
    let tabs = $(idTabs);
    $('.tabs4 > .tabs5', tabs).each(function(i) {if ( i != 0 ) $(this).hide(0); }); //скрывает все вкладки, кроме первой
    tabs.on('click', '.tabs1 a', function(e){
    e.preventDefault();                                                                 //Предотвращаем стандартную обработку клика по ссылке
    let tabId = $(this).attr('href');                                                   //Узнаем значения ID блока, который нужно отобразить
    $('.tabs1 a',tabs).removeClass();                                               //Удаляем все классы у якорей и ставим tabs3active текущей вкладке
    $(this).addClass('tabs3active');                                                //Прячем содержимое всех вкладок и отображаем содержимое нажатой
    $('.tabs4 > .tabs5', tabs).hide(0);
    $(tabId).fadeIn(500);
    }); }
    
    $(document).ready(function(){
    tabs('.mytabs1');                    //активируем первые табы
    tabs('.mytabs2');                    //активируем вторые табы
    });