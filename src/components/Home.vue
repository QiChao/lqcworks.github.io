<template>
    <div class="Home">
        <div class="bannerBox">
           <div class="swiper-container bannerHeight banner">
                <div class="swiper-wrapper">
                    <div 
                    class="swiper-slide " 
                    v-for="(BG,index) in Banners"
                    v-bind:style="{'background-color':BG.Color}" >
                        <div class="bannnerImg" v-bind:style="{'background-image':BG.Img}">
                            {{BG.title}}
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination swiper-pagination-banner border_1_e5"></div>
                <div class="banner-button-box">
                    <div class="banner-button-prev"></div>
                    <div class="banner-button-next"></div>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="main-modular">
                <div class="main-modular-title">
                    <span>火爆推荐</span>
                    <div></div>
                </div>
                <div class="main-modular-content height_540">
                    <div class="content-left" v-model="recommend">
                        <div class="recommend-title">
                            顾客推荐
                        </div>
                        <div class="recommend-img" v-bind:style="{'background-image':'url('+recommend.Img+')'}">

                        </div>
                        <div class="product-name">
                            产品名称：<br>
                            美白vc精华
                        </div>
                        <div class="recommend">
                            推荐指数<br>
                            <span v-for="x in [1,2,3]" v-bind:style="{'background-image':'url('+recommend.Star+')'}">
                            </span>
                            <div class="recommend-user-name">
                                lovvm***w
                            </div>
                        </div>
                        <div class="recommend-text">
                            上个月购买的vc美白乳， 用了将近三周，皮肤的确 变得细嫩有光泽了许多， 喜欢其中的vc小颗粒，而且 充满柠檬香气，打算再试试
                            上个月购买的vc美白乳， 用了将近三周，皮肤的确 变得细嫩有光泽了许多， 喜欢其中的vc小颗粒，而且 充满柠檬香气，打算再试试
                            上个月购买的vc美白乳， 用了将近三周，皮肤的确 变得细嫩有光泽了许多， 喜欢其中的vc小颗粒，而且 充满柠檬香气，打算再试试
                            上个月购买的vc美白乳， 用了将近三周，皮肤的确 变得细嫩有光泽了许多， 喜欢其中的vc小颗粒，而且 充满柠檬香气，打算再试试
                        </div>
                    </div>
                    <div class="content">
                        <div class="content-img" v-bind:style="{'background-image':'url('+mainContent.Img+')'}">

                        </div>
                    </div>
                    <div class="content-left">
                        <div class="recommend-title">
                            限时特卖
                        </div>
                        <div class="preferential">
                            特惠<span>九折</span>
                        </div>
                        <div class="preferential-time" v-model="Timer">
                           <span>{{Timer.getHours()}}</span>:
                           <span>{{Timer.getMinutes()}}</span>:
                           <span>{{Timer.getSeconds()}}</span>
                        </div>
                        <div class="preferential-img" v-bind:style="{'background-image':'url('+preferential.Img+')'}">
                            <img src="" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-modular">
                <div class="main-modular-title">
                    <span>人气排名</span>
                    <div></div>
                </div>
                <div class="main-modular-content">
                    <div class="ranking-tab-nav .swiper-container">
                        <div class="swiper-paginations "></div>
                        <div class="swiper-wrapper">
                            <div class="swiper-slide "  v-for="nav in rankingNav">
                                
                                <span v-for="(rankingBox,index) in nav.list" class="ranking-box">
                                    <div class="ranking-img" v-bind:style="{'background-image':'url('+rankingBox.Img+')'}"></div>
                                    
                                    <div class="ranking-title" >
                                        {{rankingBox.productName}} <br>
                                        {{rankingBox.price}}
                                    </div>
                                    <span class="specifications">
                                        ￥{{rankingBox.specifications}}
                                    </span>
                                    <span class="collections">
                                        {{rankingBox.collections}}人收藏
                                    </span>
                                    
                                </span>
                                
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
</template>
<script>
//**************//
import luan from './../assets/logo.png'
import rq_a from './../assets/首页-20170326_21.png'
import rq_b from './../assets/首页-20170326_19.png'
import rq_c from './../assets/人气排行-怡思美维他液100ml.png'
import rq_d from './../assets/首页-20170326_06.png'
import home_a from './../assets/首页-20170326_03.png'
import home_b from './../assets/首页-20170326_10.png'
import recommend_x from './../assets/首页-20170326_13.png'
//**************//
    export default{
        name: 'Home',
        data(){
            return {
                
                rankingNav:[
                    {
                        title:'类型排行',
                        list:[
                            {
                                Img:rq_b,
                                productName:'怡之露喷雾',
                                price:'120ml',
                                specifications:'1134.98',
                                collections:'1122'
                            },
                            {
                                Img:rq_b,
                                productName:'怡之露喷雾',
                                price:'120ml',
                                specifications:'1134.98',
                                collections:'1122'
                            },
                            {
                                Img:rq_b,
                                productName:'怡之露喷雾',
                                price:'120ml',
                                specifications:'1134.98',
                                collections:'1122'
                            },
                            {
                                Img:rq_b,
                                productName:'怡之露喷雾',
                                price:'120ml',
                                specifications:'1134.98',
                                collections:'1122'
                            },
                            {
                                Img:rq_b,
                                productName:'怡之露喷雾',
                                price:'120ml',
                                specifications:'1134.98',
                                collections:'1122'
                            },
                            {
                                Img:rq_b,
                                productName:'怡之露喷雾',
                                price:'120ml',
                                specifications:'1134.98',
                                collections:'1122'
                            },
                            {
                                Img:rq_b,
                                productName:'怡之露喷雾',
                                price:'120ml',
                                specifications:'1134.98',
                                collections:'1122'
                            },
                            {
                                Img:rq_b,
                                productName:'怡之露喷雾',
                                price:'120ml',
                                specifications:'1134.98',
                                collections:'1122'
                            },
                            {
                                Img:rq_b,
                                productName:'怡之露喷雾',
                                price:'120ml',
                                specifications:'1134.98',
                                collections:'1122'
                            },{
                                Img:rq_b,
                                productName:'怡之露喷雾',
                                price:'120ml',
                                specifications:'1134.98',
                                collections:'1122'
                            }

                        ]

                    },
                    {
                        title:'销量排行',
                        list:[
                            {
                                Img:rq_a,
                                productName:'怡之露喷雾',
                                price:'120ml',
                                specifications:'1134.98',
                                collections:'1122'
                            },
                            {
                                Img:rq_a,
                                productName:'怡之露喷雾',
                                price:'120ml',
                                specifications:'1134.98',
                                collections:'1122'
                            },
                            {
                                Img:rq_a,
                                productName:'怡之露喷雾',
                                price:'120ml',
                                specifications:'1134.98',
                                collections:'1122'
                            },
                            {
                                Img:rq_a,
                                productName:'怡之露喷雾',
                                price:'120ml',
                                specifications:'1134.98',
                                collections:'1122'
                            },
                            {
                                Img:rq_a,
                                productName:'怡之露喷雾',
                                price:'120ml',
                                specifications:'1134.98',
                                collections:'1122'
                            },
                            {
                                Img:rq_a,
                                productName:'怡之露喷雾',
                                price:'120ml',
                                specifications:'1134.98',
                                collections:'1122'
                            },
                            {
                                Img:rq_a,
                                productName:'怡之露喷雾',
                                price:'120ml',
                                specifications:'1134.98',
                                collections:'1122'
                            },
                            {
                                Img:rq_a,
                                productName:'怡之露喷雾',
                                price:'120ml',
                                specifications:'1134.98',
                                collections:'1122'
                            },
                            {
                                Img:rq_a,
                                productName:'怡之露喷雾',
                                price:'120ml',
                                specifications:'1134.98',
                                collections:'1122'
                            },{
                                Img:rq_a,
                                productName:'怡之露喷雾',
                                price:'120ml',
                                specifications:'1134.98',
                                collections:'1122'
                            }

                        ]

                    },
                    {
                        title:'人气排行',
                        list:[
                            {
                                Img:rq_b,
                                productName:'怡之露喷雾',
                                price:'120ml',
                                specifications:'1134.98',
                                collections:'1122'
                            },
                            {
                                Img:rq_b,
                                productName:'怡之露喷雾',
                                price:'120ml',
                                specifications:'1134.98',
                                collections:'1122'
                            },
                            {
                                Img:rq_b,
                                productName:'怡之露喷雾',
                                price:'120ml',
                                specifications:'1134.98',
                                collections:'1122'
                            },
                            {
                                Img:rq_b,
                                productName:'怡之露喷雾',
                                price:'120ml',
                                specifications:'1134.98',
                                collections:'1122'
                            },
                            {
                                Img:rq_b,
                                productName:'怡之露喷雾',
                                price:'120ml',
                                specifications:'1134.98',
                                collections:'1122'
                            },
                            {
                                Img:rq_b,
                                productName:'怡之露喷雾',
                                price:'120ml',
                                specifications:'1134.98',
                                collections:'1122'
                            },
                            {
                                Img:rq_b,
                                productName:'怡之露喷雾',
                                price:'120ml',
                                specifications:'1134.98',
                                collections:'1122'
                            },
                            {
                                Img:rq_b,
                                productName:'怡之露喷雾',
                                price:'120ml',
                                specifications:'1134.98',
                                collections:'1122'
                            },
                            {
                                Img:rq_b,
                                productName:'怡之露喷雾',
                                price:'120ml',
                                specifications:'1134.98',
                                collections:'1122'
                            },{
                                Img:rq_b,
                                productName:'怡之露喷雾',
                                price:'120ml',
                                specifications:'1134.98',
                                collections:'1122'
                            }

                        ]

                    }
                ],
                Banners:[
                    {
                        Img:'',
                        Url:'',
                        Color:'#a1c4fd',
                        title:'标题1'
                    },
                    {
                        Img:'',
                        Url:'',
                        Color:'#e2ebf0',
                        title:'标题2'
                    },
                    {
                        Img:'',
                        Url:'',
                        Color:'#4facfe',
                        title:'标题3'
                    },
                    {
                        Img:'',
                        Url:'',
                        Color:'#5ee7df',
                        title:'标题1'
                    },
                    {
                        Img:'',
                        Url:'',
                        Color:'#e2d1c3',
                        title:'标题2'
                    },
                    {
                        Img:'',
                        Url:'',
                        Color:'#66a6ff',
                        title:'标题3'
                    }
                ],
                recommend:{
                    Img:rq_c,
                    Star:recommend_x
                },
                mainContent:{
                    Img:home_a
                },
                preferential:{
                    Img:home_b
                },
                Timer:new Date(),
                stop:false,
                Interval:null
            }
        },
        mounted(){
            var mySwiper = new Swiper('.banner', {
                direction : 'horizontal',//'vertical' ‘horizontal’,
                speed:400, //切换速度
                autoplay: 2000, //切换时间
                effect : 'fade',//切换效果
                loop : true,
                fade: {
                   crossFade: false,//过度
                },
                prevButton:'.banner-button-prev',
                nextButton:'.banner-button-next',
                pagination : '.swiper-pagination-banner',
                paginationClickable :true,
               
            });
            var mySwiper = new Swiper('.ranking-tab-nav', {
                direction : 'horizontal',//'vertical' ‘horizontal’,
                speed:400, //切换速度
                pagination : '.swiper-paginations',
                paginationClickable :true,
               
            });
            var spanList = document.getElementsByClassName('swiper-pagination-banner')[0].getElementsByClassName('swiper-pagination-bullet')
            var rankingList = document.getElementsByClassName('swiper-paginations')[0].getElementsByClassName('swiper-pagination-bullet')
            for(var i=0;i<spanList.length;i++){
                spanList[i].innerHTML=this.Banners[i].title
            }
            for(var i=0;i<rankingList.length;i++){
                rankingList[i].innerHTML=this.rankingNav[i].title
            }
            var _this = this;
           setInterval(function update(){
               _this.Timer = new Date();
                     },1000)
        },
        methods:{
            
           
        }
    }
</script>
<style scoped>
@media only screen and (min-width:1100px) and (max-width: 2000px) {
.bannerHeight{
    height: 430px;
    background-color: rgba(0,0,0,.1)
}
.bannnerImg{
    width: 1100px;
    height: 100%;
    margin: auto;
    background-size: cover;
    background-position: center;
}

.swiper-container .swiper-pagination-bullets{
    width: 1100px;
    left: 50%;
    margin-left: -550px;
    bottom: 2px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #000;
    text-align: center;
    display: flex; 
}
.swiper-container .swiper-pagination-bullet-active{
    float: left;
    flex: 1;
    background-color: #fff;
    border: 1px solid #e5e7e7
}
.main{
 width: 1100px;
 margin: auto;   
 padding-top: 40px;
}
.main-modular{
    margin-bottom: 30px;
    padding-bottom: 20px
}
.main-modular-title{
    font-size: 24px;
    text-align: center;
    padding: 20px 0;
}
.main-modular-title span{
    display: inline-block;
    padding: 3px 10px;
    background-color: #fff;
    color: #999999;

}
.main-modular-title div{
    height: 1px;
    width: 100%;
    background-color: #e1e1e1;
    margin-top: -18px;
}

.main-modular-content{
    margin-top: 20px;
    width: 100%;
    
    /*height: 540px;*/
}
.height_540{
    height: 540px;
}
.height_630{
    height: 630px;
}
.content-left{
    float: left;
    width: 224px;
    height: 100%;
    background-color: #f4f7f7;
    box-sizing: border-box;
    padding: 20px;
    border: 1px solid #eeeeee;
}
.recommend-title{
    color: #000;
    font-size: 18px;
    font-weight: bold;
    margin:20px ;
    text-align: center
}
.recommend-img{
    width: 100%;
    height: 116px;
    background-size: cover;
    background-position: center;
}
.product-name{
    margin-top: 20px;
    font-size: 14px;
    color: #000;
    line-height: 20px;
}
.recommend{
    line-height: 20px;
    font-size: 14px;
    color: #b0b0b0;
}
.recommend span{
    /*background-color: #ff4400;*/
    width: 11px;
    height: 11px;
    margin-right: 4px;
    display: inline-block
}
.recommend-user-name{
    float: right;
}
.recommend-text{
    margin-top: 30px;
    line-height: 18px;
    color: #4b4b4b;
    height: 180px;
    overflow: hidden;
    text-overflow:ellipsis; 
    -webkit-box-orient: vertical;
    display: -webkit-box;
    /*white-space: nowrap;*/
    -webkit-line-clamp:10;
}


.content{
    float: left;
    width: 652px;
    height: 100%;
    background-color: #fff;
    box-sizing: border-box;
    padding: 0 20px;
}
.content-img{
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-color: #f1f1f1;
}

.preferential{
    text-align: center;
    color: #f40;
    font-size: 18px;
}
.preferential span{
    font-size: 28px;
}
.preferential-time{
    width: 100%;
    padding: 10px 10px;
    background-color: #fff;
    border: 1px solid #eeeeee;
    box-sizing: border-box;
    display: flex;
    margin-top: 26px;
}
.preferential-time span{
    flex: 1;
    text-align: center
}
.preferential-img{
    margin-top: 24px;
    height: 310px;
    background-color: #000;
    background-size: cover;
    background-position: center;
}

.ranking-tab-nav{
    width: 100%;
    text-align: center;
    overflow: hidden;
    position: relative;
    z-index: 1;
    height: 630px;
}

.ranking-tab-nav .ranking-tab-nav-active{
    color: #f40;
}
.swiper-paginations{
    width: 100%;
    text-align: center;
    display: inline-block;
    padding-bottom: 40px;
}
.ranking-box{
    border: 1px solid #eaeaea;
    box-sizing: border-box;
    padding: 0 20px;
    display: inline-block;
    width: 220px;
    height: 280px;
    float: left；
}
.ranking-box .ranking-img{
    display: block;
    width: 100%;
    height: 150px;
    background-color: #f1f1f1;
    margin-top: 20px;
    background-size: cover;
    background-position: center;
}
.ranking-title{
    padding: 20px 0;
    font-size: 12px;
    color: black;
    text-align: center;
    line-height: 16px;
}
.ranking-box span{
    font-size: 12px;
}
.specifications{
    color: #f40;
    float: left;
}
.collections{
    float: right;
    color: #6e6e6e;
}
 .banner-button-prev{
        position: absolute;
        left: 0;
        height: 40px;
        width: 40px;
        background: url("../assets/切换箭头.png") no-repeat center;
        
    }
    .banner-button-next{
        position: absolute;
        right: 0;
        height: 40px;
        width: 40px;
        background: url("../assets/切换箭头.png") no-repeat center;
        transform:rotateY(180deg)
    }
    .banner-button-box{
        position: absolute;
        top: 50%;
        margin-top: -60px;
        left: 0;
        right: 0;
        z-index: 30;
        
        width: 1200px;
        height: 0px;
        top: 50%;
        left: 50%;
        margin-left: -600px;
        
    }
}

    /*************************************************************************************/
@media only screen and (min-width:320px) and (max-width: 1100px) {
    
	 .bannerHeight{
        height:1311px ;
        background-color: rgba(0,0,0,.1)
    }
    .bannnerImg{
        width: 100%;
        height: 100%;
        margin: auto;
        background-size: cover;
        background-position: center;
    }
    .swiper-button-box{
        /*display: none;*/
       
    }
    .swiper-button-box div{
        background: none;
    }
    .swiper-container .swiper-pagination-bullets{
        width: 100%;
        left: 0%;
        margin-left: 0px;
        bottom: 2px;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: #000;
        text-align: center;
        display: block; 
    }
        
    .swiper-container .swiper-pagination-bullet-active{
        
    }
    .main{
        width: 100%;
        margin: auto;   
        padding-top: 40px;
    }
    .main-modular{
        
    }
    .main-modular-title{
        font-size: 24px;
        text-align: center;
        padding: 20px 0;
    }
    .main-modular-title span{
        display: inline-block;
        padding: 3px 10px;
        background-color: #fff;
        color: #999999;

    }
    .main-modular-title div{
        height: 1px;
        width: 100%;
        background-color: #e1e1e1;
        margin-top: -18px;
    }

    .main-modular-content{
        margin-top: 20px;
        width: 100%;
        
        /*height: 540px;*/
    }
    .height_540{
        height: 540px;
    }
    .height_630{
        height: 630px;
    }
    .content-left{
        float: left;
        width: 224px;
        height: 100%;
        background-color: #f4f7f7;
        box-sizing: border-box;
        padding: 20px;
        border: 1px solid #eeeeee;
    }
    .recommend-title{
        color: #000;
        font-size: 18px;
        font-weight: bold;
        margin:20px ;
        text-align: center
    }
    .recommend-img{
        width: 100%;
        height: 116px;
        background-size: cover;
        background-position: center;
    }
    .product-name{
        margin-top: 20px;
        font-size: 14px;
        color: #000;
        line-height: 20px;
    }
    .recommend{
        line-height: 20px;
        font-size: 14px;
        color: #b0b0b0;
    }
    .recommend span{
        /*background-color: #ff4400;*/
        width: 11px;
        height: 11px;
        margin-right: 4px;
        display: inline-block
    }
    .recommend-user-name{
        float: right;
    }
    .recommend-text{
        margin-top: 30px;
        line-height: 18px;
        color: #4b4b4b;
        height: 180px;
        overflow: hidden;
        text-overflow:ellipsis; 
        -webkit-box-orient: vertical;
        display: -webkit-box;
        /*white-space: nowrap;*/
        -webkit-line-clamp:10;
    }


    .content{
        float: left;
        width: 652px;
        height: 100%;
        background-color: #fff;
        box-sizing: border-box;
        padding: 0 20px;
    }
    .content-img{
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        background-color: #f1f1f1;
    }

    .preferential{
        text-align: center;
        color: #f40;
        font-size: 18px;
    }
    .preferential span{
        font-size: 28px;
    }
    .preferential-time{
        width: 100%;
        padding: 10px 10px;
        background-color: #fff;
        border: 1px solid #eeeeee;
        box-sizing: border-box;
        display: flex;
        margin-top: 26px;
    }
    .preferential-time span{
        flex: 1;
        text-align: center
    }
    .preferential-img{
        margin-top: 24px;
        height: 310px;
        background-color: #000;
        background-size: cover;
        background-position: center;
    }

    .ranking-tab-nav{
        width: 100%;
        text-align: center;
        overflow: hidden;
        position: relative;
        z-index: 1;
        height: 630px;
    }

    .ranking-tab-nav .ranking-tab-nav-active{
        color: #f40;
    }
    .swiper-paginations{
        width: 100%;
        text-align: center;
        display: inline-block;
        padding-bottom: 40px;
    }
    .ranking-box{
        border: 1px solid #eaeaea;
        box-sizing: border-box;
        padding: 0 20px;
        display: inline-block;
        width: 220px;
        height: 280px;
        float: left；
    }
    .ranking-box .ranking-img{
        display: block;
        width: 100%;
        height: 150px;
        background-color: #f1f1f1;
        margin-top: 20px;
        background-size: cover;
        background-position: center;
    }
    .ranking-title{
        padding: 20px 0;
        font-size: 12px;
        color: black;
        text-align: center;
        line-height: 16px;
    }
    .ranking-box span{
        font-size: 12px;
    }
    .specifications{
        color: #f40;
        float: left;
    }
    .collections{
        float: right;
        color: #6e6e6e;
    }
 .banner-button-prev{
        position: absolute;
        left: 0;
        height: 40px;
        width: 40px;
        background: url("../assets/切换箭头.png") no-repeat center;
        
    }
    .banner-button-next{
        position: absolute;
        right: 0;
        height: 40px;
        width: 40px;
        background: url("../assets/切换箭头.png") no-repeat center;
        transform:rotateY(180deg)
    }
    .banner-button-box{
        position: absolute;
        top: 50%;
        margin-top: -60px;
        left: 0;
        right: 0;
        z-index: 30;
        
        width: 1200px;
        height: 0px;
        top: 50%;
        left: 50%;
        margin-left: -600px;
        
    }

}
   
/*.bannerBox{
    width: 100%;
    height: 200px;
    background-color: rgba(0,0,0,.1)
}*/
</style>