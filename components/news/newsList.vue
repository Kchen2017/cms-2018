<template>
    <div class="tmpl">
        <nav-bar title="新闻列表"></nav-bar>
        <ul class="mui-table-view">
           <!--  <li class="mui-table-view-cell mui-media">
                <a>
                    <img class="mui-media-object mui-pull-left" src="">
                    <div class="mui-media-body">
                        <span>新闻标题</span>
                        <div class="news-desc">
                            <p>点击数:1</p>
                            <p>发表时间:2014-01-01</p>
                        </div>
                    </div>
                </a>
            </li> -->
            <li class="mui-table-view-cell mui-media" v-for="item in news" :key="item.id">
                <router-link :to="{name: 'newsDetail', params: {newsId: item.id, navTitle: '新闻详情'}}">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <span>{{item.title}}</span>
                        <div class="items-desc">
                            <p>点击数:{{item.click}}</p>
                            <p>发表时间:{{item.add_time | transTime}}</p>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                news: [{
                    id: 13,
                    title: "fff",
                    add_time: "2015-03-16T03:50:28.000Z",
                    zhaoyao: "ddddd",
                    click: 2,
                    img_url: "http://f.hiphotos.baidu.com/image/pic/item/503d269759ee3d6db032f61b48166d224e4ade6e.jpg"
                },{
                    id: 14,
                    title: "fff",
                    add_time: "2015-04-16T03:50:28.000Z",
                    zhaoyao: "ddddd",
                    click: 2,
                    img_url: "http://f.hiphotos.baidu.com/image/pic/item/503d269759ee3d6db032f61b48166d224e4ade6e.jpg"
                },{
                    id: 15,
                    title: "fff",
                    add_time: "2015-03-16T03:50:28.000Z",
                    zhaoyao: "ddddd",
                    click: 2,
                    img_url: "http://f.hiphotos.baidu.com/image/pic/item/503d269759ee3d6db032f61b48166d224e4ade6e.jpg"
                }]
            }
        },
        created(){
            this.$ajax.get(this.$httpConfig.newsList)
            .then(res => {
                this.news =  res.data.message;
            })
            .catch(err => {
                console.log(err, "获取文章列表失败！！");
            })
        }
    }
</script>
<style scoped>
.mui-media-body p {
    color: #0bb0f5;
}

.news-desc p:nth-child(1) {
    float: left;
}

.news-desc p:nth-child(2) {
    float: right;
}
</style>
