<template>
    <div class="tmpl">
        <nav-bar title="商品详情"></nav-bar>
        <div class="outer-swiper">
            <!-- <mt-swipe :auto="4000">
              <mt-swipe-item v-for="img in imgs"><img :src="img.src" alt=""></mt-swipe-item>
              
            </mt-swipe> -->
            <my-swip :myimgs="imgs"></my-swip>
        </div>
        <div class="product-desc">
            <ul>
                <li><span class="product-desc-span">
                    {{content.title}}
                </span></li>
                <li class="price-li">市场价：
                    <s>￥{{content.market_price}}</s> 销售价：<span>￥{{content.sell_price}}</span></li>
                <li class="number-li">购买数量：<span @click="subNum">-</span><span v-text="count"></span><span @click="addNum">+</span></li>
                <li>
                    <mt-button type="primary">立即购买</mt-button>
                    <mt-button type="danger" @click="addshopCar">加入购物车</mt-button>
                </li>
            </ul>
        </div>
        <transition name="ball">
            <div class="ball"></div>
        </transition>
        <div class="product-props">
            <ul>
                <li>商品参数</li>
                <li>商品货号：{{content.goods_no}}</li>
                <li>库存情况：{{content.stock_quantity}}件</li>
                <li>上架时间：{{content.add_time | transTime}}</li>
            </ul>
        </div>
        <div class="product-info">
            <ul>
                <li>
                    <mt-button type="primary" size="large" plain @click="goodImgDes(content.id)">图文介绍</mt-button>
                </li>
                <li>
                    <mt-button type="danger" size="large" plain @click="goodComment(content.id)">商品评论</mt-button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import VueBus from "../common/vueBus.js";
    export default {
        data(){
            return {
                content: {
                    id: 33,
                    title: "EA888涡轮增压发动机",
                    add_time: "2019-04-08",
                    goods_no: "sd7474747474",
                    stock_quantity: 20,
                    market_price: 20000,
                    sell_price: 19999
                },
                imgs: [{
                    src: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3878847766,3988120331&fm=200&gp=0.jpg"
                },{
                    src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517468528528&di=8cffe85b28b66f5c6ba38bf2697381fe&imgtype=0&src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F811%2F0525141A139%2F1405251A139-0.jpg"
                },{
                    src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517468528525&di=082a03f61e1c813fe11bf77b6d22d299&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2015%2F215%2F41%2FM68709LC8O6L.jpg"
                }],
                count: 0
            }
        },
        created(){
            let id = this.$route.params.goodId;
            this.$ajax.all([this.$ajax.get(this.$httpConfig.getinfo + id), this.$ajax.get(this.$httpConfig.getthumimages + id)])
            .then(this.$ajax.spread((infRes, imgRes) => {
                this.content = infRes.data.message[0];
                this.imgs = imgRes.data.message;
            }))
            .catch(err => {
                console.log("获取失败",err);
            })
        },
        methods: {
            goodComment(id){
                this.$router.push({
                    name: "goodCom", 
                    params: {imgId: id}
                });
            },
            goodImgDes(id){
                this.$router.push({
                    name: "newsDetail",
                    params: {newsId: id, navTitle: "图文介绍"}
                })
            },
            subNum(){
                if(this.count >0){
                     this.count--;
                }               
            },
            addNum(){
                if(this.count<this.content.stock_quantity){
                    this.count++;
                }
            },
            addshopCar(){
                VueBus.$emit("addCarNum", this.count);
            }
        }
    }
</script>
<style scoped>
.ball-enter-active {
    animation: bounce-in 1s;
}

@keyframes bounce-in {
    0% {
        transform: translate3d(0, 0, 0);
    }
    50% {
        transform: translate3d(140px, -50px, 0);
    }
    75% {
        transform: translate3d(160px, 0px, 0);
    }
    100% {
        transform: translate3d(140px, 300px, 0);
    }
}

.swiper {
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 8px;
    width: 95%;
    border-radius: 15px;
    overflow: hidden;
}

.outer-swiper,
.product-desc,
.product-props,
.product-info {
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 3px;
}


/*请ulpadding*/

.outer-swiper ul,
.product-desc ul,
.product-props ul,
.product-info ul {
    padding: 0;
}

.product-desc ul li,
.product-props ul li,
.product-info ul li {
    list-style: none;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.5);
    margin-top: 8px;
}

.product-desc ul >:nth-child(1) span {
    color: blue;
    font-size: 22px;
    font-weight: bold;
}

.product-desc ul >:nth-child(1) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}

.product-desc ul,
.product-info ul,
.product-props ul {
    padding-left: 10px;
}

.price-li span {
    color: red;
    font-size: 25px;
}

.price-li s {
    margin-right: 16px;
}


/*加减*/

.number-li span {
    display: inline-block;
    border: 2px solid rgba(0, 0, 0, 0.1);
    width: 25px;
}


/*商品参数*/

.product-props ul >:nth-child(1) {
    text-align: left;
}

.product-props ul:not(:nth-child(1)) {
    margin-left: 40px;
}

.product-info ul {
    margin-bottom: 70px;
    padding: 0 5;
}

.number-li span {
    text-align: center;
}

.number-li >:nth-child(2) {
    width: 40px;
}

.ball {
    border-radius: 50%;
    background-color: red;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 440px;
    left: 120px;
    display: inline-block;
    z-index: 9999;
}
</style>
