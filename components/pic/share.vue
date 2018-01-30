<template>
    <div class="tmpl">
        <nav-bar title="图文分享"></nav-bar>
        <!-- 引入返回导航 -->
        <div class="photo-header">
            <ul>
                <li v-for="item in category" :key="item.id" @click="selected(item.id)">
                    <a href="javascript:;">{{item.title}}</a>
                </li>
            </ul>
        </div>
        <div class="photo-list">
            <ul>
                <li v-for="img in imgs" :key="img.id"> 
                    <router-link :to="{name: 'picDetail', query: {imgId: img.id}}">
                        <img :src="img.img_url">
                        <p>
                            <span>{{img.title}}</span>
                            <br>
                            <span>{{img.zhaiyao}}</span>
                        </p>
                    </router-link >
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                imgs: [{
                    id: 33,
                    title: "kkkkkkkk",
                    img_url: "http://c.hiphotos.baidu.com/image/pic/item/c9fcc3cec3fdfc0380b079f3df3f8794a5c226b4.jpg",
                    zhaiyao: "气质"
                },{
                    id: 34,
                    title: "kkkkkkkk",
                    img_url: "http://f.hiphotos.baidu.com/image/pic/item/503d269759ee3d6db032f61b48166d224e4ade6e.jpg",
                    zhaiyao: "气质"
                },{
                    id: 73,
                    title: "kkkkkkkk",
                    img_url: "http://f.hiphotos.baidu.com/image/pic/item/503d269759ee3d6db032f61b48166d224e4ade6e.jpg",
                    zhaiyao: "气质"
                }],
                category: [{
                    title: "全部",
                    id: 0
                },{
                    title: "家居",
                    id: 1
                },{
                    title: "美女",
                    id: 2
                },{
                    title: "帅哥",
                    id: 3
                },{
                    title: "宠物",
                    id: 4
                },{
                    title: "色情",
                    id: 5
                }]
            }
        },
        created(){
            this.$ajax.all(this.$ajax.get(this.$httpConfig.getImages+0), 
                this.$ajax.get(this.$httpConfig.getImgCategory))
            .then(this.$ajax.spread((imgRes, catRes) => {
                this.imgs = imgRes.data.message;

                this.category = catRes.data.message;
                this.category.unshift({
                    id: 0,
                    title: "全部"
                });
            }))
            .catch(err => {
                console.log("图片获取失败", err);
            })
        },
        methods: {
            selected(id){
                console.log(id);
                this.$ajax.get(this.$httpConfig.getImages + id)
                .then(res => {
                    this.imgs = imgRes.data.message;
                })
                .catch(err => {
                     console.log("分类图片获取失败", err);
                })
            }
        }
    }
</script>
<style>
.photo-header li {
    list-style: none;
    display: inline-block;
    margin-left: 10px;
    height: 30px;
}

.photo-header ul {
    /*强制不换行*/
    white-space: nowrap;
    overflow-x: auto;
    padding-left: 0px;
    margin: 5;
}


/*下面的图片*/

.photo-list li {
    list-style: none;
    position: relative;
}

.photo-list li img {
    width: 100%;
    height: 230px;
    vertical-align: top;
}

.photo-list ul {
    padding-left: 0px;
    margin: 0;
}

.photo-list p {
    position: absolute;
    bottom: 0px;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
    margin-bottom: 0px;
}

.photo-list p span:nth-child(1) {
    font-weight: bold;
    font-size: 16px;
}



</style>
