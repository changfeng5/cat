window.addEventListener('load', function () {
    var banl = document.querySelector('.banl');
    var ol = banl.querySelector('ol');
    var li = ol.querySelector('li');
    li.addEventListener('click', function () {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
            console.log(11);
        }
    })
    li.className = 'current';
})