<template>
    <div class="nav">
        <div class="logoBox">
            <div class="searchBox">
                <div class="optionBox">
                    <span v-for="(x,index) in option" v-bind:class="{'border_right_1':index<option.length-1}">{{x.text}}</span>
                    <div class="inputBox">
                        <input type="text">
                        <span></span>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="navBox">
            <span v-for="(nav,index) in navList" v-bind:class="{'color_F40':navIndex==index }"  @mouseover="navIndexFunc(index)">
                <a v-bind:href="nav.Url" v-bind:class="{'border_right_1':index<navList.length-1}">{{nav.text}}</a>
                <div class="nav-show-box">
                    <div class="product-img" v-if="index==0">
                                <div class="nav-product swiper-container" >
                                    <div class="product-button-box">
                                            <div class="product-button-prev"></div>
                                            <div class="product-button-next"></div>
                                        </div>
                                    <div class="swiper-wrapper" v-model="productImgList">
                                        
                                        <div class="swiper-slide product-img-box"  v-for="(Product,index) in productImgList">
                                            
                                           <img :src="Product.Img" alt="">
                                           <div>
                                               {{Product.productName}}
                                           </div>
                                            
                                        </div>
                                    </div>
                                    <div class="swiper-pagination-product" style="text-align: center;"></div>
                                </div>
                            </div>

                    <span class="nav-show-box-main">
                        <div v-for="(seriesName,index) in nav.seriesList">
                            <div class="product-name" v-if="index==nav.Index">
                                <span v-for=" (Product,index) in seriesName.list">
                                    <a :href="Product.Url">{{Product.productName}}</a>
                                </span>
                            </div>
                            
                        </div>
                        <div>

                        </div>
                    </span>
                    <span class="nav-show-box-left width-120">
                        
                        <div class="show-title width-120">
                            {{nav.text}}
                        </div>
                        <div class="show-title-en width-120">
                            {{nav.en}}
                        </div>
                        <div class="width-120">
                            <span v-for="(series,index) in nav.seriesList " 
                            class="series-list" :class="{'series-list-active':index===nav.Index}"
                            @mouseover="seriesFunc(nav,index)">
                                {{series.name}}
                            </span>
                        </div>
                        
                        
                    </span>
                    
                    
                </div>
            </span>
            
        </div>
    </div>
</template>
<script>
//*********************//
import nav_show_img_1 from './../assets/下拉菜单-水凝B3保湿喷雾.png'
//*********************//
    export default{
        name: 'nav',
        data (){
            return {
                showIndex:-1,
                navIndex:0,
                productImgList:[
                                    {
                                        productName:'水凝B3保湿喷雾1',
                                        Url:'',
                                        Img:nav_show_img_1
                                    },
                                    {
                                        productName:'水凝B3保湿喷雾1',
                                        Url:'',
                                        Img:nav_show_img_1
                                    },
                                    {
                                        productName:'水凝B3保湿喷雾1',
                                        Url:'',
                                        Img:nav_show_img_1
                                    },
                                    {
                                        productName:'水凝B3保湿喷雾1',
                                        Url:'',
                                        Img:nav_show_img_1
                                    }
                                ]
                            ,
                navList:[
                    {
                        text:'产品',
                        Index:0,
                        Url:'/',
                        en:'Product',
                        seriesList:[
                            {
                                name:'水凝保湿系列',
                                list:[
                                    {
                                        productName:'水凝B3保湿喷雾1',
                                        Url:'',
                                        Img:nav_show_img_1
                                    },
                                    {
                                        productName:'水凝B3保湿喷雾1',
                                        Url:'',
                                        Img:nav_show_img_1
                                    },
                                    {
                                        productName:'水凝B3保湿喷雾1',
                                        Url:'',
                                        Img:nav_show_img_1
                                    },
                                    {
                                        productName:'水凝B3保湿喷雾1',
                                        Url:'',
                                        Img:nav_show_img_1
                                    }
                                ]
                            },
                            {
                                name:'综合维他系列',
                                list:[
                                    {
                                        productName:'水凝B3保湿喷雾',
                                        Url:'',
                                        Img:nav_show_img_1
                                    },
                                    {
                                        productName:'水凝B3保湿喷雾',
                                        Url:'',
                                        Img:nav_show_img_1
                                    },
                                    {
                                        productName:'水凝B3保湿喷雾',
                                        Url:'',
                                        Img:nav_show_img_1
                                    },
                                    {
                                        productName:'水凝B3保湿喷雾',
                                        Url:'',
                                        Img:nav_show_img_1
                                    }
                                ]
                            },
                            {
                                name:'口袋面膜系列',
                                list:[
                                    {
                                        productName:'水凝B3保湿喷雾',
                                        Url:'',
                                        Img:nav_show_img_1
                                    },
                                    {
                                        productName:'水凝B3保湿喷雾',
                                        Url:'',
                                        Img:nav_show_img_1
                                    },
                                    {
                                        productName:'水凝B3保湿喷雾',
                                        Url:'',
                                        Img:nav_show_img_1
                                    },
                                    {
                                        productName:'水凝B3保湿喷雾',
                                        Url:'',
                                        Img:nav_show_img_1
                                    }
                                ]
                            },
                            {
                                name:'C+系列',
                                list:[
                                    {
                                        productName:'水凝B3保湿喷雾',
                                        Url:'',
                                        Img:nav_show_img_1
                                    },
                                    {
                                        productName:'水凝B3保湿喷雾',
                                        Url:'',
                                        Img:nav_show_img_1
                                    },
                                    {
                                        productName:'水凝B3保湿喷雾',
                                        Url:'',
                                        Img:nav_show_img_1
                                    },
                                    {
                                        productName:'水凝B3保湿喷雾',
                                        Url:'',
                                        Img:nav_show_img_1
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        text:'品牌',
                        Url:'/..'
                    },
                    {
                        text:'特卖',
                        Url:'/..'
                    },
                    {
                        text:'心得',
                        Url:'/..'
                    },
                    {
                        text:'事件',
                        Url:'/..'
                    },
                    {
                        text:'医生之家',
                        Url:'/..'
                    },
                    {
                        text:'客服',
                        Url:'/..'
                    }
                ],
                option:[
                    {
                        text:'登录',
                        Url:''
                    },
                    {
                        text:'加入会员',
                        Url:''
                    },
                    {
                        text:'我的',
                        Url:''
                    },
                    {
                        text:'购物车',
                        Url:''
                    }
                ]
            }
        },
        mounted(){
            
            var _this = this;
            for(var i=0 ; i<_this.navList.length; i++){
                if(window.location.pathname == _this.navList[i].Url){
                    _this.navIndex = i;
                }
            }
            
            
            
        },
        methods:{
           seriesFunc:function(o,i){
               //this.swiperFunc()
               o.Index=i;
               this.productImgList = o.seriesList[i].list
               
           },
           navIndexFunc:function(i){
               if(i===0){
                   var mySwiper = new Swiper('.nav-product', {
                        direction : 'horizontal',//'vertical' ‘horizontal’,
                        speed:400, //切换速度
                        prevButton:'.product-button-prev',
                        nextButton:'.product-button-next',
                        pagination : '.swiper-pagination-product',
                        paginationClickable :true,
                        slidesPerView : 3,
                        slidesPerGroup : 3,
                    
                    });
               }
           }
        }
    }
</script>
<style scoped>
@media only screen and (min-width:1100px) and (max-width: 2000px) {
    .nav{
        margin: auto;
        width: 1100px;
        height: 160px;
        overflow: hidden;
    }
    .logoBox{
        width: 100%;
        height: 110px;
        padding-top: 0px;
        background: url('../assets/logo.png') no-repeat center;
        background-position-y: 34px;
    }
    
    .searchBox{
        float: right;
    }
    .optionBox{
        float: right;
        width: 210px;
        overflow: hidden;
        padding-top: 20px;
    }
    .optionBox span{
        height: 14px;
        line-height: 14px;
        font-size: 14px;
        padding: 0px 6px;
    }
    
    .inputBox{
        margin-top: 12px;
        background-color: #ff4400;
        width: 100%;
        height: 28px;
    }
    .inputBox input{
        height: 26px;
        margin-top: 1px;
        margin-left: 1px;
        width:183px;
        text-indent: 1em;
    }
    .inputBox span{
       
        padding: 0px;
        float: right;
        width: 24px;
        height: 26px;
        background: url('../assets/搜索_icon.png') no-repeat center;
        
    }
    .navBox{
        height: 50px;
        line-height: 40px;
        width: 100%;
    }
    .navBox>span {
        height: 70px;
        width: 147px;
        display: inline-block;
        font-size: 18px;
        font-weight: bold;
        
    }
    .navBox>span>a{
        width:100%;
        height: 16px;
        line-height: 16px;
        display: inline-block;
        text-align: center;
        color: black;
        
        box-sizing: border-box;
    }
    .navBox .color_F40>a{
        color:#ff4400;
    }
    .nav-show-box{
        display: none;
        width: 1100px;
        height: 326px;
        background-color: #fff;
        position: absolute;
        z-index: 10;
        top: 160px;
        box-sizing: border-box;
        padding: 20px;
        left: 50%;
        margin-left: -550px;
        border: 1px solid #e2e2e2

    }
    
    .nav-show-box-left>div{
        padding-left: 20px;
        
    }
    .nav-show-box .show-title-en{
        font-size: 14px;
        line-height: 10px;
        color: #6a6a6a;
        padding-bottom: 20px;
    }
    .navBox>span:hover .nav-show-box{
        display: block;
    }
    .series-list{
        width: 120px;
        display: block;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        font-weight: 100;
    }
    .series-list-active{
        text-align: center;
        background-color: #f40;
        color: #fff;
    }
    .nav-show-box-main{
        float: right;
        
    }
    .product-name{
        padding-top: 70px;
        height: 140px;
        float: left;
        width: 240px;
    }
    .product-name span{
        display: block;
        font-size: 12px;
        color:  #696969;
        height: 20px;
        line-height: 20px;
    }
    .product-name span a{
        color:  #696969;
    }
    .width-120{
        width: 120px;
    }
    .product-img{
        float: right;
        padding-top: 60px;
        width: 600px;
        border-left: 1px solid #e2e2e2;
        height: 264px;
        display: block;
        margin-top: -20px;
        overflow: hidden;
    }
    .product-img-box{
        text-align: center
    }
    .product-button-prev{
        position: absolute;
        left: 0;
        height: 40px;
        width: 40px;
        background: url("../assets/下拉菜单里的切换箭头.png") no-repeat center;
        transform:rotateY(180deg)

    }
    .product-button-next{
        position: absolute;
        right: 0;
        height: 40px;
        width: 40px;
        background: url("../assets/下拉菜单里的切换箭头.png") no-repeat center;
    }
    .product-button-box{
        position: absolute;
        top: 50%;
        margin-top: -60px;
        left: 0;
        right: 0;
        z-index: 30;
    }
}
    /***************************************************************************************/
    @media only screen and (min-width:320px) and (max-width: 1100px) {
        .nav{
        margin: auto;
        width: 100%;
        height: 270px;
        overflow: hidden;
    }
    .logoBox{
        width: 100%;
        height: 105px;
        
        background: url('../assets/logo.png') no-repeat center;
        
    }
    
    .searchBox{
        float: right;
    }
    .optionBox{
        float: right;
        width: 210px;
        overflow: hidden;
        padding-top: 20px;
    }
    .optionBox span{
        height: 14px;
        line-height: 14px;
        font-size: 14px;
        padding: 0px 6px;
    }
    
    .inputBox{
        margin-top: 12px;
        background-color: #ff4400;
        width: 100%;
        height: 28px;
    }
    .inputBox input{
        height: 26px;
        margin-top: 1px;
        margin-left: 1px;
        width:183px;
        text-indent: 1em;
    }
    .inputBox span{
       
        padding: 0px;
        float: right;
        width: 24px;
        height: 26px;
        background: url('../assets/搜索_icon.png') no-repeat center;
        
    }
    .navBox{
        height: 50px;
        line-height: 40px;
        width: 100%;
    }
    .navBox>span {
        height: 70px;
        width: 147px;
        display: inline-block;
        font-size: 18px;
        font-weight: bold;
        
    }
    .navBox>span>a{
        width:100%;
        height: 16px;
        line-height: 16px;
        display: inline-block;
        text-align: center;
        color: black;
        
        box-sizing: border-box;
    }
    .navBox .color_F40>a{
        color:#ff4400;
    }
    .nav-show-box{
        display: none;
        width: 1100px;
        height: 326px;
        background-color: #fff;
        position: absolute;
        z-index: 10;
        top: 160px;
        box-sizing: border-box;
        padding: 20px;
        left: 50%;
        margin-left: -550px;
        border: 1px solid #e2e2e2

    }
    
    .nav-show-box-left>div{
        padding-left: 20px;
        
    }
    .nav-show-box .show-title-en{
        font-size: 14px;
        line-height: 10px;
        color: #6a6a6a;
        padding-bottom: 20px;
    }
    .navBox>span:hover .nav-show-box{
        display: block;
    }
    .series-list{
        width: 120px;
        display: block;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        font-weight: 100;
    }
    .series-list-active{
        text-align: center;
        background-color: #f40;
        color: #fff;
    }
    .nav-show-box-main{
        float: right;
        
    }
    .product-name{
        padding-top: 70px;
        height: 140px;
        float: left;
        width: 240px;
    }
    .product-name span{
        display: block;
        font-size: 12px;
        color:  #696969;
        height: 20px;
        line-height: 20px;
    }
    .product-name span a{
        color:  #696969;
    }
    .width-120{
        width: 120px;
    }
    .product-img{
        float: right;
        padding-top: 60px;
        width: 600px;
        border-left: 1px solid #e2e2e2;
        height: 264px;
        display: block;
        margin-top: -20px;
        overflow: hidden;
    }
    .product-img-box{
        text-align: center
    }
    .product-button-prev{
        position: absolute;
        left: 0;
        height: 40px;
        width: 40px;
        background: url("../assets/下拉菜单里的切换箭头.png") no-repeat center;
        transform:rotateY(180deg)

    }
    .product-button-next{
        position: absolute;
        right: 0;
        height: 40px;
        width: 40px;
        background: url("../assets/下拉菜单里的切换箭头.png") no-repeat center;
    }
    .product-button-box{
        position: absolute;
        top: 50%;
        margin-top: -60px;
        left: 0;
        right: 0;
        z-index: 30;
    }
    }
</style>