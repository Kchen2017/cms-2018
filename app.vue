<template>
    <div>
    	<!-- 固定头部 -->
        <mt-header title="Kchen的信息系统"></mt-header>
        <router-view></router-view>
        <!-- 固定底部 -->
        <nav class="mui-bar mui-bar-tab" ref="navBar">
			<router-link :to="{name: 'home'}" class="mui-tab-item " href="#tabbar">
				<span class="mui-icon icon-icon-test"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link :to="{name: 'vip'}" class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon icon-huiyuan2"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link :to="{name: 'goodsCar'}" class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon icon-gouwuche"><span class="mui-badge" v-text="numGoods"></span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link :to="{name: 'search'}" class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon icon-icon-test1"></span>
				<span class="mui-tab-label">查找</span>
			</router-link>
		</nav>
    </div>
</template>
<script>
import VueBus from "./components/common/vueBus.js";
import ProdutsTools from "./components/common/produtsTools.js";
export default {
    data() {
        return {
        	numGoods: ProdutsTools.totleCount()
        }
    },
    created(){
    	VueBus.$on("getNavHeight",(fn) => {
    		fn(this.$refs.navBar.offsetHeight);
    	});
    	VueBus.$on("addCarNum", (num) => {
    		this.numGoods += num;
    	})
    }
}
</script>
<style>
</style>
