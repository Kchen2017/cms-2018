<template>
    <div class="tmpl">
        <nav-bar :title="$route.params.navTitle"></nav-bar>
        <div class="news-title">
            <p v-text="info.title"></p>
            <div>
                <span>{{info.click}}次点击</span>
                <span>分类:民生经济</span>
                <span>添加时间:{{info.add_time | transTime}}</span>
            </div>
        </div>
        <div class="news-content" v-html="info.content"></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            info: {
                id: 14,
                title: "如何成为一名优秀的程序员",
                click: 4,
                add_time: "2015-03-16T03:50:28.000Z",
                content: "<h1>hhhhhhhhh</h1><br><img src='http://f.hiphotos.baidu.com/image/pic/item/503d269759ee3d6db032f61b48166d224e4ade6e.jpg'>"
            }
        }
    },
    created(){
        this.$ajax.get(this.$httpConfig.newsDetail + this.$route.params.newsId)
        .then(res => {
            this.info = res.data.message[0];
        })
        .catch(err => {
            console.log("新闻详情信息获取失败",err);
        });
    }
}

</script>
<style scoped>
.news-title p {
    color: #0a87f8;
    font-size: 20px;
    font-weight: bold;
}

.news-title span {
    margin-right: 30px;
}

.news-title {
    margin-top: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}


/*主体文章的左右距离*/

.news-content {
    padding: 10 5;
}
</style>
