window.addEventListener('load', function () {
    var banl = document.querySelector('.banl');
    var ol = banl.querySelector('ol');
    for (var i = 0; i < ol.children.length; i++) {
        var li = ol.querySelector('li');
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            li.className = 'current';
        })
    }

})