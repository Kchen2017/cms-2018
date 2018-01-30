<template>
    <div class="tmpl">
    <nav-bar title="图片详情"></nav-bar>
        <div class="photo-title">
            <p>{{info.title}}</p>
            <span>发起日期：{{info.add_time | transTime}}</span>
            <span>{{info.click}}次浏览</span>
            <span>分类：民生经济</span>
        </div>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(img, index) in imgs" :key="index">
                
                <img class="preview-img" :src="img.src" height="100" @click="$preview.open(index, imgs)">


            </li>
           
        </ul>
        <div class="photo-desc">
            <p v-html="info.content"></p>
        </div>
        <comment imgId="$route.query.imgId"></comment>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                imgs: [{
                    src:"http://e.hiphotos.baidu.com/image/pic/item/500fd9f9d72a6059099ccd5a2334349b023bbae5.jpg",
                    w: 300,
                    h: 300
                },{
                    src: "http://g.hiphotos.baidu.com/image/pic/item/10dfa9ec8a1363275cd315d09a8fa0ec08fac713.jpg",
                    w: 300,
                    h: 300
                },{
                    src: "http://h.hiphotos.baidu.com/image/pic/item/060828381f30e924d7da088847086e061d95f709.jpg",
                    w: 300,
                    h: 300
                }],
                info: {
                    id: 4,
                    title: "我爱北京天安门",
                    click: 6,
                    add_time: "2018-05-23T04:55:03.000Z",
                    content: "<h3>unshift() 方法将一个或多个元素添加到数组的开头，并返回新数组的长度。</h3>"

                }
            }
        },
        created(){
            let id = this.$route.query.imgId;
            this.$ajax.get(this.$httpConfig.getthumimages + id)
            .then(res => {

                this.imgs = res.data.message;
                this.imgs.forEach(function(ele){
                    ele.w = 300;
                    ele.h = 300;
                });
                return this.$ajax.get(this.$httpConfig.getimageInfo + id);
            })
            .then(res => {
                this.info = res.data.message[0];
            })
        },

    }
</script>
<style scoped>
li {
    list-style: none;
}

ul {
    margin: 0;
    padding: 0;
}

.photo-title {
    overflow: hidden;
}

.photo-title,
.photo-desc {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 5px;
    margin-bottom: 5px;
    padding-left: 5px;
}

.photo-title p {
    color: #13c2f7;
    font-size: 20px;
    font-weight: bold;
}

.photo-title span {
    margin-right: 20px;
}

.mui-table-view.mui-grid-view.mui-grid-9 {
    background-color: white;
    border: 0;
}

.mui-table-view.mui-grid-view.mui-grid-9 li {
    border: 0;
}

.photo-desc p {
    font-size: 18px;
}

.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3 {
    padding: 2 2;
}
</style>
