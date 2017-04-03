<template>
  <div id="app">
    <rigth-nav></rigth-nav>
    
    <nav-box></nav-box>
    <router-view></router-view>
    <footer-box></footer-box>
  </div>
</template>

<script>
function goPAGE() {
	if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
	Rem();
}else {
		/******* PC test  *********/	
    function Size(){
      if(window.innerWidth<980){
        Rem();
      }else{
        noRem()
      }
    }
    window.addEventListener('resize',Size);

    /******* PC test  *********/	
  }
}


/******* PC test  *********/
function Rem(){
  let html = document.documentElement;

  window.rem = html.getBoundingClientRect().width / 16 ;
  html.style.fontSize = window.rem + 'px';
}

function noRem(){

  html.style.fontSize = '16'+ 'px';
}
/******* PC test  *********/
  goPAGE()


var sign = require('@/components/sign');
var Nav = require('@/components/nav');
var Footer = require('@/components/footer');

export default {
  name: 'app',
  components:{
    
    'rigth-nav':sign,
    'nav-box':Nav,
    'footer-box':Footer
  }
  
}
</script>
<style>
  html,body,input{
    margin: 0;
    padding: 0;
  }
  input{
    border: none;
    outline:none;
  }
  a{
  text-decoration: none;
}
  @media only screen and (min-width:1100px) and (max-width: 2000px) {

  .Home .swiper-pagination-bullets .swiper-pagination-bullet{
    float: left;
    flex: 1;
    background-color: #fff;
    /*border: 1px solid #e5e7e7;*/
    border-radius: 0%;
    height: 100%;
    opacity: 1;
    margin: 0;
}
.border_1_e5 span{
  border: 1px solid #e5e7e7;
}
.Home .swiper-container-horizontal>.swiper-pagination-bullets span.swiper-pagination-bullet{
  margin: 0;
}
 .Home .swiper-pagination-bullets .swiper-pagination-bullet-active{
    color: #fff;
    background-color: #ff4400;

}
.Home .swiper-pagination-bullets .swiper-pagination-bullet:hover{
    color: #fff;
    background-color: #ff4400;

}
.Home .ranking-tab-nav .swiper-pagination-bullets{
  width: auto;
  border: none;
}

.border_right_1{
        border-right: 1px solid #000;
}
.ranking-tab-nav .swiper-paginations span{
    width: 80px;
    display: inline-block;
    float:initial;
    border:none;
}
.ranking-tab-nav .swiper-paginations span:nth-child(2){
    border-right: 1px solid #000;
    border-left: 1px solid #000;
}
.ranking-tab-nav .swiper-paginations .swiper-pagination-bullet-active{
  background-color: #fff;
  color:#f40;
}
  }

@media only screen and (min-width:320px) and (max-width: 1100px) {
.Home .swiper-pagination-bullets .swiper-pagination-bullet{
    float: left;
    flex: 1;
    background-color: #fff;
    border: none;
    border-radius: 50%;
    height: 0%;
    opacity: 1;
    margin: 0;
}
.border_1_e5 span{
  border: 1px solid #e5e7e7;
}
.Home .swiper-container-horizontal>.swiper-pagination-bullets span.swiper-pagination-bullet{
  margin: 0;
}
 .Home .swiper-pagination-bullets .swiper-pagination-bullet-active{
    color: #fff;
    background-color: #ff4400;

}
.Home .swiper-pagination-bullets .swiper-pagination-bullet:hover{
    color: #fff;
    background-color: #ff4400;

}
.Home .ranking-tab-nav .swiper-pagination-bullets{
  width: auto;
  border: none;
}

.border_right_1{
        border-right: 1px solid #000;
}
.ranking-tab-nav .swiper-paginations span{
    width: 80px;
    display: inline-block;
    float:initial;
    border:none;
}
.ranking-tab-nav .swiper-paginations span:nth-child(2){
    border-right: 1px solid #000;
    border-left: 1px solid #000;
}
.ranking-tab-nav .swiper-paginations .swiper-pagination-bullet-active{
  background-color: #fff;
  color:#f40;
}
}
</style>