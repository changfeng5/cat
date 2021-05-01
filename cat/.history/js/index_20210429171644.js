window.addEventListener('load', function () {
    var banl = document.querySelector('.banl');
    var ul = banl.querySelector('ul');
    var ol = banl.querySelector('ol');
    var banlWidth = banl.offsetWidth;
    for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].setAttribute('index', i);
        ol.children[i].addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            // 点击小圆圈，移动图片
            var index = this.getAttribute('index');
            animate(ul, -index * banlWidth);
        })
    }
    // 把ul里面的第一个小li设置类名为 current 默认刷新第一张
    ol.children[0].className = 'current';
    // 左右侧按钮
    var arrowl = banl.querySelector('.arrowl');
    var arrowr = banl.querySelector('.arrowr');
    var num = 0;
    arrowr.addEventListener('click', function () {
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * banlWidth);
    })
})