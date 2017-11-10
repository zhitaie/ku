//banner图上的导航开始
{
    let headlist=document.querySelectorAll('.head .head-h');
    console.log(headlist);
    let head_hover1=document.querySelector('.head-hover1');
    let head_hover2=document.querySelector('.head-hover2');
    let head_hover3=document.querySelector('.head-hover3');
    let head_hover4=document.querySelector('.head-hover4');
    
    
    
    
    
    
    

}
//banner图上的导航结束
//long轮播开始
let long = document.querySelector('.long');
let long_box = document.querySelector('.long-box');
let lprev = document.querySelector('.left-long');
let lnext = document.querySelector('.next-long');
let num = 4;
let t = setInterval(moveFn, 2000);
function moveFn() {
    if (dir == 'r') {
        num++;
    } else if (dir == 'l') {
        num--;
    }
    long.style.transition = "all 1s";//每次执行的时候都给其加上动画，下标8之后就没有动画了
    long.style.marginLeft = -295 * num + 'px';
}
long.addEventListener('transitionend', function () {
    flag = true;
    if (num == 12) {
        long.style.transition = 'none';//移动到下标为8的时候，取消动画
        long.style.marginLeft = -1180 + 'px';
        num = 4;
    }
    if (num == 0) {
        long.style.transition = 'none';//移动到下标为8的时候，取消动画
        long.style.marginLeft = -2360 + 'px';
        num = 8;
    }
})
long_box.onmouseover = window.onblur = function () {
    clearInterval(t);
}
long_box.onmouseout = window.onfocus = function () {
    t = setInterval(moveFn, 2000);
}
let flag = true;
let dir = 'r';//默认往右移动
lnext.onclick = function () {
    dir = 'r';//点击右箭头之后，轮播往左移动
    if (flag) {
        flag = false;
        moveFn();
    }
}
lprev.onclick = function () {
    dir = 'l';//点击左箭头之后，轮播往右移动
    if (flag) {
        flag = false;
        moveFn();
    }
}
//long轮播结束
//banner轮播开始
{
//  let bannerInner=document.querySelector('.banner-img-inner');
//     let bzuo=document.querySelector('.banner-img .zuo');
//     let bnext=document.querySelector('.banner-img .next');
//     let num=1;
// setInterval(function(){
//     num++;
//     bannerInner.style.marginLeft=-740*num+'px';
// },3000);

}
//banner轮播结束
//导航右侧栏效果开始
{
    let llists = document.querySelectorAll('.banner-rbottom li');
    llists.forEach(function (ele) {
        ele.onclick = function () {
            for (let i = 0; i < llists.length; i++) {
                llists[i].style.background = 'white';
                llists[i].style.color = 'black';
                llists[i].style.border = ' 1px solid #dadada';
            }
            ele.style.background = '#e40077';
            ele.style.color = 'white';
            ele.style.border = ' 1px solid #e40077';
        }
    })
}
//导航右侧栏效果结束
//公告效果开始
{
    const p_txt1 = document.querySelectorAll('.public1>div');
    const p_txt2 = document.querySelectorAll(".public2>div");
    const pl = document.querySelector(".p-right .p-l ");
    const pr = document.querySelector(".p-right .p-r");
    let num = 0;
    pr.onclick = function () {
        num++;
        if (num == p_txt2.length) {  //one 的长度是4
            num = 0;
        }
        p_txt2.forEach(function (ele, index) {
            ele.style.display = "none";
            p_txt1[index].style.display = "none";
        })
        p_txt2[num].style.display = "block"
        p_txt1[num].style.display = "block"
    }
    pl.onclick = function () {
        num--;
        if (num == -1) {
            num = p_txt2.length - 1;
        }
        for (var i = 0; i < p_txt2.length; i++) {
            p_txt2[i].style.display = "none"
            p_txt1[i].style.display = "none"
        }
        p_txt1[num].style.display = "block"
        p_txt2[num].style.display = "block"
    }
}
//公告效果结束
//自动轮播-------------中间轮播图效果-----------------
{
    let zzuo = document.querySelector('.zzuo');
    let nnext = document.querySelector('.nnext');
    let bannerbox = document.querySelector('.banner-img');
    let imgs = document.querySelectorAll('.banner-img-inner li');
    let dians = document.querySelectorAll('.dian-box li');
    let flag = true;
    let now = 0;
    let z = 10;
    let tp = setInterval(movee, 3000);
    function movee(dir = 'r') {
        if (dir === 'r') {
            imgs[now].classList.add('leftout');
            dians[now].classList.remove('dian-active');
            now++;
            if (now === imgs.length) {
                now = 0;
            }
            imgs[now].classList.add('rightin');
        } else if (dir === 'l') {
            imgs[now].classList.add('rightout');
            dians[now].classList.remove('dian-active');
            now--;
            if (now === -1) {
                now = imgs.length - 1;
            }
            imgs[now].classList.add('leftin');
        }
        imgs[now].style.zIndex = z++;
        dians[now].classList.add('dian-active');
    }

    imgs.forEach(function (ele) {
        ele.addEventListener('animationend', function () {
            flag = true;
            ele.className = '';
        })
    })
//点击轮播点效果--------------
    dians.forEach(function (ele, index) {
        ele.onclick = function () {
            if (flag) {
                if (index > now) {
                    imgs[now].classList.add('leftout');
                    imgs[index].classList.add('rightin');
                } else if (index < now) {
                    imgs[now].classList.add('rightout');
                    imgs[index].classList.add('leftin');
                }
                dians[now].classList.remove('dian-active');
                dians[index].classList.add('dian-active');
                imgs[index].style.zIndex = z++;
                now = index;
            }
            flag = false;
        }
    })
    bannerbox.onmouseover = function () {
        clearInterval(tp);
    }
    bannerbox.onmouseout = function () {
        tp = setInterval(movee, 3000);
    }

    window.addEventListener('onblur', function () {
        clearInterval(tp);
    })
    window.addEventListener('onfocus', function () {
        tp = setInterval(movee, 3000);
    })

    nnext.onclick = function () {
        if (flag) {
            movee('r');
            flag = false;
        }
    }
    zzuo.onclick = function () {
        if (flag) {
            movee('l');
            flag = false;
        }
    }
}



//右侧图片移动效果开始
{
    let malltu=document.querySelectorAll(' .w-nav-box li');
    malltu.forEach(function(ele,index){
        ele.onmouseover=function(){
            this.style.left='-84px';
        }
        ele.onmouseout=function(){
            this.style.left="-20px";
        }

    })
}
//右侧图片移动效果结束


