function animate(obj, target, callback) {
    // console.log(callback);  callback = function() {}  调用的时候 callback()
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // 缓慢效果
        var step = (target - obj.offsetLeft) / 10;
        // 避免出现精度问题，正数取小，负数取大
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            // 停止动画即停止定时器
            clearInterval(obj.timer);
            // 回调函数
            // 另一种方法callback && callback();
            if (callback) {
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 20);
}