window.addEventListener('load', function () {
    var banl = document.querySelector('.banl');
    var ol = banl.querySelector('ol');
    ol.addEventListener('click', function () {
        console.log(1);
    })
    // for (var i = 0; i < ol.children.length; i++) {
    //     ol[i].addEventListener('click', function () {
    //         console.log(1);
    //     })
    // }

})