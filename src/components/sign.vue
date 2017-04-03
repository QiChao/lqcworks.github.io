<template>
    <div class="sign">
        <div class="sign-btn">
            签到
        </div>
        <div class="padding_t_b_20">
            邀请<br>好友
            <div class="invitation-img"></div>
        </div>
        <div class="padding_t_b_20">
            订单<br>查看
            <div class="order-img"></div>
        </div>
        <div class="shopping-btn heigth-52 btn">
            <div class="shopping-img"></div>
            <span>
                购物车
            </span>
            
        </div>
        <div class="heigth-52 btn">
            <div class="discount-img"></div>
            <span>
                优惠券
            </span>
            
            <div>

            </div>
        </div>
        <div class="heigth-52 btn">
            <div class="record-img"></div>
            <span>
                历史记录
            </span>
            
        </div>
        <div class="heigth-52 line-heigth-32 btn">
            <div class="fotoplace-img"></div>
            <span>
                足记
            </span>
            
        </div>
        <div class="top">
            <a href="">TOP</a>
        </div>
    </div>
</template>
<script>
    export default{
        name :'sign',
        data(){
            return {

            }
        },
        mounted(){
            //console.log(this.$http.post)
        }
    }
</script>
<style scoped>
    .sign{
        position: fixed;
        width: 52px;
        height: 600px;
        top: 160px;
        right: 0px;
        background-color: #fff;
        color: black;
        z-index: 10;
    }
    .sign>div{
        box-sizing: border-box;
        padding: 10px;
        font-size: 14px;
        border: 1px solid #eeeeee;
    }
    .sign .sign-btn{
        height: 66px;
        line-height: 46px;
        background-color: #00c63c;
        color: #fff;
    }
    .sign .padding_t_b_20{
        padding: 20px 10px;
    }
    .shopping-btn{
         background:#fff;
    }
    
    .shopping-img{
        
        background: url('../assets/购物车.png') no-repeat center #000;
    }
    
    .discount-img{
        background: url('../assets/优惠券.png') no-repeat center #000;
    }
    .record-img{
        background: url('../assets/历史记录.png') no-repeat center #000;
    }
    .fotoplace-img{
        background: url('../assets/足迹.png') no-repeat center #000;
    }
    .btn:hover div{
        height: 32px;
    }
    .btn:hover span{
        display: none;
    }
    .btn:hover{
        background-color: #000;
    }
    .heigth-52{
        height: 52px;
    }
    .line-heigth-32{
        line-height: 32px;
    }
    .sign a{
        text-decoration: none;
        
    }
    .invitation-img{
        background: url('../assets/邀请好友.png') no-repeat center;
        padding: 20px 0;
        margin-top: 10px;
    }
    .order-img{
        background: url('../assets/订单查看.png') no-repeat center;
        padding: 20px 0;
        margin-top: 10px;
    }
    @media only screen and (min-width:320px) and (max-width: 1100px) {
        
    }
</style>