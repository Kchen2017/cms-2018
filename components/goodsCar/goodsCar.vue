<template>
    <div>
        <div class="pay-detail">
            <ul>
                <li class="p-list" v-for="info in infos" :key="info.id">
                    <mt-switch></mt-switch>
                    <img :src="info.thumb_path">
                    <div class="pay-calc">
                        <p>{{info.title}}</p>
                        <div class="calc">
                            <span>￥{{info.price}}</span>
                            <span @click="subNum">-</span>
                            <span>{{info.cou}}</span>
                            <span @click="addNum">+</span>
                            <a href="javascript:;">删除</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="show-price">
            <div class="show-1">
                <p>总计(不含运费):</p>
                <span>已经选择商品1件，总价￥888元</span>
            </div>
            <div class="show-2">
                <mt-button type="danger" size="large">去结算</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
    import ProdutsTools from "../common/produtsTools.js";
    export default {
        data(){
            return {
                infos: [{
                    cou: 1,
                    id: 87,
                    title: "华为顶顶顶顶",
                    sell_price: 6466,
                    thumb_path: "http://img2.imgtn.bdimg.com/it/u=1567211408,3977725624&fm=27&gp=0.jpg"
                },{
                    cou: 1,
                    id: 88,
                    title: "华为顶顶顶顶",
                    sell_price: 6466,
                    thumb_path: "http://img2.imgtn.bdimg.com/it/u=1567211408,3977725624&fm=27&gp=0.jpg"
                }]
            }
        },
        methods: {
             subNum(){
                if(this.count >0){
                     this.count--;
                }               
            },
            addNum(){
                this.count++;
            }
        },
        created(){
            let Produts = ProdutsTools.getproduts();
            let ids = Object.keys(Produts).join(',');
            this.$ajax.get(this.$httpConfig.getshopcarlist + ids)
            .then(res => {
                this.infos = res.data.message;
            })
           
        }
    }
</script>
<style scoped>
.pay-detail ul li {
    list-style: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 3px;
}

.pay-detail ul {
    padding-left: 5px;
    margin-top: 5px;
}

.pay-detail ul li img {
    width: 80px;
    height: 80px;
    display: inline-block;
    vertical-align: top;
    margin-top: 10px;
}

.pay-detail ul li >:nth-child(1),
.pay-detail ul li >:nth-child(3) {
    display: inline-block;
}

.pay-calc p {
    display: inline-block;
    width: 250px;
    overflow: hidden;
    color: blue;
    font-size: 15px;
    margin-bottom: 10px;
}

.pay-detail ul li >:nth-child(1) {
    line-height: 80px;
}

.calc:nth-child(1) {
    color: red;
    font-size: 20px;
}

.calc span:not(:nth-child(1)) {
    border: 1px solid rgba(0, 0, 0, 0.3);
    display: inline-block;
    width: 20px;
    text-align: center;
}

.calc a {
    margin-left: 20px;
}

.show-1,
.show-2 {
    display: inline-block;
}

.show-1,
.show-2 {
    margin-left: 30px;
}

.show-price {
    background-color: rgba(0, 0, 0, 0.2);
}
</style>
