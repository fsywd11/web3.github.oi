document.addEventListener('DOMContentLoaded', function () {
    var musicImage = document.getElementById('musicImage');
    var backgroundAudio = document.getElementById('backgroundAudio');

    musicImage.addEventListener('click', function () {
        if (backgroundAudio.paused) {
            backgroundAudio.play();
        } else {
            backgroundAudio.pause();
        }
    });
});


// 更换背景颜色
document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('toggleButton');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        // 检查body是否已经有background-swapped类
        if (body.classList.contains('background-swapped')) {
            body.classList.remove('background-swapped');
        } else {
            body.classList.add('background-swapped');
        }
    });
});

    //按钮点击后更换按钮颜色
    function changeColor(button) {
    // 检查按钮是否已经具有 'clicked' 类
    if (!button.classList.contains('clicked')) {
    // 如果没有，则添加 'clicked' 类
    button.classList.add('clicked');
} else {
 button.classList.remove('clicked');
}
}

const zh = document.getElementById('zh');
const mm = document.getElementById('mm');

function login(){
    if(zh.value===""||mm.value===""){
        alert("账号或密码不能为空");
        return false;
    }
    else if(zh.value!=="123"||mm.value!=="123456"){
        alert("账号或密码错误(可以选择游客登录)");
        return false;
    }
}

// 当页面加载完成时，执行以下JavaScript代码
window.onload = function() {
    // 获取按钮元素
    var btn = document.getElementById("backToTopBtn");

    // 当页面滚动时执行以下函数
    window.onscroll = function() {
        // 如果页面滚动超过100px，则显示按钮，否则隐藏按钮
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    };

    // 当点击按钮时，执行以下函数
    btn.onclick = function() {
        // 将页面滚动到顶部
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
};
