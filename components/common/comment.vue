<template>
    <div class="tmpl">
        <div class="photo-bottom">
            <ul>
                <li class="photo-comment">
                    <div>
                        <span>提交评论</span>
                        <span @click="goback">返回</span>
                    </div>
                </li>
                <li class="txt-comment">
                    <textarea v-model="newCom"></textarea>
                </li>
                <li>
                    <mt-button type="danger" size="large" plain @click="sendComment">发表评论</mt-button>
                </li>
                <li class="photo-comment">
                    <div>
                        <span>评论列表</span>
                        <span>{{num}}条评论</span>
                    </div>
                </li>
            </ul>
            <ul class="comment-list">
                <li v-for="(item, index) in contents" :key="index">
                    {{item.user_name}}：{{item.content}} {{item.add_time|transTime}}
                </li>
               
            </ul>
            <!-- <button @click="loadMore">加载更多按钮</button> -->
            <mt-button type="danger" size="large" plain @click="loadMore">加载更多{{pageindex}}</mt-button>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return {
           pageindex: 1,
           contents: [{
                user_name: "一直在游泳的鱼",
                add_time: "2017-12-21T20:09:30",
                content: "麻痹的"
           },{
                user_name: "一直在游泳的鱼",
                add_time: "2017-12-21T20:09:30",
                content: "麻痹的"
           },{
                user_name: "一直在游泳的鱼",
                add_time: "2017-12-21T20:09:30",
                content: "麻痹的"
           },{
                user_name: "一直在游泳的鱼",
                add_time: "2017-12-21T20:09:30",
                content: "麻痹的"
           }],
           num: 0,
           newCom: ""
        } 
    },
    props: ["imgId"],
    watch: {
        contents: function(val, od) {
            this.num = this.contents.length;
        }
    },
    created(){
        this.num = this.contents.length;
        this.$ajax.get(this.$httpConfig.getcomments + this.imgId + "?pageindex=" + this.pageindex++)
        .then(res => {
            this.contents = res.data.message;
        })
    },
    methods: {
        loadMore(){
            this.contents.push({
                user_name: "一直在游泳的鱼",
                add_time: "2017-12-21T20:09:30",
                content: "麻痹的"
           });
            this.firSend();
        },
        sendComment(){
            this.$ajax.post(this.$httpConfig.postcomment + this.imgId, {
                content: this.newCom
            }, {
                transformRequest: function(data){
                    return this.$qs.stringify(data);
                }
            })
            .then(res => {
                this.pageindex = 1;
                this.firSend();
            })
            .catch(err => {
                console.log("提交失败！！", err);
            });
        },
        goback(){
            this.$router.go(-1);
        },
        firSend(){
             this.$ajax.get(this.$httpConfig.getcomments + this.imgId + "?pageindex=" + this.pageindex++)
            .then(res => {
                this.contents = res.data.message;
            })
             .catch(err => {
                console.log("获取失败！！", err);
            });
        }
    }
}
</script>
<style scoped>
.photo-comment > div span:nth-child(1) {
    float: left;
    font-weight: bold;
    margin-left: 5px;
}

.photo-comment > div span:nth-child(2) {
    float: right;
}

.photo-comment {
    height: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    line-height: 30px;
    margin-bottom: 5px;
}

.txt-comment {
    padding: 5 5;
}

.txt-comment textarea {
    margin-bottom: 5px;
}

.comment-list li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 5px;
    margin-bottom: 5px;
    padding-left: 5px;
}

li {
    list-style: none;
}

ul {
    margin: 0;
    padding: 0;
}
</style>
