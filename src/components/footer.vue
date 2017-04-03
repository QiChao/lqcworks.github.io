<template>
    <div class="footer">
        <div class="footer-box">
            <span v-for="(footerBtn,index) in footerService" >
                <div v-bind:style="{'background-image':'url('+footerBtn.Img+')'}" :class="{'dashed-left-1':index>0}">
                    {{footerBtn.title}}
                </div>
            </span>
        </div>
    </div>
</template>
<script>
//***********//
import footer_1 from './../assets/多种会员优惠.png'
import footer_2 from './../assets/专家资讯.png'
import footer_3 from './../assets/免费配送.png'
import footer_4 from './../assets/无效退款.png'
import footer_5 from './../assets/Dr.体验团.png'

//**********//
    export default{
        name:'footer',
        data(){
            return{
                footerService:[
                    {
                        Url:'',
                        Img:footer_1,
                        title:'多种会员优惠'
                    },
                    {
                        Url:'',
                        Img:footer_2,
                        title:'多种会员优惠'
                    },
                    {
                        Url:'',
                        Img:footer_3,
                        title:'多种会员优惠'
                    },
                    {
                        Url:'',
                        Img:footer_4,
                        title:'多种会员优惠'
                    },
                    {
                        Url:'',
                        Img:footer_5,
                        title:'多种会员优惠'
                    }
                ]
            }
        }
    }
</script>
<style scoped>
.footer{
    background-color: #f5f5f5;
}
.footer-box{
    width: 1100px;
    margin: auto;
    display: flex;
}
.footer-box span{
    flex: 1;
    height: 94px;
    box-sizing: border-box;
    padding: 22px 0;
    
}
.footer-box span div{
    box-sizing: border-box;
    padding-left: 80px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-repeat: no-repeat;
    /*background-size: 80% ;*/
    background-position: 20px ;
}
.dashed-left-1{
    border-left: 1px dotted #d8d8d8;
}
/**************************************************************************/
@media only screen and (min-width:320px) and (max-width: 1100px) {
.footer{
    background-color: #f5f5f5;
}
.footer-box{
    width: 100%;
    margin: auto;
    display: flex;
}
.footer-box span{
    flex: 1;
    height: 94px;
    box-sizing: border-box;
    padding: 22px 0;
    
}
.footer-box span div{
    box-sizing: border-box;
    padding-left: 80px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-repeat: no-repeat;
    /*background-size: 80% ;*/
    background-position: 20px ;
}
.dashed-left-1{
    border-left: 1px dotted #d8d8d8;
}
}
</style>