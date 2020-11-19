<template>
		<view>
	<view>
		<zy-search :is-focus="false" :theme="themeClass" :show-want="true" :speechEngine="speechEngine"
		:hot-list="hotList" @getSearchText="getSearchText"></zy-search>
	</view>	
	
	</view>
</template>

<script>
	import zySearch from '../../../components/zy-search/zy-search.vue'
	export default {
		components: {
			zySearch
		},
		data() {
			return {
				themeClass: 'circle',
				speechEngine: 'baidu', //语音识别引擎
				hotList: ['苹果12','自行车','香飘飘','卫衣']	//初始化推荐列表
			}
		},
		methods: {
			getSearchText(e) {
				getApp().globalData.name=e,
				uni.redirectTo({
    url: "/pages/shangpinglie/index",
});
			}
			
		},
	}
</script>

<style>
</style>
