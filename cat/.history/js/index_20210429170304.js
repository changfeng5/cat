window.addEventListener('load', function () {
    var banl = document.querySelector('.banl');
    var ul = banl.querySelector('ul');
    var ol = banl.querySelector('ol');
    for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].setAttribute('index', i);
        ol.children[i].addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            // 点击小圆圈，移动图片
            var banlWidth = banl.offsetWidth;
            var index = this.getAttribute('index');
            animate(ul, -index * banlWidth);
        })
    }
    // 把ul里面的第一个小li设置类名为 current
    ol.children[0].className = 'current';
})