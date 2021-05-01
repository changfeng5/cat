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
            // 要联立num与index与circle，防止播放顺序出错
            num = index;
            circle = index;
            animate(ul, -index * banlWidth);
        })
    }
    // 把ul里面的第一个小li设置类名为 current 默认刷新第一张
    ol.children[0].className = 'current';
    // 克隆第一张图片(li)放到ul 最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    // 右侧按钮
    var arrowl = banl.querySelector('.arrowl');
    var arrowr = banl.querySelector('.arrowr');
    // num最后一点跳回第一点
    var num = 0;
    // circle 控制小圆圈的播放
    var circle = 0;
    arrowr.addEventListener('click', function () {
        // 图片临界跳到另一边
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        // num要放在animate前面
        animate(ul, -num * banlWidth);
        circle++;
        // 判断跳为小圆点回第一个点(circle %= ol.children.length;这样写也行)
        circle = circle == ol.children.length ? 0 : circle;
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    })
    // 左侧按钮
    arrowl.addEventListener('click', function () {
        // 图片临界跳到另一边
        if (num < 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * banlWidth + 'px';
        }
        num--;
        // num要放在animate前面
        animate(ul, -num * banlWidth);
        circle--;
        // 判断跳为小圆点最后一个点(circle %= ol.children.length;这样写也行)
        circle = circle < 0 ? ol.children.length - 1 : circle;
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    })
})