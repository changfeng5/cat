window.addEventListener('load', function () {
    var banl = document.querySelector('.banl');
    var ol = banl.querySelector('ol');
    var li = ol.querySelectorAll('li');
    console.log(li.length);
    for (var i = 0; i < li.length; i++) {
        console.log(1);
    }
})