//Скрипт табов - позволяет создавать сколько угодно вкладок на 1-й странице
//Создано в blogprogram.ru (http://blogprogram.ru/skript-vkladok-tabov-na-jquery-dlya-sajta/)

//Функция табов idblogtabs - селектор для табов
function blogtabs(idblogtabs) {
    var tabs = $(idblogtabs);
    $('.blogtabs4 > .blogtabs5', tabs).each(function(i) {if ( i != 0 ) $(this).hide(0); }); //скрывает все вкладки, кроме первой
    tabs.on('click', '.blogtabs1 a', function(e){
    e.preventDefault();                                                                 //Предотвращаем стандартную обработку клика по ссылке
    var tabId = $(this).attr('href');                                                   //Узнаем значения ID блока, который нужно отобразить
    $('.blogtabs1 a',tabs).removeClass();                                               //Удаляем все классы у якорей и ставим blogtabs3active текущей вкладке
    $(this).addClass('blogtabs3active');                                                //Прячем содержимое всех вкладок и отображаем содержимое нажатой
    $('.blogtabs4 > .blogtabs5', tabs).hide(0);
    $(tabId).fadeIn(500);
    }); }
    
    $(document).ready(function(){
    blogtabs('.mytabs1');                    //активируем первые табы
    blogtabs('.mytabs2');                    //и вторые
    });