window.addEventListener('load', function () {
    var banl = document.querySelector('.banl');
    var ol = banl.querySelector('ol');
    var li = ol.querySelector('li');
    for (var i = 0; i < li.length; i++) {

    }
    li.addEventListener('click', function () {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        li.className = 'current';
    })
})