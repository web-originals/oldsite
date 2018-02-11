/**
 * Created by игорь on 11.02.2018.
 */
$(document).ready(function ($) {
    var links = document.querySelectorAll(".galery-href");
    links.forEach(function (link, i, links) {
        link.onclick = function (a) {
            var urllink = $(this).attr('href');
            var modal = $(urllink).find('.modalImgUrl');
            var block = $(urllink).find('.block');
            block.html(' <img src="'+modal.val()+'" alt="">');
        };
    });
});