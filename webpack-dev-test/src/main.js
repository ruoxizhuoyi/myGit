import './style.css'

function i(e, t) {
    var n = window.location.search
        , i = ""
        , o = {};
    if (t)
        i = t.split("?")[1].split("&");
    else {
        if (!window.location.search)
            return;
        i = n.substr(1).split("&")
    }
    for (var r = 0; r < i.length; r++) {
        var a = i[r].split("=");
        o[a[0]] = a[1]
    }
    return e ? o[e] : t ? o[e] : o
}


var tabIndex = i() && i().tabIndex;

console.log(tabIndex)

var oBox = $('.box');
var oBoxWidth = $('.box').width();
scrollToIndex(oBox,tabIndex)

function scrollToIndex(el,index) {
    var $tar = $(el).find('li').eq(index);
    var thisWidth = $tar.width();
    var moveLeft = $tar[0].offsetLeft  + thisWidth / 2;
    var halfWidth = $(el).width() / 2;
    if (moveLeft < halfWidth) {
        oBox.animate({
            scrollLeft: $tar[0].offsetLeft - halfWidth
        })
    } else if (moveLeft >= halfWidth) {
        oBox.animate({
            scrollLeft: moveLeft - halfWidth
        })
    }
}

oBox.find('li').on('click', function () {
    var index = $(this).index();
    scrollToIndex(oBox,index)
});  