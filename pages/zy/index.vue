<template>
	

<view  v-if="ongujia">
	<uni-skeleton :SkelttionType="gujia"></uni-skeleton>
</view>
		<view v-else >
			<!-- 上部分 -->
				<u-sticky>
			<view class="goutop">
				 <navigator url="/pages/zy/shousuo/new_file" hover-class="none">        
				<u-search placeholder="请输入搜索内容" disabled="true"  v-model="value"   style="margin-top: 10rpx;"></u-search>
				</navigator>
					</view>	
						</u-sticky>
					<!-- 下部分 -->
					<view class="uni-flea" style="margin-bottom:100rpx;">
								 <view>
								<u-swiper :list="list" :effect3d="true" height="350"></u-swiper>
								</view>
								<view style="margin:20rpx 10rpx;">
									<u-grid :col="4" :border="false">
											<u-grid-item >
											<image class="badge-icon" src="../../static/zy/jjar.png"></image>
												<view class="grid-text">家具</view>
											</u-grid-item>
											<u-grid-item>
													<image class="badge-icon" src="../../static/zy/smar.png"></image>
												<view class="grid-text">数码</view>
											</u-grid-item>
											<u-grid-item>
												<image class="badge-icon" src="../../static/zy/sjar.png"></image>
												<view class="grid-text">手机</view>
											</u-grid-item>
											<u-grid-item>
													<image class="badge-icon" src="../../static/zy/jdar.png"></image>
												<view class="grid-text">家电</view>
											</u-grid-item>
										</u-grid>
										<u-grid :col="4" :border="false">
												<u-grid-item >
													<image class="badge-icon" src="../../static/zy/spar.png"></image>
													<view class="grid-text">美食</view>
												</u-grid-item>
												<u-grid-item>
													<image class="badge-icon" src="../../static/zy/nsar.png"></image>
													<view class="grid-text">男装</view>
												</u-grid-item>
												<u-grid-item>
													<image class="badge-icon" src="../../static/zy/nzar.png"></image>
													<view class="grid-text">女装</view>
												</u-grid-item>
												<u-grid-item>
												<image class="badge-icon" src="../../static/zy/gdarr.png"></image>
													<view class="grid-text">更多分类</view>
												</u-grid-item>
											</u-grid>
								</view>
								<!-- 限时秒杀 -->
								<view class="xiaka">
									<view class="uni-flex" style="align-items: center;"><text style="padding: 0 5rpx;font-size: 35rpx;">限时秒杀</text>
									<text style="padding: 0 20rpx;">20点场</text>
									<u-count-down ref="uCountDown" :timestamp="timestamp" color="#fff"  bg-color="#F29100"></u-count-down></view>
								<view class="uni-flex" >
									<view class="uni-flea miaoshaka"    v-for="(sites) in miaosha" :key ="sites" >
										<image :src="sites.imge" style="width: 180rpx;height: 180rpx;"></image>
									
									<view style="color:#FF9900 ;"><u-icon name="rmb" size="30" color="#FF9900"></u-icon>{{sites.price}}</view>
							<text class="liebiaolnlefttext">{{sites.text}}</text>
									</view>
									
								</view>
									
								</view>
								<!-- 精选活动 -->
								<view class="xiaka">
										<view  class="uni-flex" style="justify-content: center; font-size: 35rpx;">精选活动</view>
										<view class="uni-flex">
											<view style="flex: 1;"><image src="../../static/zy/huodonga.jpg" style="width: 350rpx;height: 200rpx;"></image></view>
										<view style="flex: 1;"><image src="../../static/zy/huodc.jpg" style="width: 350rpx;height: 200rpx;"></image></view>
										</view>
										<view class="uni-flex">
										<view style="flex: 1;"><image src="../../static/zy/huoddd.jpg" style="width: 350rpx;height: 200rpx;"></image></view>
										<view style="flex: 1;"><image src="../../static/zy/huodee.jpg" style="width: 350rpx;height: 200rpx;"></image></view>
									</view>
								</view>
							<view class="uni-flex" style="justify-content: center;"><image src="../../static/zy/haubian.png" style="width: 50rpx; height: 50rpx;transform: rotateY(180deg);">
							<text class="caini">猜你喜欢</text><image src="../../static/zy/haubian.png" style="width: 50rpx; height: 50rpx;"></image></view>
									
									
									
									
									 </view> 
									 
									 
									 
							</view>
						
							
</template>

<script>
		import uniSkeleton from"../../components/uni-skeleton.vue"
export default {
	data() {
		return {
			gujia:"index",
			ongujia:true,
			timestamp: 86399,
				
			miaosha:[
				{
			imge:"../../static/zy/bingxiang.jpg",
			price:799,
			text:"海尔178升节能静音两门"
			},
			{
			imge:"../../static/zy/cuifengji.jpg",
			price:49.90,
			text:"飞科吹风机"
			},
			{
			imge:"../../static/zy/pingg.jpg",
			price:21.90,
			text:"山东红富士苹果"
			},
			{
			imge:"../../static/zy/ninai.jpg",
			price:10.90,
			text:"维他奶 原味豆奶植物奶蛋白饮料250ml*6盒"
			}
			],
		
		list: [{
								image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
								title: '昨夜星辰昨夜风，画楼西畔桂堂东'
							},
							{
								image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
								title: '身无彩凤双飞翼，心有灵犀一点通'
							},
							{
								image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
								title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
							}
						],
		};
	},
	components:{
		uniSkeleton
	},
	methods: {
		//判断登陆
		yanci:function(){
			setTimeout(()=>{
				this.ongujia=false
			},2000)
		},
		
	
			},
		onLoad(){
			// this.qrequest()
				
				this.yanci()
		}	
	
};
</script>
<style>
	/* page不能写带scope的style标签中，否则无效 */
page {
	background-color: #f8f8f8;
	
	  width: 100%;
	  height:100%;
	}
</style>
<style lang="scss" scoped>
	.goutop{
	padding: 20rpx 15rpx;
		background-color: #FFFFFF;
		line-height: 100rpx;
		
	}
	.badge-icon {
			width: 60rpx;
			height: 60rpx;
		}
	
	.xiaka{
		
		margin:20rpx 10rpx;
		border-radius: 10rpx;
		
		background-color: #FFFFFF;
		}
		.caini{
			font-size: 30rpx;
			color: #EE0A24;
			line-height: 50rpx;
			border-radius: 10rpx ;
			padding: 5rpx 20rpx;
			}
			.liebiaolnlefttext {
				
				   width: 170rpx;/*定义块元素的宽度*/
				font-size: 20rpx;
				color: #C8C7CC;
				padding-left: 10rpx;
				            white-space: nowrap;/*内容超宽后禁止换行显示*/
				
				            overflow: hidden;/*超出部分隐藏*/
				
				            text-overflow:ellipsis;/*文字超出部分以省略号显示*/
			}
			.miaoshaka{
				
				justify-content:center;
				align-items: center;
				flex: 1;
				}
				
				
				
				.demo-warter {
					border-radius: 8px;
					margin: 5px;
					background-color: #ffffff;
					padding: 8px;
					position: relative;
				}
			
				
				.demo-img-wrap {
				}
				
				.demo-image {
					width: 100%;
					border-radius: 4px;
				}
				
				.demo-title {
					font-size: 27rpx;
					margin-top: 5px;
					 overflow :   hidden ;
					  text-overflow :   ellipsis ; 
					 display :   -webkit-box ;
					  -webkit-line-clamp :   2 ; 
					 -webkit-box-orient :   vertical ;
				}
				
				
				
				.demo-price {
					
					color:#FF9900 ;
					margin-top: 5px;
				}
				
				.demo-shop {
					font-size: 22rpx;
					color: #C8C7CC;
					margin-top: 5px;
				}
			
</style>
