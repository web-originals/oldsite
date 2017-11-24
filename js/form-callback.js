/**
 * Created by Igor on 21.09.2017.
 */
//валидация мыла в модалке
function validateEmail(email) {
    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}

$(document).ready(function ($) {
    //маски для полей
    $(".phone-mask").mask("+7 (999) 99-99-999");

    //кнопка просбы позвонить
    $(".backcall").on("click", function () {
        $("#form-contact").fadeIn();
    });
    //кнопка скрытия модалки обратного звонка
    $("#hide-contact").on("click", function () {
        $("#form-contact").fadeOut();
    });
    $("#contact").submit(function () {
        return false;
    });
    //кнопка отправки заявки
    $("#send").on("click", function () {
        var emailval = $("#email").val();
        var namevl = $("#name").val();
        var phonevl = $("#phone").val();
        var msgval = $("#msg").val();
        var msglen = msgval.length;
        var mailvalid = validateEmail(emailval);

        if (mailvalid == false) {
            $("#email").addClass("error");
        }
        else if (mailvalid == true) {
            $("#email").removeClass("error");
        }
        if (mailvalid == false) {
            $("#name").addClass("error");
        }
        else if (mailvalid == true) {
            $("#name").removeClass("error");
        }
        if (mailvalid == false) {
            $("#phone").addClass("error");
        }
        else if (mailvalid == true) {
            $("#phone").removeClass("error");
        }
        if (msglen < 4) {
            $("#msg").addClass("error");
        }
        else if (msglen >= 4) {
            $("#msg").removeClass("error");
        }
        if (mailvalid == true && msglen >= 4) {
            // если обе проверки пройдены
            // сначала мы скрываем кнопку отправки
            $("#send").replaceWith("<em id='send-text' style='color: #f1f1f1;'>Отправка, ожидайте</em>");
            $.ajax({
                type: 'POST',
                url: 'sendmessage.php',
                data: $("#contact").serialize(),
                success: function (data) {
                    if (true) {
                        $("#contact").fadeOut("fast", function () {
                            $(this).before("<div><button type=\"button\" id=\"hide-contact\">Закрыть</button></div><p><strong>Успешно! Ваше сообщение отправлено  :)</strong></p>");
                            //кнопка скрытия модалки обратного звонка
                            $("#hide-contact").on("click", function () {
                                $("#form-contact").fadeOut();
                            });
                        });
                    }
                    else {
                        $("#send-text").replaceWith("<em style='color: #ff5412'>Ошибка при отправке, попробуйте позже!</em>");
                    }
                }
            });
        }
    });

    //кнопка отправки заявки 2 версия
    $("#send2").on("click", function () {
        if ($("#name2").val().length < 1) {
            $('#name2').addClass("error");
        }
        else {
            $("#name2").removeClass("error");
        }
        if ($("#phone2").val().length < 1) {
            $("#phone2").addClass("error");
        }
        else {
            $("#phone2").removeClass("error");
        }
        if ($("#name2").val().length > 0 && $("#phone2").val().length > 0) {
            // если обе проверки пройдены
            // сначала мы скрываем кнопку отправки
            $("#send2").replaceWith("<em id='send-text' style='color: #f1f1f1;'>Отправка, ожидайте</em>");
            $.ajax({
                type: 'POST',
                url: 'sendmessage.php',
                data: $("#contact").serialize(),
                success: function (data) {
                    if (data == "true") {
                        $("#contact").fadeOut("fast", function () {
                            $(this).before("<p><strong>Успешно! Ваше сообщение отправлено  :)</strong></p>");
                            setTimeout("$.fancybox.close()", 1000);
                        });
                    }
                    else {
                        $("#send-text").replaceWith("<em style='color: #ff5412'>Ошибка при отправке, попробуйте позже!</em>");
                    }
                }
            });
        }
    });
});