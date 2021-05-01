window.addEventListener('load', function () {
    var banl = document.querySelector('.banl');
    var ol = banl.querySelector('ol');
    var li = ol.querySelectorAll('li');
    console.log(li);
    console.log(ol.children);
    for (var i = 0; i < li.length; i++) {
        li[i].addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
        }
})