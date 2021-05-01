window.addEventListener('load', function () {
    var banl = document.querySelector('.banl');
    var ol = banl.querySelector('ol');
    var li = ol.querySelector('li');
    console.log(li);
    for (var i = 0; i < li.length; i++) {
        console.log(1);
    }
})