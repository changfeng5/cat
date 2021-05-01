window.addEventListener('load', function () {
    var banl = document.querySelector('.banl');
    var ul = banl.querySelector('ul');
    var ol = banl.querySelector('ol');
    // var li = ol.querySelectorAll('li');
    // console.log(li);
    // console.log(ol.children);
    for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            // 点击小圆圈，移动图片
            animate(ul)
        })
    }
})