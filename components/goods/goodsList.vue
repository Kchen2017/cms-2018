<template>
    <div class="tmpl">
        <nav-bar title="商品列表"></nav-bar>
        <ul class="mui-table-view mui-grid-view">
            <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="good in goods" :key="good.id">
                <a>
                    <img class="mui-media-object" :src="good.img_url">
                    <div class="mui-media-body">{{good.title}}</div>
                    <div class="desc">
                        <div class="sell">
                            <span>￥{{good.market_price}}</span>
                            <s>￥{{good.sell_price}}</s>
                        </div>
                        <div class="detail">
                            <div class="hot">
                                热卖中
                            </div>
                            <div class="count">
                                剩{{good.stock_quantity}}件
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            pageindex: 1,
            goods: [{
                id: 277,
                title: "华为P6",
                add_time: "2017-09-07T16:55:14.000Z",
                zhaiyao: "华为P6手机是华为目前的次旗舰手机，性能仅低于mate10",
                click: 20,
                img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517398109911&di=25d6d8650eb26aada6d1029911d4dc00&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fbaike%2Fw%253D268%2Fsign%3De89e249d279759ee4a5067cd8afa434e%2F14ce36d3d539b600da974f27e850352ac75c1038524397f9.jpg",
                sell_price: 2195,
                market_price: 2289,
                stock_quantity:100
            },{
                id: 255,
                title: "华为P6",
                add_time: "2017-09-07T16:55:14.000Z",
                zhaiyao: "华为P6手机是华为目前的次旗舰手机，性能仅低于mate10",
                click: 20,
                img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517398109911&di=25d6d8650eb26aada6d1029911d4dc00&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fbaike%2Fw%253D268%2Fsign%3De89e249d279759ee4a5067cd8afa434e%2F14ce36d3d539b600da974f27e850352ac75c1038524397f9.jpg",
                sell_price: 2195,
                market_price: 2289,
                stock_quantity:100
            },{
                id: 3,
                title: "华为P6",
                add_time: "2017-09-07T16:55:14.000Z",
                zhaiyao: "华为P6手机是华为目前的次旗舰手机，性能仅低于mate10",
                click: 20,
                img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517398109911&di=25d6d8650eb26aada6d1029911d4dc00&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fbaike%2Fw%253D268%2Fsign%3De89e249d279759ee4a5067cd8afa434e%2F14ce36d3d539b600da974f27e850352ac75c1038524397f9.jpg",
                sell_price: 2195,
                market_price: 2289,
                stock_quantity:100
            },{
                id: 4,
                title: "华为P6",
                add_time: "2017-09-07T16:55:14.000Z",
                zhaiyao: "华为P6手机是华为目前的次旗舰手机，性能仅低于mate10",
                click: 20,
                img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517398109911&di=25d6d8650eb26aada6d1029911d4dc00&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fbaike%2Fw%253D268%2Fsign%3De89e249d279759ee4a5067cd8afa434e%2F14ce36d3d539b600da974f27e850352ac75c1038524397f9.jpg",
                sell_price: 2195,
                market_price: 2289,
                stock_quantity:100
            },{
                id: 5,
                title: "华为P6",
                add_time: "2017-09-07T16:55:14.000Z",
                zhaiyao: "华为P6手机是华为目前的次旗舰手机，性能仅低于mate10",
                click: 20,
                img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517398109911&di=25d6d8650eb26aada6d1029911d4dc00&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fbaike%2Fw%253D268%2Fsign%3De89e249d279759ee4a5067cd8afa434e%2F14ce36d3d539b600da974f27e850352ac75c1038524397f9.jpg",
                sell_price: 2195,
                market_price: 2289,
                stock_quantity:100
            },{
                id: 6,
                title: "华为P6",
                add_time: "2017-09-07T16:55:14.000Z",
                zhaiyao: "华为P6手机是华为目前的次旗舰手机，性能仅低于mate10",
                click: 20,
                img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517398109911&di=25d6d8650eb26aada6d1029911d4dc00&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fbaike%2Fw%253D268%2Fsign%3De89e249d279759ee4a5067cd8afa434e%2F14ce36d3d539b600da974f27e850352ac75c1038524397f9.jpg",
                sell_price: 2195,
                market_price: 2289,
                stock_quantity:100
            },{
                id: 8,
                title: "华为P6",
                add_time: "2017-09-07T16:55:14.000Z",
                zhaiyao: "华为P6手机是华为目前的次旗舰手机，性能仅低于mate10",
                click: 20,
                img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517398109911&di=25d6d8650eb26aada6d1029911d4dc00&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fbaike%2Fw%253D268%2Fsign%3De89e249d279759ee4a5067cd8afa434e%2F14ce36d3d539b600da974f27e850352ac75c1038524397f9.jpg",
                sell_price: 2195,
                market_price: 2289,
                stock_quantity:100
            },{
                id: 22,
                title: "华为P6",
                add_time: "2017-09-07T16:55:14.000Z",
                zhaiyao: "华为P6手机是华为目前的次旗舰手机，性能仅低于mate10",
                click: 20,
                img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517398109911&di=25d6d8650eb26aada6d1029911d4dc00&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fbaike%2Fw%253D268%2Fsign%3De89e249d279759ee4a5067cd8afa434e%2F14ce36d3d539b600da974f27e850352ac75c1038524397f9.jpg",
                sell_price: 2195,
                market_price: 2289,
                stock_quantity:100
            },{
                id: 24,
                title: "华为P6",
                add_time: "2017-09-07T16:55:14.000Z",
                zhaiyao: "华为P6手机是华为目前的次旗舰手机，性能仅低于mate10",
                click: 20,
                img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517398109911&di=25d6d8650eb26aada6d1029911d4dc00&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fbaike%2Fw%253D268%2Fsign%3De89e249d279759ee4a5067cd8afa434e%2F14ce36d3d539b600da974f27e850352ac75c1038524397f9.jpg",
                sell_price: 2195,
                market_price: 2289,
                stock_quantity:100
            },{
                id: 26,
                title: "华为P6",
                add_time: "2017-09-07T16:55:14.000Z",
                zhaiyao: "华为P6手机是华为目前的次旗舰手机，性能仅低于mate10",
                click: 20,
                img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517398109911&di=25d6d8650eb26aada6d1029911d4dc00&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fbaike%2Fw%253D268%2Fsign%3De89e249d279759ee4a5067cd8afa434e%2F14ce36d3d539b600da974f27e850352ac75c1038524397f9.jpg",
                sell_price: 2195,
                market_price: 2289,
                stock_quantity:100
            },{
                id: 27,
                title: "华为P6",
                add_time: "2017-09-07T16:55:14.000Z",
                zhaiyao: "华为P6手机是华为目前的次旗舰手机，性能仅低于mate10",
                click: 20,
                img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517398109911&di=25d6d8650eb26aada6d1029911d4dc00&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fbaike%2Fw%253D268%2Fsign%3De89e249d279759ee4a5067cd8afa434e%2F14ce36d3d539b600da974f27e850352ac75c1038524397f9.jpg",
                sell_price: 2195,
                market_price: 2289,
                stock_quantity:100
            },{
                id: 270,
                title: "华为P6",
                add_time: "2017-09-07T16:55:14.000Z",
                zhaiyao: "华为P6手机是华为目前的次旗舰手机，性能仅低于mate10",
                click: 20,
                img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517398109911&di=25d6d8650eb26aada6d1029911d4dc00&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fbaike%2Fw%253D268%2Fsign%3De89e249d279759ee4a5067cd8afa434e%2F14ce36d3d539b600da974f27e850352ac75c1038524397f9.jpg",
                sell_price: 2195,
                market_price: 2289,
                stock_quantity:100
            },{
                id: 29,
                title: "华为P6",
                add_time: "2017-09-07T16:55:14.000Z",
                zhaiyao: "华为P6手机是华为目前的次旗舰手机，性能仅低于mate10",
                click: 20,
                img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517398109911&di=25d6d8650eb26aada6d1029911d4dc00&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fbaike%2Fw%253D268%2Fsign%3De89e249d279759ee4a5067cd8afa434e%2F14ce36d3d539b600da974f27e850352ac75c1038524397f9.jpg",
                sell_price: 2195,
                market_price: 2289,
                stock_quantity:100
            },{
                id: 211,
                title: "华为P6",
                add_time: "2017-09-07T16:55:14.000Z",
                zhaiyao: "华为P6手机是华为目前的次旗舰手机，性能仅低于mate10",
                click: 20,
                img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517398109911&di=25d6d8650eb26aada6d1029911d4dc00&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fbaike%2Fw%253D268%2Fsign%3De89e249d279759ee4a5067cd8afa434e%2F14ce36d3d539b600da974f27e850352ac75c1038524397f9.jpg",
                sell_price: 2195,
                market_price: 2289,
                stock_quantity:100
            },{
                id: 223,
                title: "华为P6",
                add_time: "2017-09-07T16:55:14.000Z",
                zhaiyao: "华为P6手机是华为目前的次旗舰手机，性能仅低于mate10",
                click: 20,
                img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517398109911&di=25d6d8650eb26aada6d1029911d4dc00&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fbaike%2Fw%253D268%2Fsign%3De89e249d279759ee4a5067cd8afa434e%2F14ce36d3d539b600da974f27e850352ac75c1038524397f9.jpg",
                sell_price: 2195,
                market_price: 2289,
                stock_quantity:100
            }]
        }
    },
    created(){
        this.$ajax.get(this.$httpConfig.getgoods + this.pageindex)
        .then(res => {
            this.goods = res.data.message;
        })
        .catch(err => {
            console.log("获取失败", err);
        })
    }
}
</script>
<style scoped>
.mui-table-view.mui-grid-view .mui-table-view-cell > a:not(.mui-btn) {
    margin: 0px;
    padding: 0px;
    border: 1px solid #5c5c5c;
    box-shadow: 0 0 4px #666;
}

.sell > span {
    float: left;
    color: red;
    text-align: left;
}

.detail >.hot {
    float: left;
    text-align: left;
    font-size: 15px;
}

.detail >.count {
    float: right;
    text-align: right;
    font-size: 15px;
}


/*撑开，去除浮动没有的高度*/

.detail {
    overflow: hidden;
}

.desc {
    color: rgba(92, 92, 92, 0.8);
    background-color: rgba(0, 0, 0, 0.2);
}

.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object {
    height: 200px;
}
</style>
