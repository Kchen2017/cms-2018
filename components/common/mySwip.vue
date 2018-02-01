<template>
	<div>
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="img in myimgs"><img :src="img.src" alt=""></mt-swipe-item>
		  
		</mt-swipe>

	</div>
</template>
<script>
	export default {
		data(){
			return {

			}
		},
		props: ["myimgs"]
	}
</script>
<style>

	.mint-swipe .mint-swipe-item img {
        height: 100%;
        width: 100%;
    }
	.mint-swipe {
        max-height: 187px;
    }
</style>