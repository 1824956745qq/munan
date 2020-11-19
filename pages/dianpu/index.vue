<template>
	<view  class="uni-flea" >
		<!-- 头部店铺名称 -->
	<view class="uni-flex topone "  >
		<view class="u-flex">
		<u-image shape="circle" width="120rpx" height="120rpx" bgColor="red" src="https://www.xibeimn.cn/src/img/sptp1.jpg"></u-image>
	<view class="uni-flea " style="margin-left: 20rpx;" >
		<view style="font-size: 35rpx;font-weight: bold;color: #FFFFFF; ">拉夏贝尔旗舰店</view>
		<view class="u-flex atopone" >
		<text style="font-size: 10rpx;">综合评分</text>
		<u-rate :count="5" disabled="true" v-model="shuling" size="10"></u-rate>
		</view>
		</view>
	</view>
	<view class="atoptow" >
		<u-icon name="heart" ></u-icon>
		<text style="font-weight: bold; padding-left: 5rpx;">关注</text>
	</view>
	</view>
	<!-- //分页器 -->
				<!-- 只能有一个根元素 -->
				<view  class="u-tabs-box">
					<u-tabs-swiper activeColor="#f29100" ref="tabs" :list="list" :current="current" @change="change" :is-scroll="false" swiperWidth="750"></u-tabs-swiper>
				</view>
			
			
	<view v-show="swiperCurrent===0"  >
		<!-- //第一 -->
	<view>
	<u-image width="100%" height="800rpx" mode="scaleToFill" src="https://www.xibeimn.cn/src/img/sptp1.jpg"></u-image>
	<u-image width="100%" height="800rpx" mode="scaleToFill" src="https://www.xibeimn.cn/src/img/sptp1.jpg"></u-image>
		<u-image width="100%" height="800rpx" mode="scaleToFill" src="https://www.xibeimn.cn/src/img/sptp1.jpg"></u-image>
		<u-image width="100%" height="800rpx" mode="scaleToFill" src="https://www.xibeimn.cn/src/img/sptp1.jpg"></u-image>
		</view>
	</view>
	<view v-show="swiperCurrent===1">
		<!-- 第二 -->
	<view class="wrap">
					<view class="item-warp">
			<view class="item" v-for="(item, index) in lists" :key="index">
		<image :src="img"  mode="aspectFill" style="width:345rpx;height: 400rpx;"></image>
			<text class="liebiaolnlefttext">昨夜星辰昨夜风，画楼西畔桂堂东'身无彩凤双飞翼，心有灵犀一点通</text>
			<view style="margin-left: 15rpx;"> <u-icon name="rmb" size="25" color="red"></u-icon>
			<text style="color: red; font-weight: bold;font-size: 35rpx;">169</text></view>	
			
			</view>
			</view>
				<u-loadmore :status="status"></u-loadmore>
		
	</view>
	</view>
		<view v-show="swiperCurrent===2">
		<!-- 第三 -->
		<view class="wrap">
						<view class="item-warp">
				<view class="item" v-for="(item, index) in lists" :key="index">
			<image :src="img"  mode="aspectFill" style="width:345rpx;height: 400rpx;"></image>
				<text class="liebiaolnlefttext">昨夜星辰昨夜风，画楼西畔桂堂东'身无彩凤双飞翼，心有灵犀一点通</text>
				<view style="margin-left: 15rpx;"> <u-icon name="rmb" size="25" color="red"></u-icon>
				<text style="color: red; font-weight: bold;font-size: 35rpx;">169</text></view>	
				
				</view>
				</view>
					<u-loadmore :status="status"></u-loadmore>
			
		</view>
		</view>
			<view v-show="swiperCurrent===3">
				4
			</view>
	
	
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shuling:"4",
				list: [{name: '首页'}, {name: '商品'}, {name: '推荐'},{name: '活动'}],
								
								// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
								current: 0, // tabs组件的current值，表示当前活动的tab选项
								swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
		img:"https://www.xibeimn.cn/src/img/sptp1.jpg",
		status: 'loadmore',
		lists: 10,
		page: 0
			};
		},
		methods: {
		
		// tab栏切换
		change(index) {
			this.swiperCurrent = index;
			this.current = index;
		},
	
		}
		
	}
</script>
<style>
	/* page不能写带scope的style标签中，否则无效 */
page {
	background-color: #f8f8f8;
	
	  width: 100%;
	  height:100%;
	}
</style>
<style lang="scss">
	.topone{
			align-items: center;
			justify-content: space-between;
			padding: 0 20rpx;
			height: 180rpx;
			background-image: url(../../static/dianpu/925c6e4e64439a7.jpg);
	}
.atopone{
	background-color:#efeeef ;
	border-radius:30rpx ;
	align-items: center;
	padding: 0 10rpx;
	}
	.atoptow{
		color:#FFFFFF;
		background-color: red;
		border-radius: 30rpx;
		padding: 0 20rpx;
		}
		.swiper-box {
			flex: 1;	
			
		}
	.wrap {
		padding: 20rpx;
		display: block;
		
	}
	
	.item-warp {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	
	.item-warp .item {
		flex: 0 0 345rpx;
		height: 620rpx;
		margin-bottom: 20rpx;
		border-radius: 20rpx;
		
		background-color: #FFFFFF;
		
	}
	.liebiaolnlefttext {
		display: block;
		overflow :   hidden ;
		 text-overflow :   ellipsis ; 
		display :   -webkit-box ;
		 -webkit-line-clamp :   2 ; 
		-webkit-box-orient :   vertical ;
					
		overflow: hidden;
		text-overflow: ellipsis;				
			webkit-line-clamp:2; 
	margin: 15rpx 15rpx;
		
	}

</style>
