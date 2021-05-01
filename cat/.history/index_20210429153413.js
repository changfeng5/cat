window.addEventListener('load', function () {
    var banl = document.querySelector('.banl');
    var ol = banl.querySelector('ol');
    var li = ol.querySelector('li');
    for (var i = 0; i < ol.children.length; i++) {
        li[i].addEventListener('click', function () {
            console.log(1);
        })
    }

})