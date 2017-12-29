{
let pager=document.querySelectorAll(".img_box li");
let act=document.querySelectorAll(".btn_box li");
let bannerContainer=document.querySelector(".banner");
let prebtn=document.querySelector(".banner_left")
let nextbtn=document.querySelector(".banner_right")
    act.forEach(function (ele,index) {
        ele.onclick=function () {
            for(var i=0;i<pager.length;i++){
                act[i].classList.remove("active");
                pager[i].classList.remove("active");
            }
            this.classList.add("active");
            pager[index].classList.add("active");
            n=index;
        }
    })

    let n=0;
    function bannerFn(dir="r") {
        if(dir=="r"){
            n++;//循环次数
        }else if(dir=="l"){
            n--;
        }
        if(n==pager.length){
            n=0;//下标
        }
        if(n == -1){
            n=pager.length-1;
        }
        for (let i = 0; i <pager.length; i++) {
            act[i].classList.remove("active");
            act[n].classList.add("active");
            pager[i].classList.remove("active");
            pager[n].classList.add("active");
        }
    }

    let st = setInterval(bannerFn,1000);

    bannerContainer.onmouseover=function () {
        clearInterval(st);
    }
    bannerContainer.onmouseout=function () {
        st = setInterval(bannerFn, 1000);
    }
// let flag=true;
nextbtn.onclick=function () {
    // if(flag){
        // flag=false;
        bannerFn();
    // }
}
prebtn.onclick=function () {
    bannerFn("l");
}
// addEventListener()添加事件的方法，js中有一些事件是不能用on添加的
// pager.forEach(function (ele,index) {
//     ele.addEventListener("transitionend",function (){
//         flag=true;
//     })
// })
// }
}
{
    let prev=document.querySelector(".danpin-top-hez-hez1");
    let nest=document.querySelector(".danpin-top-hez-hez2");
    let inner=document.querySelector(".danpin-bottom");
    nest.onclick=function(){
        nest.classList.remove("active");
        prev.classList.add("active");
        inner.style.transform="translateX(-1240px)";
    }
    prev.onclick=function(){
        prev.classList.remove("active");
        nest.classList.add("active");
        inner.style.transform="translateX(0px)";
    }
        let n=0;
        function starFn() {
             n++;
            if(n%2===0){
                nest.classList.remove("active");
                prev.classList.add("active");
                inner.style.transform="translateX(-1240px)";
             }else if(n%2===1){
                prev.classList.remove("active");
                nest.classList.add("active");
                inner.style.transform="translateX(0px)";
            }
    }

    let st=setInterval(starFn,3000);
    inner.onmouseover=function () {
        clearInterval(st);
    }
    inner.onmouseout=function () {
        st = setInterval(starFn, 3000);
    }
}