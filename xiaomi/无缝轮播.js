{
    let bannerbox = document.querySelector('.banner-box');
    let num = 1;
    let stop = setInterval(move, 3000);

    function move(dirr = 'r') {
// if(num==0){bannerbox.style.transition="all 1s";}
        if (dirr == 'r') {
            num++;
            if (num == 7) {
                num = 1;
            }
            // bannerbox.style.marginLeft=-1200*num+"px";
        }
        // else if (dirr == 'l') {
        //     num--;
        //     if (num == 0) {
        //         num = 7;
        //     }
        //     // bannerbox.style.marginLeft=-1200*num+"px";
        // }
        // bannerbox.style.marginLeft = -1200 * num + "px";
    }

    bannerbox.addEventListener('transitionend', function () {
        flag = true;
        if (num == 0) {
            bannerbox.style.transition = 'none';
            bannerbox.style.marginLeft = -8400 + 'px';
            num = 7;
        }
        if (num == 7) {
            bannerbox.style.transition = 'none';
            bannerbox.style.marginLeft = -1200 + 'px';
            num = 1;
        }

        setTimeout(function () {//这是第二种方式
            bannerbox.style.transition = "all 1s";
        }, 0)
    })


    window.onblur = bannerbox.onmouseover = function () {
        clearInterval(stop);
    }
    window.onfocus = bannerbox.onmouseout = function () {
        stop = setInterval(move, 3000);
    }
//箭头功能
    let bprev = document.querySelector('.bprev');
    let bnext = document.querySelector('.bnext');
    let flag = true;
    bnext.onclick = function () {
        if (flag) {
            flag = false;
            move();
        }
    }
    bprev.onclick = function () {
        if (flag) {
            flag = false;
            move('l');
        }
    }


}