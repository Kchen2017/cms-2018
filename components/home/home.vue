router-link<template>
    <div>
    	<my-swip :myimgs="message"></my-swip>
        <div>
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name: 'newsList'}">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">新闻资讯</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name: 'picShare'}">
                        <span class="mui-icon mui-icon-email"></span>
                        <div class="mui-media-body">图文分享</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name:'goodsList'}">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">商品展示</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">留言反馈</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">搜索资讯</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">联系我们</div></a></li>
            </ul> 
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        	message: [{
                    src: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3878847766,3988120331&fm=200&gp=0.jpg"
                },{
                    src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517468528528&di=8cffe85b28b66f5c6ba38bf2697381fe&imgtype=0&src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F811%2F0525141A139%2F1405251A139-0.jpg"
                },{
                    src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517468528525&di=082a03f61e1c813fe11bf77b6d22d299&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2015%2F215%2F41%2FM68709LC8O6L.jpg"
                }]
        }
    },
    created(){
    	this.$ajax.get(this.$httpConfig.lunbo)
    	.then((res) => {
    		this.message = res.data.message;
    	}).catch((err) => {
    		console.log(err);
    	});
    }
}
</script>
<style scoped>
    

    /*去除九宫格上面margin*/

.mui-table-view.mui-grid-view.mui-grid-9 {
    margin-top: 0px;
    border: none;
    background-color: white;
}


/* 去除li的颜色*/

.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3 {
    background-color: white;
    border: none;
}


/*清除ul下面的黑线*/

.mui-table-view.mui-grid-view.mui-grid-9:after {
    height: 0;
}


/*清除九宫格字体图标的样式*/

.mui-icon {
    height: 50px;
    width: 50px;
}


.mui-icon-home:before,
.mui-icon-email:before,
.mui-icon-chatbubble:before,
.mui-icon-location:before,
.mui-icon-search:before,
.mui-icon-phone:before {
    content: '';
}

.mui-icon-home {
    background-image: url('../../static/img/news.png');
    /*环绕显示，让图片自动填充满*/
    background-repeat: round;
}

.mui-icon-email {
    background-image: url('../../static/img/picShare.png');
    background-repeat: round;
}

.mui-icon-chatbubble {
    background-image: url('../../static/img/goodShow.png');
    background-repeat: round;
}

.mui-icon-location {
    background-image: url('../../static/img/feedback.png');
    background-repeat: round;
}

.mui-icon-search {
    background-image: url('../../static/img/search.png');
    background-repeat: round;
}

.mui-icon-phone {
    background-image: url('../../static/img/callme.png');
    background-repeat: round;
}
</style>