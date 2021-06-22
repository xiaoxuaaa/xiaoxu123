function getImages() {
    return document.getElementById("test").querySelectorAll("img");       // 搜找该页面下轮播图容器中的所有img
}
function getCurrent() {
    return document.getElementById("test").querySelector("img.current");  // 搜找该页面下轮播图容器中当前展示的img
}
function setCurrent(index) {
    var imgs = getImages();
    var cur = getCurrent();
    imgs.forEach(v => v.className = "");   // 清空所有图片的类名
    cur.className = "last";                // 设置当前展示的图片的类名为 "last", 意为: "上一次展示的图片"
    imgs[index].className = "current";     // 设置要设置的图片的类名为 "current"
}
function moveNext() {          // 移动展示图片到下一个
    var imgs = getImages();
    var curIndex;
    for (curIndex = 0; curIndex < imgs.length; curIndex++) {
        if (imgs[curIndex].className == "current") {
            break;
        }
    }
    if (curIndex + 1 < imgs.length) {
        setCurrent(curIndex + 1);
    } else {
        setCurrent(0);
    }
}