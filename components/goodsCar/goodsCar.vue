<template>
    <div class="tmpl">
        <nav-bar title="购物车"></nav-bar>
        <div class="pay-detail">
            <ul>
                <li class="p-list" v-for="(info, index) in infos" :key="info.id">
                    <mt-switch v-model="info.status"></mt-switch>
                    <img :src="info.thumb_path">
                    <div class="pay-calc">
                        <p>{{info.title}}</p>
                        <div class="calc">
                            <span>￥{{info.price}}</span>
                            <span @click="subNum(index)">-</span>
                            <span>{{info.count}}</span>
                            <span @click="addNum(index)">+</span>
                            <a href="javascript:;" @click="del(index)">删除</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="show-price">
            <div class="show-1">
                <p>总计(不含运费):</p>
                <span>已经选择商品{{byChange.totleCount}}件，总价￥{{byChange.totalPrice}}元</span>
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
                    count: 2,
                    status: true,
                    thumb_path: "http://img2.imgtn.bdimg.com/it/u=1567211408,3977725624&fm=27&gp=0.jpg"
                },{
                    cou: 1,
                    id: 88,
                    title: "华为顶顶顶顶",
                    sell_price: 6466,
                    count: 2,
                    status: true,
                    thumb_path: "http://img2.imgtn.bdimg.com/it/u=1567211408,3977725624&fm=27&gp=0.jpg"
                }]
            }
        },
        methods: {
             subNum(id){
                if(this.infos[id].count >0){
                     this.infos[id].count--;
                }               
            },
            addNum(id){
                this.infos[id].count++;
            },
            del(id){
                if(confirm("真的要删除么？")){
                    this.infos.splice(id, 1);
                    ProdutsTools.delSto(this.infos[id].id);
                }
                
            }
        },
        created(){
            let Produts = ProdutsTools.getproduts();
            let ids = Object.keys(Produts).join(',');
            this.$ajax.get(this.$httpConfig.getshopcarlist + ids)
            .then(res => {
                this.infos = res.data.message;
                this.infos.forEach((ele) => {
                    this.$set(ele, "count", Produts[ele.id]);
                    this.$set(ele, "status", true);
                })
            })
            .catch(err => {
                console.log("获取失败！！！",err);
            })           
        },
        computed:{
            byChange(){
                let totleCount = 0;
                let totalPrice = 0;
                this.infos.forEach(ele => {
                    if(ele.status){
                        totleCount ++;
                        totalPrice += ele.sell_price * ele.count;
                    }
                })

                return {totleCount, totalPrice};
            }
        },
        beforeRouteLeave(to, from, next){
            if(confirm("真的要离开么？")){
                next();
            }else{
                next(false);
            }
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
