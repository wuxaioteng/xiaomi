{
    //轮播图
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
let flag=true;
nextbtn.onclick=function () {
    if(flag){
        flag=false;
        bannerFn();
    }
}
prebtn.onclick=function () {
    if(flag) {
        flag = false;
        bannerFn("l");
    }
}

// addEventListener()添加事件的方法，js中有一些事件是不能用on添加的
pager.forEach(function (ele,index) {
    ele.addEventListener("transitionend",
        function(){
        flag=true;
    })
})


}



//明星单品
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



//家电
{
    // let goods=document.querySelectorAll("")
    // goods.forEach(function (ele) {
    //     tab(ele);
    // });
    //封装
    // function tab(context) {
    // tab(goods[0]);
    let btn=document.querySelectorAll(".kz1 .you");
    let contents=document.querySelectorAll(".jinha .bx2");
    btn.forEach(function (ele,index) {
        ele.onclick=function () {
            for(let i=0;i<btn.length;i++){
                btn[i].classList.remove("active");
                contents[i].classList.remove("active");
            }
            this.classList.add("active");
            contents[index].classList.add("active");
        }
    });
    // }
}



//内容
{
    var lists=document.querySelectorAll(".neirong-bottom .fate");
    lists.forEach(function(ele){
        content(ele);//个数
    });
    function content(context) {
        let inner=context.querySelector(".neirong-bottom .home")
        let prev=context.querySelector(".contents");
        let next=context.querySelector(".contents1");
        let items=context.querySelectorAll(".home1 .sikua1");
        let pagers=context.querySelectorAll(".a1 .diandian li");
        let max=items.length;
        let n=0;
        next.onclick=function () {
            n++;
            if(n>=max){
                n=max;
                return;
            }
            inner.style.marginLeft=-n*310+"px";
            changePager(n);
        }
        prev.onclick=function () {
            n--;
            if(n<0){
                n=0;
                return;
            }
            inner.style.marginLeft=-n*310+"px";
            changePager(n);
        }
        pagers.forEach(function (ele,index) {
            ele.onclick=function () {
                n=index;
                changePager(index);
            };
        });

        function changePager(n) {
            for(let i=0;i<pagers.length;i++){
                pagers[i].classList.remove("active");
            }
            pagers[n].classList.add("active");
            inner.style.marginLeft=-n*310+"px";
        }
    }
}



{
    let su=document.querySelectorAll(" .zhong .shiwen");
    let qu=document.querySelectorAll(".suv");
    su.forEach(function (ele,index) {
        ele.onmouseover=function () {
            for(let i=0;i<qu.length;i++){
                qu[i].style.display="none";
            }
            qu[index].style.display="block";
            qu[index].classList.add("fadeIn");
        }
        ele.onmouseout=function () {
            qu[index].style.display="none";
            qu[index].classList.remove("fadeIn");
        }

    })
    qu.forEach(function (ele,index) {
        ele.onmouseover=function () {
                qu[index].style.display="block";
            }
            ele.onmouseout=function () {
                qu[index].style.display="none";
            }
    })
}






// 搜索框
{
    {
        let suv= document.querySelector(".you input");
        let sp=document.querySelectorAll(".you .max");
        console.log(sp)
        let qi=document.querySelector(".you .shou2");

        suv.onfocus=suv.onclick=function () {
            suv.style.border="1px solid #ff9900";
            qi.style.border="1px solid #ff9900";
            suv.style.borderRight="none"
            sp.forEach(function (ele) {
                ele.style.display="none";
            })
        }
        suv.onblur=function () {
            suv.style.border="1px solid #e0e0e0";
            qi.style.border="1px solid #e0e0e0";
            sp.forEach(function (ele) {
                ele.style.display="block";
            })
        }

    }


    {
        let sq=document.querySelectorAll(".aside li");
        let sv=document.querySelectorAll(".jiu_s");
        sq.forEach(function(ele,index){
            ele.onmouseover=function(){
                for(let i=0;i<sv.length;i++){
                    sv[i].style.display="none"
                }
                sv[index].style.display="block";
            }
            ele.onmouseleave=function(){
                sv[index].style.display="none";
            }
        });
    }
}







// {

    //1.$("").removeClass("active");
   // $(this).addClass("active")
   //$(".btn_box li").removeClass("active").filter(this).addClass("active");
    //3.$(this).addClass("active").siblings().removeClass("active");
    //4.$(this).addClass("active").sibling(".actve").removeClass("active");
  // var index=$(this).index();
  // var btns=$
  // $(".pager").filter(".active").end().
  //
  //
  //   var n=0;
  //   var st=setInterval(function () {
  //       n++;
  //       if(n===btns.length)){
  //           n=0;
  //       }
  //       btn.filter("active").removeClass("active").end().eq(n).addClass("active");
  //   imgs.filter(".active").removeClass("active").end().eq(n)
  //   })
// }