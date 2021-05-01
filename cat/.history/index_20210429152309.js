window.addEventListener('load', function () {
    var banl = document.querySelector('.banl');
    var ol = banl.querySelector('ol');
    console.log(ol.children.length);
    for (var i = 0; i < ol.length; i++) {
        console.log(1);
    }
    // li.addEventListener('click', function () {
    //     for (var i = 0; i < ol.children.length; i++) {
    //         ol.children[i].className = '';
    //     }
    //     li.className = 'current';
    // })
})