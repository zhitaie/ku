let start=document.querySelector("#start")
let cont=document.querySelector(".caont")
let dj=document.querySelector("#hei")
let isal=false;
let flag=true;
dj.onfocus=function () {
    isal=true;
}

start.onclick=function () {
    cont.classList.add("ha")
}

let fei=document.querySelector(".fei")
console.log(fei)
let cans=document.querySelector("canvas");
let shijian=document.querySelector(".jishiban span")
let heihei=0;
let le=0
let kaig=true;
var stt
var oo;
var pp;
function nn() {
    heihei++;
    shijian.innerHTML=""+le+"分"+heihei+"秒"
    if(heihei%60==0){
        le++;
        oo=le;
        pp=heihei;
        heihei=0
    }
}
cans.addEventListener("click",function () {
    if(kaig){
        stt=setInterval(nn,1000)
        kaig=false;
    }

})
let canvas=document.querySelector("canvas");
let cj=canvas.getContext("2d");
cj.strokeStyle='#fff';
cj.fillStyle="gold"
let w=40;
let pos={};
drawBoard();
let blank={};
fei.innerHTML=""+15+"秒"

function drawBoard() {
    cj.clearRect(0,0,600,600);
    cj.beginPath();

    for(let i=0;i<15;i++){
        // cj.moveTo(0,i*w+0.5)
        // cj.lineTo(560,i*w+0.5)
        // cj.moveTo(i*w+.5,0)
        // cj.lineTo(i*w+.5,560)
        cj.moveTo(20,i*w+20.5)
        cj.lineTo(580,i*w+20.5)
        cj.moveTo(i*w+20.5,20)
        cj.lineTo(i*w+20.5,580)
    }
    // cj.rect(0.5,0.5,559,559)
    cj.stroke();

    drawPoint(3,3)
    drawPoint(7,7)
    drawPoint(3,11)
    drawPoint(11,3)
    drawPoint(11,11)

    function drawPoint(x,y) {
        cj.save();
        cj.translate(x*w+20,y*w+20)
        cj.beginPath();
        cj.arc(0,0,6,0,2*Math.PI)
        cj.fill();
        cj.restore()
    }
}

function qizi(x,y,color) {
    cj.save();
    cj.translate(x*w+20,y*w+20);
    cj.fillStyle=color;
    cj.beginPath();
    cj.arc(0,0,15,0,2*Math.PI)
    cj.fill();
    cj.restore();
    pos[j(x,y)]=color;
    delete  blank[j(x,y)]
}
for(let i=0;i<15;i++){
    for(let k=0;k<15;k++){
        blank[j(i,k)]=true;
    }
}
// qizi(7,7,"black")

canvas.onclick=function (e) {
    let x=Math.round((e.offsetX-20)/w);
    let y=Math.round((e.offsetY-20)/w);
    if(pos[j(x,y)]){
        return;
    }

    if(flag){
        qizi(x,y,"black")
        if(panduan(x,y,"black")===5){
            over('黑')
        }
        if(isal){
            let p=getpos()
            qizi(p.x,p.y,"#fff");
            if(panduan(p.x,p.y,"#fff")==5){
                over("白")
            }
            return;
        }
    }else{
        qizi(x,y,"white")
        if(panduan(x,y,"white")===5){
            over("白")
        }
    }
    flag=!flag;
}
function getpos() {
    let max=0;
    let po={}
    for(let i in blank){
        let x=parseInt(i.split("_")[0])
        let y=parseInt(i.split("_")[1])
        let gg=panduan(x,y,"black")
        if(gg>max){
            max=gg;
            po={x,y}
        }
    }
    let max2=0;
    let po2={};
    for(let i in blank){
        let x=parseInt(i.split("_")[0])
        let y=parseInt(i.split("_")[1])
        let gg=panduan(x,y,"#fff")
        if(gg>max2){
            max2=gg;
            po2={x,y}
        }
    }
    if(max>max2){
        return po;
    }else {
        return po2;
    }
}
function j(x,y) {
    return x+"_"+y;
}

function panduan(x,y,color) {
    let row=1;
    let i=1;
    while(pos[j(x+i,y)]===color){
        row++;
        i++;
    }
    i=1;
    while (pos[j(x-i,y)]===color){
        row++;
        i++;
    }
    let col=1;
    i=1;
    while(pos[j(x,y+i)]===color){
        col++;
        i++;
    }
    i=1;
    while (pos[j(x,y-i)]===color){
        col++;
        i++;
    }
    let x1=1;
    i=1;
    while(pos[j(x+i,y+i)]===color){
        x1++;
        i++;
    }
    i=1;
    while (pos[j(x-i,y-i)]==color){
        x1++;
        i++;
    }
    let x2=1;
    i=1;
    while(pos[j(x+i,y-i)]==color){
        x2++;
        i++;
    }
    i=1;
    while(pos[j(x-i,y+i)]==color){
        x2++;
        i++;
    }
    return Math.max(row,col,x1,x2)
}
let mask=document.querySelector(".mask")
let h=document.querySelector(".mask h1")
let chu=document.querySelector("#aaa")
function over(name) {
   mask.style.display="block";
    clearInterval(stt);
    h.innerHTML=name+"棋子获胜"
    chu.onclick=function () {
        mask.style.display="none";
        cont.classList.remove("ha")
        cj.clearRect(0,0,600,600);
        imgbox.style.display="none"
        pos={};
        drawBoard();
        flag=true;
        heihei=0;
        le=0;
        shijian.innerHTML=""
        kaig=true;
    }
}
let imgbox=document.querySelector(".tu")
let wlude=document.querySelector("#wbl")
let outpu=document.querySelector("#abc")
outpu.onclick=function () {
    h.innerHTML="";
    setnumber();
    imgbox.style.display="block"
    let url=canvas.toDataURL();
    let newimg=new Image()
    newimg.src=url;
    imgbox.appendChild(newimg)
    wlude.href=url;
    wlude.setAttribute("download","棋谱.png")
}

function setnumber() {
    let n=1;
    for(let i in pos){
        let x=parseInt(i.split("_")[0])
        let y=parseInt(i.split("_")[1])
        cj.save();
        cj.font="14px 宋体"
        cj.textAlign="center";
        cj.textBaseline="middle";
        if(pos[i]=="black"){
            cj.fillStyle="#fff";
        }else {
            cj.fillStyle="#000";
        }
        cj.translate(x*w+20,y*w+20)
        cj.fillText(n++,0,0);
        cj.restore();
    }
}








