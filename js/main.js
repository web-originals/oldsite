/**
 * Created by Igor on 07.09.2017.
 */

$(document).ready(function ($) {
//анимация меню
    "use strict";

    var toggles = document.querySelectorAll(".cmn-toggle-switch");
    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    }
    function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
            e.preventDefault();
            if(this.classList.contains("active") === true) {
                location.href="#close";
                this.classList.remove("active");
                $('#openModal').removeClass("slideInLeft");
                $('#openModal').addClass("slideOutLeft");
            }else{
                location.href="#openModal";
                this.classList.add("active");
                $('#openModal').removeClass("slideOutLeft");
                $('#openModal').addClass("slideInLeft");
            }
        });
    }

    // js для вертикального скрулла
    $('#fullpage').fullpage({
        'recordHistory': false,
        'animateAnchor': true,
        'scrollOverflow': true,
        'verticalCentered': false,
        'css3': true,
        'sectionsColor': ['#F0F2F4', '#fff', '#fff'],
        'anchors': [ 'services','promotion', 'design','about_us', 'projects', 'contacts'],
        'menu': '#menu',
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': [ 'Наши услуга','Продвижение', 'Адаптивный дизайн','О нас', 'Наши проекты', 'Контакты']
    });

    //начальные размеры
    var divmap = $("#coordmap"), mobileWidth = 991;
    divmap.width($(window).width() / ($(window).width() > mobileWidth ? 2 : 1));
    divmap.height($(window).height() / ($(window).width() < mobileWidth ? 2 : 1));

    //resize map
    $(window).resize(function () {
        divmap.width($(window).width() / ($(window).width() > mobileWidth ? 2 : 1));
        divmap.height($(window).height() / ($(window).width() < mobileWidth ? 2 : 1));
    });

    //интервала переливающегося фона
    setInterval(updateGradient, 10);

    //кнопка просбы позвонить
    $("#mobile").on("click", function () {
        $("#menu-modile").fadeIn();
    });
    //кнопка скрытия модалки обратного звонка
    $("#mobile-close").on("click", function () {
        $("#menu-modile").fadeOut();
    });
});

// карта в контактах
ymaps.ready(function () {
    alert(333);
    var coordmap = new ymaps.Map("coordmap", {
        center: [45.350937, 39.058247],
        zoom: 13,
        controls: []
    });
    var placemark = new ymaps.Placemark([45.350937, 39.058247], {
        balloonContent: '<img src="images/housJPG.jpg" />',
        iconContent: "Веб студия 'ORIGINALS'"
    }, {
        preset: "islands#redStretchyIcon",
        // Отключаем кнопку закрытия балуна.
        balloonCloseButton: false,
        // Балун будем открывать и закрывать кликом по иконке метки.
        hideIconOnBalloonOpen: false
    });
    coordmap.geoObjects.add(placemark);
    coordmap.behaviors.disable('scrollZoom');
});

//функция открытия полного текста
var sh_cont;
var sh_dot;
function showHide(sh_cont, sh_dot) {
    if (document.getElementById(sh_cont).style.display == 'block') {
        document.getElementById(sh_cont).style.display = 'none';
        document.getElementById(sh_dot).innerHTML = '... читать далее';
    } else {
        document.getElementById(sh_cont).style.display = 'block';
        document.getElementById(sh_dot).innerHTML = '';
    }
}

//переливающийся фон
var colors = [
    [87, 17, 60],
    [58, 0, 50],
    [22, 91, 84],
    [0, 51, 42],
    [95, 75, 24],
    [83, 60, 0]];
var step = 0;
//color table indices for:
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0, 1, 2, 3];
//transition speed
var gradientSpeed = 0.001;
function updateGradient() {
    if ($ === undefined) return;

    var c0_0 = colors[colorIndices[0]];
    var c0_1 = colors[colorIndices[1]];
    var c1_0 = colors[colorIndices[2]];
    var c1_1 = colors[colorIndices[3]];

    var istep = 1 - step;
    var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

    var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

    $('.gradient-background').css({
        background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
    }).css({
        background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
    });

    step += gradientSpeed;
    if (step >= 1) {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];
        //pick two new target color indices
        //do not pick the same as the current one
        colorIndices[1] = ( colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = ( colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
    }
    // $('selector').loupe({
    //     width: 200, // ширина лупы
    //     height: 150, // высота лупы
    //     loupe: 'loupe' // css класс лупы
    // });
}
//конец переливающегося фона
