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
                        <img v-lazy="img.img_url">
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
                    img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517407863422&di=4d345b0be8d3ae7941ae0ece0b2c4b40&imgtype=0&src=http%3A%2F%2Fpic15.nipic.com%2F20110804%2F2112294_095310106000_2.jpg",
                    zhaiyao: "气质"
                },{
                    id: 34,
                    title: "kkkkkkkk",
                    img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517408014458&di=239a6a70a7a6cd0b5d7f2515d18e12c5&imgtype=0&src=http%3A%2F%2Fimg5.xiazaizhijia.com%2Fwalls%2F20160708%2F1440x900_2f172c09d079701.jpg",
                    zhaiyao: "气质"
                },{
                    id: 73,
                    title: "kkkkkkkk",
                    img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517408014458&di=3f8825807ac365acbfac2d03ca1a634f&imgtype=0&src=http%3A%2F%2Fit.southcn.com%2F9%2Fimages%2Fattachement%2Fjpg%2Fsite4%2F20110627%2F90fba609f5ed0f7233764a.jpg",
                    zhaiyao: "气质"
                },{
                    id: 35,
                    title: "kkkkkkkk",
                    img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517408014457&di=95096a4e48e3168ef0eeda28cff70fcb&imgtype=0&src=http%3A%2F%2Fpic10.photophoto.cn%2F20090310%2F0036036851540683_b.jpg",
                    zhaiyao: "气质"
                },{
                    id: 36,
                    title: "kkkkkkkk",
                    img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517408014457&di=d3ceb70767f4ee57b89373b8bb13263a&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F120516%2F159400-1205161Z51633.jpg",
                    zhaiyao: "气质"
                },{
                    id: 37,
                    title: "kkkkkkkk",
                    img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517408014457&di=cb893904b6a4c9c11228ae83870b6b21&imgtype=0&src=http%3A%2F%2Fpic.yesky.com%2FuploadImages%2F2015%2F215%2F43%2F84K8MQ5DWP2G.jpg",
                    zhaiyao: "气质"
                },{
                    id: 38,
                    title: "kkkkkkkk",
                    img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517408014456&di=d5c91c318cb7cf5bb4e1ea86415fbe79&imgtype=0&src=http%3A%2F%2Fimg2.ph.126.net%2F6wkyl1CdBWaGjnh6fnHGRA%3D%3D%2F6631814334096086804.jpg",
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

image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}


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
