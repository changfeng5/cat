window.addEventListener('load', function () {
    var ol = banl.querySelector('ol');
    var li = banl.querySelector('li');
    li.addEventListener('click', function () {
        for (var i = 1; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
    })
    ol.children.className = 'current';
    console.log(li);
})